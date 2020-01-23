import React from "react";
import { connect } from "react-redux";
import * as groupActions from "../../redux/actions/groupActions";
import * as moderatorActions from "../../redux/actions/moderatorActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import GroupList from "./GroupList";
import { Redirect } from "react-router-dom";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

class GroupsPage extends React.Component {
  state = {
    redirectToAddGroupPage: false
  };

  componentDidMount() {
    const { groups, moderators, actions } = this.props;

    if (groups.length === 0) {
      actions.loadGroups().catch(error => {
        alert("Loading groups failed" + error);
      });
    }

    if (moderators.length === 0) {
      actions.loadModerators().catch(error => {
        alert("Loading moderators failed" + error);
      });
    }
  }

  handleDeleteGroup = async group => {
    toast.success("Group deleted");
    try {
      await this.props.actions.deleteGroup(group);
    } catch (error) {
      toast.error("Delete failed. " + error.message, { autoClose: false });
    }
  };

  render() {
    return (
      <>
        {this.state.redirectToAddGroupPage && <Redirect to="/group" />}
        <h2>Groups</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-info rounded"
              onClick={() => this.setState({ redirectToAddGroupPage: true })}
            >
              Create Group
            </button>

            <GroupList
              onDeleteClick={this.handleDeleteGroup}
              groups={this.props.groups}
            />
          </>
        )}
      </>
    );
  }
}

GroupsPage.propTypes = {
  moderators: PropTypes.array.isRequired,
  groups: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    groups:
      state.moderators.length === 0
        ? [] // if no moderator data then return an empty array
        : state.groups.map(group => {
            return {
              ...group,
              moderatorName: state.moderators.find(
                a => a.id === group.moderatorUserId
              ).name // maps over to find groupName relevant to moderatorUserId
            };
          }),
    moderators: state.moderators,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadGroups: bindActionCreators(groupActions.loadGroups, dispatch),
      loadModerators: bindActionCreators(
        moderatorActions.loadModerators,
        dispatch
      ),
      deleteGroup: bindActionCreators(groupActions.deleteGroup, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupsPage);
