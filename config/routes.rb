Rails.application.routes.draw do
  root 'blog#index'
  resources :posts
  resources :comments

  get '*ember' => 'blog#index'
end
