import { Card } from "components";
import { Image, Heading, Text, Stack, VStack } from "@chakra-ui/react";
import { useDetectDevice } from "hooks";

function TeamCollaboration({ logo, sections }) {
  const { isPhone } = useDetectDevice();

  return (
    // <Card padding="40px" width="100%">
    //   <Stack direction={isPhone ? "column" : "row"} spacing="40px" align="flex-start">
    //     <Image borderRadius="5px" height="150px" width="150px" src={logo} />
    //     <VStack spacing="25px">
    //       {sections?.map((section, i) => (
    //         <VStack key={i} align="flex-start">
    //           <Heading size="md">{section.title}</Heading>
    //           <Text color="gray.500">{section.description}</Text>
    //         </VStack>
    //       ))}
    //     </VStack>
    //   </Stack>
    // </Card>
    <Image borderRadius="5px" height="150px" width="150px" src={logo} />
  );
}

export default TeamCollaboration;
