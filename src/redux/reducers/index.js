import { combineReducers } from "redux";

import navbarReducer from "./navbarReducer";
import charactersReducer from "./charactersReducer";

export default combineReducers({
  navbarReducer,
  charactersReducer,
});
