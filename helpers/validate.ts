const regExHash: Record<string, RegExp> = {
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    phone: /^[0-9\s\-\(\)\+]{7,22}$/,
};
const invalidMessageHash: Record<string, string> = {
    empty: 'Пожалуйста, заполните поле',
    email: 'Некорректный формат email',
    phone: 'Некорректный формат телефона',
    survey: 'Пожалуйста, прикрепите анкету',
};

export default function validate(value: string, key: string) {
    if (key === 'survey' && !value) {
        return invalidMessageHash[key];
    }
    if (!value) {
        return invalidMessageHash.empty;
    }
    if ((key === 'email' || key === 'phone') && !regExHash[key].test(value)) {
        return invalidMessageHash[key];
    }
    return null;
}
