class UsersController < ApplicationController
	layout "react"
	before_action :require_login, only: [:show, :edit, :update, :upload_image]

	def show
		set_user_props(current_user)
	end

	def edit
		set_user_props(current_user)
	end

	def update
		user = current_user
		# if (!user_params[:background_path]) && authenticate(user)
		# 	require 'pry'; binding.pry
		# 	params[:new_password] ? update_password(user) : user.update(user_params)
		# elsif user_params[:background_path]
		# 	user.update(user_params)
		# else
		# 	flash[:danger] = "Incorrect password."
		# end
		# render json: { user: user }
		if user_params[:background_path]
			user.update(user_params)
		elsif authenticate(user)
			params[:new_password] ? update_password(user) : user.update(user_params)
		else
			flash[:danger] = "Incorrect password."
		end
		render json: { user: user }
	end

	def upload_image
		user = current_user
		if params[:file]
			S3Service.new.upload_image(user.id, params[:file])
		end
		redirect_to settings_path
	end

	private

	def user_params
		params.require(:user).permit(
			:name, 
			:email, 
			:timezone, 
			:background_path, 
			:photo,
			:new_password,
			:new_password_confirmation
		)
	end

	def authenticate(user)
		user&.authenticate(params[:current_password])
	end

	def update_password(user)
		if (params[:user][:new_password] == params[:user][:new_password_confirmation])
			user.update(password: params[:user][:new_password])
		end
	end

	def require_login
		unless current_user
			flash[:danger] = "You must be logged in to view this page."
			redirect_to root_path
		end
	end

	def set_user_props(user)
		profile_picture = S3Service.new.get_image(user.id)
		@user_props = {
			user: user,
			name: user.name,
			email: user.email,
			timezone: user.timezone,
			image_path: profile_picture,
			background_path: user.background_path,
			wleds: user.wleds.pluck(:ip)
		}
	end
end
