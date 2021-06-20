import { Grid } from "@chakra-ui/react";
import { FaVenusMars, FaBirthdayCake, FaHeart } from "react-icons/fa";

import StudyBullet from "./StudyBullet";

function StudyBullets({ sex, age, control }) {
  return (
    <Grid gap="10px">
      <StudyBullet icon={FaVenusMars} label="sex" value={sex || "All sexes"} />
      <StudyBullet icon={FaBirthdayCake} value={age ? `${age} years` : "All ages"} />
      <StudyBullet
        icon={FaHeart}
        value={
          control === "Yes" ? "Accepts Healthy Volunteers" : "Does Not Accept Healthy Volunteers"
        }
      />
    </Grid>
  );
}

export default StudyBullets;
