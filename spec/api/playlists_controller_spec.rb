require 'rails_helper'

RSpec.describe Api::V1::PlaylistsController, :type => :request do
  before :all do
   @user = create(:superadmin)
   @token = jwt_token(@user).token #authentication
  end
  index_test   :playlist, self
  show_test    :playlist, self
  create_test  :playlist, self
  update_test  :playlist, self
  destroy_test :playlist, self
end