import { combineReducers } from "redux";
import { favorites } from "./favorites";
import { recipes } from "./recipes";
import { users } from "./users";

export default combineReducers({
  favorites,
  recipes,
  users
})