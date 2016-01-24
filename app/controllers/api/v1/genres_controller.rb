class Api::V1::GenresController <  Api::V1::ApplicationController
  PERMITTED_PARAMETERS= %W(title).map(&:to_sym)
end
