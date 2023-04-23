import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../api";
import PropTypes from "prop-types";
import QualitiesList from "./qualitiesList";

const UserPage = ({ id }) => {
    const history = useHistory();
    const handleSave = () => {
        history.push("/users");
    };

    const [user, setUser] = useState(null);

    useEffect(() => {
        api.users.getById(id).then((data) => {
            setUser(data);
        });
    }, [id]);

    return (
        <div>
            {user
                ? (
                    <div>
                        <h1>{user.name}</h1>
                        <h2>Профессия: {user.profession.name}</h2>
                        <QualitiesList qualities={user.qualities}/>
                        <h6 className="mb-3 mt-3">Встретился раз: {user.completedMeetings}</h6>
                        <h3>Оценка: {user.rate}</h3>
                    </div>
                )
                : (
                    <h1>Loading</h1>
                )}
            <button onClick={handleSave}>Все Пользователи</button>
        </div>
    );
};

UserPage.propTypes = {
    id: PropTypes.string
};

export default UserPage;
