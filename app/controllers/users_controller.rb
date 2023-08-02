class UsersController < ApplicationController
	layout "react"

	def show
		if current_user
			user = current_user
			@user_props = { 
				user: user, 
				name: user.name, 
				email: user.email, 
				timezone: user.timezone, 
				image_path: user.image_path,
				background_path: user.background_path
			}
		else
			flash[:danger] = "You must be logged in to view this page."
			redirect_to root_path
		end
	end

	def edit
		if current_user
			user = current_user
			@user_props = { 
				user: user, 
				name: user.name, 
				email: user.email, 
				timezone: user.timezone, 
				image_path: user.image_path,
				background_path: user.background_path
			}
		else
			flash[:danger] = "You must be logged in to view this page."
			redirect_to root_path
		end
	end

	def update
		user = current_user
		if (!user_params[:background_path]) && authenticate(user)
			params[:user][:new_password] ? update_password(user) : user.update(user_params)
			render json: { user: user }
		elsif user_params[:background_path]
			user.update(user_params)
			redirect_to "/settings"
		else
			flash[:danger] = "Incorrect password."
		end
	end

	def upload_image
		user = current_user
		if params[:file]
			save_profile_pic(params[:file])
			user.update(image_path: "/uploads/#{user.id}/#{params[:file].original_filename}")
		end
		redirect_to settings_path
	end

	private

	def user_params
		params.require(:user).permit(:name, :email, :timezone, :background_path)
	end

	def authenticate(user)
		user&.authenticate(params[:current_password])
	end

	def update_password(user)
		if (params[:user][:new_password] == params[:user][:new_password_confirmation])
			user.update(password: params[:user][:new_password])
		end
	end

	def save_profile_pic(file)
		user_img_dir_path = Rails.root.join('public', 'uploads', current_user.id.to_s)
		Dir.mkdir(user_img_dir_path) unless Dir.exist?(user_img_dir_path)
	
		begin
			File.open(user_img_dir_path.join(file.original_filename), 'wb') do |f|
				f.write(file.read)
			end
		rescue IOError => e
			puts "IOError occurred: #{e.message}"
		end
	end
	
end
