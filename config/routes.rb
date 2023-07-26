Rails.application.routes.draw do
  # get 'hello_world', to: 'hello_world#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
	root "welcome#index"

	get "/login", to: "sessions#new"
	post "/login", to: "sessions#create"
	delete "/logout", to: "sessions#destroy"

	get "/dashboard", to: "users#show"
	# get "/updateaccount", to: "users#edit"
	patch "/users", to: "users#update"
	get "/settings", to: "users#edit"
end
