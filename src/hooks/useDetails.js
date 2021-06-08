import { useForm } from "hooks";
import { firestore } from "database/firebase";

function useDetails({ id, title, description }) {
  const initial = { title, description };

  const check = (name, value) => {
    if (!value) return true;

    const [min, max] = {
      title: [50, 100],
      description: [300, 500],
    }[name];

    if (value.length < min || value.length > max) {
      return `Please ensure that the study ${name} is between ${min} and ${max} characters`;
    }
  };

  const submit = (inputs) => firestore.collection("studies").doc(id).update(inputs);

  return useForm({ initial, check, submit });
}

export default useDetails;
