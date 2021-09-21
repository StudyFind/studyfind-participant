import { Grid } from "@chakra-ui/react";
import { FaVenusMars, FaBirthdayCake, FaHeart } from "react-icons/fa";

import StudyBullet from "./StudyBullet";

function StudyBullets({
  sex = "All",
  minAge = 0,
  maxAge = 100,
  acceptsHealthyVolunteers = false,
}) {
  return (
    <Grid gap="10px">
      <StudyBullet icon={FaVenusMars} label="sex" value={sex} />
      <StudyBullet icon={FaBirthdayCake} value={`${minAge}-${maxAge} years`} />
      <StudyBullet
        icon={FaHeart}
        value={
          acceptsHealthyVolunteers
            ? "Accepts Healthy Volunteers"
            : "Does Not Accept Healthy Volunteers"
        }
      />
    </Grid>
  );
}

export default StudyBullets;
