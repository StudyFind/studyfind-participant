import { useState, useEffect } from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

function SurveyCard({ survey, responsesRef, setSurvey }) {
  const [loading, setLoading] = useState(false);
  const [lenDisplay, setLenDisplay] = useState("");
  const [responded, setResponded] = useState(null);

  const getLenDisplay = () => {
    const len = survey.questions.length;
    let str = len + " question";
    if (len !== 1) str = str.concat("s");
    setLenDisplay(str);
  };

  useEffect(async () => {
    setLoading(true);
    getLenDisplay();
    const docRef = await responsesRef.doc(survey.id).get();
    setResponded(docRef.exists);
    setLoading(false);
  }, []);

  return (
    <Box borderWidth="1px" bg="white" rounded="md" p="15px">
      <Flex justify="space-between">
        <Box>
          <Heading size="md" maxW="xs" overflowWrap>
            {survey.title}
          </Heading>
          <Text>{survey.questions && lenDisplay}</Text>
        </Box>
        <Button
          isLoading={loading}
          alignSelf="flex-end"
          colorScheme="blue"
          onClick={() => setSurvey(survey.id)}
        >
          {responded ? "Responded" : "Respond" /*TODO disable form*/}
        </Button>
      </Flex>
    </Box>
  );
}

export default SurveyCard;
