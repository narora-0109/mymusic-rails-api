class Album < ApplicationRecord

  KAMINARI_RECORDS_PER_PAGE = 10

  belongs_to :artist
  has_many :tracks
  has_many :playlist_albums
  has_many :playlists, through: :playlist_albums



end
