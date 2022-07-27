import { useColor, useDetectDevice } from "hooks";

import { Box, SimpleGrid, Heading, VStack, Text } from "@chakra-ui/react";

import {
  Alexander,
  Amisha,
  Andrew,
  ChristianJ,
  Emma,
  Erick,
  Etna,
  Isabella,
  Joshua,
  Kayla,
  Liz,
  Randy,
  Sheyla,
  Ting,
  Tomoma,
  Xiren,
  Yvonne,
  Drawn_Alexander,
  Drawn_Amisha,
  Drawn_Andrew,
  Drawn_Christian,
  Drawn_Emma,
  Drawn_Erick,
  Drawn_Etna,
  Drawn_Isabella,
  Drawn_Joshua,
  Drawn_Kayla,
  Drawn_Liz,
  Drawn_Randy,
  Drawn_Sheyla,
  Drawn_Ting,
  Drawn_Tomoma,
  Drawn_Xiren,
  Drawn_Yvonne,
  Aakash,
  Aidan,
  Ameet,
  Ayushi,
  Biraj,
  BrandonB,
  BrandonL,
  ChristianA,
  Caitlin,
  David,
  Deandre,
  Drew,
  Eric,
  Gustavo,
  Harini,
  Ivan,
  Jason,
  Jeremy,
  Jihao,
  Jonathon,
  Kathrin,
  Keely,
  Liang,
  Michael,
  Mikolaj,
  NatalieH,
  NatalieM,
  Nikita,
  Placeholder,
  Ruochen,
  Sandra,
  Tea,
  Urvi,
  Wendy,
  Wenkai,
  Yuyao,
  Zeil,
  Drawn_Aakash,
  Drawn_Aidan,
  Drawn_Ameet,
  Drawn_Ayushi,
  Drawn_Biraj,
  Drawn_BrandonB,
  Drawn_BrandonL,
  Drawn_ChristianA,
  Drawn_David,
  Drawn_Deandre,
  Drawn_Eric,
  Drawn_Gustavo,
  Drawn_Harini,
  Drawn_Ivan,
  Drawn_Jason,
  Drawn_Jeremy,
  Drawn_Jihao,
  Drawn_Jonathon,
  Drawn_Kathrin,
  Drawn_Keely,
  Drawn_Liang,
  Drawn_Michael,
  Drawn_Mikolaj,
  Drawn_NatalieM,
  Drawn_Nikita,
  Drawn_Ruochen,
  Drawn_Sandra,
  Drawn_Tea,
  Drawn_Urvi,
  Drawn_Wendy,
  Drawn_Wenkai,
  Drawn_Yuyao,
  Drawn_Zeil,
} from "images";

import TeamMember from "components/feature/External/HomeSections/Team/TeamMember";

function Interns() {
  const { responsive } = useDetectDevice();
  const background = useColor("gray.100", "gray.800");

  return (
    <Box id="interns" minHeight="100vh" background={background} padding="40px">
      <Heading
        color="blue.500"
        size="2xl"
        lineHeight="1.25"
        textAlign="left"
        marginLeft="70px"
      >
        Our Interns
      </Heading>
      <VStack align="stretch">
        <Box>
          <Text
            align="left"
            fontSize="24px"
            fontWeight="400"
            marginLeft="70px"
            marginBottom="60px"
          >
            The talented individuals responsible for the day-to-day operations
            at StudyFind
          </Text>
          <SimpleGrid columns={responsive([1, 2, 4])} spacingY="40px">
            <TeamMember
              image={Alexander}
              drawnImage={Drawn_Alexander}
              name="Alexander Zhu"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/alexander-zhu-129b49237/"
            />
            <TeamMember
              image={Amisha}
              drawnImage={Drawn_Amisha}
              name="Amisha Papneja"
              position="Marketing and Technical Writing Intern"
              linkedinURL="https://www.linkedin.com/in/amisha-papneja-a28946197/"
            />
            <TeamMember
              image={ChristianJ}
              drawnImage={Drawn_Christian}
              name="Christian Johnson"
              position="Executive Assistant"
              linkedinURL="https://www.linkedin.com/in/christianijohnson/"
            />
            <TeamMember
              image={Emma}
              drawnImage={Drawn_Emma}
              name="Emma Chestnut"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/emma-chestnut-4821b9235/"
            />
            <TeamMember
              image={Erick}
              drawnImage={Drawn_Erick}
              name="Erick Gulyan"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/erick-gulyan-84b957234/"
            />
            <TeamMember
              image={Etna}
              drawnImage={Drawn_Etna}
              name="Etna Ozkara"
              position="Automation Engineer Lead"
              linkedinURL="https://www.linkedin.com/in/etna-ozkara-1a876b204"
            />
            <TeamMember
              image={Isabella}
              drawnImage={Drawn_Isabella}
              name="Isabella Santos"
              position="Marketing and Technical Writing Intern"
              linkedinURL="https://www.linkedin.com/in/isabella-abreu-stubbs-79616b225"
            />
            <TeamMember
              image={Kayla}
              drawnImage={Drawn_Kayla}
              name="Kayla Lin"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/kayla-s-lin/"
            />
            <TeamMember
              image={Liz}
              drawnImage={Drawn_Liz}
              name="Liz Nolan"
              position="Graphic Design Intern"
            />
            <TeamMember
              image={Sheyla}
              drawnImage={Drawn_Sheyla}
              name="Sheyla Torres"
              position="UI/UX Design Intern"
              linkedinURL="https://www.linkedin.com/in/sheyla-torres"
            />
            <TeamMember
              image={Ting}
              drawnImage={Drawn_Ting}
              name="Ting Vivian Hsuan"
              position="Executive Assistant"
              linkedinURL="https://www.linkedin.com/in/ting-hsuan-lee-3a022022a/"
            />
            <TeamMember
              image={Xiren}
              drawnImage={Drawn_Xiren}
              name="Xiren Qu"
              position="Marketing and Technical Writing Intern"
              linkedinURL="https://www.linkedin.com/in/xiren-qu-881712239"
            />
            <TeamMember
              image={Yvonne}
              drawnImage={Drawn_Yvonne}
              name="Yvonne Birrer"
              position="Marketing and Technical Writing Intern"
              linkedinURL="https://www.linkedin.com/in/yvonne-birrer-a7900319a/"
            />
          </SimpleGrid>
        </Box>
        <Box>
          <Heading
            align="left"
            fontSize="32px"
            marginLeft="70px"
            marginTop="40px"
            marginBottom="20px"
          >
            Alumni
          </Heading>
          <SimpleGrid columns={responsive([1, 2, 4])} spacingY="40px">
            <TeamMember
              image={Aakash}
              drawnImage={Drawn_Aakash}
              name="Aakash Parekh"
              position="Cybersecurity Engineer Intern"
              linkedinURL="https://www.linkedin.com/in/aakash-k-parekh/"
            />
            <TeamMember
              image={Aidan}
              drawnImage={Drawn_Aidan}
              name="Aidan Carney"
              position="Marketing and Motion Graphics Intern"
              linkedinURL="https://www.linkedin.com/in/aidan-carney-b62310208/"
            />
            <TeamMember
              image={Ameet}
              drawnImage={Drawn_Ameet}
              name="Ameet Rahegaonkar"
              position="Cybersecurity Engineer Intern"
              linkedinURL="https://www.linkedin.com/in/ameet-rahegaonkar-5b1782114"
            />
            <TeamMember
              image={Andrew}
              drawnImage={Drawn_Andrew}
              name="Andrew Watson"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/andrew-watson-dev/"
            />
            <TeamMember
              image={Ayushi}
              drawnImage={Drawn_Ayushi}
              name="Ayushi Agarwal"
              position="Marketing Intern"
              linkedinURL="https://www.linkedin.com/in/ayushiaga"
            />
            <TeamMember
              image={Biraj}
              drawnImage={Drawn_Biraj}
              name="Biraj Ghimire"
              position="SBU-CSTEP Fellow"
              linkedinURL="https://www.linkedin.com/in/biraj-ghimire-4b01891b1/"
            />
            <TeamMember
              image={BrandonB}
              drawnImage={Drawn_BrandonB}
              name="Brandon Banarsi"
              position="SBU-CSTEP Fellow"
              linkedinURL="https://www.linkedin.com/in/brandon-banarsi/"
            />
            <TeamMember
              image={BrandonL}
              drawnImage={Drawn_BrandonL}
              name="Brandon Lang"
              position="Marketing and Motion Graphics Intern"
              linkedinURL="https://www.linkedin.com/in/brandonmlang/"
            />
            <TeamMember
              image={Caitlin}
              drawnImage={Placeholder}
              name="Caitlin Sau"
              position="Grant Writing Intern"
              linkedinURL="https://www.linkedin.com/in/caitlin-sau-322586225/"
            />
            <TeamMember
              image={ChristianA}
              drawnImage={Drawn_ChristianA}
              name="Christian Armstrong"
              position="Cybersecurity Engineer Intern"
              linkedinURL="https://www.linkedin.com/in/christian-armstrong-005b8b1b2/"
            />
            <TeamMember
              image={David}
              drawnImage={Drawn_David}
              name="David Chen"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/david-chen-105ba9158/"
            />
            <TeamMember
              image={Deandre}
              drawnImage={Drawn_Deandre}
              name="Deandre Davis"
              position="Human Resources Intern"
              linkedinURL="https://www.linkedin.com/in/deandre-davis-20a662226/"
            />
            <TeamMember
              image={Drew}
              drawnImage={Placeholder}
              name="Drew Haaga"
              position="Technical Sales Intern"
              linkedinURL="https://www.linkedin.com/in/drew-haaga6/"
            />
            <TeamMember
              image={Eric}
              drawnImage={Drawn_Eric}
              name="Eric Park"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/eric-park-1a03421b7/"
            />
            <TeamMember
              image={Gustavo}
              drawnImage={Drawn_Gustavo}
              name="Gustavo Fonseca"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/gustavo-fonseca-a69b55135/"
            />
            <TeamMember
              image={Harini}
              drawnImage={Drawn_Harini}
              name="Harini Prakash"
              position="Technical Sales Intern"
              linkedinURL="https://www.linkedin.com/in/harini-prakash-070632204"
            />
            <TeamMember
              image={Ivan}
              drawnImage={Drawn_Ivan}
              name="Ivan Yau"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/ivan-yau/"
            />
            <TeamMember
              image={Jason}
              drawnImage={Drawn_Jason}
              name="Jason Ji"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/jason-ji-566673166/"
            />
            <TeamMember
              image={Jeremy}
              drawnImage={Drawn_Jeremy}
              name="Jeremy Webb"
              position="Software Developer"
              linkedinURL="https://www.linkedin.com/in/jwebb45/"
            />
            <TeamMember
              image={Jihao}
              drawnImage={Drawn_Jihao}
              name="Jihao Zhao"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/jiahao-z-436436183/"
            />
            <TeamMember
              image={Jonathon}
              drawnImage={Drawn_Jonathon}
              name="Jonathon Sisson"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/jonathon-sisson/"
            />
            <TeamMember
              image={Joshua}
              drawnImage={Drawn_Joshua}
              name="Joshua Matias"
              position="Human Resources Intern"
              linkedinURL="https://www.linkedin.com/in/joshua-matias-32429617a"
            />
            <TeamMember
              image={Kathrin}
              drawnImage={Drawn_Kathrin}
              name="Kathrin Spendier"
              position="Technical Sales Intern"
              linkedinURL="https://www.linkedin.com/in/kathrin-spendier-1ks/"
            />
            <TeamMember
              image={Keely}
              drawnImage={Drawn_Keely}
              name="Keely Culbertson"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/keely-culbertson/"
            />
            <TeamMember
              image={Placeholder}
              drawnImage={Placeholder}
              name="Kunal Suri"
              position="Software Developer Intern"
            />
            <TeamMember
              image={Placeholder}
              drawnImage={Placeholder}
              name="Kyle Bronson"
              position="Technical Sales Intern"
            />
            <TeamMember
              image={Liang}
              drawnImage={Drawn_Liang}
              name="Liang Chen"
              position="Software Developer Intern"
            />
            <TeamMember
              image={Michael}
              drawnImage={Drawn_Michael}
              name="Michael Albo"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/michael-albo-55b74b196/"
            />
            <TeamMember
              image={Placeholder}
              drawnImage={Placeholder}
              name="Mileen Meyer"
              position="Marketing Intern"
            />
            <TeamMember
              image={Mikolaj}
              drawnImage={Drawn_Mikolaj}
              name="Mikolaj Figurski"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/mikolaj-figurski-1257a7149/"
            />
            <TeamMember
              image={NatalieH}
              drawnImage={Placeholder}
              name="Natalie Huitron"
              position="Grant Writing Team"
              linkedinURL="https://www.linkedin.com/in/natalie-huitron-31b036219/"
            />
            <TeamMember
              image={NatalieM}
              drawnImage={Drawn_NatalieM}
              name="Natalie Merizalde"
              position="Marketing Intern"
              linkedinURL="https://www.linkedin.com/in/natalie-m-115095136/"
            />
            <TeamMember
              image={Nikita}
              drawnImage={Drawn_Nikita}
              name="Nikita Kute"
              position="Data Analyst"
              linkedinURL="https://www.linkedin.com/in/nikita-kute-bds-mph/"
            />
            <TeamMember
              image={Randy}
              drawnImage={Drawn_Randy}
              name="Randy Erickson"
              position="Marketing and Technical Writing"
              linkedinURL="https://www.linkedin.com/in/randy-erickson-2138878a/"
            />
            <TeamMember
              image={Ruochen}
              drawnImage={Drawn_Ruochen}
              name="Ruochen Kong"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/ruochen-kong-b96aa7222/"
            />
            <TeamMember
              image={Sandra}
              drawnImage={Drawn_Sandra}
              name="Sandra Mustopa"
              position="Marketing and Technical Writing Intern"
              linkedinURL="https://www.linkedin.com/in/sandra-mustopa7090-graphicdesigner/"
            />
            <TeamMember
              image={Tea}
              drawnImage={Drawn_Tea}
              name="Tea Charlton"
              position="Marketing and Technical Writing Intern"
              linkedinURL="https://www.linkedin.com/in/tea-charlton-2699b5213/"
            />
            <TeamMember
              image={Tomoma}
              drawnImage={Drawn_Tomoma}
              name="Tomoma Hayashi"
              position="Marketing and Technical Writing Intern"
              linkedinURL="https://www.linkedin.com/in/tomoma-hayashi"
            />
            <TeamMember
              image={Urvi}
              drawnImage={Drawn_Urvi}
              name="Urvi Agrawal"
              position="Marketing Intern"
              linkedinURL="https://www.linkedin.com/in/urvi-a/"
            />
            <TeamMember
              image={Wendy}
              drawnImage={Drawn_Wendy}
              name="Wendy Mo"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/weiting-mo-82974b138/"
            />
            <TeamMember
              image={Wenkai}
              drawnImage={Drawn_Wenkai}
              name="Wenkai Zheng"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/wenkai-zheng/"
            />
            <TeamMember
              image={Yuyao}
              drawnImage={Drawn_Yuyao}
              name="Yuyao Wang"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/yuyao-wang-march/"
            />
            <TeamMember
              image={Zeil}
              drawnImage={Drawn_Zeil}
              name="Zeil Ren"
              position="Software Developer Intern"
              linkedinURL="https://www.linkedin.com/in/ziyaoren/"
            />
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  );
}

export default Interns;
