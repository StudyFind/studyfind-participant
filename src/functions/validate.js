import validator from "validator";

const inferType = (name) => {
  const includesKeyword = (keyword) => name.toLowerCase().includes(keyword);
  if (includesKeyword("email")) return "email";
  if (includesKeyword("password")) return "password";
  return "default";
};

const validate = {
  all: (inputs) => {
    const errors = {};

    for (const i in inputs) {
      if (inputs[i] !== undefined) {
        const type = inferType(i);
        errors[i] = validate[type](inputs[i]);
      }
    }
    return errors;
  },

  input: (name, value) => {
    const type = inferType(name);
    return validate[type](value);
  },

  email: (email) => {
    if (!email) return " ";
    if (!validator.isEmail(email)) return "Email is invalid";
    return "";
  },

  password: (password) => {
    const checkCase = password !== password.toLowerCase();
    const checkSize = password.length > 7;

    if (!password) return " ";
    if (!checkCase && !checkSize) return "Password must have 8 characters and one capital letter";
    if (!checkCase) return "Password must have a capital letter";
    if (!checkSize) return "Password must have 8 characters";
    return "";
  },

  default: (i) => !i,
};

export default validate;
