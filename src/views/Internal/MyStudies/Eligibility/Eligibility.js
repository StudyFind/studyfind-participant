import React from "react";

import { Text, Box, Grid } from "@chakra-ui/react";

function Eligibility({ study, responses }) {
  return (
    <Grid gap="15px">
      {study.questions && study.questions.length
        ? study.questions.map((question, i) => (
            <Box borderWidth="1px" bg="white" rounded="md" p="10px" key={i}>
              <Text fontWeight="600" color="black">
                {question.prompt}
              </Text>
              <Text color="gray.600">
                {(responses && responses.length && responses[i]) || (
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
