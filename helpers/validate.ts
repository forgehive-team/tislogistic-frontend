const regExHash: Record<string, RegExp> = {
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    phone: /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/,
};
const invalidMessageHash: Record<string, string> = {
    email: 'Некорректный формат email',
    phone: 'Некорректный формат телефона',
};

export default function validate(value: string, key: string) {
    if (!value) {
        return 'Пожалуйста, заполните поле';
    }
    if ((key === 'email' || key === 'phone') && !regExHash[key].test(value)) {
        return invalidMessageHash[key];
    }
    return null;
}
