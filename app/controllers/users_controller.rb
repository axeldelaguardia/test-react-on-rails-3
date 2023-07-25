class UsersController < ApplicationController
	layout "react"

	def show
		if current_user
			user = current_user
			@user_props = { name: user.name, email: user.email, timezone: user.timezone }
		else
			flash[:danger] = "You must be logged in to view this page."
			redirect_to root_path
		end
	end

	def update
		# Add user authentication before updating here.
		user = current_user
		user.update(user_params)
		redirect_to "/dashboard"
	end

	private

	def user_params
		params.require(:user).permit(:name, :email, :timezone)
	end
end
