import {url} from "./adapterConfig"

function getUsers(){
  fetch(`${url.users}`)
    .then(resp => resp.json)
    .then(json => {
      console.dir(json)
    })
}

function createUser(credentials){
  const config = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(credentials)
  }
  fetch(`${url.users}/create`, config)
    .then(resp => resp.json())
    .then(json => {
      console.dir(json)
    })
}

//takes username, password
//returns obj containing userObj + token
function authenticateUser(credentials){
  const config = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(credentials)
  }
  fetch(`${url.login}`, config)
    .then(resp => resp.json())
    .then(json => {
      console.dir(json)
    })
}

function updateUser(user, changes){
  const config = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    body: JSON.stringify(
      Object.assign({},user, changes)
    )
  }
  fetch(`${url.users}/${user.id}`, config)
    .then(resp => resp.json())
    .then(json => {
      console.dir(json)
    })
}

function destroyUser(user){
  const config = {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${user.token}`
    },
    body: JSON.stringify(
      Object.assign({},user)
    )
  }
  fetch(`${url.users}/${user.id}`, config)
    .then(resp => resp.json())
    .then(json => {
      console.dir(json)
    })
}

export {getUsers, createUser, authenticateUser, updateUser, destroyUser}
