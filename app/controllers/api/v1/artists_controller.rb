class Api::V1::ArtistsController < Api::V1::ApplicationController
  # PERMITTED_PARAMETERS= %W(title country genre_id).map(&:to_sym)
  PERMITTED_PARAMETERS = [:title, :q, :country, :genre_id, :genre, genre_attributes: [:title], albums_attributes: [:title, :year, :artist_id]].freeze

  has_scope :country
  has_scope :genre
  has_scope :by_ids, type: :array
end
