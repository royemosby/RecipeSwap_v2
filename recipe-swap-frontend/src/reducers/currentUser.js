const initialState = {
  id: "",
  token: "",
  username: "",
  password: "",
  recipes: [],
  favorites: [],
  loginModalOpen: false,
  editModalOpen: false,
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
      return {
        ...state,
        requesting: true
      }
    case "AUTHENTICATE":
      if(action.response.message){
        return{
          ...state,
          password: "",
          requesting: false,
          loginError: action.response.message
        }
      } else {
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
    case "SEND_CREATE_USER":
      return {
        ...state,
        requesting: true
      }
    case "NEW_USER_ERROR":
      return{
        ...state,
        password: "",
        requesting: false,
        loginError: action.message
      }
    case "NEW_USER_SUCCESS":
      return{
        ...state,
        id: action.response.user.id,
        token: action.response.jwt,
        username: action.response.user.username,
        password: "", //let's not keep this
        loginModalOpen: false,
        requesting: false,
        loginError: ""
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