module ElasticSearch
  module Mappings
   class TrackMapping
    ELASTIC_SEARCH_MAPPINGS = [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                               {property: :title, options:{ type: 'string', analyzer: 'ngram' }},
                               {property: :time, options:{ type: 'string' }},
                               {property: :album_id, options:{ type: 'integer', index: 'not_analyzed'}},
                               {property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                               {property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}]

    ELASTIC_SEARCH_NESTED_MAPPINGS = { album: [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                                               { property: :title, options:{ type: 'string' , analyzer: 'ngram'}},
                                               { property: :year, options:{ type: 'string' }},
                                               { property: :created_at, options: { type: 'date', index: 'not_analyzed'}},

                                               { property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}
                                           ],
                                  }

     AS_INDEXED_JSON = { only: [:id, :title, :time, :album_id, :created_at, :updated_at ],
                         include: { album: { only: [:id, :title, :year] },
                                   }
                      }
   end
  end
end

