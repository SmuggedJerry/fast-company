import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import api from "../../../api";
import SelectField from "../form/selectField";
import TextAreaField from "../form/textAreaField";
import { validator } from "../../../utils/validator";

const initialData = {
    userId: "",
    content: ""
};

const AddCommentForm = ({ onSubmit }) => {
    const [data, setData] = useState(initialData);
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState({});

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validatorConfig = {
        userId: {
            isRequired: {
                message: "Пользователь не выбран"
            }
        },
        content: {
            isRequired: {
                message: "Сообщение не может быть пустым"
            }
        }
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    useEffect(() => {
        api.users.fetchAll().then(setUsers);
    }, []);

    const clearForm = () => {
        setData(initialData);
        setErrors({});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(data);
        clearForm();
    };

    const arrayOfUsers =
        users && Object.keys(users).map((userId) => ({
            name: users[userId].name,
            value: users[userId]._id
    }));

    return (
        <div>
            <h2>Новый комментарий</h2>
            <form onSubmit={handleSubmit}>
                <SelectField
                    onChange={handleChange}
                    options={arrayOfUsers}
                    name="userId"
                    value={data.userId}
                    defaultOption="Выберите пользователя"
                    error={errors.userId}
                />
                <TextAreaField
                    onChange={handleChange}
                    name="content"
                    value={data.content}
                    error={errors.content}
                    label="Сообщение"
                />
                <div className='d-flex justify-content-end'>
                    <button className="btn btn-primary">
                        Опубликовать
                    </button>
                </div>
            </form>
        </div>
    );
};

AddCommentForm.propTypes = {
    onSubmit: PropTypes.func
};

export default AddCommentForm;