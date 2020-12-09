import { useState } from "react";
import { validate } from "functions";

function useAuthForm({ initial, onSubmit }) {
  const [inputs, setInputs] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();

  const handleInput = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: validate.input(name, value) });
  };

  const handleSubmit = (...params) =>
    new Promise((resolve, reject) => {
      const err = validate.all(inputs);
      setErrors(err);

      if (Object.keys(err).some((v) => err[v])) {
        reject(err);
        return;
      }

      setLoading(true);
      onSubmit(...params)
        .then((data) => {
          setSuccess(true);
          resolve(data);
        })
        .catch((err) => {
          setSuccess(false);
          setErrors(err);
          reject(err);
        })
        .finally(() => {
          setLoading(false);
        });
    });

  return { inputs, errors, loading, success, handleInput, handleSubmit };
}

export default useAuthForm;
