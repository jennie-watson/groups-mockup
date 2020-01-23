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
              <a className="btn btn-outline-primary" href="/group-details">
                Details
              </a>
            </td>
            <td>{group.name}</td>
            <td>{group.moderatorName}</td>
            <td>{group.description}</td>
            <td>
              <button
                className="btn btn-outline-danger rounded d-flex m-2"
                onClick={() => onDeleteClick(group)}
              >
                Delete
              </button>
              <Link
                to={"/group/" + group.slug}
                style={{ textDecoration: "none" }}
              >
                <button className="btn btn-outline-info rounded d-flex m-2">
                  Edit
                </button>
              </Link>
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
