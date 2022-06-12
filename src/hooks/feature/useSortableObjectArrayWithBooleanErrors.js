import { useArray } from "hooks";
import { object } from "utils";

function useSortableObjectArrayWithBooleanErrors(
  initialValues,
  newObjectValue
) {
  const getObjectErrors = (value) => {
    return object.map(value, (_, v) => !v);
  };

  const getValuesErrors = (values) => {
    return values.map(getObjectErrors);
  };

  const defaultValues = [];
  const defaultErrors = [];
  const initialErrors = getValuesErrors(initialValues);

  const notDefault =
    JSON.stringify(initialValues) !== JSON.stringify(defaultValues);

  const values = useArray(initialValues);
  const errors = useArray(notDefault ? initialErrors : defaultErrors);

  const hasChanged =
    JSON.stringify(initialValues) !== JSON.stringify(values.value);

  const create = () => {
    const newObjectError = object.map(newObjectValue, () => false);
    values.append(newObjectValue);
    errors.append(newObjectError);
  };

  const update = (index, name, value) => {
    values.update(index, { ...values.value[index], [name]: value });
    errors.update(index, { ...errors.value[index], [name]: !value });
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
    const errorMessages = getValuesErrors(values.value);
    const isValid = errorMessages
      .map((v) => Object.values(v))
      .flat()
      .every((v) => !v);

    errors.set(errorMessages);
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

export default useSortableObjectArrayWithBooleanErrors;
