import { useState, useEffect } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

function SurveyCard({ survey, setSurvey }) {
  const [displayStr, setDisplayStr] = useState("");

  useEffect(() => {
    const len = survey.questions.length;
    let str = len + " question";
    if (len > 1) str = str.concat("s");
    setDisplayStr(str);
  }, []);

  return (
    <Box borderWidth="1px" bg="white" rounded="md" p="15px">
      <Heading size="md">{survey.title}</Heading>
      {displayStr.length ? <Text>{displayStr}</Text> : <></>}
      <Button colorScheme="blue" onClick={() => setSurvey(survey.id)}>
        Respond
      </Button>
    </Box>
  );
}

export default SurveyCard;
