#Before you include this concern in a model, make sure there is a
#configured mapping file (models\elastic for the model
require 'elasticsearch/model'
module UserSearchable
  extend ActiveSupport::Concern
  included do

    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks
    after_touch() { __elasticsearch__.index_document }
    index_name "users_mymusic"
    document_type self.name.downcase
    def as_indexed_json(options={})
      self.as_json("ElasticSearch::Mappings::#{self.class.name}Mapping::AS_INDEXED_JSON".constantize)
    end
  end

end
