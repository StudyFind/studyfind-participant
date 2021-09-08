import { Box } from "@chakra-ui/react";

function CarouselSlide({ content, width }) {
  return (
    <Box
      display="inline"
      textAlign="center"
      width={width}
      height="100%"
      padding="20px"
      margin="auto"
      float="left"
      overflowY="visible"
      whiteSpace="normal"
    >
      {content}
    </Box>
  );
}

export default CarouselSlide;
