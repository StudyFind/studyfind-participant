import { useState } from "react";
import { object } from "utils";

function useFeedbackInputs(onSubmit) {
  // `onSubmit` must be a promise
  const [values, setValues] = useState({ title: "", body: "" });
  const [errors, setErrors] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);

  const check = (name, value) => {
    if (!value && name === "title") return "Title cannot be empty";
    if (!value && name === "body") return "Body cannot be empty";
    return "";
  };

  const getErrorMessages = ({ title, body }) => ({
    title: check("title", title),
    body: check("body", body),
  });

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const handleSubmit = () => {
    const errorMessages = getErrorMessages(values);

    if (object.some(errorMessages)) {
      setErrors(errorMessages);
      return;
    }

    setLoading(true);
    onSubmit(values)
      .then(() => setValues({ title: "", body: "" }))
      .finally(() => setLoading(false));
  };

  return { values, errors, loading, handleChange, handleSubmit };
}

export default useFeedbackInputs;
