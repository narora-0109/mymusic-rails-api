require 'rails_helper'

RSpec.describe Api::V1::GenresController, type: :request do
  before :all do
    @user = create(:superadmin)
    @token = jwt_token(@user).token # authentication
  end
  index_test   :genre, self
  show_test    :genre, self
  create_test  :genre, self
  update_test  :genre, self
  destroy_test :genre, self
end
