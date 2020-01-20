import { combineReducers } from "redux";
import groups from "./groupReducer";
import moderators from "./moderatorReducer";
import apiÇallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  groups,
  moderators,
  apiÇallsInProgress
});

export default rootReducer;
