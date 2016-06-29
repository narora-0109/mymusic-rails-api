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

class Track < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10

  include Searchable
  index_name "#{Rails.application.class.parent_name.underscore}"
  document_type self.name.downcase
  def as_indexed_json(options={})
    self.as_json(ElasticSearch::Mappings::TrackMapping::AS_INDEXED_JSON)
  end
  def self.policy_class
    'ApplicationPolicy'
  end
  belongs_to :album, required: false, touch: true
  has_many :playlist_tracks
  has_many :playlists, through: :playlist_tracks, dependent: :destroy

  accepts_nested_attributes_for :album

  scope :artist, -> (artist_title) { joins(album: [:artist]).where('artists.title = ?', artist_title) }
  scope :album, -> (album_title) { joins(:album).where('albums.title = ?', album_title) }

  validates :title, presence: :true
end
