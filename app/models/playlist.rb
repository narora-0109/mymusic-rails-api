# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Playlist < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10
  def self.policy_class
    "ApplicationPolicy"
  end

  belongs_to :user, required: false
  has_many :playlist_tracks
  has_many :tracks, through: :playlist_tracks, dependent: :destroy
  has_many :playlist_albums
  has_many :albums, through: :playlist_albums, dependent: :destroy


  accepts_nested_attributes_for :tracks, :albums, :user


  scope :user, -> user_id { where(:user_id => user_id) }




end
