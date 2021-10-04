import validator from "validator";

const email = (value = "") => {
  const isEmpty = !value;
  const isInvalid = !validator.isEmail(value);

  if (isEmpty) return " ";
  if (isInvalid) return "Email is invalid";
  return "";
};

const password = (value = "") => {
  const isEmpty = !value;
  const isTooShort = value.length < 8;
  const isMissingUpperCase = value === value.toLowerCase();

  if (isEmpty) return " ";
  if (isTooShort) return "Password must have at least 8 characters";
  if (isMissingUpperCase) return "Password must have a capital letter";
  return "";
};

const url = (value = "") => {
  const isEmpty = !value;
  const isInvalid = !validator.isURL(value); // does not check for http:// or https://
  const isNotSecure = value.substring(0, 8) !== "https://";

  if (isEmpty) return " ";
  if (isInvalid) return "URL is invalid";
  if (isNotSecure) return "URL must begin with https://";
  return "";
};

const date = (value = "") => {
  const isEmpty = !value;
  const isInvalid = !validator.isDate(value, {
    format: "YYYY-MM-DD",
    delimiters: ["-"],
  });

  if (isEmpty) return " ";
  if (isInvalid) return "Date is invalid";
  return "";
};

const time = (value = "") => {
  const isEmpty = !value;
  const isInvalid = !/(?:[01][0-9]|2[0-3]):(?:[0-5][0-9])/.test(value);

  if (isEmpty) return " ";
  if (isInvalid) return "Time is invalid";
  return "";
};

export default { email, password, url, date, time };
