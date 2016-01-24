class Api::V1::ArtistsController <  Api::V1::ApplicationController
  PERMITTED_PARAMETERS= %W(title country).map(&:to_sym)
end
