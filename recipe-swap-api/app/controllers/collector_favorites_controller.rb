class CollectorFavoritesController < ApplicationController

  def index
    user_id = current_user.id
    @collector_favorites = CollectorFavorite.where("collector_id = ?", user_id)
    if @collector_favorites &&@collector_favorites.count > 0
      render json: @collector_favorites
    else
      render json: {message: "This user has no favorites"}
    end
  end

  #TODO: enforce uniqueness
  def create
    @recipe = Recipe.find_by(id: params[:recipe_id])
    @user = User.find_by(id: params[:user_id])
    
    #byebug
    if @user && @recipe && @user == current_user
      @favorite = CollectorFavorite.create(favorite_id: @recipe.id, collector_id: @user.id)
      render json: @favorite
    else
      render json: {message: "Something went wrong"}
    end
  end

  def destroy
    @favorite = CollectorFavorite.find_by(id: params[:id])
    if @favorite && @favorite.collector == current_user
      @favorite.destroy
      render json: {message: 'favorite has been removed'}, status: :no_content
    else
      render json: {message: "Something went wrong"}
    end
  end

end
