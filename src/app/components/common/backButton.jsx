import React from "react";
import { useHistory } from "react-router-dom";

const BackHistoryButton = () => {
    const history = useHistory();
    const handleBack = () => {
        history.goBack();
    };
    return (
        <button
            onClick={handleBack}
            className="btn btn-primary"
        >
            <i className="bi bi-caret-left"></i>
            Назад
        </button>
    );
};

export default BackHistoryButton;
