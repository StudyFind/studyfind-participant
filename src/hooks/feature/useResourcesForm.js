import useSortableObjectArrayWithBooleanErrors from "./useSortableObjectArrayWithBooleanErrors";

function useResourcesForm(study) {
  return useSortableObjectArrayWithBooleanErrors(study.resources, {
    name: "",
    link: "",
  });
}

export default useResourcesForm;
