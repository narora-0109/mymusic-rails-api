class Api::V1::UsersController <  Api::V1::ApplicationController
  PERMITTED_PARAMETERS= %W(name email password password_confirmation).map(&:to_sym)

  has_scope :role
  has_scope :by_ids, type: :array



end
