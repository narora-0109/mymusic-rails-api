require 'open-uri'
require 'elasticsearch/rails/tasks/import'
module ElasticSearch
  class IndexManager

    INDEX_SETTINGS =
      { 'mymusic':  {
                      index: {
                        number_of_shards: 1,
                        number_of_replicas: 0,
                      },
                      analysis: {
                        filter: {
                          ngram: {
                            type: 'nGram',
                            min_gram: 3,
                            max_gram: 25
                          }
                        },
                        analyzer: {
                          ngram: {
                            tokenizer: 'whitespace',
                            filter: ['lowercase', 'stop', 'ngram'],
                            type: 'custom'
                          },
                          ngram_search: {
                            tokenizer: 'whitespace',
                            filter: ['lowercase', 'stop'],
                            type: 'custom'
                          }
                        }
                      }
                    },
      'other_index':  {


                    }

    }
    # def self.create_index(options={})
    #   client     = Artist.gateway.client
    #   index_name = Artist.index_name
    #
    #   client.indices.delete index: index_name rescue nil if options[:force]
    #
    #   settings = Artist.settings.to_hash.merge(Album.settings.to_hash)
    #   mappings = Artist.mappings.to_hash.merge(Album.mappings.to_hash)
    #
    #   client.indices.create index: index_name,
    #                         body: {
    #                           settings: settings.to_hash,
    #                           mappings: mappings.to_hash }
    # end

    def self.create_indexes

      ## Update Each Class
      self.searchable_classes.each do |klass|
        puts "Creating  mappings for: #{klass}..."
        self.create_mappings(klass)
        puts "[IMPORT] Processing mappings for: #{klass}..."

        es_indices = klass.__elasticsearch__.client.indices
        options = {index: klass.index_name, body:{settings: INDEX_SETTINGS[klass.index_name.to_sym]}}
        # binding.pry
        # Find or create index
        es_indices.create(options) unless es_indices.exists(options)
        # binding.pry
        es_indices.put_mapping(options.merge({
          type: klass.document_type,
          body:   klass.mappings.to_hash
          # ignore_conflicts:true
        }))

      end

      ## Import data into the newly created index
      Rake::Task["elasticsearch:import:all"].invoke
    end


    def self.create_mappings(klass)
      begin
        mapping_klass = "ElasticSearch::Mappings::#{klass.name}Mapping".constantize
      rescue NameError => error
        raise RuntimeError,  "#{klass} has not configured mappings for ElasticSearch."
      end
      klass.class_eval do
        mapping  dynamic: 'false' do
          mapping_klass.const_get("ELASTIC_SEARCH_MAPPINGS").each do |mapping|
            indexes mapping[:property], mapping[:options]
          end
          mapping_klass.const_get("ELASTIC_SEARCH_NESTED_MAPPINGS").each do |relation, nested_mapping|
            indexes relation.to_sym, type:  'nested' do
              nested_mapping.each do |mapping|
                indexes mapping[:property], mapping[:options]
              end
            end
          end
        end
      end
    end



    def self.searchable_classes
      dir = ENV['DIR'].to_s != '' ? ENV['DIR'] : Rails.root.join("app/models")
      searchable_classes = Dir.glob(File.join("#{dir}/**/*.rb")).map do |path|
        model_filename = path[/#{Regexp.escape(dir.to_s)}\/([^\.]+).rb/, 1]
        next if model_filename.match(/^concerns\//i) # Skip concerns/ folder
        next if model_filename.match(/^elastic_search\//i) # Skip concerns/ folder
        begin
          klass = model_filename.camelize.constantize
        rescue NameError
          require(path) ? retry : raise(RuntimeError, "Cannot load class '#{klass}'")
        end
        # Skip if the class doesn't have Elasticsearch integration
        next unless klass.respond_to?(:__elasticsearch__) && klass.respond_to?(:mappings)
        klass
      end.compact
      searchable_classes
    end


end
end
