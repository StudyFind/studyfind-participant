import React, { useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import { firestore } from "database/firebase";
import { UserContext, StudiesContext } from "context";
import { List, Spinner } from "components";

import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
  NumberDictionary,
} from "unique-names-generator";

import { Grid, Flex, Heading, Radio, RadioGroup, Text, Button } from "@chakra-ui/react";

function Questionnaire() {
  const { nctID } = useParams();

  const user = useContext(UserContext);
  const studies = useContext(StudiesContext);
  const history = useHistory();

  const study = studies.find((study) => study.id === nctID);

  const [responses, setResponses] = useState([]);

  const handleResponseChange = (index, value) => {
    setResponses((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleSave = () => {
    user.enrolled.push(nctID);

    let answers = [];
    Object.entries(study.questions).map((v, i) => {
      answers[i] = "";
    });

    const numberDictionary = NumberDictionary.generate({
      min: 10000,
      max: 99999,
    });
    const randomName = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
      style: "capital",
      length: 3,
    });

    const fakename =
      randomName
        .split("_")
        .map((randomWord) => {
          return randomWord[0];
        })
        .join("") + numberDictionary.toString();

    firestore
      .collection(`studies/${nctID}/participants`)
      .doc(user.id)
      .set({ fakename, timezone: user.timezone, responses });

    firestore
      .collection("participants")
      .doc(user.id)
      .update({ enrolled: user.enrolled.push(nctID) });
  };

  if (!study || !responses) return <Spinner />;

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
        <Button colorScheme="green" onClick={handleSave}>
          Submit
        </Button>
      </Flex>
    </>
  );
}

export default Questionnaire;
