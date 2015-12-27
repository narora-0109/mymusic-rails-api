class GenreSerializer < ActiveModel::Serializer
  attributes :id, :title, :created_at
  has_many :artists
end
