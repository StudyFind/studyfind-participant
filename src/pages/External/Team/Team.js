import { useColor } from "hooks";

import { Box, Icon, Text, Divider, HStack } from "@chakra-ui/react";
import { Link } from "components";
import { FaChevronLeft } from "react-icons/fa";

import CoFounder from "./CoFounder";
import Interns from "./Interns";
import Board from "./Board";
import Collaborations from "./Collaborations";
import Footer from "../../../components/feature/External/HomeSections/Footer/Footer.js";

function Team() {
  const dividerColor = useColor("gray.200", "gray.600");

  const background = useColor("white", "gray.900");
  const borderColor = useColor("gray.200", "gray.700");

  return (
    <Box>
      <HStack
        justify="flex-start"
        padding="25px"
        position="fixed"
        background={background}
        top="0"
        width="100%"
        boxShadow="sm"
        borderBottomWidth="1px"
        borderBottomColor={borderColor}
      >
        <Link to="/">
          <HStack
            spacing="5px"
            align="center"
            color="blue.500"
            _hover={{ textDecoration: "underline" }}
            onClick={() => window.scrollTo({ top: 0 })}
          >
            <Icon as={FaChevronLeft} fontSize="12px" /> <Text>Return home</Text>
          </HStack>
        </Link>
      </HStack>
      <CoFounder />
      <Interns />
      <Divider borderColor={dividerColor} />
      <Board />
      <Divider borderColor={dividerColor} />
      <Collaborations />
      <Footer
        links={{
          linkedin: "https://www.linkedin.com/company/studyfind/",
          instagram: "https://www.instagram.com/studyfindco",
          facebook: "https://www.facebook.com/studyfindco",
        }}
      />
    </Box>
  );
}

export default Team;
