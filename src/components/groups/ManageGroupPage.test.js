import React from "react";
import { mount } from "enzyme";
import { moderators, newGroup, groups } from "../../../tools/mockData";
import { ManageGroupPage } from "./ManageGroupPage";

function render(args) {
  const defaultProps = {
    moderators,
    // neighbourhoods,
    groups,
    // Passed from React Router in real app, so just stubbing in for test.
    // Could also choose to use MemoryRouter as shown in Header.test.js,
    // or even wrap with React Router, depending on whether I
    // need to test React Router related behavior.
    history: {},
    saveGroup: jest.fn(),
    loadModerators: jest.fn(),
    loadNeighbourhoods: jest.fn(),
    loadGroups: jest.fn(),
    group: newGroup,
    match: {}
  };

  const props = { ...defaultProps, ...args };

  return mount(<ManageGroupPage {...props} />);
}

it("sets error when attempting to save an empty name field", () => {
  const wrapper = render();
  wrapper.find("form").simulate("submit");
  const error = wrapper.find(".alert").first();
  expect(error.text()).toBe("Name is required.");
});
