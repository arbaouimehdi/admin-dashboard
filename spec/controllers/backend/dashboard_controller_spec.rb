require 'rails_helper'

RSpec.describe Backend::DashboardController, type: :controller do

  #
  #
  # index
  describe '#index' do

    # Guest
    context 'as a guest user' do

      it 'returns a 302 response' do
        get :index
        expect(response).to have_http_status '302'
      end

      it 'redirects the user to the sign-in page' do
        get :index
        expect(response).to redirect_to '/users/sign_in'
      end

    end

    context 'as an authenticated user' do

      before do
        @user = FactoryBot.create(:user)
      end

      it 'responds successfully' do
        sign_in @user
        get :index
        aggregate_failures do
          expect(response).to be_success
          expect(response).to have_http_status '200'
        end
      end



    end

  end

end