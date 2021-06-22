class AuthController < ApplicationController

  skip_before_action :authenticate, only: [:create]

  def create
    @user = User.find_by(username: login_params[:username])
    if @user && @user.athenticate(login_params[:password])
      #encode_token resides in application controller
      @token = encode_token({user_id: @user.id})
      render json: {user: UserSerializer.new(@user), jwt: token}
    else
      render json: {message: "Invalid username or password"}, status: :unauthorized
    end
  end

  def login_params
    params.require(:user).permit(:username, :password)
  end
end
