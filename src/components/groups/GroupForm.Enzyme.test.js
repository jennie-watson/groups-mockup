import React from "react";
import GroupForm from "./GroupForm";
import { shallow } from "enzyme";

function renderGroupForm(args) {
  const defaultProps = {
    moderators: [],
    // neighbourhoods: [],
    group: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return shallow(<GroupForm {...props} />);
}

it("renders form and header", () => {
  const wrapper = renderGroupForm();
  // console.log(wrapper.debug());
  expect(wrapper.find("form").length).toBe(1);
  expect(wrapper.find("h2").text()).toEqual("Add Group");
});

it('labels save buttons as "Save" when not saving', () => {
  const wrapper = renderGroupForm();
  expect(wrapper.find("button").text()).toBe("Save");
});

it('labels save button as "Saving..." when saving', () => {
  const wrapper = renderGroupForm({ saving: true });
  expect(wrapper.find("button").text()).toBe("Saving...");
});
