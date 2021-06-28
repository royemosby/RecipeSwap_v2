import React, {Component} from 'react'
import RecipesContainer from '../recipes/RecipesContainer'
import {connect} from 'react-redux'

class mainContainer extends Component{

  render(){
    return(
      <div className={["skeleton", "main-overflow"].join(" ")}>
        <h1>MainContainer</h1>
        
        <RecipesContainer recipes={this.props.recipes} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    recipes: state.recipes 
  })
}

export default connect(mapStateToProps)(mainContainer)