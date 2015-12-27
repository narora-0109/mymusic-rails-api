class Track < ApplicationRecord
  belongs_to :album
  has_many :playlist_tracks
  has_many :playlists, through: :playlist_tracks

end
