import { useDetectDevice } from "hooks";
import { SimpleGrid } from "@chakra-ui/react";
import TeamPanel from "./TeamPanel";

function TeamPanels({ panels }) {
  const { isPhone, responsive } = useDetectDevice();

  return (
    <SimpleGrid
      alignItems="center"
      spacing={isPhone ? "20px" : "60px"}
      columns={responsive([1, 2, 3])}
      width="100%"
    >
      {panels.map((panel, i) => (
        <TeamPanel
          key={i}
          title={panel.title}
          colorScheme={panel.colorScheme}
          description={panel.description}
          buttonText={panel.buttonText}
          buttonLink={panel.buttonLink}
        />
      ))}
    </SimpleGrid>
  );
}

export default TeamPanels;
