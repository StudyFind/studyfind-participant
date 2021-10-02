import { useHistory } from "react-router-dom";
import { usePathParams } from "hooks";

import { Flex, Heading } from "@chakra-ui/react";
import { Loader } from "components";

import YourStudiesList from "./YourStudiesList";
import YourStudiesDrawer from "./YourStudiesDrawer";
import YourStudiesEmpty from "./YourStudiesEmpty";

import { firestore } from "database/firebase";
import { useContext, useEffect, useState } from "react";
import { StudiesContext, UserContext } from "context";

function YourStudies() {
  const { action, studyID } = usePathParams();

  const [enrolledStudies, setEnrolledStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = useContext(UserContext);
  const studies = useContext(StudiesContext);

  const getEnrolledStudies = async () => {
    const enrolledStudies = studies.filter((study) => user.enrolled.includes(study.id));

    const studyParticipantsSnapshots = await Promise.all(
      enrolledStudies.map((study) => {
        return firestore
          .collection("studies")
          .doc(study.id)
          .collection("participants")
          .doc(user.id)
          .get();
      })
    );

    const studyParticipantsData = studyParticipantsSnapshots.map((snap) => ({
      id: snap.id,
      ...snap.data(),
    }));

    const studiesData = enrolledStudies.map((study, index) => ({
      ...study,
      participant: studyParticipantsData[index],
    }));

    setEnrolledStudies(studiesData);
    setLoading(false);
  };

  useEffect(() => {
    getEnrolledStudies();
  }, []);

  const selectedStudy = enrolledStudies.find((study) => study.id === studyID);
  const isOpen = action && selectedStudy;

  const history = useHistory();

  const handleOpen = (studyID, action) => {
    history.push(`/your-studies/${studyID}/${action}`);
  };

  const handleClose = () => {
    history.push(`/your-studies`);
  };

  if (loading) {
    return <Loader height="calc(100vh - 80px)" />;
  }

  return enrolledStudies.length ? (
    <>
      <Flex justify="space-between" align="center" mb="25px">
        <Heading size="lg">Your Studies</Heading>
      </Flex>
      <YourStudiesList studies={enrolledStudies} handleOpen={handleOpen} />
      <YourStudiesDrawer
        action={action}
        isOpen={isOpen}
        study={selectedStudy}
        handleClose={handleClose}
      />
    </>
  ) : (
    <YourStudiesEmpty />
  );
}

export default YourStudies;
