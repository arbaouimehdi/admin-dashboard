require 'rails_helper'

RSpec.describe Backend::DashboardController, type: :controller do

  describe '#index' do

    # Guest
    context 'as a guest' do

      it 'retruns a 302 response' do
        get :index
        expect(response).to have_http_status '302'
      end

      it 'redirect to the sign-in page' do
        get :index
        expect(response).to redirect_to '/users/sign_in'
      end

    end

  end

end