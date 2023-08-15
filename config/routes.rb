Rails.application.routes.draw do
	root "welcome#index"

	post "/login", to: "sessions#create"
	delete "/logout", to: "sessions#destroy"

	get "/dashboard", to: "users#show"
	patch "/users", to: "users#update"
	get "/settings", to: "users#edit"
	post "/upload_image", to: "users#upload_image"
end
