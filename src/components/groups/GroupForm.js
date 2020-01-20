import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const GroupForm = ({
  group,
  moderators,
  onSave,
  onChange,
  saving = false,
  errors = {}
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{group.id ? "Edit" : "Add"} Group</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="name"
        placeholder="Group Name"
        value={group.name}
        onChange={onChange}
        error={errors.name}
      />

      <textarea
        className="form-control"
        rows="3"
        name="description"
        label="description"
        placeholder="Group Description"
        value={group.description}
        onChange={onChange}
        error={errors.description}
      ></textarea>
      <br />

      <SelectInput
        name="moderatorUserId"
        value={group.moderatorUserId || ""}
        defaultOption="Select Moderator"
        options={moderators.map(moderator => ({
          value: moderator.id,
          text: moderator.name
        }))}
        onChange={onChange}
        error={errors.moderator}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

GroupForm.propTypes = {
  moderators: PropTypes.array.isRequired,
  group: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool
};

export default GroupForm;
