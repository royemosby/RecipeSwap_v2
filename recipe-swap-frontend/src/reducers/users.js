const blanko = {
  username: "Blanko",
  id: 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee',
  created_at: "2021-06-23 02:11:20.614061000 +0000",
  about: 'this is a user injected directly into users reducer'
}

/* EXPECTED ACTIONS
  ADD_USERS or IMPORT USERS
  ADD_USER
  UPDATE_USER
  DELETE_USER
*/

function users(state = [blanko], action){
  return state
}

export {users}