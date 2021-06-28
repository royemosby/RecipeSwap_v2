import {url} from "./adapterConfig"
import {store} from '../index'
import {batch} from 'react-redux'

function getUsers(){
  fetch(`${url.users}`)
    .then(resp => resp.json)
    .then(json => {
      console.dir(json)
    })
} 

const createUser = () =>{
  const currentUser = store.getState().currentUser
  const config = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({username: currentUser.username, password: currentUser.password})
  }
  return (dispatch) => {
    dispatch({type: "SEND_CREATE_USER"});

    fetch(`${url.users}`, config)
      .then(resp => resp.json())
      .then(response => {
        if(response.message){
          let message = "";
          if(typeof(response.message) === "string"){
            message = response.message;
          } else {
            for(const field in response.message){
              message = message.concat(`${field.toUpperCase()}: ${response.message[field].join(" | ")}. `)
            }
          }
          dispatch({type:"NEW_USER_ERROR", message})
        } else {
          batch(()=>{
            dispatch({type:"NEW_USER_SUCCESS", response})
            dispatch({type: "ADD_USER", response})
          })
        }
      })
      
  }
}

const authenticateUser = () =>{
  const currentUser = store.getState().currentUser
  const config = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({username: currentUser.username, password: currentUser.password})
  }
  return (dispatch) => {
    dispatch({type: "SEND_CREDENTIALS"});
    fetch(`${url.login}`, config)
      .then(resp => resp.json())
      .then(response => dispatch({type:"AUTHENTICATE", response}))
  }
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
