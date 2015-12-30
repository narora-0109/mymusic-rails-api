# require 'oat/adapters/siren'
# #require 'oat/adapters/hal'
# include Rails.application.routes.url_helpers
# class ArtistsSerializer < Oat::Serializer

#   adapter Oat::Adapters::Siren

#   schema do
#     type "artist"
#     link :self, href: artists_url

#     # properties do |props|
#     #   props.id item.id
#     #   props.title item.title
#     #   props.country item.country
#     #   props.created_at item.created_at
#     # end


#     # user entities
#     entities :artists, item do |artist, artist_serializer|
#       artist_serializer.properties do |props|
#           props.id item.id
#       props.title item.title
#       props.country item.country
#       props.created_at item.created_at
#       end
#     end



#   end

#   def to_siren
#     to_json
#   end

# end