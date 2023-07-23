export function generateAuthError(message) {
    switch (message) {
        case "INVALID_PASSWORD":
            return "Пароль введён некорректно. Проверьте правильность ввода пароля";
        case "EMAIL_NOT_FOUND":
            return "Пользователь с таким Email не найден. Проверьте правильность ввода Email или зарегистрируйтесь";
        case "EMAIL_EXISTS":
            return "Пользователь с таким email уже существует";
        default:
            return "Ваш аккаунт временно заблокирован из-за частых попыток входа. Пожалуйста, попробуйте позже";
    }
}
