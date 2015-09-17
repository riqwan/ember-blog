Rails.application.routes.draw do
  root 'blog#index'
  resources :posts do
    resources :comments
  end

  get '*ember' => 'blog#index'
end
