include Rails.application.routes.url_helpers
class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :title, :country, :created_at
  has_many :albums
  belongs_to :genre



  def to_siren
    to_json
  end

end








# require 'oat/adapters/siren'
# #require 'oat/adapters/hal'
# include Rails.application.routes.url_helpers
# class ArtistSerializer < Oat::Serializer

#   adapter Oat::Adapters::Siren

#   schema do
#     type "artist"
#     link :self, href: artist_url(item)

#     properties do |props|
#       props.id item.id
#       props.title item.title
#       props.country item.country
#       props.created_at item.created_at
#     end
#   end

#   def to_siren
#     to_json
#   end

# end