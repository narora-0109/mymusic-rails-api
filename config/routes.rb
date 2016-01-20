Rails.application.routes.draw do

  concern :paginatable do
    get '(/id/:id)(/page/:page)(/per/:per)', :action => :index, :on => :collection, :as => 'paged'
  end


  root 'application#root'
  #mount Knock::Engine => "/knock"

  resources :auth, only: :create

  resources :genres, concerns: :paginatable
  resources :playlists, concerns: :paginatable
  resources :tracks , concerns: :paginatable
  resources :users, concerns: :paginatable
  resources :albums, concerns: :paginatable
  resources :artists, concerns: :paginatable
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Serve websocket cable requests in-process
  # mount ActionCable.server => '/cable'
end
