# == Schema Information
#
# Table name: genres
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Genre < ApplicationRecord
  KAMINARI_RECORDS_PER_PAGE = 10
# include Searchable
#   index_name "#{Rails.application.class.parent_name.underscore}_#{Rails.env}"
#   document_type self.name.downcase

  def self.policy_class
    'ApplicationPolicy'
  end
  has_many :artists

  validates :title, presence: :true
end
