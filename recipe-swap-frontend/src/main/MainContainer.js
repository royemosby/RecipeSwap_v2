import React, {Component} from 'react'
import RecipesContainer from '../recipes/RecipesContainer'

class mainContainer extends Component{

  render(){
    return(
      <div className={["skeleton", "main-overflow"].join(" ")}>
        <h1>MainContainer</h1>
        
        <RecipesContainer/>
      </div>
    )
  }
}



export default mainContainer