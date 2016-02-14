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

# References
----
 * [Using Rails for API-only Applications](http://edgeguides.rubyonrails.org/api_app.html).
 * [APIs on Ruby](http://slides.com/filipposvasilakis/apis-on-ruby-and-rails#/)
 * [JSON Schema](http://json-schema.org/)
 * [Hypermedia Definitions](http://hyperschema.org/)
