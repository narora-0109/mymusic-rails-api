class PlaylistSerializer < ActiveModel::Serializer
  attributes :id,:title, :created_at

  belongs_to :user
  has_many :tracks, through: :playlist_tracks
  has_many :albums,through: :playlist_albums
end
