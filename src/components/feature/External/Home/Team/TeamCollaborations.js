import TeamCollaboration from "./TeamCollaboration";

function TeamCollaborations({ collaborations }) {
  return collaborations.map((collaboration, i) => (
    <TeamCollaboration key={i} logo={collaboration.logo} sections={collaboration.sections} />
  ));
}

export default TeamCollaborations;
