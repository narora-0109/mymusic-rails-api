# == Schema Information
#
# Table name: playlist_albums
#
#  id          :integer          not null, primary key
#  playlist_id :integer
#  album_id    :integer
#

class PlaylistAlbum < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10
  def self.policy_class
    'ApplicationPolicy'
  end
  belongs_to :playlist
  belongs_to :album
end
