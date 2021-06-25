import React, {Component} from 'react'
import RecipeForm from './RecipeForm'
import RecipeDetails from './RecipeDetails'

class RecipeContainer extends Component{
  render(){
    return(
      <div className="skeleton">
        <h1>RecipeContainer</h1>
        <RecipeDetails/>
        <RecipeForm/>
      </div>
    )
  }
}

export default RecipeContainer