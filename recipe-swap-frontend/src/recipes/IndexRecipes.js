import React, {Component} from 'react'
import RecipeCard from './RecipeCard'


class IndexRecipes extends Component{
  renderRecipeCards = (recipes) =>{
    if (recipes.length > 0){
      return recipes.map((r, idx)=>{
        return <RecipeCard key={idx} recipe={r}/>
      })
    } else {
      return <p>No recipes found</p>
    }
  }

  render(){
    return(
      <div className="skeleton">
        <h2>RecipesContainer</h2>
        {this.renderRecipeCards(this.props.recipes)}
      </div>
    )
  }
}
export default IndexRecipes