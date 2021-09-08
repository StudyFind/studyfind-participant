import { useColor } from "hooks";
import { Tag, Text } from "@chakra-ui/react";

import Wrapper from "../Wrapper";

function QuestionCard({ question, response }) {
  const questionColor = useColor("black", "gray.200");
  const responseColor = useColor("gray.500", "gray.500");

  const tagColorScheme = {
    Inclusion: "green",
    Exclusion: "red",
  }[question.type];

  return (
    <Wrapper>
      <Tag size="sm" colorScheme={tagColorScheme}>
        {question.type}
      </Tag>
      <Text color={questionColor} fontWeight="500">
        {question.prompt}
      </Text>
      <Text color={responseColor} fontStyle={response || "italic"}>
        {response || "no response"}
      </Text>
    </Wrapper>
  );
}

export default QuestionCard;
