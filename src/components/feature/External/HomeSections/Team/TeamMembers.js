import { useDetectDevice } from "hooks";
import { SimpleGrid } from "@chakra-ui/react";
import TeamMember from "./TeamMember";

function TeamMembers({ founders }) {
  const { isDesktop, responsive } = useDetectDevice();

  return (
    <SimpleGrid spacing={isDesktop ? "10px" : "50px"} columns={responsive([1, 2, 3])} width="100%">
      {founders.map((founder, i) => (
        <TeamMember
          key={i}
          name={founder.name}
          image={founder.image}
          position={founder.position}
          description={founder.description}
        />
      ))}
    </SimpleGrid>
  );
}

export default TeamMembers;
