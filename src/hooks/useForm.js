import { useState } from "react";
import lodash from "lodash";

function useForm({ initial, check, submit }) {
  const names = Object.keys(initial);

  const validate = (values) => {
    const error = {};

    names.forEach((name) => {
      const value = values[name];
      error[name] = check(name, value);
    });

    return error;
  };

  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState(validate(initial));
  const [loading, setLoading] = useState(false);

  const isDifferent = !lodash.isEqual(initial, values);

  const getEmpty = () => {
    const empty = {};

    names.forEach((name) => {
      empty[name] = "";
    });

    return empty;
  };

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const handleReset = () => {
    const error = validate(initial);
    setValues(initial);
    setErrors(error);
  };

  const handleClear = () => {
    const empty = getEmpty(initial);
    setValues(empty);
    setErrors(empty);
  };

  const handleSubmit = () =>
    new Promise((resolve, reject) => {
      const error = validate(values);
      const valid = Object.values(error).every((v) => !v);

      if (!valid) {
        setErrors(error);
        reject();
        return;
      }

      if (isDifferent) {
        setLoading(true);
        return submit(values)
          .then(() => resolve())
          .catch(() => reject())
          .finally(() => setLoading(false));
      }

      resolve();
    });

  return {
    values,
    errors,
    loading,
    setValues,
    setErrors,
    handleChange,
    handleClear,
    handleReset,
    handleSubmit,
    isDifferent,
  };
}

export default useForm;
