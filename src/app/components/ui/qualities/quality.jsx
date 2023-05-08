import React from "react";
import PropTypes from "prop-types";

const Quality = ({ name, color, _id }) => {
    return (
        <span key={_id} className={`badge bg-${color} m-1`}>
            {name}
        </span>
    );
};

Quality.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired
};

export default Quality;
