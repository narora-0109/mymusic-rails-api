require 'rails_helper'

RSpec.describe Api::V1::UsersController, :type => :request do
  before :all do
  Playlist.delete_all
  User.delete_all
   @user = create(:superadmin)
   @token = jwt_token(@user).token #authentication
  end
  index_test   :user, self
  show_test    :user, self
  create_test  :user, self
  update_test  :user, self
  destroy_test :user, self
end