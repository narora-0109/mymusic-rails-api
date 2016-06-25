# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  role            :integer          default("user")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
include Rails.application.routes.url_helpers
class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :created_at, :updated_at
  has_many :playlists
end
