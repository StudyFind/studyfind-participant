import React from "react";
import StudyGrid from "./StudyGrid";
import AutoScroll from "./AutoScroll";

function GridView({ conditions, filteredStudies, handleAddCondition }) {
  return (
    <>
      <StudyGrid
        conditions={conditions}
        filteredStudies={filteredStudies}
        handleAddCondition={handleAddCondition}
      />
    </>
  );
}

export default GridView;
