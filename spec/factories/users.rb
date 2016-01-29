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

FactoryGirl.define do
  factory :user do
    name {FFaker::Internet.user_name }
    email {FFaker::Internet.email}
    password {FFaker::Internet.password}
    role 0 #user
  end

end
