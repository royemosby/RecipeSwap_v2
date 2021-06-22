class RecipesController < ApplicationController

  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  def show
    @recipe = Recipe.find_by(id: params[:id])
    render json: @recipe
  end

  def create

  end

  def update

  end

  def destroy

  end

  def recipe_params
    params.require(:recipe).permit(:name, :description, :ingredients, :instructions, :servings, :user_id, :original_id)
  end
end
