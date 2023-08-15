class SessionsController < ApplicationController
  layout "react"

  def new
  end

  def create
    user = User.find_by(email: session_params[:email].downcase)
    if user&.authenticate(params[:session][:password])
      log_in(user)
      render json: { message: 'Logged in successfully' }
    else
      render json: { message: 'Invalid email/password combination' }, status: 401
    end
  end

  def destroy
    log_out
    render json: {message: 'Logged out successfully'}
  end

  private
  def log_in(user)
    session[:user_id] = user.id
  end

  def log_out
    session.delete(:user_id)
    session.delete(:signed_img_url)
    @current_user = nil
  end

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
