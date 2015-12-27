class TrackSerializer < ActiveModel::Serializer
  attributes :id, :title, :time, :created_at
  belongs_to :album
  has_many :playlists
  has_many :users, through: :playlists
end
