# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  year       :integer
#  artist_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

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


  scope :year, -> year { where(:year => year) }



end
