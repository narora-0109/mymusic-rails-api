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
  KAMINARI_RECORDS_PER_PAGE = 10



  include Searchable
  index_name "#{Rails.application.class.parent_name.underscore}"
  document_type self.name.downcase
  def as_indexed_json(options={})
    self.as_json(ElasticSearch::Mappings::ArtistMapping::AS_INDEXED_JSON)
  end

  def self.policy_class
    'ApplicationPolicy'
  end
  has_many :albums, dependent: :destroy
  belongs_to :genre, required: false, touch: true

  accepts_nested_attributes_for :genre, :albums

  scope :country, ->(country) { where(country: country) }
  scope :genre, ->(genre_title) { joins(:genre).where('genres.title = ?', genre_title) }

  validates :title, presence: :true
end
