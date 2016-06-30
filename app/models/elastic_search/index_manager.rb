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
    'users_mymusic':  {

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
    }
  }

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

  def self.index_names
    searchable_classes.map(&:index_name).uniq
  end
  def self.searchable_classes_by_index
    searchable_classes.group_by(&:index_name)
  end

  def self.create_index(index_name)
    raise( RuntimeError,  "You have not configured index settings for #{index_name}.See INDEX_SETTINGS constant.") if INDEX_SETTINGS[index_name.to_sym].nil?
    _searchable_classes = searchable_classes_by_index[index_name.to_s]
    raise( RuntimeError,  "No Models have been configured to be searchable for #{index_name}") if _searchable_classes.empty?

    _mappings =  _searchable_classes.each_with_object({}) do |klass, mappings|
      Rails.logger.info "Processing #{index_name} mappings for: #{klass}"
      self.create_mappings(klass)
      mappings.merge!(klass.mappings.to_hash)
    end

    es_client.indices.create index: index_name,
    body: {
      settings: INDEX_SETTINGS[index_name.to_sym],
      mappings: _mappings.to_hash
    }

  end


  def self.create_index_and_import(index_name, import_options={} )
    create_index index_name
    import_all_models_for_index(index_name, import_options)
  end

  def self.recreate_index_and_import(index_name, import_options={})
    delete_index index_name
    create_index_and_import(index_name, import_options)
  end


  def self.create_all_indices
    index_names.each {|index_name| create_index  index_name}
  end

  def self.create_all_indices_and_import(import_options={})
    index_names.each {|index_name| create_index_and_import(index_name, import_options)}
  end

  def self.recreate_all_indices_and_import(import_options={})
    delete_all_indices
    create_all_indices_and_import(import_options)
  end

  def self.es_host
    Rails.env == 'development' ? 'localhost:9200': 'my_production_es_host:9200'
  end
  def self.es_client
    Elasticsearch::Client.new host: es_host
  end

  def self.import_all_models_for_index(index_name, import_options={} )
    searchable_classes_by_index[index_name.to_s].each{|klass| klass.import(import_options)}
  end

  def self.import_all_models_for_all_indices(import_options={})
    index_names.each {|index_name| import_all_models_for_index index_name, import_options}
  end

  def self.delete_index(index_name)
    es_client.indices.delete(index: index_name) if index_exists? index_name
  end

  def self.delete_all_indices
    index_names.each {|index_name| delete_index index_name}
  end
  def self.index_exists?(index_name)
    es_client.indices.exists(index: index_name)
  end

end
end
