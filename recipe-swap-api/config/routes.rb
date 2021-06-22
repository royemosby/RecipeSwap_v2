Rails.application.routes.draw do

  #TODO: clean up routes
  resources :collector_favorites # only index, create, destroy
  resources :recipes # only index show create update destroy
  resources :users # only index show create update destroy
  
  post '/login', to: 'auth#create'

end
