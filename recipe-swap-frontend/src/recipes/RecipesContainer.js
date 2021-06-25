import React, {Component} from 'react'
import RecipeCard from './RecipeCard'

class RecipesContainer extends Component{
  render(){
    return(
      <div className="skeleton">
        <h2>RecipesContainer</h2>
        <RecipeCard/>
      </div>
    )
  }
}

export default RecipesContainer