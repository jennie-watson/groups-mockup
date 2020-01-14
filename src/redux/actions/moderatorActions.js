import * as types from "./actionTypes";
import * as moderatorApi from "../../api/moderatorApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadModeratorsSuccess(moderators) {
  return { type: types.LOAD_MODERATORS_SUCCESS, moderators };
}

export function loadModerators() {
  return function(dispatch) {
    dispatch(beginApiCall());
    return moderatorApi
      .getModerators()
      .then(moderators => {
        dispatch(loadModeratorsSuccess(moderators));
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
