import styled from "styled-components";

const Heading = styled.h3`
  text-align: center;
  margin: 4px 0;
`;

const Subheading = styled.p`
  color: #77838f;
  text-align: center;
  margin-bottom: 25px;
`;

const Pill = styled.span`
  background: rgba(0, 201, 167, 0.1);
  color: #00c9a7;
  padding: 12px 16px;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const Box = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 30px;
  padding-top: 84px;
`;

export { Box, Pill, Heading, Subheading };
