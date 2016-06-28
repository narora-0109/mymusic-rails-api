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
  include Searchable

  index_name "#{Rails.application.class.parent_name.underscore}"
  document_type self.name.downcase
  def as_indexed_json(options={})
    self.as_json(ElasticSearch::Mappings::AlbumMapping::AS_INDEXED_JSON)
  end

  # Set default ApplicationPolicy for all models
  def self.policy_class
    'ApplicationPolicy'
  end

  belongs_to :artist, required: false
  has_many :tracks, dependent: :destroy
  has_many :playlist_albums
  has_many :playlists, through: :playlist_albums, dependent: :destroy

  accepts_nested_attributes_for :artist, :tracks

  scope :year, -> (year) { where(year: year) }
  scope :artist, -> (artist_title) { joins(:artist).where('artists.title = ?', artist_title) }

  validates :title, presence: :true
end
