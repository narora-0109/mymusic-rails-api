# == Schema Information
#
# Table name: tracks
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  time       :string(255)
#  album_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :track do
    album
    title { FFaker::HipsterIpsum.phrase.titleize }
    time { FFaker::PhoneNumber.area_code }
  end
end
