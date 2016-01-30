# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  role            :integer          default(NULL)
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10
  # Set default ApplicationPolicy for all models
  def self.policy_class
    "ApplicationPolicy"
  end
  has_secure_password
  enum role: [ :user, :admin, :superadmin ]

  scope :role, -> role { where(:role => role) }
  #scope :by_ids, -> ids { where(:id => ids) }


  has_many :playlists


end
