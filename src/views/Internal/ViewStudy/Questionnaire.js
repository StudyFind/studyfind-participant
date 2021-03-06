import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Spinner } from "components"
import { useDocument } from "hooks"
import { auth, firestore } from "database/firebase";

import lodash from "lodash";

import {
  HStack,
  Heading,
  Radio,
  RadioGroup,
  Box,
  Divider,
  Grid,
  Text,
  Flex,
  Button
} from "@chakra-ui/react";


function Questionnaire({ studies, user }) {

    const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator')
    const { nctID } = useParams();
    const findStudy = () => studies && studies.find((study) => study.id === nctID);
    const [study, setStudy] = useState(findStudy());
    const [responses, setResponses] = useState()
    const [initial, setInitial] = useState()
  
    useEffect(() => {
      if (studies) {
        setStudy(findStudy());
      }
    }, [studies]);

    useEffect(() => {
      if (study) {
          let answers = []
          Object.entries(study.questions).map((v, i) => {
            answers[i] = "";
          })
          const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] })
          setResponses(answers)
          setInitial({fakename: randomName, responses: answers, status: "interested"})
      }
    }, [study])

    const handleResponseChange = (i, val) => {
      let updatedResponses = [...responses];
      updatedResponses[i] = val;
      setResponses(updatedResponses);
    }

    const handleSave = () => {
      const update = {...initial, responses: responses};
      user.enrolled.push(nctID);
        firestore
        .collection(`studies/${nctID}/participants`)
        .doc(user.id)
        .set({
          ...update
        })
        firestore
        .collection(`participants`)
        .doc(user.id)
        .update({
          ...user
        })
    }

    const formatPrompt = (prompt, id) => {
      return `${id + 1}) ${prompt}`
    }

    if (!study || !responses) return <Spinner />

  return (
    <>
    <Flex justify="space-between" align="center" mb="25px">
      <Heading size="lg" mb="25px">
        Questionnaire
      </Heading>
      {!(
          lodash.isEqual(responses, initial.responses)
        ) && (
          <Flex gridGap="10px">
            <Link to={`/study/${study.id}`}>
            <Button colorScheme="green" onClick={handleSave}>
              Submit
            </Button>
            </Link>
          </Flex>
      )}
      </Flex>
      <Box bg="white" borderWidth="1px" rounded="md" p="20px" w="100%">
          <Grid gap="25px">
            {Object.entries(study.questions).map((val, i) => (
              <Box key={i}>
              <Text>
                {formatPrompt(val[1].prompt, i)}
              </Text>
              <RadioGroup onChange={v => handleResponseChange(i, v)} value={responses[i]}>
                <HStack>
                  <Radio value={"Yes"}>
                    Yes
                  </Radio>
                  <Radio value={"No"}>
                    No
                  </Radio>
                  <Radio value={"Unsure"}>
                    Unsure
                  </Radio>
                </HStack>
              </RadioGroup>
              <Divider />
              </Box>
            ))}
          </Grid>
          </Box>
    </>
  );
}

export default Questionnaire;