require 'rails_helper'

RSpec.describe Api::V1::TracksController, type: :request do
  before :all do
    @user = create(:superadmin)
    @token = jwt_token(@user).token # authentication
  end
  index_test   :track, self
  show_test    :track, self
  create_test  :track, self
  update_test  :track, self
  destroy_test :track, self
end
