const blanko = {
  name: "Fried filler",
  id: "ffffffff-gggg-hhhh-iiii-jjjjjjjjjjjj",
  description: "this is a filler recipe injected into stor from reduceRecipes",
  ingredients: "dummy data, redux, react",
  instructions: "throw it against the wall and see if it sticks",
  servings: 42,
  created_at: "2021-06-23 20:44:22.833657000 +0000",
  user_id: "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee",
  original_id: null
}

/* EXPECTED ACTIONS
  ADD_RECIPES or IMPORT_RECIPES
  ADD_RECIPE
  UPDATE_RECIPE
  DELETE_RECIPE
*/

function recipes(state = [blanko], action){
  return state
}

export {recipes}