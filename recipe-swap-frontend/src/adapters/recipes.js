import {url} from './adapterConfig'

function getRecipes() {
  fetch(`${url.recipes}`)
    .then(resp => resp.json())
    .then(json => {
      console.dir(json)
    })
}

function postRecipe(user, recipe){
  config ={
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    body: JSON.stringify(recipe)
  }
  fetch(url.recipes, config)
    .then(resp => resp.json())
    .then(json => {
      console.dir(json)
    })
}

function updateRecipe(user, recipe){
  const config = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    body: JSON.stringify(recipeOne)
  }
  console.log(JSON.stringify(recipeOne))
  fetch(`${url.recipes}/${recipeOne.id}`, config)
    .then(resp => resp.json())
    .then(json => {
      debugResponse = json
      console.dir(json)
    })
}

function destroyRecipe(user, recipe){
  const config = {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    body: JSON.stringify(recipeOne)
  }
  console.log(JSON.stringify(recipeOne))
  fetch(`${url.recipes}/${recipeOne.id}`, config)
    .then(resp => resp.json())
    .then(json => {
      debugResponse = json
      console.dir(json)
    })
}

export {getRecipes, postRecipe, updateRecipe, destroyRecipe}