import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "components"

import { HStack, Heading, Radio, RadioGroup, Box, Divider, Grid } from "@chakra-ui/react";


function Questionnaire({ studies, user }) {

    const { nctID } = useParams();
    const findStudy = () => studies && studies.find((study) => study.id === nctID);
    const [study, setStudy] = useState(findStudy());
  
    useEffect(() => {
      if (studies) {
        setStudy(findStudy());
      }
    }, [studies]);

    const formatPrompt = (prompt, id) => {
      return `${id + 1}) ${prompt}`
    }

    if (!study) return <Spinner />

  return (
    <>
      <Heading size="lg" mb="25px">
        Questionnaire
      </Heading>
      <Box bg="white" borderWidth="1px" rounded="md" p="20px" w="100%">
          <Grid gap="25px">
            {Object.entries(study.questions).map((val, i) => (
              <>
              <text key={i}>
                {formatPrompt(val[1].prompt, i)}
              </text>
              <RadioGroup>
                <HStack>
                  <Radio>
                    Yes
                  </Radio>
                  <Radio>
                    No
                  </Radio>
                  <Radio>
                    Unsure
                  </Radio>
                </HStack>
              </RadioGroup>
              <Divider />
              </>
            ))}
          </Grid>
          </Box>
    </>
  );
}

export default Questionnaire;