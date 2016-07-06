[![Build Status](https://travis-ci.org/drumaddict/mymusic-rails-api.svg?branch=master)](https://travis-ci.org/drumaddict/mymusic-rails-api)
[![Code Climate](https://codeclimate.com/github/drumaddict/mymusic-rails-api/badges/gpa.svg)](https://codeclimate.com/github/drumaddict/mymusic-rails-api)
[![Test Coverage](https://codeclimate.com/github/drumaddict/mymusic-rails-api/badges/coverage.svg)](https://codeclimate.com/github/drumaddict/mymusic-rails-api/coverage)
[![Issue Count](https://codeclimate.com/github/drumaddict/mymusic-rails-api/badges/issue_count.svg)](https://codeclimate.com/github/drumaddict/mymusic-rails-api)

# Rails 5 API Demo
![My music](https://github.com/drumaddict/mymusic-rails-api/blob/master/mymusic.png)
![My music](https://github.com/drumaddict/mymusic-rails-api/blob/master/docs_screenshot.png)
----
### Overview
This is a Rails 5 API demo exploring best practices.The database schema emulates a very simple Spotify-like Music Service.

## Features
* Custom Active Model Serializers Adapter for [Siren](https://github.com/kevinswiber/siren) Hypermedia type
* Caching
* Filters with [has_scope gem](https://github.com/plataformatec/has_scope)
* Authentication with [JSON Web Tokens](https://jwt.io/)
* Authorization with [Pundit](https://github.com/elabs/pundit)
* DRY controllers
* Pagination with [Kaminari](https://github.com/amatsuda/kaminari)
* Documentation with [Swagger UI](http://swagger.io/swagger-ui/), gorgeous responsive [theme](https://github.com/MartinSahlen/swagger-ui). The files are in `/public/docs`
* Rspec Tests, DRY helpers
* Response type validations with [JSON Schema gem](https://github.com/ruby-json-schema/json-schema)
* MySQl database


## Elastic Search Integration

![Elastic Search](https://github.com/drumaddict/mymusic-rails-api/blob/elastic-search/es.png)

* Simple integration with multiple models per index supported.
`app/models/elastic_search/index_manager.rb' : several helper functions to manage indices and import records.
`app/models/elastic_search/mappings` : Define mappings for model fields
`app/models/elastic_search/music_search.rb` : Defines the query function, specific to index.
`app/models/concerns/searchable.rb` : Defines the search function, specific to index.

* For a new index define the index settings in `IndexManager`, write a query function in a file similar to
`music_search.rb`, and create the corresponding concern similar to `searchable.rb`.`IndexManager` provides
 helper functions to create, delete, recreate indices.
* To index a model, create a mapping file, include the concern which defines the search function, write a
 search action in `app/controllers/api/v1/application_controller.rb` and define the corresponding route in `config\routes.rb`.
* Import the documents with fuctions defined in `IndexManager`.

# References
----
 * [Using Rails for API-only Applications](http://edgeguides.rubyonrails.org/api_app.html).
 * [APIs on Ruby](http://slides.com/filipposvasilakis/apis-on-ruby-and-rails#/)
 * [JSON Schema](http://json-schema.org/)
 * [Hypermedia Definitions](http://hyperschema.org/)
 * [Elastic Search](https://www.elastic.co/)
