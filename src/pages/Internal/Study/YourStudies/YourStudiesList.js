import { Card } from "components";
import { VStack } from "@chakra-ui/react";

import YourStudiesItem from "./YourStudiesItem";

function YourStudiesList({ studies, handleOpen }) {
  return (
    <VStack spacing="20px">
      <Card width="100%">
        {studies.map((study) => (
          <YourStudiesItem
            key={study.id}
            study={study}
            handleOpen={handleOpen}
          />
        ))}
      </Card>
    </VStack>
  );
}

export default YourStudiesList;
