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
include Rails.application.routes.url_helpers
class PlaylistSerializer < ActiveModel::Serializer
  attributes :id, :title, :created_at

  belongs_to :user
  has_many :tracks, through: :playlist_tracks
  has_many :albums, through: :playlist_albums
end
