import useSortableObjectArrayWithBooleanErrors from "./useSortableObjectArrayWithBooleanErrors";

function useQuestionsForm(study) {
  return useSortableObjectArrayWithBooleanErrors(study.questions, {
    type: "Inclusion",
    prompt: "",
  });
}

export default useQuestionsForm;
