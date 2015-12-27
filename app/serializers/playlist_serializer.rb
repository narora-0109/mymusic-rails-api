class PlaylistSerializer < ActiveModel::Serializer
  attributes :id,:title, :created_at

  belongs_to :user
end
