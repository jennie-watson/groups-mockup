import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function moderatorReducer(state = initialState.moderators, action) {
    switch(action.type) {
        case types.LOAD_MODERATORS_SUCCESS:
            return action.moderators;
        default:
            return state;
    }
}