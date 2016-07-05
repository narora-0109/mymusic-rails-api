Rails.application.routes.draw do
  concern :filtered do
    get '(/id/:id)(/page/:page)(/per/:per)', action: :index, on: :collection, as: 'filtered'
  end


  concern :search do
    get '(/q/:q)(/country/:country)(/genre/:genre)(/per/:per)(/page/:page)', action: :search, on: :collection, as: 'search'
  end
  constraints subdomain: 'api' do
    scope module: 'api' do
      namespace :v1 do
        root 'application#root'
        resources :auth, only: :create
        resources :genres, concerns: :filtered
        resources :playlists, concerns: :filtered
        resources :tracks, concerns: :filtered
        resources :users, concerns: :filtered
        resources :albums, concerns: [:filtered, :search]
        resources :artists, concerns: [:filtered, :search]
        resources 'search', only: :search
      end
    end
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    # Serve websocket cable requests in-process
    # mount ActionCable.server => '/cable'
  end
end
