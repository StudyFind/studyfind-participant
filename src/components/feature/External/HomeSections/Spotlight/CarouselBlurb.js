import { Button, Flex, Heading, Text } from "@chakra-ui/react";
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
      <Heading fontWeight="700" fontSize={isPhone ? "xl" : "3xl"} align="left">
        {title}
      </Heading>
      <Heading mb={"40px"} fontWeight="500" fontSize={isPhone ? "xl" : "2xl"}>
        Community Survey & Registry
      </Heading>
      <Text>{desc}</Text>
      <Text w={'100%'} textAlign={isPhone && "center"} mt={"40px"}>
        Take this <strong>5 minute</strong> survey and join our registry:
      </Text>
      <Link
        style={{
          marginTop: "40px",
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
