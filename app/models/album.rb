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

  index_name "#{Rails.application.class.parent_name.underscore}_#{Rails.env}"
  document_type self.name.downcase
  ELASTIC_SEARCH_MAPPINGS = [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                             {property: :title, options:{ type: 'string' }},
                             {property: :year, options:{ type: 'integer' }},
                             {property: :artist_id, options:{ type: 'integer', index: 'not_analyzed'}},
                             {property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                             {property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}]

  ELASTIC_SEARCH_NESTED_MAPPINGS = { artist: [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                                             { property: :title, options:{ type: 'string' }},
                                             { property: :country, options:{ type: 'string' }},
                                             { property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                                             { property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}
                                         ],
                                     tracks: [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                                              { property: :title, options:{ type: 'string' }},
                                              { property: :time, options:{ type: 'integer' ,index: 'not_analyzed'}},
                                              { property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                                              { property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}
                                         ]
                                }



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
