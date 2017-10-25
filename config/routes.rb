Rails.application.routes.draw do

  #
  #
  # Devise
  devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

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
