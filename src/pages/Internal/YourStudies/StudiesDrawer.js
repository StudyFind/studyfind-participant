import moment from "moment-timezone";

import { SideDrawer } from "@studyfind/components";

import Meetings from "./Meetings/Meetings";
import Messages from "./Messages/Messages";
import Reminders from "./Reminders/Reminders";
import Questions from "./Questions/Questions";

function ParticipantsDrawer({
  action,
  isOpen,
  study,
  participant,
  handleClose,
}) {
  const fakename = participant?.fakename;
  const timezone = participant?.timezone;

  const render = {
    meetings: action === "meetings" && <Meetings />,
    reminders: action === "reminders" && <Reminders />,
    messages: action === "messages" && <Messages />,
    questions: action === "questions" && (
      <Questions
        questions={study.questions}
        responses={participant.responses}
      />
    ),
  };

  return (
    <SideDrawer
      heading={action}
      subheading={`${fakename} (${moment.tz(timezone).zoneAbbr()})`}
      isOpen={isOpen}
      onClose={handleClose}
    >
      {render[action]}
    </SideDrawer>
  );
}

export default ParticipantsDrawer;
