import React from "react";
import GroupForm from "./GroupForm";
import renderer from "react-test-renderer";
import { groups, moderators } from "../../../tools/mockData";

it("sets submit button label 'Saving...' when saving is true", () => {
  const tree = renderer.create(
    <GroupForm
      group={groups[0]}
      moderators={moderators}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});
it("sets submit button label 'Save' when saving is false", () => {
  const tree = renderer.create(
    <GroupForm
      group={groups[0]}
      moderators={moderators}
      onSave={jest.fn()}
      onChange={jest.fn()}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
