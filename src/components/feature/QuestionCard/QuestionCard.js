import { useColor } from "hooks";
import { Box, Tag, Text } from "@chakra-ui/react";

function QuestionCard({ question, response }) {
  const borderColor = useColor("gray.200", "gray.700");
  const backgroundColor = useColor("white", "gray.900");

  const questionColor = useColor("black", "gray.200");
  const responseColor = useColor("gray.500", "gray.500");

  return (
    <Box
      borderWidth="1px"
      borderColor={borderColor}
      background={backgroundColor}
      rounded="md"
      padding="15px"
    >
      <Tag
        size="sm"
        colorScheme={question.type === "Inclusion" ? "green" : "red"}
      >
        {question.type}
      </Tag>
      <Text color={questionColor} fontWeight="500">
        {question.prompt}
      </Text>
      <Text color={responseColor}>
        {response || (
          <Text fontStyle="italic" color="gray.400">
            no response
          </Text>
        )}
      </Text>
    </Box>
  );
}

export default QuestionCard;
