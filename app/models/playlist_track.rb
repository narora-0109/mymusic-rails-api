# == Schema Information
#
# Table name: playlist_tracks
#
#  id          :integer          not null, primary key
#  playlist_id :integer
#  track_id    :integer
#

class PlaylistTrack < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10
  def self.policy_class
    'ApplicationPolicy'
  end
  belongs_to :playlist
  belongs_to :track
end
