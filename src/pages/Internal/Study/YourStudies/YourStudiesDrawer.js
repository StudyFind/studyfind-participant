import SideDrawer from "components/complex/SideDrawer/SideDrawer";

import Meetings from "./Meetings/Meetings";
import Messages from "./Messages/Messages";
import Reminders from "./Reminders/Reminders";
import Questions from "./Questions/Questions";

function YourStudiesDrawer({ action, isOpen, study, handleClose }) {
  if (!isOpen) {
    return null;
  }

  const render = {
    meetings: action === "meetings" && <Meetings study={study} />,
    reminders: action === "reminders" && <Reminders study={study} />,
    messages: action === "messages" && <Messages />,
    questions: action === "questions" && (
      <Questions questions={study.questions} responses={study.participant.responses} />
    ),
  };

  return (
    <SideDrawer heading={action} subheading={study.id} isOpen={isOpen} onClose={handleClose}>
      {render[action]}
    </SideDrawer>
  );
}

export default YourStudiesDrawer;
