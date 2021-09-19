import { useParams, useHistory } from "react-router";
import { usePagination } from "hooks";

import { Flex, Heading, Box } from "@chakra-ui/react";
import { Message } from "@studyfind/components";

import StudiesRow from "./StudiesRow";

function YourStudies() {
  const {
    documents: studies,
    loading,
    // error,
    loadingMore,
    handleLoadMore,
    fetchedAll,
  } = usePagination();

  const history = useHistory();
  const { studyID, action } = useParams();

  const handleClose = () => {
    history.push(`/your-studies`);
  };

  const handleOpen = (studyID, action) => {
    history.push(`/your-studies/${studyID}/${action}`);
  };

  const isOpen = studyID && action;
  const enrolled = studies.filter((study) => user.enrolled.includes(study.id));

  if (!enrolled?.length) {
    return (
      <Box h="500px">
        <Message
          type="neutral"
          title="My Studies"
          description="You have not enrolled in any studies yet!"
        />
      </Box>
    );
  }

  return (
    <>
      <Flex justify="space-between" align="center" marginY="15px">
        <Heading fontSize="28px">My Studies</Heading>
      </Flex>
      <Box borderWidth="1px" rounded="md" overflow="hidden" bg="white">
        {enrolled?.map((study) => (
          <StudiesRow key={study.id} uid={user.id} study={study} />
        ))}
        <ParticipantsDrawer
          action={action}
          isOpen={isOpen}
          study={study}
          participant={selectedParticipant}
          handleClose={handleClose}
        />
      </Box>
    </>
  );
}

export default YourStudies;
