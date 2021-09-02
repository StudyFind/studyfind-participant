import SectionWrapper from "../SectionWrapper";
import TeamHeader from "./TeamHeader";
import TeamMembers from "./TeamMembers";
import TeamPanels from "./TeamPanels";

function Team({ title, description, founders, panels }) {
  return (
    <SectionWrapper direction="column" spacing="80px">
      <TeamHeader title={title} description={description} />
      <TeamMembers founders={founders} />
      <TeamPanels panels={panels} />
    </SectionWrapper>
  );
}

export default Team;
