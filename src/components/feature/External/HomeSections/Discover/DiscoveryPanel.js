import { useDetectDevice } from "hooks";
import { Box, Flex, Image, Button, Text } from "@chakra-ui/react";
import { Link } from "components";

const buttonStyleProps = {
  background: "rgba(0, 0, 0, 0.4)",
  color: "white",
  paddingX: "30px",
  _hover: { background: "rgba(0, 0, 0, 0.6)" },
};

function DiscoveryPanel({ img, label, desc, link }) {
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
        <Link to={link} isWrapper>
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
        </Link>
        <Text textAlign="center" w={"180px"} color={"white"}>
          {desc}
        </Text>
      </Flex>
      <Image
        filter={"brightness(65%)"}
        w={isPhone && "100%"}
        marginTop={isPhone && "-50%"}
        src={img}
      />
    </Box>
  );
}

export default DiscoveryPanel;
