import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadGroups, saveGroup } from "../../redux/actions/groupActions";
import { loadModerators } from "../../redux/actions/moderatorActions";
import PropTypes from "prop-types";
import GroupForm from "./GroupForm";
import { newGroup } from "../../../tools/mockData";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

export function ManageGroupPage({
  groups,
  moderators,
  loadModerators,
  loadGroups,
  saveGroup,
  history,
  ...props
}) {
  const [group, setGroup] = useState({ ...props.group });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (groups.length === 0) {
      loadGroups().catch(error => {
        alert("Loading groups failed" + error);
      });
    } else {
      setGroup({ ...props.group });
    }

    if (moderators.length === 0) {
      loadModerators().catch(error => {
        alert("Loading moderators failed" + error);
      });
    }
  }, [props.group]);

  function handleChange(event) {
    const { name, value } = event.target;
    setGroup(prevGroup => ({
      ...prevGroup,
      [name]: name === "moderatorUserId" ? parseInt(value, 10) : value
    }));
  }

  function formIsValid() {
    const { name, moderatorUserId, description } = group;
    const errors = {};

    if (!name) errors.name = "Name is required.";
    if (!description) errors.description = "Description is required.";
    if (!moderatorUserId) errors.moderator = "Moderator is required.";

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    saveGroup(group)
      .then(() => {
        toast.success("Group saved.");
        history.push("/groups");
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return moderators.length === 0 || groups.length === 0 ? (
    <Spinner />
  ) : (
    <GroupForm
      group={group}
      errors={errors}
      moderators={moderators}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

// propTypes declaration
ManageGroupPage.propTypes = {
  group: PropTypes.object.isRequired,
  moderators: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  loadGroups: PropTypes.func.isRequired,
  loadModerators: PropTypes.func.isRequired,
  saveGroup: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

// selector as it selects data from the Redux store
export function getGroupBySlug(groups, slug) {
  return groups.find(group => group.slug === slug) || null;
}

// Redux mapping
function mapStateToProps(state, ownProps) {
  const slug = ownProps.match.params.slug;
  const group =
    slug && state.groups.length > 0
      ? getGroupBySlug(state.groups, slug)
      : newGroup;
  return {
    group,
    groups: state.groups,
    moderators: state.moderators
  };
}

const mapDispatchToProps = {
  loadGroups,
  loadModerators,
  saveGroup
};

// Redux connect
export default connect(mapStateToProps, mapDispatchToProps)(ManageGroupPage);
