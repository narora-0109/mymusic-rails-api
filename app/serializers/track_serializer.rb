# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  time       :string(255)
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
include Rails.application.routes.url_helpers
class TrackSerializer < ActiveModel::Serializer
  attributes :id, :title, :time, :created_at
  belongs_to :album
  has_many :playlists, through: :playlist_tracks
end
