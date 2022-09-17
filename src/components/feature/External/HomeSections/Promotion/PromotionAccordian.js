import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  VStack,
} from "@chakra-ui/react";
import PromotionAccordianItem from "./PromotionAccordianItem";

const PromotionAccordian = () => {
  return (
    <VStack py={5} w="100%" bg="#4FB3EB">
      {/* Headings */}
      <VStack align="center" textAlign="center" pb={5}>
        <Heading fontSize="sm" fontWeight="500">
          we exist because
        </Heading>
        <Heading fontSize="2xl">
          Communication, Coordination, and Collaboration
        </Heading>
        <Heading fontSize="sm" fontWeight="500">
          should not require separate tools
        </Heading>
      </VStack>
      {/* Accordian */}
      <Accordion allowMultiple w="100%" px="50">
        <PromotionAccordianItem
          title="Our Mission"
          desc="Our goal is to optimize the participant recruitment process for research studies by providing a means of connection and communication between researchers and research participants."
          borderBottom={false}
        />
        <PromotionAccordianItem
          title="Our Vision"
          desc="Our vision is to create a diversified clinical space by offering efficient recruitment services. We envision a world where participants and researchers use one platform for all their needs."
          borderBottom={true}
        />
      </Accordion>
    </VStack>
  );
};

export default PromotionAccordian;
