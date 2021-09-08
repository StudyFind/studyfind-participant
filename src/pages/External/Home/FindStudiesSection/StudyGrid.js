import React, { useState, useEffect } from "react";
import { Message } from "components";
import { Box, Grid } from "@chakra-ui/react";

import StudyCardSmallLandingPage from "molecules/StudyCardSmallLandingPage";

function StudyGrid({ conditions, filteredStudies, handleAddCondition }) {
  const [isCompact, setIsCompact] = useState(false);

  // identify if window is compact
  const handleWindowSizeChange = () => {
    if (window.innerWidth < 800) {
      setIsCompact(true);
    } else {
      setIsCompact(false);
    }
  };

  // check for window size change
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  // update if the window is compact
  useEffect(() => {
    handleWindowSizeChange();
  }, []);

  return filteredStudies.length ? (
    isCompact ? (
      <Grid gap="25px" templateColumns="1fr">
        {filteredStudies.map((study, index) => (
          <StudyCardSmallLandingPage
            key={index}
            study={study}
            conditions={conditions}
            handleAddCondition={handleAddCondition}
          />
        ))}
      </Grid>
    ) : (
      <Grid gap="25px" templateColumns="1fr 1fr">
        {filteredStudies.map((study, index) => (
          <StudyCardSmallLandingPage
            key={index}
            study={study}
            conditions={conditions}
            handleAddCondition={handleAddCondition}
          />
        ))}
      </Grid>
    )
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
