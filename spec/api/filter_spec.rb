require 'rails_helper'

RSpec.describe Api::V1::AuthController, :type => :request do
  before :all do
   @simple_user = create(:simple_user)
   @simple_user_token = jwt_token(@simple_user).token #authentication
  end

  describe "Filter albums by artist id" do
    context "Given we have 3 albums by King diamond and 4 by albums by Myrath" do
      before do
        @king_diamond=create(:artist,title: 'King Diamond')
        3.times {create(:album, artist_id:  @king_diamond.id )}

        @myrath=create(:artist,title: 'Myrath')
        4.times {create(:album, artist_id:  @myrath.id )}
      end

      it "without filtering ,index request returns 7 albums" do
       get   v1_albums_url,
         params: { format: :siren  },
         xhr: true,
         headers: {'Authorization' => @simple_user_token }
       expect_status 200
       json = JSON.parse response.body
       expect(json['total_count']).to be 7
      end

      it "filtering by King Diamond returns 3 albums" do
      get   v1_albums_url,
        params: { artist_id: @king_diamond.id, format: :siren  },
        xhr: true,
        headers: {'Authorization' => @simple_user_token }
      expect_status 200
      json = JSON.parse response.body
      expect(json['total_count']).to be 3
      end

      it "filtering by Myrath returns 4 albums" do
      get   v1_albums_url,
        params: { artist_id: @myrath.id, format: :siren  },
        xhr: true,
        headers: {'Authorization' => @simple_user_token }
      expect_status 200
      json = JSON.parse response.body
      expect(json['total_count']).to be 4
      end
   end
end

  describe "Filter artists by genre" do
    context "Given we have 6 Pop artists and 4 Metal artists" do
      it "without filtering ,index request returns 10 artists" do
         pending 'Well you get the idea, this is a demo after all.'
         raise
      end
      it "filtering by Pop returns 6 artists" do
         pending 'Well you get the idea, this is a demo after all.'
         raise
      end
      it "filtering by Metal returns 4 artists" do
         pending 'Well you get the idea, this is a demo after all. '
         raise
      end

    end
  end


end