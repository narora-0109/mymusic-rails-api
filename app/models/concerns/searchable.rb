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



    # Search in title and content fields for `query`, include highlights in response
    #
    # @param query [String] The user query
    # @return [Elasticsearch::Model::Response::Response]
    #
    def self.search(query, options={})

      # Prefill and set the filters (top-level `post_filter` and aggregation `filter` elements)
      #
      __set_filters = lambda do |key, f|
        # @search_definition[:post_filter][:and] ||= []
        @search_definition[:post_filter] = f

        # @search_definition[:aggregations][key.to_sym][:filter][:bool][:must] ||= []
        # @search_definition[:aggregations][key.to_sym][:filter][:bool][:must]  |= [f]
      end

      @search_definition = {
        query: {},

        highlight: {
          pre_tags: ['<em class="label label-highlight">'],
          post_tags: ['</em>'],
          fields: {
            title:    { number_of_fragments: 0 }
          }
        },

        post_filter: {}
        #
        # aggregations: {
        #   countries: {
        #     filter: { bool: { must: [ match_all: {} ] } },
        #     aggregations: { countries: { terms: { field: 'country' } } }
        #   },
        #   genres: {
        #     filter: { bool: { must: [ match_all: {} ] } },
        #     aggregations: { genres: { terms: { field: 'genre.title' } } }
        #   }
        # }
      }

      unless query.blank?
        @search_definition[:query] = {
          bool: {
            must: [
              { match: {
                title: query
                # query: query,
                # fields: ['title^10', 'country'],
                # operator: 'or'
              }
            }
          ],
          'filter':[
            "nested":{
              path: 'genre',
              "query": {
                "bool": {
                  "must": [
                    {
                      "match": {
                        "genre.title": "Rock"
                      }
                    }]
                  }
                }

              }
            ]

          }
        }
      else
        @search_definition[:query] = { match_all: {} }
        @search_definition[:sort]  = { title: 'desc' }
      end

      if options[:country]
        f = { term: { country: options[:country] } }
        __set_filters.(:genres, f)
      end

      if options[:genre]
        f = { term: { 'genre.title' => options[:genre] } }
        __set_filters.(:countries, f)
      end

      # if options[:published_week]
      #   f = {
      #     range: {
      #       published_on: {
      #         gte: options[:published_week],
      #         lte: "#{options[:published_week]}||+1w"
      #       }
      #     }
      #   }
      #
      #   __set_filters.(:categories, f)
      #
      #   __set_filters.(:authors, f)
      # end

      if query.present? && options[:tracks]
        @search_definition[:query][:bool][:should] ||= []
        @search_definition[:query][:bool][:should] << {
          nested: {
            path: 'tracks',
            query: {
              multi_match: {
                query: query,
                fields: ['tracks.title'],
                operator: 'or'
              }
            }
          }
        }
        @search_definition[:highlight][:fields].update 'tracks.title' => { fragment_size: 50 }
      end

      if options[:sort]
        @search_definition[:sort]  = { options[:sort] => 'desc' }
        @search_definition[:track_scores] = true
      end

      unless query.blank?
        @search_definition[:suggest] = {
          text: query,
          suggest_title: {
            term: {
              field: 'title.tokenized',
              suggest_mode: 'always'
            }
          }
        }
      end

      __elasticsearch__.search(@search_definition)
    end




  end





end

