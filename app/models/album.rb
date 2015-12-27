class Album < ApplicationRecord
  belongs_to :artist
  has_many :tracks
  has_many :playlists
  has_many :users, through: :playlists
end
