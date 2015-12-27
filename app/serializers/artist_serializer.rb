class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :title, :country, :created_at
  has_many :albums
  belongs_to :genre
end
