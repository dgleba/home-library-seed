Rails.application.routes.draw do
  scope '/api' do
    mount Knock::Engine => '/login'
    resources :books
  end
end
