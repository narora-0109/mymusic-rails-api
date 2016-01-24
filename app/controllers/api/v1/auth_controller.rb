class Api::V1::AuthController <  Api::V1::ApplicationController
  skip_before_filter :authenticate_request
  before_filter :ensure_params_exist

  def create
    user = User.find_by(email: auth_params[:email])
    #has_secure_password offers authenticate method to User
    if user && user.authenticate(auth_params[:password])
      @current_user =  user
      jwt_token= JsonWebToken.new payload: { id: @current_user.id, email: @current_user.email }
      render json: {token: jwt_token.token, user: jwt_token.payload, claims: jwt_token.claims }
    else
      render_unauthorized errors: { unauthenticated: ["Invalid credentials"] }
    end
  end

  private

  def auth_params
    params.require(:auth).permit :email, :password
  end

  def ensure_params_exist
    if auth_params[:email].blank? || auth_params[:password].blank?
      return render_unauthorized errors: { unauthenticated: ["Incomplete credentials"] }
    end
  end
end



