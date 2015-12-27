class TrackSerializer < ActiveModel::Serializer
  attributes :id, :title, :time, :created_at
  belongs_to :album
  has_many :playlists, through: :playlist_tracks
end
