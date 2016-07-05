#Before you include this concern in a model, make sure there is a
#configured mapping file (models\elastic for the model
require 'elasticsearch/model'
module Searchable
  extend ActiveSupport::Concern
  included do

    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks
    after_touch() { __elasticsearch__.index_document }
    index_name "#{Rails.application.class.parent_name.underscore}" #evaluates to mymusic
    document_type self.name.downcase
    def as_indexed_json(options={})
      self.as_json("ElasticSearch::Mappings::#{self.class.name}Mapping::AS_INDEXED_JSON".constantize)
    end

    def self.search(query, options={})
      music_search = ElasticSearch::MusicSearch.new( query, options)
      @search_definition=JSON.parse(music_search.__query)
      # ap @search_definition
      __elasticsearch__.search(@search_definition)
    end
  end
end

