const regExHash = {
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  phone: /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/
};
const invalidMessageHash = {
  empty: "The field is required",
  email: "Incorrect email format",
  phone: "Incorrect phone number",
  survey: "Please, attach the survey"
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

export { validate as v };
//# sourceMappingURL=validate-895dda7b.mjs.map
