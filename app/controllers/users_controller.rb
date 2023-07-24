class UsersController < ApplicationController
	layout "react"

	def show
		user = current_user
		@user_props = { name: user.name, email: user.email }
	end
end
