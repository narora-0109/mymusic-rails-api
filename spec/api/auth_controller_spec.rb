require 'rails_helper'

RSpec.describe Api::V1::AuthController, :type => :request do
  before :all do
   @simple_user = create(:simple_user)
   @admin = create(:admin)
   @superadmin = create(:superadmin)
   @simple_user_token = jwt_token(@simple_user).token #authentication
   @admin_token = jwt_token(@admin).token #authentication
   @superadmin_token = jwt_token(@superadmin).token #authentication
  end

  describe "An unauthenticated user" do
    before do
    3.times {create(:artist) }
      get  v1_artists_url,
          params: { format: :siren },
          xhr: true,
          headers: {'Authorization' => nil }
   end

    it "cannot access resources" do
      expect_status 401
    end
  end


  describe "A simple user" do
    before do
    3.times {create(:artist) }
      get  v1_artists_url,
          params: { format: :siren },
          xhr: true,
          headers: {'Authorization' => @simple_user_token }
   end

    it "can list resources" do
      expect_status 200
      json = JSON.parse response.body
      expect(json['total_count']).to be 3
      #expect(json['total_count']).to be 10 unless model == :user
    end

    it "cannot create artist" do
      artist_attrs = FactoryGirl.build(:artist).attributes
      post  v1_artists_url,
            params:{ artist: artist_attrs, format: :siren },
            xhr: true,
            headers: {'Authorization' => "Bearer #{@simple_user_token}" }
      expect_status 401
    end


    it "cannot create album" do
      album_attrs = FactoryGirl.build(:album).attributes
      post  v1_albums_url,
            params:{ album: album_attrs, format: :siren },
            xhr: true,
            headers: {'Authorization' => "Bearer #{@simple_user_token}" }
      expect_status 401
    end

    it "can create his own playlists" do
      playlist_attrs = FactoryGirl.build(:playlist).attributes
      playlist_attrs.merge!(user_id: @simple_user.id )
      post  v1_playlists_url,
            params:{ playlist: playlist_attrs, format: :siren },
            xhr: true,
            headers: {'Authorization' => "Bearer #{@simple_user_token}" }
      expect_status 201
    end

    it "cannot create playlists for other users" do
      playlist_attrs = FactoryGirl.build(:playlist,user_id: 3000).attributes
      #playlist_attrs.merge!(user_id: 3000 )
      post  v1_playlists_url,
            params:{ playlist: playlist_attrs, format: :siren },
            xhr: true,
            headers: {'Authorization' => "Bearer #{@simple_user_token}" }
      expect_status 401
    end

    it "cannot delete playlists of other users" do
      another_user=create(:simple_user)
      playlist = create(:playlist,user_id: another_user.id)
      delete  v1_playlist_url(id: playlist.id ),
            params:{ playlist: playlist.attributes, format: :siren },
            xhr: true,
            headers: {'Authorization' => "Bearer #{@simple_user_token}" }
      expect_status 401
    end

    it "can delete his own playlists" do
      #playlist_attrs = FactoryGirl.build(:playlist).attributes.merge!(user_id: @simple_user.id )
      playlist=create(:playlist,user_id: @simple_user.id)
      delete  v1_playlist_url(id: playlist.id ),
            params:{ playlist: playlist.attributes, format: :siren },
            xhr: true,
            headers: {'Authorization' => "Bearer #{@simple_user_token}" }
      expect_status 204
    end


  end

  describe "An admin" do
    it "can list resources" do
      pending("You get the idea.This a demo after all!")
      raise
    end
  end

  describe "A Superadmin" do
    it "is a God and can do anything" do
      pending("You get the idea.This a demo after all!")
      raise
    end
  end

end