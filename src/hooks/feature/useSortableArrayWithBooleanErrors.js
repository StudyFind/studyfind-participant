import { useArray } from "hooks";
import { object } from "utils";

function useSortableArrayWithBooleanErrors(initialValues, newValue) {
  const getErrors = (values) => {
    return values.map((v) => !v);
  };

  const defaultValues = [];
  const defaultErrors = [];
  const initialErrors = getErrors(initialValues);

  const notDefault = JSON.stringify(initialValues) !== JSON.stringify(defaultValues);

  const values = useArray(initialValues);
  const errors = useArray(notDefault ? initialErrors : defaultErrors);

  const hasChanged = JSON.stringify(initialValues) !== JSON.stringify(values.value);

  const create = () => {
    values.append(newValue);
    errors.append(false);
  };

  const update = (index, value) => {
    console.log(value);
    values.update(index, value);
    errors.update(index, !value);
  };

  const deleteItem = (index) => {
    values.delete(index);
    errors.delete(index);
  };

  const clear = () => {
    values.clear();
    errors.clear();
  };

  const reset = () => {
    values.reset(initialValues);
    errors.reset(initialErrors);
  };

  const handleSwap = (prev, oldIndex, newIndex) => {
    const updated = [...prev];
    const removed = updated.splice(oldIndex, 1);
    updated.splice(newIndex, 0, removed[0]);
    return updated;
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    values.set((prev) => handleSwap(prev, oldIndex, newIndex));
    errors.set((prev) => handleSwap(prev, oldIndex, newIndex));
  };

  const validate = () => {
    const errors = getErrors(values.value);
    const isValid = !object.some(errors);
    errors.set(errors);
    return isValid;
  };

  return {
    hasChanged,
    notDefault,
    values: values.value,
    errors: errors.value,
    create,
    update,
    delete: deleteItem,
    clear,
    reset,
    onSortEnd,
    validate,
  };
}

export default useSortableArrayWithBooleanErrors;
