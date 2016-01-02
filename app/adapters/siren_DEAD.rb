require 'active_model/serializer/adapter'
class SirenDEAD < ActiveModel::Serializer::Adapter
  extend ActiveSupport::Autoload
  autoload :PaginationLinks
  autoload :FragmentCache
  def serializable_hash(options = nil)
    # as you can see here: https://github.com/rails-api/active_model_serializers/blob/master/lib/active_model/serializer/adapter/base.rb#L12
    # your adapter instance will be provided with an instance of a serializer (for the root object/collection), and some options (`instance_options`)
    # + serializer.object will be the root object/collection,
    # + serializer.attributes will be the list of key/value for the attributes you are supposed to serialize
    # + serializer.associations will be the list of associations (key is the name, value is a serializer instance for the related resource)
    # your adapter's role will be to turn all that into a hash that represents the JSON document you want to output
    # Dummy example:
    #serializer.object.to_h # in case your root object supports the `to_h` method.
    #raise

    serializable_hash=Hash.new


    object=serializer.object
    singular_type=object.class.to_s.demodulize.underscore
    plural_type=singular_type.pluralize
    if object.respond_to?(:each)
      klass=plural_type
    else
      klass=singular_type
    end


   entities_hash=[]

   serializer.associations.each do |assoc|
    assoc_hash=Hash.new
    assoc_hash[:class]=assoc.name.demodulize.underscore
    associated_objects=assoc.serializer.object
    assoc_hash[:class]=associated_objects.first.demodulize.underscore

   end

   association_names=serializer.associations.map{|assoc|assoc.name}



# serializer.attributes.map{|prop,value| [prop,value]}
# propertie=


    serializable_hash[:class] = klass
    serializable_hash[:properties]= serializer.attributes
    serializable_hash[:entities]= serializer.attributes


    serializable_hash
  end
end