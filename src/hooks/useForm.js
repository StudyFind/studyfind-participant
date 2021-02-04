import { useState, useEffect } from "react";

function useForm({ initial, checker }) {
  const [inputs, setInputs] = useState(initial);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setErrors((prevState) => {
      for (const name in initial) {
        prevState[name] = checker(name, initial[name]);
      }
      return prevState;
    });
  }, [initial]);

  const handleChange = (name, value) => {
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: checker(name, value) });
  };

  const validate = () => {
    const err = {};
    for (const name in inputs) {
      err[name] = checker(name, inputs[name]);
    }
    setErrors(err);

    return !Object.keys(err).some((i) => err[i]);
  };

  return [inputs, errors, validate, handleChange];
}

export default useForm;
