import useSortableObjectArrayWithBooleanErrors from "./useSortableObjectArrayWithBooleanErrors";

function useLocationsForm(study) {
  return useSortableObjectArrayWithBooleanErrors(study.locations, {
    address: "",
  });
}

export default useLocationsForm;
