module ElasticSearch

  module Mappings
   class UserMapping
  ELASTIC_SEARCH_MAPPINGS = [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                             {property: :name, options:{ type: 'string' , analyzer: 'ngram'}},
                             {property: :email, options:{ type: 'string' , analyzer: 'ngram'}},
                             {property: :role, options:{ type: 'string' , index: 'not_analyzed'}}
  ]

  ELASTIC_SEARCH_NESTED_MAPPINGS = { playlists: [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                                             { property: :title, options:{ type: 'string' , analyzer: 'ngram'}},
                                             { property: :user_id, options: { type: 'date', index: 'not_analyzed'}},
                                         ]
                                }

 AS_INDEXED_JSON = { only: [:id,  :name, :email, :role,  :created_at, :updated_at ],
                     include: { playlists: { only: [:id, :title, :user_id]   },
                              }
                    }
   end
  end
end

