import { useState } from "react";

function useArray(initial) {
  const [array, setArray] = useState(initial || []);

  const append = (value) => {
    setArray((prev) => prev.concat([value]));
  };

  const update = (index, value) => {
    setArray((prev) => [
      ...prev.slice(0, index),
      value,
      ...prev.slice(index + 1),
    ]);
  };

  const insert = (index, value) => {
    setArray((prev) => [...prev.slice(0, index), value, ...prev.slice(index)]);
  };

  const deleteItem = (index) => {
    setArray((prev) => prev.filter((_, i) => i !== index));
  };

  const reset = () => {
    setArray(initial);
  };

  const clear = () => {
    setArray([]);
  };

  return {
    value: array,
    set: setArray,
    append,
    update,
    insert,
    delete: deleteItem,
    reset,
    clear,
  };
}

export default useArray;
