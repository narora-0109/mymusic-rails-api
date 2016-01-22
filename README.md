[![Code Climate](https://codeclimate.com/github/drumaddict/mymusic-rails-api/badges/gpa.svg)](https://codeclimate.com/github/drumaddict/mymusic-rails-api)
[![Test Coverage](https://codeclimate.com/github/drumaddict/mymusic-rails-api/badges/coverage.svg)](https://codeclimate.com/github/drumaddict/mymusic-rails-api/coverage)
[![Issue Count](https://codeclimate.com/github/drumaddict/mymusic-rails-api/badges/issue_count.svg)](https://codeclimate.com/github/drumaddict/mymusic-rails-api)

# Rails 5 API Demo
![My music](https://github.com/drumaddict/mymusic-rails-api/blob/master/mymusic.png)

## Work in Progress
----
### Overview
I am building a Demo API with rails 5 and adding features as I go.Planning to couple it with an Angular 2 SPA later.

## Features
* Custom adapters for Hypermedia types,currently only [Siren](https://github.com/kevinswiber/siren).(Plus JSON-API which comes bundled with Active Model Serializers)
* DRY Base ApplicationController.
* Authentication.
 1)Simple solution with [JWT gem](https://github.com/jwt/ruby-jwt).[Commit](https://github.com/drumaddict/mymusic-rails-api/commit/cf68bf36fd740bf38453d9cffc0d046d3f9be1d4)
 2)Feature rich option with [Devise Token Auth](https://github.com/lynndylanhurley/devise_token_auth). (Coming soon)
* Authorization with Pundit

# References
----
* [JSON WEB TOKEN ](https://jwt.io/)
* [Pundit](https://github.com/elabs/pundit)