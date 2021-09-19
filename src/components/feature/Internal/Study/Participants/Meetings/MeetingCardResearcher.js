import { Flex } from "@chakra-ui/react";

import MeetingDetails from "./MeetingDetails";

import Wrapper from "../Wrapper";
import Status from "../Status";
import Buttons from "../Buttons";

function MeetingCardResearcher({ meeting, handleEdit, handleDelete }) {
  return (
    <Wrapper>
      <MeetingDetails name={meeting.name} time={meeting.time} />
      <Flex justify="space-between" align="center" marginTop="16px">
        <Buttons
          link={meeting.link}
          confirmed={meeting.confirmedByParticipant}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        <Status confirmed={meeting.confirmedByParticipant} />
      </Flex>
    </Wrapper>
  );
}

export default MeetingCardResearcher;
