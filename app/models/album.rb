class Album < ApplicationRecord

  KAMINARI_RECORDS_PER_PAGE = 10
  # Set default ApplicationPolicy for all models
  def self.policy_class
    "ApplicationPolicy"
  end

  belongs_to :artist
  has_many :tracks
  has_many :playlist_albums
  has_many :playlists, through: :playlist_albums



end
