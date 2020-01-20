import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const GroupList = ({ groups, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th />
        <th>Name</th>
        <th>Moderator</th>
        <th>Description</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {groups.map(group => {
        return (
          <tr key={group.id}>
            <td>
              <a
                className="btn btn-outline-info"
                href={"https://www.neighbourly.co.nz/group/" + group.slug}
              >
                Groups
              </a>
            </td>
            <td>
              <Link to={"/group/" + group.slug}>{group.name}</Link>
            </td>
            <td>{group.moderatorName}</td>
            <td>{group.description}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDeleteClick(group)}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

GroupList.propTypes = {
  groups: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default GroupList;
