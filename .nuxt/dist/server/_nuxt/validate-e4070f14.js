const regExHash = {
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  phone: /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/
};
const invalidMessageHash = {
  empty: "Пожалуйста, заполните поле",
  email: "Некорректный формат email",
  phone: "Некорректный формат телефона",
  survey: "Пожалуйста, прикрепите анкету"
};
function validate(value, key) {
  if (key === "survey" && !value) {
    return invalidMessageHash[key];
  }
  if (!value) {
    return invalidMessageHash.empty;
  }
  if ((key === "email" || key === "phone") && !regExHash[key].test(value)) {
    return invalidMessageHash[key];
  }
  return null;
}
export {
  validate as v
};
//# sourceMappingURL=validate-e4070f14.js.map
