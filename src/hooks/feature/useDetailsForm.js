import { useState } from "react";
import { object } from "utils";

function useDetailsForm(study) {
  const check = (name, value) => {
    if (value === "") return " ";

    if (["title", "description"].includes(name)) {
      const [min, max] = {
        title: [50, 100],
        description: [300, 500],
      }[name];

      if (value.length < min || value.length > max) {
        const titleCaseName = name.charAt(0).toUpperCase() + name.slice(1);
        return `${titleCaseName} must be between ${min} and ${max} characters`;
      }
    }

    if (name === "conditions" && value.length === 0) {
      return "You must add at least 1 condition";
    }

    return "";
  };

  const getErrorMessages = ({
    title,
    description,
    minAge,
    maxAge,
    type,
    conditions,
  }) => ({
    title: check("title", title),
    description: check("description", description),
    minAge: check("minAge", minAge),
    maxAge: check("maxAge", maxAge),
    type: check("type", type),
    conditions: check("conditions", conditions),
  });

  const defaultValues = {
    title: "",
    description: "",
    acceptsHealthyVolunteers: false,
    sex: "All",
    minAge: 0,
    maxAge: 100,
    type: "Observational",
    conditions: [],
  };

  const defaultErrors = {
    title: "",
    description: "",
    sex: "",
    minAge: "",
    maxAge: "",
    acceptsHealthyVolunteers: "",
    type: "",
    conditions: "",
  };

  const initialValues = {
    title: study.title,
    description: study.description,
    acceptsHealthyVolunteers: study.acceptsHealthyVolunteers,
    sex: study.sex,
    minAge: study.minAge,
    maxAge: study.maxAge,
    type: study.type,
    conditions: study.conditions,
  };

  const initialErrors = getErrorMessages(initialValues);

  const notDefault =
    JSON.stringify(initialValues) !== JSON.stringify(defaultValues);

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(
    notDefault ? initialErrors : defaultErrors
  );

  const hasChanged = JSON.stringify(initialValues) !== JSON.stringify(values);

  const reset = () => {
    setValues(initialValues);
    setErrors(initialErrors);
  };

  const clear = () => {
    setValues(defaultValues);
    setErrors(defaultErrors);
  };

  const update = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
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
    hasChanged,
    notDefault,
    reset,
    clear,
    update,
    validate,
  };
}

export default useDetailsForm;
