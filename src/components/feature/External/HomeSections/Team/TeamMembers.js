import { useDetectDevice } from "hooks";
import { SimpleGrid } from "@chakra-ui/react";
import TeamMember from "./TeamMember";

function TeamMembers({ founders }) {
  const { isPhone, responsive } = useDetectDevice();

  return (
    <SimpleGrid spacing={isPhone ? "50px" : "100px"} columns={responsive([1])}>
      {founders.map((founder, i) => (
        <TeamMember
          key={i}
          name={founder.name}
          image={founder.image}
          drawnImage={founder.drawnImage}
          position={founder.position}
          description={founder.description}
        />
      ))}
    </SimpleGrid>
  );
}

export default TeamMembers;
