require 'elasticsearch/model'
module Searchable
  extend ActiveSupport::Concern

  included do
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks


    index_name "#{Rails.application.class.parent_name.underscore}_#{Rails.env}"
    document_type self.name.downcase

   # mapping  dynamic: 'false' do
    #   self.ELASTIC_SEARCH_MAPPINGS.each do |mapping|
    #     indexes mappijg[:property], mapping[:options]
    #   end
    #   self.ELASTIC_SEARCH_NESTED_MAPPINGS.each do |relation, nested_mapping|
    #     indexes relation.to_sym, type:  'nested' do
    #       nested_mapping.each do |mapping|
    #         indexes mapping[:property], mapping[:options]
    #       end
    #     end
    #   end
    # end

    # def as_indexed_json(options={})
    #
    #   model_attributes =  ELASTIC_SEARCH_INDEXED_ATTRIBUTES.keys each do |attr|
    #     indexes attr.to_sym, type: type.to_s
    #   end
    #
    #
    #
    #
    #
    #   # define JSON structure (including nested model associations)
    #   associations_attributes = self.class.reflect_on_all_associations.each_with_object({}) {|a,hsh|
    #     hsh[a.name] = {}
    #     hsh[a.name][:only] = a.klass.attribute_names
    #   }
    #
    #
    #   _include = model_attributes.merge(associations_attributes)
    #
    #   self.as_json(include: _include)
    #   # {
    #   #   "title" => title,
    #   #   "author_name" => author.name
    #   # }
    # end

    # Bulk import, update & delete

    # def self.search(query)
    #
    # end
  end
end
