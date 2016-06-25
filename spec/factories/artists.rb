# == Schema Information
#
# Table name: artists
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  country    :string(255)
#  genre_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :artist do
    genre
    title { FFaker::Name.name }
    country { FFaker::Address.country }
  end
end
