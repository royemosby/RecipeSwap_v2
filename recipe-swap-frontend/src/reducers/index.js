import { combineReducers } from "redux";
import { favorites } from "./favorites";
import { recipes } from "./recipes";
import { users } from "./users";
import { currentUser } from "./currentUser";

export default combineReducers({
  currentUser,
  favorites,
  recipes,
  users
})