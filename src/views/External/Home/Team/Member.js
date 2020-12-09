import React from "react";
import styled from "styled-components";

import { Card } from "components";

function Member({ name, img, major, college, collegeURL, linkedinURL }) {
  return (
    <Box>
      <Top>
        <Heading size="6" margin="0">
          {name}
        </Heading>
        <LinkedinIcon className="fab fa-linkedin fa-md" href={linkedinURL} target="_blank"></LinkedinIcon>
      </Top>
      <Image src={img} />
      <Education className="education">
        <Major className="major">{major}</Major>
        <College className="college" href={collegeURL} target="_blank">
          {college}
        </College>
      </Education>
    </Box>
  );
}

const Box = styled(Card)`
  text-align: center;
  width: 15rem;
  height: 18rem;
`;

const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 8rem;
  margin: 1rem 0;
`;

const Education = styled.div`
  font-size: 0.8rem;
`;

const Major = styled.p`
  margin: 0;
  color: #77838f;
`;

const College = styled.a`
  all: unset;
  color: #377dff;
  cursor: pointer;
  margin: 0;
`;

const LinkedinIcon = styled.a`
  color: #77838f;
  margin-left: 10px;
  margin-bottom: 2px;
  font-size: 1.2rem;

  &:hover {
    color: rgb(0, 119, 181);
  }
`;

const Heading = styled.h5`
  text-align: center;
  margin: 4px 0;
`;

export default Member;
