import React, {Component} from 'react'
import RecipeForm from './components/RecipeForm'

class NewRecipe extends Component{
  render(){
    return(
      <div className="skeleton">
        <h1>New Recipe</h1>
        <RecipeForm/>
      </div>
    )
  }
}

export default NewRecipe