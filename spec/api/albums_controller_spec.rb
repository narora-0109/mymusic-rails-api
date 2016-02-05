require 'rails_helper'

RSpec.describe Api::V1::AlbumsController, :type => :request do
  before :all do
    @user = create(:superadmin)
    @token = jwt_token(@user).token #authentication
  end
  index_test   :album, self
  show_test    :album, self
  create_test  :album, self
  update_test  :album, self
  destroy_test :album, self
end
