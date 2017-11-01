FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "tester#{n}@example.com" }
    password 'dottle-nouveau-pavilion-tights-furze'
  end
end