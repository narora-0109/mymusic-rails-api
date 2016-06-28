namespace :elasticsearch do
desc 'Create elastic search indices'
task :combined => 'environment' do
      dir = ENV['DIR'].to_s != '' ? ENV['DIR'] : Rails.root.join("app/models")

      searchable_classes = Dir.glob(File.join("#{dir}/**/*.rb")).map do |path|
        model_filename = path[/#{Regexp.escape(dir.to_s)}\/([^\.]+).rb/, 1]

        next if model_filename.match(/^concerns\//i) # Skip concerns/ folder

        begin
          klass = model_filename.camelize.constantize
        rescue NameError
          require(path) ? retry : raise(RuntimeError, "Cannot load class '#{klass}'")
        end

        # Skip if the class doesn't have Elasticsearch integration
        next unless klass.respond_to?(:__elasticsearch__) && klass.respond_to?(:mappings)
        klass
      end.compact


      ## Update Each Class
      searchable_classes.each do |klass|
        puts "[IMPORT] Processing mappings for: #{klass}..."

        es_indices = klass.__elasticsearch__.client.indices
        options = {index: klass.index_name}

        # Find or create index
        es_indices.create(options) unless es_indices.exists(options)
        es_indices.put_mapping(options.merge({
          type: klass.document_type,
          body: klass.mappings.to_hash,
          # ignore_conflicts:true,
        }))

      end


      ## Import data into the newly created index
      Rake::Task["elasticsearch:import:all"].invoke

      puts
    end
end
