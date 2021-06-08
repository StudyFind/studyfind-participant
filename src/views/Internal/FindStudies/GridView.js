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
      <AutoScroll />
    </>
  );
}

export default GridView;
