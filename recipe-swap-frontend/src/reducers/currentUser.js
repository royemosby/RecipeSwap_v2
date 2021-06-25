
/* EXPECTED ACTIONS
  LOGIN
  LOGOUT
  CREATE_NEW_USER
  UPDATE_PROFILE
  OPEN_LOGIN_MODAL
  CLOSE_LOGIN_MODAL
*/

const initialState = {
  token: "",
  username: "",
  recipes: [],
  favorites: [],
  loginModalOpen: false
}

function currentUser(state = initialState, action){
  switch (action.type) {
    case "OPEN_LOGIN_MODAL":
      return{...state, loginModalOpen: true}
    case "CLOSE_LOGIN_MODAL":
      return{...state, loginModalOpen: false}
      default:
      return state
  }
}

export {currentUser}