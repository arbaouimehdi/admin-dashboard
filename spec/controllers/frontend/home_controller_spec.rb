require 'rails_helper'

RSpec.describe Frontend::HomeController, type: :controller do


  #
  #
  # Index
  describe '#index' do

    it 'responds successfully' do
      get :index
      expect(response).to be_success
    end

    it 'return a 200 response' do
      get :index
      expect(response).to have_http_status "200"
    end

  end

end