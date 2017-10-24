Rails.application.routes.draw do

  #
  #
  #
  # Backend - Admin
  namespace :admin do

  end

  #
  #
  #
  # Frontend
  root to: 'home#index'
  devise_for :users

end
