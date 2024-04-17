const regExHash = {
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  phone: /^\+7\s\d{3}\s\d{3}-\d{2}-\d{2}$/
};
const invalidMessageHash = {
  empty: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043F\u043E\u043B\u0435",
  email: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 email",
  phone: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430",
  survey: "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u0430\u043D\u043A\u0435\u0442\u0443"
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
//# sourceMappingURL=validate-e4070f14.mjs.map
