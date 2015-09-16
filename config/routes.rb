Rails.application.routes.draw do
  root 'blog#index'
  resources :posts

  get '*ember' => 'blog#index'
end
