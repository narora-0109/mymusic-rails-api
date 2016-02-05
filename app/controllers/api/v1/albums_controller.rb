class Api::V1::AlbumsController < Api::V1::ApplicationController

  PERMITTED_PARAMETERS= %W(title year artist_id).map(&:to_sym)

  #https://github.com/plataformatec/has_scope
  has_scope :year
  has_scope :by_ids, type: :array
  has_scope :artist_id
end
