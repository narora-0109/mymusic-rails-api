require 'rails_helper'

RSpec.describe Api::V1::ArtistsController, :type => :request do
   #pending "add some examples to (or delete) #{__FILE__}"

   describe "GET index" do
     before do
       10.times { artist=create(:artist)}
       #get api_v1_microposts_path, user_id: user.id, format: :json
     end
      it "returns artists index api" do
      get 'http://api.app.me:3000/v1/artists.siren', format: :siren
     # binding.pry
      json = JSON.parse response.body
       expect_status 200
       expect(json['entities']).to be_present
       expect(json['entities']).to be_kind_of(Array)
    end

   end


  describe "GET #show" do
     before do
        artist=create(:artist)
        get "http://api.app.me:3000/v1/artists/#{artist.id}", format: :siren
     end

     it "returns artist with in standard json format that contains properties and links" do

       json = JSON.parse response.body
       expect_status 200
       expect(json['properties']).to be_present
       expect(json['links']).to be_kind_of(Array)
     end
   end

   describe "DELETE #destroy" do
      before do
         artist=create(:artist)
         delete "http://api.app.me:3000/v1/artists/#{artist.id}", format: :siren
      end

      it "deletes" do

        #json = JSON.parse response.body
        expect_status 204
      end
    end


   describe "PATCH #update" do
      before do
         artist=create(:artist)
         artist2=create(:artist)
         #binding.pry
         put "http://api.app.me:3000/v1/artists/#{artist.id}", artist:artist2.as_json,format: :siren
      end

      it "updates" do
        json = JSON.parse response.body
        #binding.pry
        expect_status 200
      end
    end

end
