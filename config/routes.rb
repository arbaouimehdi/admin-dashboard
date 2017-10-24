Rails.application.routes.draw do

  # Devise
  devise_for :users

  #
  #
  #
  # Backend
  namespace :backend do
    root 'dashboard#index'
  end

  #
  #
  #
  # Frontend
  scope module: 'frontend' do
    root 'home#index'
  end

end
