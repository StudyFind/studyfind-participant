import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';

const PromotionAccordianItem = ({ title, desc, borderBottom }) => {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton
          outline={"0px solid white"}
          borderTop={"1px solid white"}
          borderBottom={borderBottom ? "1px solid white" : "0px solid white"}
        >
          <Box fontWeight="600" flex="1" textAlign="center">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel textAlign="center" pb={4} py={10}>
        {desc}
      </AccordionPanel>
    </AccordionItem>
  );
};

export default PromotionAccordianItem;