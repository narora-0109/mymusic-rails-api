module ApiHelper
  #include Rack::Test::Methods
  def app
    Rails.application
  end

  def jwt_token(user=nil)
    user = user || create(:admin)
    #binding.pry
    jwt= JsonWebToken.new payload: { id: user.id, email: user.email }
    #token = JsonWebToken.encode('user' => user.email)
    #header "Authorization", "Bearer #{jwt.token}"
  end
end

RSpec.configure do |config|
  config.include ApiHelper, type: :request #apply to all spec for apis folder
  config.include Rails.application.routes.url_helpers, type: :request
end





# def create
#   user = User.find_by(email: auth_params[:email])
#   #has_secure_password offers authenticate method to User
#   if user && user.authenticate(auth_params[:password])
#     @current_user =  user
#     jwt_token= JsonWebToken.new payload: { id: @current_user.id, email: @current_user.email }
#     render json: {token: jwt_token.token, user: jwt_token.payload, claims: jwt_token.claims }
#   else
#     render_unauthorized errors: { unauthenticated: ["Invalid credentials"] }
#   end
# end