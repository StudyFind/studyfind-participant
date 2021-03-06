import React from "react";
import styled from "styled-components";
import { storage } from "database/firebase";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { Heading, Button, Box, Flex } from "@chakra-ui/react";
import { Message, Spinner } from "components";

function ConsentViewer({ study, setEdit }) {
  const [value, loading, error] = useDownloadURL(storage.ref(`consent/${study.id}.pdf`));

  const LOAD = (
    <Box h="500px" w="100%">
      <Spinner />
    </Box>
  );

  const FORM = value ? (
    <PDFViewer data={value} type="application/pdf" />
  ) : (
    <strong>{error && error.message}</strong>
  );

  const BODY = (
    <>
      <Head>
        <Heading fontSize="28px">Consent</Heading>
      </Head>
      <Box h="750px" w="100%">
        {FORM}
      </Box>
    </>
  );

  const EMPTY = (
    <Box h="500px">
      <Message
        type="neutral"
        title="No consent form"
        description="The consent form allows participants to know details and risks of the research study and makes them aware of what they're signing up for"
      >
      </Message>
    </Box>
  );

  return loading ? LOAD : value ? BODY : EMPTY;
}

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

const PDFViewer = styled.object`
  width: 100%;
  height: 100%;
`;

export default ConsentViewer;