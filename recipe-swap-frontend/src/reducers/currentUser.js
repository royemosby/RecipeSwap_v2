
/* EXPECTED ACTIONS
  LOGIN
  LOGOUT
  CREATE_NEW_USER
  UPDATE_PROFILE
*/

function currentUser(state = {token:"", username:"", recipes: [], favorites: []}, action){
  return state
}

export {currentUser}