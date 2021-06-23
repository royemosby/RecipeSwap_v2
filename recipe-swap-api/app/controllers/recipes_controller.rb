class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  def show
    @recipe = Recipe.find_by(id: params[:id])
    render json: @recipe
  end

  # TODO: create recipe
  def create
    #if recipe_id provided, create a spinoff, else create new
  end

  def update
    if recipe_belongs_to_user?
      @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: {error: 'not authorized to modify this recipe'}, status: :unauthorized
    end
    
  end
  
  def destroy
    if recipe_belongs_to_user?
      @recipe.destroy
      render json: {success: 'recipe has been removed'}
    else
      render json: {error: 'not authorized to modify this recipe'}, status: :unauthorized
    end
  end

  def recipe_belongs_to_user?
    @recipe = Recipe.find_by(id: params[:id])
    @recipe && @recipe.user == current_user
  end

  def recipe_params
    params.require(:recipe).permit(:id, :name, :description, :ingredients, :instructions, :servings, :user_id, :original_id)
  end
end
