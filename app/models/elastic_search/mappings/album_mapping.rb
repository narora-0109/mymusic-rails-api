module ElasticSearch
  module Mappings
   class AlbumMapping
    ELASTIC_SEARCH_MAPPINGS = [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                               {property: :title, options:{ type: 'string', analyzer: 'ngram' }},
                               {property: :year, options:{ type: 'integer' }},
                               {property: :artist_id, options:{ type: 'integer', index: 'not_analyzed'}},
                               {property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                               {property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}]

    ELASTIC_SEARCH_NESTED_MAPPINGS = { artist: [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                                               { property: :title, options:{ type: 'string',analyzer: 'ngram' }},
                                               { property: :country, options:{ type: 'string' }},
                                               { property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                                               { property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}
                                           ],
                                       tracks: [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                                                { property: :title, options:{ type: 'string' , analyzer: 'ngram' }},
                                                { property: :time, options:{ type: 'string' ,index: 'not_analyzed'}},
                                                { property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                                                { property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}
                                           ]
                                  }

     AS_INDEXED_JSON = { only: [:id, :title, :year, :artist_id, :created_at, :updated_at ],
                         include: { artist: { only: [:id, :title, :country] },
                                    tracks:    { only: [:id, :title, :time, :album_id] }
                                   }
                      }
   end
  end
end

