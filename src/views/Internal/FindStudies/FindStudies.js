import React, { useState, useEffect } from "react";
import $ from "jquery";
import styled from "styled-components";
import { fetchStudies } from "database/studies";
import { Spinner, Heading, Button, IconButton } from "components";
import { FaFilter, FaArrowUp } from "react-icons/fa";
import StudyCardSmall from "views/Internal/StudyCardSmall";

function FindStudies() {
  const [studies, setStudies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudies()
      .then(setStudies)
      .catch(console.log)
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <Page>
      <Head>
        <Heading>Find Studies</Heading>
        <Button leftIcon={<FaFilter />} colorScheme="blue">
          Add Filter
        </Button>
      </Head>
      {studies.length && (
        <StudyGrid n={studies.length}>
          {studies.map((study, index) => (
            <StudyCardSmall key={index} study={study} />
          ))}
          {studies.map((study, index) => (
            <StudyCardSmall key={index} study={study} />
          ))}
          {studies.map((study, index) => (
            <StudyCardSmall key={index} study={study} />
          ))}
          {studies.map((study, index) => (
            <StudyCardSmall key={index} study={study} />
          ))}
        </StudyGrid>
      )}
      <AutoScroll />
    </Page>
  );
}

const Page = styled.div`
  padding: 30px;
  height: 100%;
  background: #f8f9fa;
  position: relative;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

const StudyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: ${(props) => "270px".repeat(Math.floor(props.n / 2))};
  grid-gap: 25px;
  align-items: flex-start;
`;

const AutoscrollButton = styled(IconButton)`
  position: fixed;
  right: 20px;
  bottom: 20px;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
`;

function AutoScroll() {
  const handleAutoscroll = () => {
    $("body").animate({ scrollTop: 0 }, "slow");
  };

  return (
    <AutoscrollButton
      onClick={handleAutoscroll}
      position="fixed"
      colorScheme="blue"
      icon={<FaArrowUp />}
    />
  );
}

export default FindStudies;
