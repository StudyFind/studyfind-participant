import { useState } from "react";
import { useToast } from "@chakra-ui/react";
import { toasts } from "templates";
import lodash from "lodash";

function useForm({ initial, check, submit }) {
  const toast = useToast();
  const names = Object.keys(initial);

  const validate = (values) => {
    const error = {};

    names.forEach((name) => {
      const value = values[name];
      error[name] = check(name, value);
    });

    return error;
  };

  const [inputs, setInputs] = useState(initial);
  const [errors, setErrors] = useState(validate(initial));
  const [loading, setLoading] = useState(false);

  const isDifferent = !lodash.isEqual(initial, inputs);

  const triggerErrorToast = () => {
    toast(toasts.connectionError);
  };

  const getEmpty = () => {
    const empty = {};

    names.forEach((name) => {
      empty[name] = "";
    });

    return empty;
  };

  const handleChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const handleReset = () => {
    const error = validate(initial);
    setInputs(initial);
    setErrors(error);
  };

  const handleClear = () => {
    const empty = getEmpty(initial);
    setInputs(empty);
    setErrors(empty);
  };

  const handleSubmit = () =>
    new Promise((resolve, reject) => {
      const error = validate(inputs);
      const valid = Object.values(error).every((v) => !v);

      if (!valid) {
        setErrors(error);
        setLoading(false);
        reject();
        return;
      }

      if (isDifferent) {
        return submit(inputs)
          .then(() => resolve())
          .catch(() => {
            triggerErrorToast();
            reject();
          })
          .finally(() => setLoading(false));
      }
    });

  return {
    inputs,
    errors,
    loading,
    setInputs,
    setErrors,
    handleChange,
    handleClear,
    handleReset,
    handleSubmit,
    isDifferent,
  };
}

export default useForm;
