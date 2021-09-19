import React from "react";
import { Message } from "@studyfind/components";
import { Box, Grid } from "@chakra-ui/react";

import StudyCardSmall from "molecules/StudyCardSmall";

function StudyGrid({ conditions, filteredStudies, handleAddCondition }) {
  return filteredStudies.length ? (
    <Grid gap="25px" templateColumns="1fr 1fr">
      {filteredStudies.map((study, index) => (
        <StudyCardSmall
          key={index}
          study={study}
          conditions={conditions}
          handleAddCondition={handleAddCondition}
        />
      ))}
    </Grid>
  ) : (
    <Box h="500px">
      <Message
        type="neutral"
        title="Find Studies"
        description="No studies to display. Try changing your search filters for better results!"
      />
    </Box>
  );
}

export default StudyGrid;
