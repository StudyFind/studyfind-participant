import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Heading } from "@chakra-ui/react";


function Questionnaire({ studies }) {

    const { nctID } = useParams();
    const findStudy = () => studies && studies.find((study) => study.id === nctID);
    const [study, setStudy] = useState(findStudy());
  
    useEffect(() => {
      if (studies) {
        setStudy(findStudy());
      }
    }, [studies]);

  return (
    <>
      <Heading size="lg" mb="25px">
        Questionnaire
      </Heading>
      <text>
      {study.questions[0].prompt}
      </text>
    </>
  );
}

export default Questionnaire;