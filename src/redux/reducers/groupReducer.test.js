import groupReducer from "./groupReducer";
import * as actions from "../actions/groupActions";

it("should add group when passed CREATE_GROUP_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      name: "A"
    },
    {
      name: "B"
    }
  ];

  const newGroup = {
    name: "C"
  };

  const action = actions.createGroupSuccess(newGroup);

  // act
  const newState = groupReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].name).toEqual("A");
  expect(newState[1].name).toEqual("B");
  expect(newState[2].name).toEqual("C");
});

it("should update group when passed UPDATE_GROUP_SUCCESS", () => {
  // arrange
  const initialState = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" }
  ];

  const group = { id: 2, name: "New Name" };
  const action = actions.updateGroupSuccess(group);

  // act
  const newState = groupReducer(initialState, action);
  const updatedGroup = newState.find(a => a.id == group.id);
  const untouchedGroup = newState.find(a => a.id == 1);

  // assert
  expect(updatedGroup.name).toEqual("New Name");
  expect(untouchedGroup.name).toEqual("A");
  expect(newState.length).toEqual(3);
});
