import { useState } from "react";
import { object } from "functions";
import lodash from "lodash";

export const Form = ({ initial, cleared, check, onSubmit }) => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState(object.map(initial, () => ""));
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const input = (name) => {
    return {
      name,
      value: values[name],
      error: errors[name],
      onChange: handleChange,
    };
  };

  const handleReset = () => {
    setValues(initial);
  };

  const handleClear = () => {
    setValues(cleared);
  };

  const handleSubmit = async () => {
    const errorMessages = object.map(values, check);
    const errorExists = object.some(errorMessages);

    if (errorExists) {
      setErrors(errorMessages);
      throw errorMessages;
    }

    setLoading(true);

    onSubmit(values)
      .then(() => {
        setSuccess(true);
        setValues(initial);
      })
      .catch((err) => {
        setSuccess(false);
        setErrors(err);
      })
      .finally(() => {
        setLoading(false);
        document.activeElement?.blur();
      });
  };

  return {
    input,
    loading,
    success,
    handleClear,
    handleReset,
    handleSubmit,
    isDifferent: !lodash.isEqual(initial, values),
  };
};

export default Form;
