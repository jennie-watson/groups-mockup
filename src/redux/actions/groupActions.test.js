import * as groupActions from "./groupActions";
import * as types from "./actionTypes";
import { groups } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Groups Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_GROUPS_SUCCESS when loading groups", () => {
      fetchMock.mock("*", {
        body: groups,
        headers: { "content-type": "application/json" }
      });

      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_GROUPS_SUCCESS, groups }
      ];

      const store = mockStore({ groups: [] });
      return store.dispatch(groupActions.loadGroups()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("createGroupSuccess", () => {
  it("should create a CREATE_GROUP_SUCCESS action", () => {
    //arrange
    const group = groups[0];
    const expectedAction = {
      type: types.CREATE_GROUP_SUCCESS,
      group
    };

    //act
    const action = groupActions.createGroupSuccess(group);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
