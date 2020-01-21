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
      <h3 className="d-flex justify-content-center">
        {group.id ? "Edit" : "Create"} Group
      </h3>
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
        className="moderator"
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

      {/* Radio buttons for Create Group Form */}
      <div className="form-check">
        <h5>Who can join your group?</h5>
        <input
          className="form-check-input"
          type="radio"
          name="neighbourhoodPrivacy"
          id="neighbourhoodPrivacy"
          value={group.neighbourhoodPrivacy}
          onChange={onChange}
          checked
        />
        <label className="form-check-label" htmlFor="neighbourhoodPrivacy">
          Anyone in my Neighbourhood
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="regionPrivacy"
          id="regionPrivacy"
          value={group.regionPrivacy}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="regionPrivacy">
          Anyone in my Region
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="nzPrivacy"
          id="nzPrivacy"
          value={group.nzPrivacy}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="nzPrivacy">
          Anyone in New Zealand
        </label>
      </div>

      <div className="form-check">
        <h5>Who can see your group&apos;s posts?</h5>
        <input
          className="form-check-input"
          type="radio"
          name="publicPost"
          id="publicPost"
          value={group.publicPost}
          onChange={onChange}
          checked
        />
        <label className="form-check-label" htmlFor="publicPost">
          Public
        </label>
        <p className="d-flex mb-2" style={{ fontSize: "small", opacity: 0.8 }}>
          Posts can be seen by the public
        </p>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="privatePost"
          id="privatePost"
          value={group.privatePost}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor="privatePost">
          Members only
        </label>
        <p className="d-flex mb-4" style={{ fontSize: "small", opacity: 0.8 }}>
          Only people who are members of the group can see the posts
        </p>
      </div>

      <button
        type="submit"
        disabled={saving}
        className="btn btn-primary rounded-lg d-flex mx-auto justify-content-center align-items-center w-50"
      >
        {saving ? "Creating..." : "Create a group"}
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
