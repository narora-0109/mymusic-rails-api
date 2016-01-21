class User < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10
  # Set default ApplicationPolicy for all models
  def self.policy_class
    "ApplicationPolicy"
  end
  has_secure_password
  enum role: [ :user, :admin, :superadmin ]

  has_many :playlists


end
