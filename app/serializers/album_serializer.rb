class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :created_at

  belongs_to :artist
  has_many :tracks

  has_many :playlists, through: :playlist_albums

end
