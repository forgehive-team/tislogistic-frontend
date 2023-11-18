const regExHash: Record<string, RegExp> = {
    email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    phone: /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/,
};
const invalidMessageHash: Record<string, string> = {
    empty: 'The field is required',
    email: 'Incorrect email format',
    phone: 'Incorrect phone number',
    survey: 'Please, attach the survey',
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
