import React from "react";

import { Tag, Text, Box, Grid } from "@chakra-ui/react";

function Eligibility({ study, responses }) {
  return (
    <Grid p="25px" gap="15px">
      {study.questions && study.questions.length
        ? study.questions.map((question, index) => (
            <Box borderWidth="1px" bg="white" rounded="md" p="10px" key={index}>
              <Text fontWeight="600" color="black">
                {question.prompt}
              </Text>
              <Text color="gray.600">
                {(responses && responses.length && responses[index]) || (
                  <Text fontStyle="italic" color="gray.400">
                    no response
                  </Text>
                )}
              </Text>
            </Box>
          ))
        : null}
    </Grid>
  );
}

export default Eligibility;
