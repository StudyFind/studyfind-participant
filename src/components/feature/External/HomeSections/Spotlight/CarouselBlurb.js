import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "components";
import { useDetectDevice } from "hooks";

function CarouselBlurb({ text, ...rest }) {
  const { title, desc, link } = text;
  const { isPhone } = useDetectDevice();

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="flex-start"
      justifySelf="center"
      {...rest}
    >
      <Text
        mb="10px"
        fontWeight="700"
        fontSize={isPhone ? "md" : "xl"}
        align="left"
      >
        {title}
      </Text>
      <Text>{desc}</Text>
      <Link
        style={{
          marginTop: "20px",
          alignSelf: isPhone ? "center" : "flex-end",
        }}
        to={link}
      >
        <Button colorScheme="blue" link>
          View more
        </Button>
      </Link>
    </Flex>
  );
}

export default CarouselBlurb;
