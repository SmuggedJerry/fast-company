import React from "react";

const BookMark = ({ status, ...rest }) => {
  return (
    <button className="btn btn-outline-warning" {...rest}>
      <i className={"bi bi-star" + (status ? "-fill" : "")}></i>
    </button>
  );
};

export default BookMark;
