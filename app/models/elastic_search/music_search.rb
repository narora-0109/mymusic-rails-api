module ElasticSearch
  class MusicSearch
    attr_reader :options
    def initialize(query  , options= {})
      @query = query
      @options = options

      @options[:page]              ||= 1
      @options[:per]               ||= 10
    end

    def self.search
      # if @options[:load]
      # ::ProductCatalogItem.__elasticsearch__.search(query).per(@options[:per]).offset(offset)

      # else
      #   SearcherResult.new(__search.response)
      # end
      im= ElasticSearch::IndexManager
      client=im.es_client
      # ms=ElasticSearch::MusicSearch.new(genre:'Rock')
      #  ms=ElasticSearch::MusicSearch.new({'genre'=> 'Rock','query'=>'King'})
      ms=ElasticSearch::MusicSearch.new({'query'=>'King'})
      # client.search index: 'myindex', body: { query: { match: { title: 'King' } }}
      client.search(__query).per(@options[:per]).offset(offset)
      # client.search index: 'mymusic', body:  ms.__query
    end




    def __query
      Jbuilder.encode do |json|
        # binding.pry
        if @query.present?
          squery = sanitize_string_for_elasticsearch_string_query(@query.strip)

          json.query do
            json.bool do
              json.should do
                json.child! do
                  json.multi_match query: squery, fields: ["title", "country"]
                end
                json.child! do
                  json.nested path: "albums", query: { match: { "albums.title" => { query: squery } } }
                end
                json.child! do
                  json.nested path: "artist", query: { match: { "artist.title" => { query: squery} } }
                end
                json.child! do
                  json.nested path: "genre", query:  { match: { "genre.title" => { query: squery} } }
                end
              end
            end
          end

        else
          json.query do
            json.match_all {}
          end
        end

        # filters
        json.filter filters
        # Aggs
        # json.aggs aggs

        json.size @options[:per]
        json.from (@options[:page].to_i - 1) * @options[:per]
        json.sort { json.set! :title, "asc" }
      end
    end
    def filters()
      Jbuilder.new do |json|
        json.bool do
          json.must do
            json.child! { json.query   bool: { must: [ {match:{ "country": @options[:country]} } ]}}  if @options[:country].present?
            json.child! { json.nested path: "genre", query: { bool: { must: [ {match:{ "genre.title": @options[:genre]} } ]}}} if @options[:genre].present?
            json.child! { json.nested path: "artist", query: { bool: { must: [ {match:{ "artist.title": @options[:artist]} } ]}}} if @options[:artist].present?
          end
        end
      end
    end



    # http://stackoverflow.com/questions/16205341/symbols-in-query-string-for-elasticsearch
    def sanitize_string_for_elasticsearch_string_query(str)
      # Escape special characters
      # http://lucene.apache.org/core/old_versioned_docs/versions/2_9_1/queryparsersyntax.html#Escaping Special Characters
      escaped_characters = Regexp.escape('\\+-&|!(){}[]^~*?:')
      str = str.gsub(/([#{escaped_characters}])/, '\\\\\1')

      # AND, OR and NOT are used by lucene as logical operators. We need
      # to escape them
      ['AND', 'OR', 'NOT'].each do |word|
        escaped_word = word.split('').map {|char| "\\#{char}" }.join('')
        str = str.gsub(/\s*\b(#{word.upcase})\b\s*/, " #{escaped_word} ")
      end

      # Escape odd quotes
      quote_count = str.count '"'
      str = str.gsub(/(.*)"(.*)/, '\1\"\3') if quote_count % 2 == 1

      str
    end
  end
end
