source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
#gem 'rails', '>= 5.0.0.beta1', '< 5.1'
#gem 'rails', github: 'rails/rails'
gem 'rails', :git => 'git://github.com/rails/rails.git'
# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.3.18', '< 0.5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
# gem 'jbuilder', '~> 2.0'

gem 'active_model_serializers', '~> 0.10.0.rc3'
gem "responders"
gem  'kaminari'



# Use Puma as the app server
 gem 'puma'


 #gem 'airbrake'

# Use ActiveModel has_secure_password
 gem 'bcrypt', '~> 3.1.7'

# Use Rack CORS for handling Cross-Origin Resource Sharing (CORS), making cross-origin AJAX possible
gem 'rack-cors'

gem 'swagger-docs'

#Authentication
gem 'jwt'
#gem 'devise_token_auth'
#Authorization
gem 'pundit'

group :development do
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'pry-byebug'
  gem 'better_errors'
  gem 'binding_of_caller'

  gem 'rails-erd'

  gem 'annotate', git: 'git@github.com:ctran/annotate_models.git', branch: 'develop'
  gem 'awesome_print', :require => 'ap'
  gem 'thin'
  gem 'seed_dump'
  gem 'rspec_api_documentation'
  #gem 'raddocs'

  #Capistrano
  gem 'capistrano', '~> 3.4.0'
  gem 'capistrano-rails', '~> 1.1.2'
  gem 'capistrano-bundler',   require: false
  gem "capistrano-db-tasks",  require: false
  gem "airbrussh", :require => false
  gem 'capistrano3-puma'

end

group :development, :test do
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'faker'
end
group :test do

  #TEST WITH RSPEC

  #gem 'rspec-rails'
  gem 'rails-controller-testing'
  gem 'shoulda-matchers', require: false
  gem 'capybara'
  gem 'capybara-webkit'
  gem 'capybara-screenshot'
  gem 'mocha'
  gem 'database_cleaner'
  gem 'fakeweb'
  gem 'simplecov', require: false
  gem "codeclimate-test-reporter", require: false


end


# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
