import React from "react";
import styled from "styled-components";
import Logo from "images/logo.png";

function Loading() {
  return (
    <PageLoader>
      <Image src={Logo} />
    </PageLoader>
  );
}

const PageLoader = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
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

  width: 50px;
  -webkit-animation: rotate-center 1s ease-in-out infinite both;
  animation: rotate-center 1s ease-in-out infinite both;
`;

export default Loading;
