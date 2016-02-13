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

include Rails.application.routes.url_helpers
class AlbumSerializer < ActiveModel::Serializer
  # cache key: 'album', expires_in: 2.hours

  attributes :id, :artist_id, :title, :year, :created_at

  belongs_to :artist
  has_many :tracks
  # has_many :playlist_albums

  has_many :playlists, through: :playlist_albums
end
