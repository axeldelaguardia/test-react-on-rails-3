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
    if user_params[:background_path]
      user.update(user_params)
      render json: { user: user }
    elsif user_params[:timezone]
      user.update(user_params)
      render json: { message: "timezone updated"}
    elsif authenticate(user)
      params[:new_password] ? update_password(user) : user.update(user_params)
      render json: { user: user }
    else
      render json: { message: 'Unauthorized' }, status: 401
    end
  end

  def upload_image
    user = current_user
    if params[:file]
      S3.object("#{params[:file].original_filename}-#{user.id}").upload_file(params[:file])
      user.update(image_name: params[:file].original_filename)
    end
    render json: { message: "success"}
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
    @user_props = UserBlueprint.render(user, image_name: session)
  end
end
