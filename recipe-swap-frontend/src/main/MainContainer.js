import React, {Component} from 'react'
import RecipesContainer from '../recipes/RecipesContainer'
import AuthModal from './AuthModal'

class mainContainer extends Component{
  render(){
    return(
      <div className="skeleton">
        <h1>MainContainer</h1>
        <AuthModal/>
        <RecipesContainer/>
        
      </div>
    )
  }
}

export default mainContainer