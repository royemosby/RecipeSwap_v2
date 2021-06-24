const blanko = {
  id: "kkkkkkkk=llll-mmmm-nnnn-oooooooooooo",
  collector_id: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  favorite_id: "ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj",
  created_at: "2021-06-23 02:11:21.277415000 +0000"
}

/* EXPECTED ACTIONS
  ADD_FAVORITES or IMPORT_FAVORITES
  ADD_FAVORITE
  DELETE_FAVORITE
*/

function favorites(state = [blanko], action){
  return state
}

export {favorites}