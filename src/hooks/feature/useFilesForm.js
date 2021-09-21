import { useState } from "react";

import { object } from "utils";

function useFilesForm() {
  const [values, setValues] = useState({ name: "", file: undefined });
  const [errors, setErrors] = useState({ name: "", file: "" });

  const check = (name, value) => {
    if (name === "name") {
      if (!value) return "File name cannot be empty";
      if (value.includes("/")) return "File name cannot contain '/'";
    }

    return "";
  };

  const getErrorMessages = ({ name, file }) => ({
    name: check("name", name),
    file: check("file", file),
  });

  const changeName = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, name: check(name, value) }));
  };

  const selectFile = (_, file) => {
    const name = file?.name || "";

    setValues({ name, file });
    setErrors({
      name: name ? "" : "File name cannot be empty",
      file: file ? "" : "File has not been selected",
    });
  };

  const clear = () => {
    setValues({ name: "", file: null });
    setErrors({ name: "", file: "" });
  };

  const validate = () => {
    const errorMessages = getErrorMessages(values);
    const isValid = !object.some(errorMessages);
    setErrors(errorMessages);
    return isValid;
  };

  return {
    values,
    errors,
    changeName,
    selectFile,
    clear,
    validate,
  };
}

export default useFilesForm;
