import {url} from './adapterConfig'

const getFavorites = (user) => {
  const config = {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  }
  fetch(url.favorites, config)
    .then(resp => resp.json())
    .then(json => {
      console.dir(json)
    })
}

function postFavorite(user, recipe){
  const config = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    body: JSON.stringify(recipe)
  }
  fetch(`${url.favorites}`, config)
    .then(resp => resp.json())
    .then(json => {
      console.dir(json)
    })
}

function destroyFavorite(user, recipe){
  const config = {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${user.token}`
    }
  }
  fetch(`${url.favorites}/${recipe.id}`, config)
    .then(resp => resp.json())
    .then(json => {
      console.dir(json)
    })
}

export {getFavorites, postFavorite, destroyFavorite}