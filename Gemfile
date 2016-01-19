source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '>= 5.0.0.beta1', '< 5.1'
# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.3.18', '< 0.5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.0'

 gem 'active_model_serializers', '~> 0.10.0.rc3'
 gem 'oat'
 gem "responders"
 gem  'kaminari'
     #   create  lib/application_responder.rb
     #  insert  config/application.rb
     # prepend  app/controllers/application_controller.rb
     #  insert  app/controllers/application_controller.rb
     #  create  config/locales/responders.en.yml

# Use Puma as the app server
 gem 'puma'


 #gem 'airbrake'

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

gem 'swagger-docs'

#Authentication
gem 'knock'

group :development do
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'pry-byebug'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'faker'
  gem 'fakeweb'
  gem 'factory_girl'
  gem 'annotate'
  gem 'awesome_print', :require => 'ap'
  gem 'thin'
  gem 'seed_dump'

  #Capistrano
  gem 'capistrano', '~> 3.4.0'
  gem 'capistrano-rails', '~> 1.1.2'
  gem 'capistrano-bundler',   require: false
  gem "capistrano-db-tasks",  require: false
  gem "airbrussh", :require => false
  gem 'capistrano3-puma'

end


group :test do

  #TEST WITH RSPEC

  gem 'rspec-rails'
  gem 'rails-controller-testing'
  gem 'shoulda-matchers', require: false
  gem 'capybara'
  gem 'capybara-webkit'
  gem 'capybara-screenshot'
  gem 'mocha'
  gem 'database_cleaner'
  gem 'faker'
  gem 'fakeweb'
  gem 'simplecov', require: false

end


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
