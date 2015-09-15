Rails.application.routes.draw do
  root 'blog#index'

  get '*ember' => 'blog#index'
end
