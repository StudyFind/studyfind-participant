import { useColor, useDetectDevice } from "hooks";
import { Box, Stack, Heading } from "@chakra-ui/react";

import Emory from "images/collaborations/emory.png";
import SBU from "images/collaborations/sbu.png";
import GaTech from "images/collaborations/gatech.png";
import Stanford from "images/collaborations/stanford.png";

import TeamCollaborations from "components/feature/External/HomeSections/Team/TeamCollaborations";

function Collaborations() {
  const { isPhone } = useDetectDevice();
  const background = useColor("gray.100", "gray.800");

  const collaborations = [
    {
      logo: Emory,
      sections: [
        {
          title: "Emory Entrepreneurial Excellerator (EEE)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
        {
          title: "Emory Biotech Consulting Club (EBCC)",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
      ],
    },
    {
      logo: GaTech,
      sections: [
        {
          title: "Computer Science Junior Design Capstone",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
      ],
    },
    {
      logo: SBU,
      sections: [
        {
          title: "CSTEP Fellowship Program",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
      ],
    },
    {
      logo: Stanford,
      sections: [
        {
          title: "Software Pilot",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        },
      ],
    },
  ];

  return (
    <Box
      id="collaborations"
      background={background}
      padding="40px"
      paddingBottom="60px"
    >
      <Heading
        color="blue.500"
        size="2xl"
        lineHeight="1.25"
        textAlign="left"
        marginLeft="70px"
        marginTop="20px"
        marginBottom="40px"
      >
        Collaborations
      </Heading>
      <Stack
        direction={isPhone ? "column" : "row"}
        spacing="150px"
        justify="center"
        align="center"
      >
        <TeamCollaborations collaborations={collaborations} />
      </Stack>
    </Box>
  );
}

export default Collaborations;
