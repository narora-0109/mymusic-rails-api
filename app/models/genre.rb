class Genre < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10
  def self.policy_class
    "ApplicationPolicy"
  end
  has_many :artists
end
