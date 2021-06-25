const recipe1 = {
  name: "Fried filler",
  id: "id_fried_filler",
  description: "this is a filler(#1) recipe injected into stor from reduceRecipes",
  ingredients: "dummy data, redux, react",
  instructions: "throw it against the wall and see if it sticks",
  servings: 42,
  user_id: "id_blanco",
  original_id: null
}

const recipe2 = {
  name: "Potted placeholder",
  id: "id_potted_placeholder",
  description: "this is a filler(#2) recipe injected into store from reduceRecipes",
  ingredients: "dummy data, redux, react",
  instructions: "stick it in a pot. Water.It may grow.",
  servings: 3,
  user_id: "id_stanko",
  original_id: null
}

const recipe3 = {
  name: "Braised boilerplate",
  id: "id_braised_boilerplate",
  description: "this is a filler(#3) recipe injected into store from reduceRecipes",
  ingredients: "dummy data, redux, react",
  instructions: "stick it in a pot. Water.It may grow.",
  servings: 1,
  user_id: "id_stanko",
  original_id: null
}

/* EXPECTED ACTIONS
  ADD_RECIPES or IMPORT_RECIPES
  ADD_RECIPE
  UPDATE_RECIPE
  DELETE_RECIPE
*/

function recipes(state = [recipe1,recipe2, recipe3], action){
  return state
}

export {recipes}