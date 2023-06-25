import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const { logIn } = useAuth();
    const [logInError, setLogInError] = useState(null);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
        setLogInError(null);
    };

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Эл.почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен не корректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            },
            isCapitalSymbol: {
                message: "Пароль должен содержать хотя бы одну заглавную букву"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одну цифру"
            },
            min: {
                message: "Пароль должен состоять минимум из 8 символов",
                value: 8
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        try {
            await logIn(data);
            history.push("/");
        } catch (error) {
            setLogInError(error.message);
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <TextField
                label="Эл.почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />
            {logInError && <p className="text-danger">{logInError}</p>}
            <button
                type="submit"
                disabled={!isValid || logInError}
                className="btn btn-primary w-100 mx-auto"
            >
                Войти
            </button>
        </form>
    );
};

export default LoginForm;
