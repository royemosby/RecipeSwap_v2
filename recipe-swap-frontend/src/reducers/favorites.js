const blanko = {
  id: "fav1_id",
  collector_id: "id_blanco",
  favorite_id: "id_potted_placeholder",
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