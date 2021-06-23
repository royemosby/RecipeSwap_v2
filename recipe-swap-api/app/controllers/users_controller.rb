class UsersController < ApplicationController

  # TODO: add index, show to skip_before_action after auth testing
  skip_before_action :authenticate, only: [:create]

  def index
    @users = User.all
    render json: @users
  end

  def show
    @user = User.find_by(id: params[:id])
    render json: @user
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      @token = encode_token(user_id: @user.id)
      render json: {user: UserSerializer.new(@user), jwt: @token}, status: :created
    else
      render json: {error: 'failed to create user'}, status: :not_acceptable
    end
    
  end
    
  def update
    if is_own_user?
      @user.update(user_params)
      render json: @user
    else
      render json: {error: 'not authorized to modify this user'}, status: :unauthorized
    end
  end

  def destroy
    if is_own_user?
      @user.destroy
      render json: {success: 'user has been removed'}
    else
      render json: {error: 'not authorized to modify this user'}, status: :unauthorized
    end
  end

  def is_own_user?
    @user = User.find_by(id: params[:id])
    @user && @user == current_user
  end

  def create_params
    params.require(:user).permit(:username, :password)
  end

  def user_params
    params.require(:user).permit(:id, :username, :password, :about, :profile_image)
  end
end
