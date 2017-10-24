Rails.application.routes.draw do

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
    devise_for :users
  end

end
