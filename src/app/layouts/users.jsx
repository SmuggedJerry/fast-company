import React from "react";
import UsersList from "../components/usersList";
import UserPage from "../components/userPage";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const Users = ({ users }) => {
    const params = useParams();
    const { userId } = params;

    return <>
        {userId
            ? (
                <UserPage users={users} id={userId}/>
            )
            : (
                <UsersList users={users}/>
            )}
    </>;
};

Users.propTypes = {
    users: PropTypes.array
};

export default Users;
