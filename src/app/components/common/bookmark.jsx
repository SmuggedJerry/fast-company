import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    return (
        <button className="btn btn-outline-warning" {...rest}>
            <i className={"bi bi-star" + (status ? "-fill" : "")}></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool.isRequired
};

export default BookMark;