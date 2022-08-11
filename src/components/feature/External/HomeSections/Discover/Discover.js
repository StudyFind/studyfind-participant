import { useDetectDevice } from "hooks";
import { Grid, GridItem } from "@chakra-ui/react";
import DiscoverLogo from "./DiscoverLogo";
import DiscoveryPanel from "./DiscoveryPanel";
import discoverLeft from "images/homepage/discover-left.png";
import discoverRight from "images/homepage/discover-right.png";

const CALL_TO_ACTION = "Discover what StudyFind can provide for you";

const PART_LABEL = "I am a participant";
const PART_DESC = "searching for studies and research opportunities";
const PART_LINK = "https://participant.studyfind.org/";

const RES_LABEL = "I am a researcher";
const RES_DESC = "recruiting participants for research studies";
const RES_LINK = "https://researcher.studyfind.org/";

function Discover() {
  const { isPhone } = useDetectDevice();

  return (
    <Grid
      templateRows={isPhone && "auto 300px 300px"}
      w={isPhone && "100%"}
      rowGap={isPhone && "50px"}
      templateColumns={!isPhone && "repeat(5, 1fr)"}
    >
      <GridItem
        rowStart={isPhone && 2}
        rowEnd={isPhone && 3}
        colStart={!isPhone && 1}
        colEnd={!isPhone && 3}
      >
        <DiscoveryPanel
          img={discoverLeft}
          label={PART_LABEL}
          line1={"recruiting participants"}
          line2={"for research studies"}
          link={PART_LINK}
        />
      </GridItem>
      <GridItem
        rowStart={isPhone && 1}
        rowEnd={isPhone && 2}
        colStart={!isPhone && 3}
        colEnd={!isPhone && 4}
      >
        <DiscoverLogo height="100%" text={CALL_TO_ACTION} />
      </GridItem>
      <GridItem
        rowStart={isPhone && 3}
        rowEnd={isPhone && 4}
        colStart={!isPhone && 4}
        colEnd={!isPhone && -1}
      >
        <DiscoveryPanel
          img={discoverRight}
          label={RES_LABEL}
          line1={"searching for studies and"}
          line2={"research opportunities"}
          link={RES_LINK}
        />
      </GridItem>
    </Grid>
  );
}

export default Discover;
