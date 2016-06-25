module ApiHelper
  def app
    Rails.application
  end

  def jwt_token(user = nil)
    user ||= create(:admin)
    JsonWebToken.new payload: { id: user.id, email: user.email }
  end
end

RSpec.configure do |config|
  config.include ApiHelper, type: :request # apply to all spec for apis folder
  config.include Rails.application.routes.url_helpers, type: :request
end

def index_test model, context
  context.describe 'GET #index' do
    before do
      10.times { create(model) }
      get(
        instance_eval("v1_#{model.to_s.pluralize}_url"),
        params: { format: :siren },
        xhr: true,
        headers: { 'Authorization' => @token }
      )
    end

    it "returns collection of #{model.to_s.pluralize} in siren format" do
      json = JSON.parse response.body
      expect_status 200
      # schema validation currently only for artist.Maybe I could use a generic format for all models.
      expect(json).to match_response_schema("siren/#{model.to_s.pluralize}") if model == :artist
      # expect(json['total_count']).to be 16 if model == :user #Extra 6 users are created in each spec for authentication
      expect(json['total_count']).to be 10 unless model == :user
      expect(json['total_count']).to be 11 if model == :user
    end
  end
end

def show_test model, context
  context.describe 'GET #show' do
    before do
      record = create(model)
      get instance_eval("v1_#{model}_url(id: #{record.id})"),
        params: { format: :siren },
        xhr: true,
        headers: { 'Authorization' => @token }
    end

    it "returns #{model} in siren format" do
      json = JSON.parse response.body
      expect_status 200
      # schema validation currently only for artist.Maybe I could use a generic format for all models.
      expect(json).to match_response_schema("siren/#{model}") if model == :artist
    end
  end
end

def create_test model, context
  context.describe 'POST #create' do
    before do
      model_attrs = FactoryGirl.build(model).attributes
      if model == :user
        model_attrs['password'] = 11_111_111
        model_attrs['password_confirmation'] = 11_111_111
      end

      post instance_eval("v1_#{model.to_s.pluralize}_url"),
        params: { model.to_s => model_attrs, format: :siren },
        xhr: true,
        headers: { 'Authorization' => @token }
    end

    it "creates and returns #{model} in siren format" do
      json = JSON.parse response.body
      expect_status 201
      # schema validation currently only for artist.Maybe I could use a generic format for all models.
      expect(json).to match_response_schema("siren/#{model}") if model == :artist
    end
  end
end

def update_test model, context
  context.describe 'PATCH,PUT #update' do
    before do
      record = create(model)
      updated_attrs = FactoryGirl.build(model).attributes
      put instance_eval("v1_#{model}_url(id: #{record.id})"),
        params: { model.to_s => updated_attrs, format: :siren },
        xhr: true,
        headers: { 'Authorization' => @token }
    end
    it "updates and returns #{model} in siren format" do
      json = JSON.parse response.body
      # binding.pry
      expect_status 200
      # schema validation currently only for artist.Maybe I could use a generic format for all models.
      expect(json).to match_response_schema("siren/#{model}") if model == :artist
    end
  end
end

def destroy_test model, context
  context.describe 'DELETE #destroy' do
    before do
      record = create(model)
      delete instance_eval("v1_#{model}_url(id: #{record.id})"),
        params: { format: :siren },
        xhr: true,
        headers: { 'Authorization' => @token }
    end
    it "deletes #{model}" do
      expect_status 204
    end
  end
end
