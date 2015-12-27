class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :title, :country, :created_at
  has_many :albums
end
