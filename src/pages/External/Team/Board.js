import { useColor, useDetectDevice } from "hooks";

import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";

import {
  Ayesha,
  Evans,
  Hannah,
  Reina,
  Romina,
  Suraj,
  Vir,
  Drawn_Ayesha,
  Drawn_Evans,
  Drawn_Hannah,
  Drawn_Reina,
  Drawn_Romina,
  Drawn_Suraj,
  Drawn_Vir,
} from "images";

import TeamMember from "components/feature/External/HomeSections/Team/TeamMember";

function Board() {
  const { responsive } = useDetectDevice();
  const background = useColor("white", "gray.900");

  return (
    <Box id="board" minHeight="100vh" background={background} padding="40px">
      <Heading
        color="blue.500"
        size="2xl"
        lineHeight="1.25"
        textAlign="left"
        marginLeft="70px"
        marginTop="20px"
        marginBottom="5px"
      >
        National Advisory Board
      </Heading>
      <Text
        align="left"
        fontSize="20px"
        marginLeft="70px"
        fontWeight="400"
        marginBottom="60px"
      >
        The diverse group of professionals that guide us in making a product
        researchers love
      </Text>
      <SimpleGrid columns={responsive([1, 2, 4])} spacingY="40px">
        <TeamMember
          image={Ayesha}
          drawnImage={Drawn_Ayesha}
          name="Ayesha Hameed"
          position="BioPharma Informatic"
          linkedinURL="https://www.linkedin.com/in/ayesha-hameed-20196a40/"
        />
        <TeamMember
          image={Evans}
          drawnImage={Drawn_Evans}
          name="Evans Pope"
          position="Cleveland Clinic"
          linkedinURL="https://www.linkedin.com/in/evans-d-pope-iii-ms-4839a118/"
        />
        <TeamMember
          image={Hannah}
          drawnImage={Drawn_Hannah}
          name="Hannah Lipper"
          position="University of Massachusetts"
          linkedinURL="https://www.linkedin.com/in/hannah-s-lipper-mph-she-her-2190a765/"
        />
        <TeamMember
          image={Reina}
          drawnImage={Drawn_Reina}
          name="Reina Factor"
          position="UCLA"
          linkedinURL="https://www.linkedin.com/in/reina-factor-5a5745202/"
        />
        <TeamMember
          image={Romina}
          drawnImage={Drawn_Romina}
          name="Romina Nejad"
          position="Stanford"
          linkedinURL="https://www.linkedin.com/in/romina-nejad/"
        />
        <TeamMember
          image={Suraj}
          drawnImage={Drawn_Suraj}
          name="Suraj Oomman"
          position="UNC-Chapel Hill"
          linkedinURL="https://www.linkedin.com/in/surajoomman/"
        />
        <TeamMember
          image={Vir}
          drawnImage={Drawn_Vir}
          name="Vir Mittal"
          position="SAP"
          linkedinURL="https://www.linkedin.com/in/vir-m-1b1981130/"
        />
      </SimpleGrid>
    </Box>
  );
}

export default Board;
