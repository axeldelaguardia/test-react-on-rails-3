class SessionsController < ApplicationController
  layout "react"

  def new
  end

  def create
    user = User.find_by(email: session_params[:email].downcase)
    if user&.authenticate(params[:session][:password])
      log_in(user)
      redirect_to "/dashboard"
    else
      flash.now[:danger] = "Invalid email/password combination"
      redirect_to root_path
    end
  end

  def destroy
    log_out
    redirect_to root_path
  end

  private
  def log_in(user)
    session[:user_id] = user.id
  end

  def log_out
    session.delete(:user_id)
    @current_user = nil
  end

  def session_params
    params.require(:session).permit(:email, :password)
  end
end
