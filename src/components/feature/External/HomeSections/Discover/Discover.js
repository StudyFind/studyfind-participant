import { useDetectDevice } from "hooks";
import { Grid, GridItem } from "@chakra-ui/react";
import DiscoverLogo from "./DiscoverLogo";
import DiscoveryPanel from "./DiscoveryPanel";
import discoverLeft from "images/homepage/discover-left.png";
import discoverRight from "images/homepage/discover-right.png";

const CALL_TO_ACTION = "Discover what StudyFind can provide for you";
const PART_LABEL = "I am participant";
const PART_DESC = "Searching for studies and research opportunities";
const RES_LABEL = "I am researcher";
const RES_DESC = "Recruiting participants for research studies";

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
          desc={PART_DESC}
          textColor={"white"}
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
          desc={RES_DESC}
          textColor={"black"}
        />
      </GridItem>
    </Grid>
  );
}

export default Discover;
