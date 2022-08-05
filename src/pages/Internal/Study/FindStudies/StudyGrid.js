import { Message } from "components";
import { Box, SimpleGrid } from "@chakra-ui/react";

import StudyCardSmall from "components/feature/Study/StudyCard/StudyCardSmallParticipant";
import { useDetectDevice } from "hooks";
import { participant } from "database/mutations";
import { useContext } from "react";
import { UserContext } from "context";

import { auth } from "database/firebase";
import { useRouteMatch } from "react-router-dom";

function StudyGrid({ conditions, filteredStudies, handleAddCondition }) {
  const { responsive } = useDetectDevice();
  const user = useContext(UserContext);

  return filteredStudies.length ? (
    <SimpleGrid
      spacing="25px"
      align="flex-start"
      columns={responsive([1, 2, 2])}
    >
      {filteredStudies.map((study) => (
        <StudyCardSmall
          key={study.id}
          study={study}
          conditions={conditions}
          handleAddCondition={handleAddCondition}
          handleBookmark={
            user.saved.includes(study.id)
              ? () => participant.removeStudyFromSaved(user.id, study.id)
              : () => participant.appendStudyToSaved(user.id, study.id)
          }
          detailsRedirectLink={`/dashboard/study/${study.id}/details`}
          enrollRedirectLink={`/dashboard/study/${study.id}/screening`}
          hasParticipantEnrolled={user.enrolled.includes(study.id)}
          hasParticipantSaved={user.saved.includes(study.id)}
          isParticipantVerified={auth.currentUser.emailVerified}
        />
      ))}
    </SimpleGrid>
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
