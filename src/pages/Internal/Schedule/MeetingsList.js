import { SimpleGrid } from "@chakra-ui/react";

import MeetingItemParticipant from "components/feature/MeetingItem/MeetingItemParticipant";

import { meeting as meetingMutator } from "database/mutations";

function MeetingsList({ meetings }) {
  return (
    <SimpleGrid spacing="10px" paddingY="10px">
      {meetings.map((meeting) => (
        <MeetingItemParticipant
          key={meeting.id}
          meeting={meeting}
          handleConfirm={() => meetingMutator.confirm(meeting.id)}
        />
      ))}
    </SimpleGrid>
  );
}

export default MeetingsList;
