import { useColor, useDetectDevice } from "hooks";

import { Box, SimpleGrid, Heading, VStack } from "@chakra-ui/react";

import David from "images/interns/david.jpeg";
import Gustavo from "images/interns/gustavo.png";
import Jeremy from "images/interns/jeremy.png";
import Jonathon from "images/interns/jonathon.jpeg";
import Keely from "images/interns/keely.png";
import Michael from "images/interns/michael.png";
import Wendy from "images/interns/wendy.jpeg";
import Wenkai from "images/interns/wenkai.png";
import Yuyao from "images/interns/yuyao.png";
import Mikolaj from "images/interns/mikolaj.jpg";
import Zeil from "images/interns/zeil.jpg";
import Mileen from "images/interns/mileen.jpg";
import Natalie from "images/interns/natalie.jpg";
import Eric from "images/interns/eric.jpg";
import Jason from "images/interns/jason.jpg";
import Nikita from "images/interns/nikita.jpg";
import Liang from "images/interns/liang.jpg";
import Sundari from "images/interns/sundari.jpg";
import Sandra from "images/interns/sandra.jpeg";
import Randy from "images/interns/randy.png";
import Ivan from "images/interns/ivan.png";
import Etna from "images/interns/etna.png";
import Biraj from "images/interns/biraj.png";
import Brandon from "images/interns/brandon.png";
// import Placeholder from "images/interns/placeholder.png";

import TeamMember from "components/feature/External/HomeSections/Team/TeamMember";

function Interns() {
  const { responsive } = useDetectDevice();
  const background = useColor("gray.100", "gray.800");

  return (
    <Box id="interns" minHeight="100vh" background={background} padding="40px">
      <Heading color="blue.500" size="2xl" lineHeight="1.25" textAlign="center" marginY="20px">
        Our Interns
      </Heading>
      <VStack align="stretch">
        <Box>
          <Heading align="center" size="lg" marginBottom="60px">
            Current
          </Heading>
          <SimpleGrid columns={responsive([1, 2, 4])} spacingY="40px">
            <TeamMember
              image={Keely}
              name="Keely Culbertson"
              position="Software Developer"
              linkedinURL="https://www.linkedin.com/in/keely-culbertson/"
            />
            <TeamMember
              image={David}
              name="David Chen"
              position="Software Developer"
              linkedinURL="https://www.linkedin.com/in/david-chen-105ba9158/"
            />
            <TeamMember
              image={Jeremy}
              name="Jeremy Webb"
              position="Software Developer"
              linkedinURL="https://www.linkedin.com/in/jwebb45/"
            />
            <TeamMember
              image={Jonathon}
              name="Jonathon Sisson"
              position="Software Developer"
              linkedinURL="https://www.linkedin.com/in/jonathon-sisson/"
            />
            <TeamMember
              image={Eric}
              name="Eric Park"
              position="Jr. Software Developer"
              linkedinURL="https://www.linkedin.com/in/eric-park-1a03421b7/"
            />
            <TeamMember
              image={Jason}
              name="Jason Ji"
              position="Jr. Software Developer"
              linkedinURL="https://www.linkedin.com/in/jason-ji-566673166/"
            />
            <TeamMember
              image={Ivan}
              name="Ivan Yau"
              position="Jr. Software Developer"
              linkedinURL="https://www.linkedin.com/in/ivan-yau/"
            />
            <TeamMember
              image={Etna}
              name="Etna Ozkara"
              position="Jr. Software Developer"
              linkedinURL="https://www.linkedin.com/in/etna-ozkara-1a876b204/"
            />
            <TeamMember
              image={Yuyao}
              name="Yuyao Wang"
              position="Data Scientist"
              linkedinURL="https://www.linkedin.com/in/yuyao-wang-march/"
            />
            <TeamMember
              image={Biraj}
              name="Biraj Ghimire"
              position="SBU-CSTEP Fellow"
              linkedinURL="https://www.linkedin.com/in/biraj-ghimire-4b01891b1/"
            />
            <TeamMember
              image={Brandon}
              name="Brandon Banarsi"
              position="SBU-CSTEP Fellow"
              linkedinURL="https://www.linkedin.com/in/brandon-banarsi/"
            />
            <TeamMember
              image={Sandra}
              name="Sandra Mustopa"
              position="Marketing and Technical Writing"
              linkedinURL="https://www.linkedin.com/in/sandra-mustopa7090-graphicdesigner/"
            />
            <TeamMember
              image={Randy}
              name="Randy Erickson"
              position="Marketing and Technical Writing"
              linkedinURL="https://www.linkedin.com/in/randy-erickson-2138878a/"
            />
          </SimpleGrid>
        </Box>
        <Box>
          <Heading align="center" size="lg" marginTop="40px" marginBottom="60px">
            Alumni
          </Heading>
          <SimpleGrid columns={responsive([1, 2, 4])} spacingY="40px">
            <TeamMember
              image={Mileen}
              name="Mileen Meyer"
              position="Marketing"
              linkedinURL="https://www.linkedin.com/in/mileenmeyer/"
            />
            <TeamMember
              image={Natalie}
              name="Natalie Merizalde"
              position="Marketing"
              linkedinURL="https://www.linkedin.com/in/natalie-m-115095136/"
            />
            <TeamMember
              image={Nikita}
              name="Nikita Kute"
              position="Research"
              linkedinURL="https://www.linkedin.com/in/nikita-kute-bds-mph/"
            />
            <TeamMember
              image={Mikolaj}
              name="Mikolaj Figurski"
              position="Software Developer"
              linkedinURL="https://www.linkedin.com/in/mikolaj-figurski-1257a7149/"
            />
            <TeamMember
              image={Zeil}
              name="Zeil Ren"
              position="Software Developer"
              linkedinURL="https://www.linkedin.com/in/ziyaoren/"
            />
            <TeamMember
              image={Sundari}
              name="Sundari Arunarasu"
              position="Backend Developer"
              linkedinURL="https://www.linkedin.com/in/sivasomasundari-arunarasu-6299131a6/"
            />
            <TeamMember
              image={Gustavo}
              name="Gustavo Fonseca"
              position="Jr. Software Developer"
              linkedinURL="https://www.linkedin.com/in/gustavo-fonseca-a69b55135/"
            />
            <TeamMember
              image={Michael}
              name="Michael Albo"
              position="Jr. Software Developer"
              linkedinURL="https://www.linkedin.com/in/michael-albo-55b74b196/"
            />
            <TeamMember
              image={Wenkai}
              name="Wenkai Zheng"
              position="Sr. Software Developer"
              linkedinURL="https://www.linkedin.com/in/wenkai-zheng/"
            />
            <TeamMember
              image={Wendy}
              name="Wendy Mo"
              position="Sr. Software Developer"
              linkedinURL="https://www.linkedin.com/in/weiting-mo-82974b138/"
            />
            <TeamMember image={Liang} name="Liang Chen" position="Software Developer" />
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}

export default Interns;
