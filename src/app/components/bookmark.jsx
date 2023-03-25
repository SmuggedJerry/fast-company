import React from "react";

const Bookmark = ({ status, ...rest }) => {
  const handleClick = () => {
    rest.onToggleBookmark(rest._id);
  };

  const getClasses = () => {
    let classes = "bi bi-star";
    classes += status ? "-fill" : "";
    return classes;
  };

  return (
    <button className="btn btn-outline-warning" onClick={handleClick}>
      <i className={getClasses()}></i>
    </button>
  );
};

export default Bookmark;
