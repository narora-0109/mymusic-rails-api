require 'jwt'

class JsonWebToken
  attr_reader :token
  attr_reader :payload
  TOKEN_SIGNATURE_ALGORITHM = 'HS256'.freeze
  EXPIRES_IN = 24.hours.from_now.to_i

  def initialize payload: {}, token: nil
    if token.present?
      @payload, _ = decode(token)
      @token = token
    else
      @payload = payload
      @token = encode(payload)
    end
  end

  def encode(payload, expiration = EXPIRES_IN)
    payload = payload.dup
    claims['exp'] = expiration
    JWT.encode(
      claims.merge(payload),
      json_web_token_secret,
      TOKEN_SIGNATURE_ALGORITHM
    )
  end

  def decode(token)
    JWT.decode(token, json_web_token_secret, true, options)
  end

  def current_user
    @current_user ||= User.find @payload['id']
  end

  def claims
    {
      exp: EXPIRES_IN,
      aud: 'My Music Users'
    }
  end

  private

  def json_web_token_secret
    Rails.application.secrets.json_web_token_secret
  end

  def options
    {
      algorithm: TOKEN_SIGNATURE_ALGORITHM,
      aud: 'My Music Users',
      verify_aud: false
    }
  end
end
