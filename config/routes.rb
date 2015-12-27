Rails.application.routes.draw do
  resources :genres
  resources :playlists
  resources :tracks
  resources :users
  resources :albums
  resources :artists
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
