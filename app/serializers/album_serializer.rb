include Rails.application.routes.url_helpers
class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :created_at

  belongs_to :artist
  has_many :tracks
  #has_many :playlist_albums

  has_many :playlists, through: :playlist_albums


end
