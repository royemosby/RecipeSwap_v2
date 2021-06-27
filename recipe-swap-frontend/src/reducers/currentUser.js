
/* EXPECTED ACTIONS
  SEND_CREDENTIALS
  AUTHENTICATE
  LOGOUT
  CREATE_NEW_USER
  UPDATE_PROFILE
  OPEN_LOGIN_MODAL
  CLOSE_LOGIN_MODAL
*/

const initialState = {
  id: "",
  token: "",
  username: "",
  password: "",
  recipes: [],
  favorites: [],
  loginModalOpen: false,
  requesting: false,
  loginError: ""
}

function currentUser(state = initialState, action){
  switch (action.type) {
    case "OPEN_LOGIN_MODAL":
      return{...state, loginModalOpen: true}
    case "CLOSE_LOGIN_MODAL":
      return{...state, loginModalOpen: false}
    case "UPDATE_UN":
      return{...state, username: action.un}
    case "UPDATE_PW":
      return{...state, password: action.pw}
    case "SEND_CREDENTIALS":
      console.log("sending credentials...")
      return {
        ...state,
        requesting: true
      }
    case "AUTHENTICATE":
      if(action.response.message){
        return{
          ...state,
          password: "",
          loginError: action.response.message
        }
      } else {
        console.dir(action.response)
        return{
          ...state,
          id: action.response.user.id,
          token: action.response.jwt,
          username: action.response.user.username,
          password: "", //let's not keep this
          recipes: [...action.response.user.recipes],
          favorites: [...action.response.user.favorites],
          loginModalOpen: false,
          requesting: false,
          loginError: ""
        }
      }
    case "LOG_OUT":
      return{
        ...state,
        ...initialState
      }
      default:
      return state
  }
}

export {currentUser}