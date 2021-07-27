import { auth } from "database/firebase";
import { useState, useEffect } from "react";
import { Box, Heading, Text, Button, Flex } from "@chakra-ui/react";

function SurveyCard({ survey, surveysRef, setSurvey }) {
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
    const docRef = await surveysRef
      .doc(survey.id)
      .collection("responses")
      .doc(auth.currentUser.uid)
      .get();
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
          colorScheme={responded ? "green" : "blue"}
          onClick={() => setSurvey(survey.id)}
        >
          {responded ? "Edit Response" : "Respond"}
        </Button>
      </Flex>
    </Box>
  );
}

export default SurveyCard;
