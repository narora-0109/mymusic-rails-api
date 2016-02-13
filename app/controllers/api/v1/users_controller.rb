class Api::V1::UsersController < Api::V1::ApplicationController
  PERMITTED_PARAMETERS = [:name, :email, :password, :password_confirmation, :role, playlists_attributes: [:title, :user_id, tracks_attributes: [:title, :time], albums_attributes: [:title, :year]]].freeze
  has_scope :role
  has_scope :by_ids, type: :array
end
