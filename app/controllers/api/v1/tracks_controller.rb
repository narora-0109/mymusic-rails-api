class Api::V1::TracksController < Api::V1::ApplicationController
  PERMITTED_PARAMETERS = [:title, :time, :album_id, album_attributes: [:title, :year, :artist_id]].freeze

  has_scope :by_ids, type: :array
  has_scope :artist
  has_scope :album
end
