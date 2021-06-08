import { useSimpleForm } from "hooks";
import { validate } from "functions";

function useAuthForm({ initial, onSubmit }) {
  const check = (name, value) => {
    if (name === "name") return value ? "" : " ";
    if (name === "email") return validate.email(value);
    if (name === "password") return validate.password(value);
    if (name === "newPassword") return validate.password(value);
  };

  return useSimpleForm({ initial, check, onSubmit });
}

export default useAuthForm;
