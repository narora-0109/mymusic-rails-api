require 'rails_helper'
RSpec.describe Api::V1::ArtistsController, :type => :request do
     before :all do
      @token = jwt_token.token #authentication
     end

   describe "GET #index" do
     before do
       10.times { artist = create(:artist) }
        get v1_artists_url,
            params: { format: :siren },
            xhr: true,
            headers: {'Authorization' => "Bearer #{@token}" }
        #get 'http://api.app.me:3000/v1/artists.siren', format: :siren

     end


      it "returns collection of artists in siren format" do
        #binding.pry
        json = JSON.parse response.body
        expect_status 200
        expect(json['total_count']).to be 10
        expect(json['entities']).to be_present
        expect(json['entities']).to be_kind_of(Array)
    end
   end


  describe "GET #show" do
     before do
        artist=create(:artist)
        #get "http://api.app.me:3000/v1/artists/#{artist.id}", format: :siren
        get v1_artist_url(id: artist.id),
                          params:{ format: :siren},
                          xhr: true,
                          headers: {'Authorization' => "Bearer #{@token}" }
     end

     it "creates and returns artist in siren format" do
       json = JSON.parse response.body
       expect_status 200
       expect(json['properties']).to be_present
       expect(json['links']).to be_kind_of(Array)
     end
   end

   describe "DELETE #destroy" do
      before do
         artist=create(:artist)
         delete v1_artist_url(id: artist.id),
             params: {format: :siren },
             xhr: true,
             headers: {'Authorization' => "Bearer #{@token}" }
         #delete "http://api.app.me:3000/v1/artists/#{artist.id}", format: :siren
      end

      it "deletes artist" do
        #json = JSON.parse response.body
        expect_status 204
      end
    end


   describe "PATCH,PUT #update" do
      before do
         artist=create(:artist)
         updated_attrs = attributes_for(:artist)
         put v1_artist_url(id: artist.id),
             params: { artist: updated_attrs, format: :siren },
             xhr: true,
             headers: {'Authorization' => "Bearer #{@token}" }
         #put "http://api.app.me:3000/v1/artists/#{artist.id}", artist:artist2.as_json,format: :siren
      end

      it "updates and returns artist in siren format" do
        json = JSON.parse response.body
        #binding.pry
        expect_status 200
      end
    end

end
