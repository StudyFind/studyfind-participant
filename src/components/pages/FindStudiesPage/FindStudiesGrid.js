import { useDetectDevice } from "hooks";

import { SimpleGrid, HStack, Heading } from "@chakra-ui/react";
import { Link, LoadMoreButton } from "components";

import StudyCardSmall from "components/feature/Study/StudyCard/StudyCardSmallParticipant";

function FindStudiesGrid({
  conditions,
  filteredStudies,
  handleAddCondition,
  fetchedAll,
  loadingMore,
  handleLoadMore,
}) {
  const { responsive } = useDetectDevice();

  return (
    <SimpleGrid spacing="25px">
      <SimpleGrid spacing="25px" align="flex-start" columns={responsive([1, 2, 2])}>
        {filteredStudies.map((study, index) => (
          <Link key={study.id} to={`/study/${study.id}/details`} isWrapper>
            <StudyCardSmall
              key={index}
              study={study}
              conditions={conditions}
              handleAddCondition={handleAddCondition}
            />
          </Link>
        ))}
      </SimpleGrid>
      <HStack width="100%" justify="center">
        <LoadMoreButton
          fetchedAll={fetchedAll}
          fetchedAllText={`Showing all ${filteredStudies.length} studies`}
          isLoading={loadingMore}
          onClick={handleLoadMore}
        />
      </HStack>
    </SimpleGrid>
  );
}

export default FindStudiesGrid;
