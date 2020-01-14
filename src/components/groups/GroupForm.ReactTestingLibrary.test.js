import React from "react";
import { cleanup, render } from "react-testing-library";
import GroupForm from "./GroupForm";

afterEach(cleanup);

function renderGroupForm(args) {
  let defaultProps = {
    authors: [],
    group: {},
    saving: false,
    errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  const props = { ...defaultProps, ...args };
  return render(<GroupForm {...props} />);
}

it("should render Add Group header", () => {
  const { getByText } = renderGroupForm();
  getByText("Add Group");
});

it('should label save button as "Save" when not saving', () => {
  const { getByText } = renderGroupForm();
  getByText("Save");
});

it('should label save button as "Saving..." when saving', () => {
  const { getByText } = renderGroupForm({ saving: true });
  getByText("Saving...");
});
