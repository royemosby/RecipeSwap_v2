import React, {Component} from 'react'
import RecipeCard from './RecipeCard'
import RecipeForm from './RecipeForm'

class RecipesContainer extends Component{
  render(){
    return(
      <>
        <h2>RecipesContainer</h2>
        <RecipeCard/>
        <RecipeForm/>
      </>
    )
  }
}

export default RecipesContainer