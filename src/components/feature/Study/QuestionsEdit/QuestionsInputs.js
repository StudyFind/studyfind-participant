import { SecondaryButton } from "components/simple/Buttons/SecondaryButton";
import { FaPlus, FaTrashAlt, FaUndo } from "react-icons/fa";

import { VStack, HStack } from "@chakra-ui/react";
import { EditorButton } from "components/simple/Buttons/EditorButton";

import QuestionList from "./QuestionList";

function QuestionsInputs({
  values,
  errors,
  hasChanged,
  notDefault,
  sortQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  resetQuestions,
  clearQuestions,
}) {
  return (
    <VStack spacing="10px" align="stretch">
      <HStack>
        {hasChanged && notDefault && (
          <EditorButton icon={<FaUndo />} onClick={resetQuestions}>
            Undo Changes
          </EditorButton>
        )}
        {values.length && (
          <EditorButton
            icon={<FaTrashAlt />}
            onClick={clearQuestions}
            colorScheme="red"
          >
            Delete All
          </EditorButton>
        )}
      </HStack>
      <QuestionList
        values={values}
        errors={errors}
        updateQuestion={updateQuestion}
        deleteQuestion={deleteQuestion}
        onSortEnd={sortQuestions}
      />
      <SecondaryButton leftIcon={<FaPlus />} onClick={createQuestion}>
        Add Question
      </SecondaryButton>
    </VStack>
  );
}

export default QuestionsInputs;
