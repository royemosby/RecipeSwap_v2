import React from 'react'

const ShowRecipe = (props) => {
  return (
    <div className="prez">
      <h1>Show Recipe (ID for now): </h1>
      <h2> {props.match.params.recipeId}</h2>
    </div>
  )
}

export default ShowRecipe
