require 'rails_helper'

RSpec.describe Api::V1::ApplicationController, :type => :controller do
   pending "add some examples to (or delete) #{__FILE__}"

   describe "GET #index" do

     before do
       10.times{ create(:artist) }
       get :index, format: :siren
       json = JSON.parse response.body
       expect(json['data']).to be_present
       expect(json['data']).to be_kind_of(Array)
       expect(json['meta']).to be_present
     end




   end

end
