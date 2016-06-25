# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  name            :string(255)
#  email           :string(255)
#  password_digest :string(255)
#  role            :integer          default("user")
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do
  factory :user do
    name { FFaker::Internet.user_name }
    email { FFaker::Internet.email }
    password { FFaker::Internet.password }
    role { 0 }

    trait :simple_user do
      name 'Joe'
      role 0
    end

    trait :admin do
      name 'Superman'
      role 1
    end

    trait :superadmin do
      name 'God'
      role 2
    end

    factory :simple_user, traits: [:simple_user]
    factory :admin, traits: [:admin]
    factory :superadmin, traits: [:superadmin]
  end
end
