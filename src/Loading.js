import styled from "styled-components";

import { useColor } from "hooks";

import { Flex, Image } from "@chakra-ui/react";

import Logo from "images/logo.png";

function Loading() {
  const background = useColor("white", "gray.900");

  return (
    <Flex
      height="100vh"
      width="100vw"
      justify="center"
      align="center"
      background={background}
    >
      <SpinningLogo src={Logo} />
    </Flex>
  );
}

const SpinningLogo = styled(Image)`
  width: 50px;

  @-webkit-keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  -webkit-animation: rotate-center 1s ease-in-out infinite both;
  animation: rotate-center 1s ease-in-out infinite both;
`;

export default Loading;
