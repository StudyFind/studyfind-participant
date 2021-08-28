import { Text, Box, Grid } from "@chakra-ui/react";

function Screening({ study, responses }) {
  const questions = study?.questions;

  if (!questions || questions.length === 0) {
    return null;
  }

  if (!responses || responses.length === 0) {
    return null;
  }

  return (
    <Grid gap="15px">
      {questions.map((question, i) => (
        <Box borderWidth="1px" bg="white" rounded="md" p="10px" key={i}>
          <Text fontWeight="600" color="black">
            {question.prompt}
          </Text>
          <Text
            color={responses[i] ? "gray.600" : "gray.400"}
            fontStyle={responses[i] ? "italic" : ""}
          >
            {responses[i] || "no response"}
          </Text>
        </Box>
      ))}
    </Grid>
  );
}

export default Screening;
