import { useColor } from "hooks";
import { Text } from "@chakra-ui/react";

import Wrapper from "../Wrapper";

function QuestionCardParticipant({ question, response }) {
  const questionColor = useColor("black", "gray.200");
  const responseColor = useColor("gray.500", "gray.500");

  return (
    <Wrapper>
      <Text color={questionColor} fontWeight="500">
        {question.prompt}
      </Text>
      <Text color={responseColor} fontStyle={response || "italic"}>
        {response || "no response"}
      </Text>
    </Wrapper>
  );
}

export default QuestionCardParticipant;
