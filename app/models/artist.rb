# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  country    :string(255)
#  genre_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Artist < ApplicationRecord
  include Searchable
  KAMINARI_RECORDS_PER_PAGE = 10
  ELASTIC_SEARCH_MAPPINGS = [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                             {property: :title, options:{ type: 'string' }},

                             {property: :country, options:{ type: 'string'}},
                             {property: :genre_id, options:{ type: 'integer', index: 'not_analyzed'}},
                             {property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                             {property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}]

  ELASTIC_SEARCH_NESTED_MAPPINGS = { genre: [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                                             { property: :title, options:{ type: 'string' }},
                                             { property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                                             { property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}
                                         ],
                                     albums: [{ property: :id, options:{ type: 'integer', index: 'not_analyzed'}},
                                              { property: :title, options:{ type: 'string' }},
                                              { property: :year, options:{ type: 'integer' }},
                                              { property: :created_at, options: { type: 'date', index: 'not_analyzed'}},
                                              { property: :updated_at, options: { type: 'date', index: 'not_analyzed'}}
                                         ]
                                }

  def as_indexed_json(options={})
    self.as_json(
      only: [ :title, :country, :genre_id, :created_at, :updated_at ],
      include: { genre: { only: :title},
                 albums:    { only: [:title, :year] },
               })
  end


  def self.policy_class
    'ApplicationPolicy'
  end
  has_many :albums, dependent: :destroy
  belongs_to :genre, required: false

  accepts_nested_attributes_for :genre, :albums

  scope :country, ->(country) { where(country: country) }
  scope :genre, ->(genre_title) { joins(:genre).where('genres.title = ?', genre_title) }

  validates :title, presence: :true
end
