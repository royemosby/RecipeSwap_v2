import React from 'react'
import {Link} from 'react-router-dom'


const openRecipe = (name) => {
  console.log(`TODO: Open recipe ${name}`)
}
const recipeCard = ({recipe}) => {
  return (
    <div className="prez"
    onClick={() => openRecipe(recipe.name)}
    >
      <Link to={`/recipes/${recipe.id}`}>woof</Link>

      <div>{recipe.name} | Serves: {recipe.serves}</div>

      <div>{recipe.description}</div>
    </div>
  )
}

export default recipeCard
