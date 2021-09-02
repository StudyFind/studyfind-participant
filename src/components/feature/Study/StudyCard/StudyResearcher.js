import { useColor, useDetectDevice } from "hooks";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

function StudyResearcher({ researcher }) {
  const { isPhone } = useDetectDevice();

  const avatar = useColor("blue.500", "blue.700");
  const background = useColor("white", "gray.900");
  const borderColor = useColor("gray.200", "gray.700");

  return (
    <Box>
      <Flex
        rounded="md"
        gridGap="10px"
        align="flex-end"
        overflow="hidden"
        padding="12px"
        borderWidth="1px"
        borderColor={borderColor}
        background={background}
        width={isPhone && "100%"}
      >
        <Avatar name={researcher?.name} color="white" background={avatar} />
        <Box>
          <Text isTruncated fontWeight="500">
            {researcher?.name}
          </Text>
          <Text isTruncated color="gray.500">
            {researcher?.email}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default StudyResearcher;
