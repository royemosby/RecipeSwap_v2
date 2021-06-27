import React, {Component} from 'react'
import RecipeCard from './RecipeCard'
import {connect} from 'react-redux'


class RecipesContainer extends Component{
  renderRecipeCards = (recipes) =>{
    return recipes.map((r, idx)=>{
      return <RecipeCard key={idx} recipe={r}/>
    })
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

const mapStateToProps = (state) => {
  return({
    recipes: state.recipes
  })
}

//TODO: move logic up to MainContainer and UserContainer so this
// can be loaded onto user profile
export default connect(mapStateToProps)(RecipesContainer)