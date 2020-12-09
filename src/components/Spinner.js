import React from "react";
import styled from "styled-components";
import { Spinner } from "@chakra-ui/react";

function Loader() {
  return (
    <PageLoader>
      <Spinner thickness="4px" speed="0.5s" emptyColor="gray.200" color="blue.500" size="lg" />
    </PageLoader>
  );
}

const PageLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export default Loader;
