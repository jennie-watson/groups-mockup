import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as groupActions from "./actions/groupActions";

it("Should handle creating groups", function() {
  // arrange
  const store = createStore(rootReducer, initialState);
  const group = {
    name: "Clean Code"
  };

  // act
  const action = groupActions.createGroupSuccess(group);
  store.dispatch(action);

  // assert
  const createdGroup = store.getState().groups[0];
  expect(createdGroup).toEqual(group);
});
