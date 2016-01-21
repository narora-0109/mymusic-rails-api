class Track < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10
  def self.policy_class
    "ApplicationPolicy"
  end
  belongs_to :album
  has_many :playlist_tracks
  has_many :playlists, through: :playlist_tracks

end
