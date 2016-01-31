class Api::V1::ArtistsController <  Api::V1::ApplicationController
  PERMITTED_PARAMETERS= %W(title country genre_id).map(&:to_sym)

  has_scope :country
end
