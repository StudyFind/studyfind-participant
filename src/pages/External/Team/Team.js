import { useColor } from "hooks";

import { Box, Icon, Text, Divider, HStack } from "@chakra-ui/react";
import { Link } from "components";
import { FaChevronLeft } from "react-icons/fa";

import Interns from "./Interns";
import Board from "./Board";
import Collaborations from "./Collaborations";

function Team() {
  const dividerColor = useColor("gray.200", "gray.600");

  return (
    <Box>
      <HStack justify="flex-start" padding="30px">
        <Link to="/">
          <HStack
            spacing="5px"
            align="center"
            color="blue.500"
            _hover={{ textDecoration: "underline" }}
          >
            <Icon as={FaChevronLeft} fontSize="12px" /> <Text>Return home</Text>
          </HStack>
        </Link>
      </HStack>
      <Interns />
      <Divider borderColor={dividerColor} />
      <Board />
      <Divider borderColor={dividerColor} />
      <Collaborations />
    </Box>
  );
}

export default Team;
