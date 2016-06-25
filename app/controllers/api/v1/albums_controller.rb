class Api::V1::AlbumsController < Api::V1::ApplicationController
  # PERMITTED_PARAMETERS= %W(title year artist_id).map(&:to_sym)

  PERMITTED_PARAMETERS = [:title, :year, :artist_id, artist_attributes: [:title, :country, :genre_id], tracks_attributes: [:title, :time, :album_id]].freeze

  # https://github.com/plataformatec/has_scope
  has_scope :year
  has_scope :by_ids, type: :array
  has_scope :artist
end
