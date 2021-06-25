import React, {Component} from 'react'
import RecipeContainer from '../recipes/RecipesContainer'
import AuthModal from './AuthModal'

class mainContainer extends Component{
  render(){
    return(
      <>
        <h1>MainContainer</h1>
        <AuthModal/>
        <RecipeContainer/>
        
      </>
    )
  }
}

export default mainContainer