# == Schema Information
#
# Table name: genres
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
include Rails.application.routes.url_helpers
class GenreSerializer < ActiveModel::Serializer
  cache key: 'genre', expires_in: 2.hours
  attributes :id, :title, :created_at

  has_many :artists
end
