require 'active_model/serializer/adapter'
class Siren < ActiveModel::Serializer::Adapter
  extend ActiveSupport::Autoload
  #autoload PaginationLinks
  #autoload FragmentCache

  def initialize(serializer, options = {})
    super
    @included = ActiveModel::Serializer::Utils.include_args_to_hash(@options[:include])
    fields = options.delete(:fields)
    if fields
      @fieldset = ActiveModel::Serializer::Fieldset.new(fields, serializer.json_key)
    else
      @fieldset = options[:fieldset]
    end
  end

  def serializable_hash(options = nil)
    options ||= {}
    if serializer.respond_to?(:each)
      serializable_hash_for_collection(serializer, options)
    else
      serializable_hash_for_single_resource(serializer, options)
    end
  end

  def fragment_cache(cached_hash, non_cached_hash)
    root = false if @options.include?(:include)
    ActiveModel::Serializer::Adapter::JsonApi::FragmentCache.new.fragment_cache(root, cached_hash, non_cached_hash)
  end

  private

  def serializable_hash_for_single_resource(serializer, options)
    primary_data = primary_data_for(serializer, options)
    relationships = relationships_for(serializer)
    included = included_for(serializer)
    hash={}
    hash[:class]=[]
    hash[:class] << resource_identifier_type_for(serializer).singularize
    hash[:properties] =primary_data
    hash[:links]=[]
    hash[:actions]=[]
    #raise

    hash[:links]<< Hash[:rel,[:self],:href,url_for(controller: resource_identifier_type_for(serializer).tableize, action: :show, id: serializer.object.id ) ]
    hash[:links]<< Hash[:rel,[:collection],:href,url_for(controller: resource_identifier_type_for(serializer).tableize, action: :index )]
    hash[:entities] = relationships if relationships.any?
    #hash[:included] = included if included.any?
    hash.delete(:entities) if hash[:entities].nil?
    hash
  end

  def serializable_hash_for_collection(serializer, options)
    hash = { }
    hash[:class]=[]
    hash[:rel]=[]
    hash[:class] << resource_identifier_type_for(serializer.first).pluralize
    hash[:entities]=[]
    hash[:rel]=['collection']
    hash[:actions]=[]
    serializer.each do |s|
      #primary_data = primary_data_for(serializer, options)
      # relationships = relationships_for(serializer)
      # included = included_for(serializer)
      #result = self.class.new(s, @options.merge(fieldset: @fieldset)).serializable_hash(options)
      hash[:entities] << embedded_representation_for_collection(s, options)
    end

    if serializer.paginated?
      hash[:links] ||= {}
      hash[:links]=links_for(serializer, options)
    end

    hash
  end

  def links_for(serializer, options)
    Siren::PaginationLinks.new(serializer.object, options[:context]).serializable_hash(options)
  end

  def embedded_representation_for_collection(serializer, options)
    embedded_entity_hash={}
    embedded_entity_hash[:class] = []
    embedded_entity_hash[:rel] = []
    embedded_entity_hash[:properties] = []
    embedded_entity_hash[:links] = []
    embedded_entity_hash[:entities] = []
    embedded_entity_hash[:class] << resource_identifier_type_for(serializer).singularize
    embedded_entity_hash[:rel] << 'item'
    embedded_entity_hash[:properties] = primary_data_for(serializer, options)
    embedded_entity_hash[:links] <<  Hash[:rel,[:self],:href,url_for(controller: resource_identifier_type_for(serializer).tableize, action: :show, id: serializer.object.id ) ]
    #Optional Embedded links for subentities (see https://github.com/kevinswiber/siren)
    if (options[:related] && options[:related] == 'links')
      embedded_entity_hash[:entities] << link_relationships_for(serializer)
    else
      #gets representations for related subentities
      embedded_entity_hash[:entities] << relationships_for(serializer) if relationships_for(serializer).present?
    end
    embedded_entity_hash.delete(:entities) if embedded_entity_hash[:entities].empty?
    embedded_entity_hash
  end

  def embedded_link_for_collection(parent_serializer,serializer,association_info = {})

    return {} if serializer.nil?

    context = serializer.options[:context]
    controller_instance= context.env['action_controller.instance']
    controller_name = context.params['controller']

    if association_info[:type] == :pluralize
        ids = parent_serializer.object.send(association_info[:association_name]).map(&:id).join(',')
        link_url = instance_eval("controller_instance.paged_#{association_info[:association_name].to_s}_url(ids: '#{ids}', page: controller_instance.get_page ,per: controller_instance.get_per)")
    else
        id=parent_serializer.object.send(association_info[:association_name]).id
        link_url=  instance_eval("#{association_info[:association_name].to_s}_url(id: #{id})")
    end

    embedded_link_hash={}
    embedded_link_hash[:class] = []
    #http://tools.ietf.org/html/rfc6573
    embedded_link_hash[:href] = []
    embedded_link_hash[:class] << resource_identifier_type_for(serializer).send(association_info[:type])
    embedded_link_hash[:href]= link_url
    embedded_link_hash
  end

  def get_relation_for_serializers(parent_serializer,serializer,association)
      reflections=parent_serializer.object.class.reflect_on_all_associations
      reflection=reflections.detect{|r| r.name == association.name }
      name=reflection.class.to_s.demodulize.gsub('Reflection','').underscore.to_sym
      type= [:belongs_to,:has_one].member?(name) ?  :singularize : :pluralize
      {name: name, type: type, association_name: association.name }
  end

  def resource_identifier_type_for(serializer)
    serializer = serializer.first if serializer.class.to_s.demodulize == 'ArraySerializer'
    serializer.object.class.model_name.singular
  end

  def resource_identifier_id_for(serializer)
    if serializer.respond_to?(:id)
      serializer.id
    else
      serializer.object.id
    end
  end

  # def resource_identifier_for(serializer)
  #   id   = resource_identifier_id_for(serializer)
  #   { id: id.to_s}
  # end

  def resource_identifier_for(serializer)
    type = resource_identifier_type_for(serializer)
    id   = resource_identifier_id_for(serializer)
    { id: id.to_s, type: type }
  end

  def resource_object_for(serializer, options = {})
    return {} if serializer.nil?
    options[:fields] = @fieldset && @fieldset.fields_for(serializer)
    #raise
    cache_check(serializer) do
      result = resource_identifier_for(serializer)
      attributes = serializer.attributes(options).except(:id)
      attributes = serializer.attributes(options)
      result = attributes if attributes.any?
      result
    end
  end

  def primary_data_for(serializer, options)
    #raise
    if serializer.respond_to?(:each)
      serializer.map { |s| resource_object_for(s, options) }
    else
      resource_object_for(serializer, options)
    end
  end

  def relationship_value_for(serializer, options = {})
    if serializer.respond_to?(:each)
      serializer.map { |s| resource_identifier_for(s) }
    else
      if options[:virtual_value]
        options[:virtual_value]
      elsif serializer && serializer.object
        resource_identifier_for(serializer)
      end
    end
  end

  def relationships_for(serializer)
    return {} if serializer.class.to_s.demodulize=='ArraySerializer'
    entities_array=[]
    serializer.associations.each do |association|
      if association.serializer.respond_to?(:each)
        association.serializer.each do |serializer|
        entities_array << related_resource_hash(association,serializer) if serializer
        end
      else
        entities_array << related_resource_hash(association, association.serializer) if association.serializer
      end
    end
     entities_array
  end

  def link_relationships_for(serializer)
    return {} if serializer.nil?
    entities_array=[]
    serializer.associations.each do |association|
      related_serializer = association.serializer.class.to_s.demodulize=='ArraySerializer' ?
      association.serializer.first :
      association.serializer
      association_info = get_relation_for_serializers(serializer,related_serializer,association)
      entities_array << embedded_link_for_collection(serializer,related_serializer,association_info) if related_serializer
    end
     entities_array
  end

  def related_resource_hash(association,serializer)
    return {} if serializer.nil?
    related_resource_hash={}
    related_resource_hash[:class]=[association.key.to_s.singularize]
    related_resource_hash[:rel] = ['item']
    related_resource_hash[:properties]=resource_object_for(serializer, serializer.try(:options).to_h)
    related_resource_hash[:links]=[]

    related_resource_hash[:links]<< Hash[:rel,[:self],:href,url_for(controller: resource_identifier_type_for(serializer).tableize, action: :show ,id: serializer.object.id) ]
    related_resource_hash[:links]<< Hash[:rel,[:collection],:href,url_for(controller: resource_identifier_type_for(serializer).tableize, action: :index )]

    related_resource_hash
  end



  # def included_for(serializer)
  #   included = @included.flat_map do |inc|
  #     association = serializer.associations.find { |assoc| assoc.key == inc.first }
  #     _included_for(association.serializer, inc.second) if association
  #   end

  #   included.uniq
  # end

  # def _included_for(serializer, includes)
  #   if serializer.respond_to?(:each)
  #     serializer.flat_map { |s| _included_for(s, includes) }.uniq
  #   else
  #     return [] unless serializer && serializer.object

  #     primary_data = primary_data_for(serializer, @options)
  #     relationships = relationships_for(serializer)
  #     primary_data[:relationships] = relationships if relationships.any?

  #     included = [primary_data]

  #     includes.each do |inc|
  #       association = serializer.associations.find { |assoc| assoc.key == inc.first }
  #       if association
  #         included.concat(_included_for(association.serializer, inc.second))
  #         included.uniq!
  #       end
  #     end

  #     included
  #   end
  # end


end
