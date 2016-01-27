# == Schema Information
#
# Table name: genres
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :genre do
    title Faker::Hipster.word
  end

end
