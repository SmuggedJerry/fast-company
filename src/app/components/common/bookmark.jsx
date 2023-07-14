import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, onClick, ...rest }) => {
    const handleClick = () => {
        onClick && onClick();
    };
    return (
        <button className="btn btn-outline-warning" onClick={handleClick} {...rest}>
            <i className={"bi bi-star" + (status ? "-fill" : "")}></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.bool,
    onClick: PropTypes.func
};

export default BookMark;
