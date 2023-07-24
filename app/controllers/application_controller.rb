class ApplicationController < ActionController::Base
	helper_method :current_user

	def current_user
		@current_user ||= User.find_by(id: session[:user_id])
	end

	def authorize
		redirect_to login_path unless current_user
	end

	def error_message(errors)
		errors.full_message.join(", ")
	end
end
