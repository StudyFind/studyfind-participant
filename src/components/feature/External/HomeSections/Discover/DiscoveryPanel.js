import { useDetectDevice } from "hooks";
import { Box, Flex, Image, Button, Text } from "@chakra-ui/react";

const buttonStyleProps = {
  background: "rgba(0, 0, 0, 0.4)",
  color: "white",
  paddingX: "30px",
  _hover: { background: "rgba(0, 0, 0, 0.6)" },
};

function DiscoveryPanel({ img, label, desc, textColor }) {
  const { isPhone } = useDetectDevice();

  return (
    <Box
      position="relative"
      w={isPhone && "100%"}
      h={isPhone && "300px"}
      overflow="hidden"
    >
      <Flex
        position="absolute"
        bottom={!isPhone && "25%"}
        w="100%"
        h={isPhone && "100%"}
        align="center"
        direction="column"
        justify="center"
        zIndex="1"
      >
        <Button {...buttonStyleProps}>
          <Text
            fontWeight="700"
            fontSize="lg"
            textTransform={"uppercase"}
            color="white"
          >
            {label}
          </Text>
        </Button>
        <Text textAlign="center" width="50%" color={textColor}>
          {desc}
        </Text>
      </Flex>
      <Image
        w={isPhone && "100%"}
        marginTop={isPhone && "-50%"}
        filter={isPhone && "auto"}
        blur={isPhone && "2px"}
        src={img}
      />
    </Box>
  );
}

export default DiscoveryPanel;
