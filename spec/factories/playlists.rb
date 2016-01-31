# == Schema Information
#
# Table name: playlists
#
#  id         :integer          not null, primary key
#  title      :string(255)
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :playlist do
    user
    title {FFaker::HipsterIpsum.word.titleize}
  end

end
