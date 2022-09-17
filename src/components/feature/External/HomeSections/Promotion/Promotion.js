import {
  Flex,
  Text,
  AspectRatio,
  SimpleGrid,
  Box,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { useDetectDevice } from "hooks";
import AnimatedPictureLogo from "./AnimatedPictureLogo";
import PromotionAccordian from "./PromotionAccordian";

function Promotion({ features }) {

  const { isPhone, isTablet } = useDetectDevice();

  return (
    <>
      <SimpleGrid
        columns={isPhone || isTablet ? 1 : 2}
        py={50}
        row={isPhone || isTablet ? 2 : 1}
      >
        <AnimatedPictureLogo />
        <VStack justify="center" h="100%" align={isPhone ? "center" : "flex-start"} spacing={10}>
          {features.map((item) => {
            const { title, desc } = item;
            const titleSplit = title.split(" "); // Splitting to keep each word on its own line
            return (
              <VStack
                align={isPhone ? "center" : "flex-start"}
                spacing={1}
                key={title}
              >
                <Heading color="blue.500" fontSize="2xl">
                  {titleSplit[0]}
                </Heading>
                <Heading color="blue.500" fontSize="2xl">
                  {titleSplit[1]}
                </Heading>
                <Text textAlign={isPhone ? "center" : "left"}>{desc}</Text>
              </VStack>
            );
          })}
        </VStack>
      </SimpleGrid>
    </>
  );
}

export default Promotion;
