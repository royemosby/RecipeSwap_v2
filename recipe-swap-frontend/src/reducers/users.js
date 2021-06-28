const user1 = {
  username: "Blanko",
  id: 'id_blanco',
  recipes: [],
  about: 'this is a user(1) injected directly into users reducer'
}

const user2 = {
  username: "Stanko",
  id: 'id_stanko',
  recipes: [],
  about: 'this is a user(2) injected directly into users reducer'
}

/* EXPECTED ACTIONS
  ADD_USERS or IMPORT USERS
  ADD_USER
  UPDATE_USER
  DELETE_USER
*/

function users(state = [user1, user2], action){
  switch (action.type){
    case "ADD_USER":
      return(
        state.concat(
          {about: action.response.user.about,
          username: action.response.user.username,
          id: action.response.user.id,
          profile_image: action.response.user.profile_image}
        )
      )
    default:
      return state
  }

}

export {users}