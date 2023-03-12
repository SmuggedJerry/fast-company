import React, { useState } from "react";
import api from "../api";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const getBadgeClasses = (count) => {
    let classes = "badge ";
    classes += count === 0 ? "bg-danger" : "bg-primary";
    return classes;
  };

  const renderPhrase = (count) => {
    let phrase = "";
    if (count === 0) {
      phrase = "Никто с тобой не тусанёт";
    } else if (count === 1) {
      phrase = `${count} человек тусанёт с тобой сегодня`;
    } else if (count >= 2 && count <= 4) {
      phrase = `${count} человека тусанут с тобой сегодня`;
    } else if (count >= 5 && count <= 12) {
      phrase = `${count} человек тусанут с тобой сегодня`;
    }

    return (
      <h1>
        <span className={getBadgeClasses(count)}>{phrase}</span>
      </h1>
    );
  };

  const renderTableContent = (users) => {
    const maxRate = Math.max(...users.map((user) => user.rate));
    return users.map((user) => (
      <tr key={user._id}>
        <td>{user.name}</td>
        <td>
          {user.qualities.map((quality) => (
            <span key={quality._id} className={`badge bg-${quality.color} m-1`}>
              {quality.name}
            </span>
          ))}
        </td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>
          {user.rate} / {maxRate}
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
    ));
  };
  return (
    <>
      {renderPhrase(users.length)}
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{renderTableContent(users)}</tbody>
        </table>
      )}
    </>
  );
};
export default Users;
