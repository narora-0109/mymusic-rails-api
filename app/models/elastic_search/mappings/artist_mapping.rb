module ElasticSearch
  module Mappings
   class ArtistMapping
  ELASTIC_SEARCH_MAPPINGS = [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                             {property: :title, options:{ type: 'string' }},

                             {property: :country, options:{ type: 'string'}},
                             {property: :genre_id, options:{ type: 'integer', index: 'not_analyzed'}},
                             {property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                             {property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}]

  ELASTIC_SEARCH_NESTED_MAPPINGS = { genre: [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                                             { property: :title, options:{ type: 'string' }},
                                             { property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                                             { property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}
                                         ],
                                     albums: [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                                              { property: :title, options:{ type: 'string' }},
                                              { property: :year, options:{ type: 'integer' }},
                                              { property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                                              { property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}
                                         ]
                                }



 AS_INDEXED_JSON = { only: [ :title, :country, :genre_id, :created_at, :updated_at ],
                     include: { genre: { only: :title},
                                albums:    { only: [:title, :year] }
                              }
                    }


   end
  end
end

