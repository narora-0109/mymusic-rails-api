class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :title, :year, :created_at

  belongs_to :artist_id
  has_many :tracks

  has_many :playlists
  has_many :users, through: :playlists

end
