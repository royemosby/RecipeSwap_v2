const user1 = {
  username: "Blanko",
  id: 'id_blanco',
  about: 'this is a user(1) injected directly into users reducer'
}

const user2 = {
  username: "Stanko",
  id: 'id_stanko',
  about: 'this is a user(2) injected directly into users reducer'
}

/* EXPECTED ACTIONS
  ADD_USERS or IMPORT USERS
  ADD_USER
  UPDATE_USER
  DELETE_USER
*/

function users(state = [user1, user2], action){
  return state
}

export {users}