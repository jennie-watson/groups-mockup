import { combineReducers } from "redux";
import groups from "./groupReducer";
import moderators from "./moderatorReducer";
// import neighbourhoods from "./neighbourhoodReducer";
import apiÇallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
    groups,
    moderators,
    // neighbourhoods,
    apiÇallsInProgress
});

export default rootReducer;