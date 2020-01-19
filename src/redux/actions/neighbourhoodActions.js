// import * as types from "./actionTypes";
// import * as neighbourhoodApi from "../../api/neighbourhoodApi";
// import { beginApiCall, apiCallError } from "./apiStatusActions";

// export function loadNeighbourhoodsSuccess(neighbourhoods) {
//   return { type: types.LOAD_NEIGHBOURHOODS_SUCCESS, neighbourhoods };
// }

// export function loadNeighbourhoods() {
//   return function(dispatch) {
//     dispatch(beginApiCall());
//     return neighbourhoodApi
//       .getNeighbourhoods()
//       .then(neighbourhoods => {
//         dispatch(loadNeighbourhoodsSuccess(neighbourhoods));
//       })
//       .catch(error => {
//         dispatch(apiCallError(error));
//         throw error;
//       });
//   };
// }
