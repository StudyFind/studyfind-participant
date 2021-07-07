import { useState, useContext, useEffect } from "react";
import { customAlphabet } from "nanoid/non-secure";

import { useParams, useHistory } from "react-router-dom";

import { auth, firestore } from "database/firebase";
import { UserContext, StudiesContext } from "context";
import { List, Loader } from "components";

import { Grid, Flex, Heading, Radio, RadioGroup, Text, Button } from "@chakra-ui/react";

function Screening() {
  const { studyID } = useParams();
  const history = useHistory();
  const verified = auth.currentUser.emailVerified;

  const user = useContext(UserContext);
  const studies = useContext(StudiesContext);
  const study = studies.find((study) => study.id === studyID);

  useEffect(() => {
    if (!verified) {
      history.goBack();
    }
  }, [verified]);

  const [responses, setResponses] = useState([]);

  const handleResponseChange = (index, value) => {
    setResponses((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleSubmit = async () => {
    const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 10);

    await Promise.all([
      firestore.collection("studies").doc(studyID).collection("participants").doc(user.id).set({
        fakename: nanoid(),
        timezone: user.timezone,
        responses,
        status: "interested",
      }),

      firestore
        .collection("participants")
        .doc(user.id)
        .update({ enrolled: user.enrolled.concat(studyID) }),
    ]);

    history.push(`/study/${studyID}/details`);
  };

  if (!study || !responses) return <Loader />;

  return (
    <>
      <Heading fontSize="28px">Screening Survey</Heading>
      <List my="20px">
        {study.questions.map((question, i) => (
          <List.Row key={i} style={{ display: "block", padding: "20px" }}>
            <Text fontWeight="500" mb="5px">
              {i + 1}. {question.prompt}
            </Text>
            <RadioGroup value={responses[i]} onChange={(v) => handleResponseChange(i, v)}>
              <Grid>
                <Radio value="Yes">Yes</Radio>
                <Radio value="No">No</Radio>
                <Radio value="Unsure">Unsure</Radio>
              </Grid>
            </RadioGroup>
          </List.Row>
        ))}
      </List>
      <Flex justify="flex-end" gridGap="10px">
        <Button variant="outline" color="gray.500" onClick={history.goBack}>
          Back
        </Button>
        <Button
          colorScheme="green"
          onClick={handleSubmit}
          isDisabled={user.enrolled.includes(study.id)}
        >
          Submit
        </Button>
      </Flex>
    </>
  );
}

export default Screening;
