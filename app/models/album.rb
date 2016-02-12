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


  belongs_to :artist, required: false
  has_many :tracks, dependent: :destroy
  has_many :playlist_albums
  has_many :playlists, through: :playlist_albums, dependent: :destroy

  accepts_nested_attributes_for :artist, :tracks

  scope :year, -> year { where(:year => year) }
  scope :artist, -> artist_title { joins(:artist).where('artists.title = ?', artist_title) }

  validates_presence_of :title

end
