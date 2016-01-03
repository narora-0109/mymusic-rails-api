require 'active_model/serializer/adapter'
class Siren < ActiveModel::Serializer::Adapter
        extend ActiveSupport::Autoload
        autoload :PaginationLinks
        autoload :FragmentCache

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

        def serializable_hash_for_collection(serializer, options)
          hash = { data: [] }
          serializer.each do |s|
            result = self.class.new(s, @options.merge(fieldset: @fieldset)).serializable_hash(options)
            hash[:data] << result[:data]

            if result[:included]
              hash[:included] ||= []
              hash[:included] |= result[:included]
            end
          end

          if serializer.paginated?
            hash[:links] ||= {}
            hash[:links].update(links_for(serializer, options))
          end

          hash
        end

        def serializable_hash_for_single_resource(serializer, options)
          #raise
          primary_data = primary_data_for(serializer, options)
          relationships = relationships_for(serializer)
          included = included_for(serializer)
          #hash = { data: primary_data }
          #raise
          hash={}
          hash[:class]=[]
          hash[:class] << resource_identifier_type_for(serializer).singularize
          hash[:properties] =primary_data
          hash[:links]=[]
          #raise

          hash[:links]<< Hash[:rel,[:self],:href,url_for(controller: resource_identifier_type_for(serializer).tableize, action: :show, id: serializer.object.id ) ]
          hash[:links]<< Hash[:rel,[:collection],:href,url_for(controller: resource_identifier_type_for(serializer).tableize, action: :index )]


          hash[:entities] = relationships if relationships.any?
          #hash[:included] = included if included.any?



          hash
        end

        def resource_identifier_type_for(serializer)
          serializer.object.class.model_name.singular

        end

        def resource_identifier_id_for(serializer)
          if serializer.respond_to?(:id)
            serializer.id
          else
            serializer.object.id
          end
        end

        def resource_identifier_for(serializer)
          #type = resource_identifier_type_for(serializer)
          id   = resource_identifier_id_for(serializer)

          #{ id: id.to_s, type: type }
          { id: id.to_s}
        end

        def resource_object_for(serializer, options = {})
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
          #Hash[serializer.associations.map { |association| [association.key, { data: relationship_value_for(association.serializer, association.options) }] }]
          #raise
          #Hash[serializer.associations.map { |association| [association.key, { data: relationship_value_for(association.serializer, association.options) }] }]

          entities_array=[]
          raise
          serializer.associations.each do |association|
            if association.serializer.respond_to?(:each)
              association.serializer.each do |serializer|
              entities_array << related_resource_hash(association,serializer)
              end
            else
              entities_array << related_resource_hash(association,association.serializer)
            end
          end
           entities_array
           #raise
        end



        def related_resource_hash(association,serializer)
          related_resource_hash={}

          related_resource_hash[:class]=[association.key.to_s.singularize]
          related_resource_hash[:rel] = [association.key.to_s.singularize, 'item']
          related_resource_hash[:properties]=resource_object_for(serializer, serializer.options)
          #related_resource_hash[:links]=resource_object_for(serializer, serializer.options)
          #raise
          related_resource_hash[:links]=[]

          #raise

          related_resource_hash[:links]<< Hash[:rel,[:self],:href,url_for(controller: resource_identifier_type_for(serializer).tableize, action: :show ,id: serializer.object.id) ]
          related_resource_hash[:links]<< Hash[:rel,[:collection],:href,url_for(controller: resource_identifier_type_for(serializer).tableize, action: :index )]

          related_resource_hash
        end



        def included_for(serializer)
          included = @included.flat_map do |inc|
            association = serializer.associations.find { |assoc| assoc.key == inc.first }
            _included_for(association.serializer, inc.second) if association
          end

          included.uniq
        end

        def _included_for(serializer, includes)
          if serializer.respond_to?(:each)
            serializer.flat_map { |s| _included_for(s, includes) }.uniq
          else
            return [] unless serializer && serializer.object

            primary_data = primary_data_for(serializer, @options)
            relationships = relationships_for(serializer)
            primary_data[:relationships] = relationships if relationships.any?

            included = [primary_data]

            includes.each do |inc|
              association = serializer.associations.find { |assoc| assoc.key == inc.first }
              if association
                included.concat(_included_for(association.serializer, inc.second))
                included.uniq!
              end
            end

            included
          end
        end

        def links_for(serializer, options)
          Siren::PaginationLinks.new(serializer.object, options[:context]).serializable_hash(options)
        end
end
