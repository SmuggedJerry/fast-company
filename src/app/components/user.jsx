import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";
import MaxRate from "./maxRate";

const User = ({ user, onToggleBookmark, onDelete }) => {
  const handleDelete = () => {
    onDelete(user._id);
  };
  return (
    <tr>
      <td>{user.name}</td>
      <td>
        {user.qualities.map((quality) => (
          <Quality key={quality._id} {...quality} />
        ))}
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>
        {user.rate}/<MaxRate users={user} />
      </td>
      <td>
        <Bookmark
          status={user.bookmark}
          onToggleBookmark={onToggleBookmark}
          _id={user._id}
        />
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(user._id)}
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
