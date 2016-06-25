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

include Rails.application.routes.url_helpers
class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :title, :country, :created_at
  has_many :albums
  belongs_to :genre

  def to_siren
    to_json
  end
end