class Api::V1::ArtistsController <  Api::V1::ApplicationController
  #PERMITTED_PARAMETERS= %W(title country genre_id).map(&:to_sym)
  PERMITTED_PARAMETERS = [:title,:shit,:country,:genre_id, genre_attributes: [:title], albums_attributes: [:title,:year,:artist_id]]

  has_scope :country
  has_scope :genre
  has_scope :by_ids, type: :array
end
