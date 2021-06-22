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
    #TODO: update, destroy
  def update

  end

  def destroy

  end

  def create_params
    params.require(:user).permit(:username, :password)
  end

  def job_params
    params.require(:user).permit(:id, :username, :password, :about, :profile_image)
  end
end
