import { useColor, useDetectDevice } from "hooks";

import { Box, SimpleGrid, Heading } from "@chakra-ui/react";

import Vir from "images/advisory/vir.png";
import Alexis from "images/advisory/alexis.png";
import Ayesha from "images/advisory/ayesha.png";
import Evans from "images/advisory/evans.png";
import Gabi from "images/advisory/gabi.png";
import Hannah from "images/advisory/hannah.png";
import Reina from "images/advisory/reina.png";
import Romina from "images/advisory/romina.png";
import Steven from "images/advisory/steven.png";
import Suraj from "images/advisory/suraj.png";
import Talia from "images/advisory/talia.png";

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
        textAlign="center"
        marginTop="20px"
        marginBottom="80px"
      >
        National Advisory Board
      </Heading>
      <SimpleGrid columns={responsive([1, 2, 4])} spacingY="40px">
        <TeamMember
          image={Alexis}
          name="Alexis Whitmire"
          position="Atlanta VA Medical Center"
          linkedinURL="https://www.linkedin.com/in/alexiswhitmire/"
        />
        <TeamMember
          image={Ayesha}
          name="Ayesha Hameed"
          position="BioPharma Informatic"
          linkedinURL="https://www.linkedin.com/in/ayesha-hameed-20196a40/"
        />
        <TeamMember
          image={Evans}
          name="Evans Pope"
          position="Cleveland Clinic"
          linkedinURL="https://www.linkedin.com/in/evans-d-pope-iii-ms-4839a118/"
        />
        <TeamMember
          image={Gabi}
          name="Gabrielle Schiller"
          position="Mount Sinai"
          linkedinURL="https://www.linkedin.com/in/gabrielle-schiller/"
        />
        <TeamMember
          image={Hannah}
          name="Hannah Lipper"
          position="University of Massachusetts"
          linkedinURL="https://www.linkedin.com/in/hannah-s-lipper-mph-she-her-2190a765/"
        />
        <TeamMember
          image={Reina}
          name="Reina Factor"
          position="UCLA"
          linkedinURL="https://www.linkedin.com/in/reina-factor-5a5745202/"
        />
        <TeamMember
          image={Romina}
          name="Romina Nejad"
          position="Stanford"
          linkedinURL="https://www.linkedin.com/in/romina-nejad/"
        />
        <TeamMember
          image={Steven}
          name="Steven Choi"
          position="ThreeWire"
          linkedinURL="https://www.linkedin.com/in/steven-choi-3b547973/"
        />
        <TeamMember
          image={Suraj}
          name="Suraj Oomman"
          position="UNC-Chapel Hill"
          linkedinURL="https://www.linkedin.com/in/surajoomman/"
        />
        <TeamMember
          image={Talia}
          name="Talia Korn"
          position="Mount Sinai"
          linkedinURL="https://www.linkedin.com/in/talia-korn-3a28b4132/"
        />
        <TeamMember
          image={Vir}
          name="Vir Mittal"
          position="SAP"
          linkedinURL="https://www.linkedin.com/in/vir-m-1b1981130/"
        />
      </SimpleGrid>
    </Box>
  );
}

export default Board;
