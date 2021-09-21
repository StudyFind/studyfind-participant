import { useColor } from "hooks";
import { Tag, Text } from "@chakra-ui/react";

import Table from "components/complex/Table/Table";

function QuestionsTable({ questions }) {
  const textColor = useColor("gray.600", "gray.400");

  const headers = ["Type", "Question"];

  const data = questions.map((question, i) => [
    <Tag key={i} colorScheme={question.type === "Inclusion" ? "green" : "red"}>
      {question.type}
    </Tag>,
    <Text key={i} color={textColor}>
      {question.prompt}
    </Text>,
  ]);

  return <Table headers={headers} data={data} width="100%" />;
}

export default QuestionsTable;
