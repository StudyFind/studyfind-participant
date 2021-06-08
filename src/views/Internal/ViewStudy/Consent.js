import styled from "styled-components";

import { storage } from "database/firebase";
import { useDownloadURL } from "react-firebase-hooks/storage";

import { Box, Flex, Heading } from "@chakra-ui/react";
import { Message, Loader } from "components";

function ConsentViewer({ study }) {
  const [value, loading] = useDownloadURL(storage.ref(`consent/${study.id}.pdf`));

  if (loading) {
    return (
      <Box h="500px" w="100%">
        <Loader />
      </Box>
    );
  }

  if (!value) {
    return (
      <Box h="500px">
        <Message
          type="neutral"
          title="No consent form"
          description="The researcher managing this study has not uploaded a consent form yet"
        ></Message>
      </Box>
    );
  }

  return (
    <>
      <Flex justify="space-between" align="center" my="15px" h="40px">
        <Heading fontSize="28px">Consent</Heading>
      </Flex>
      <Box h="750px" w="100%">
        <PDFViewer data={value} type="application/pdf" />
      </Box>
    </>
  );
}

const PDFViewer = styled.object`
  width: 100%;
  height: 100%;
`;

export default ConsentViewer;
