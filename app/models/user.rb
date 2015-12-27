class User < ApplicationRecord
  has_many :playlists
  has_many :tracks, through: :playlists
  has_many :albums, through: :playlists
end
