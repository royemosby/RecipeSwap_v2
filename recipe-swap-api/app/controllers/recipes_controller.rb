class RecipesController < ApplicationController

  skip_before_action :authenticate, only: [:index, :show]

  def index
    @recipes = Recipe.all
    render json: @recipes
  end

  def show
    @recipe = Recipe.find_by(id: params[:id])
    render json: @recipe
  end

  # creates spinnoff when has params[:id]
  def create
    user = current_user
    if params[:id]
      @recipe = Recipe.new(name: params[:name],
        description: params[:description],
        ingredients: params[:indredients],
        instructions: params[:instructions],
        servings: params[:servings],
        original_id: params[:id])
    else
      @recipe = Recipe.new(recipe_params)
    end
      user.recipes << @recipe
    if user.save
      render json: @recipe, status: :created
    else
      render json: {message: "something went wrong"}
    end
  end

  def update
    if recipe_belongs_to_user?
      @recipe.update(recipe_params)
      render json: @recipe
    else
      render json: {message: 'not authorized to modify this recipe'}, status: :unauthorized
    end
    
  end
  
  def destroy
    if recipe_belongs_to_user?
      @recipe.destroy
      render json: {success: 'recipe has been removed'}
    else
      render json: {message: 'not authorized to modify this recipe'}, status: :unauthorized
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
