class UsersController < ApplicationController
	layout "react"

	def show
		if current_user
			user = current_user
			@user_props = { user: user, name: user.name, email: user.email, timezone: user.timezone }
		else
			flash[:danger] = "You must be logged in to view this page."
			redirect_to root_path
		end
	end

	def edit
		if current_user
			user = current_user
			@user_props = { user: user, name: user.name, email: user.email, timezone: user.timezone }
		else
			flash[:danger] = "You must be logged in to view this page."
			redirect_to root_path
		end
	end

	def update
		user = current_user
		if authenticate(user)
			params[:user][:new_password] ? update_password(user) : user.update(user_params)
		else
			flash[:danger] = "Incorrect password."
		end
		redirect_to "/settings"
	end

	private

	def user_params
		params.require(:user).permit(:name, :email, :timezone)
	end

	def authenticate(user)
		user&.authenticate(params[:user][:current_password])
	end

	def update_password(user)
		if (params[:user][:new_password] == params[:user][:new_password_confirmation])
			user.update(password: params[:user][:new_password])
		end
	end
end
