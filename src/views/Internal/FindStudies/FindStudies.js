import React from "react";

import { firestore } from "database/firebase";
import { useCollection } from "hooks";

import Search from "./Search";
import AutoScroll from "./AutoScroll";

import { Spinner } from "components";
import { Grid, Flex, Heading, Button, IconButton, Tooltip } from "@chakra-ui/react";
import { FaFilter, FaLocationArrow, FaThLarge } from "react-icons/fa";
import StudyCardSmall from "views/Internal/StudyCardSmall";

function FindStudies() {
  const [studies, loading, error] = useCollection(
    firestore.collection("studies").where("published", "==", true)
  );

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Flex justify="space-between" align="center" mb="25px">
        <Heading size="lg">Find Studies</Heading>
      </Flex>
      <Flex justify="space-between" mb="25px" gridGap="10px">
        <Search />
        <Flex gridGap="10px">
          <Flex>
            <Tooltip label="Map View">
              <IconButton
                color="gray.500"
                borderTopRightRadius="0"
                borderBottomRightRadius="0"
                icon={<FaLocationArrow />}
              />
            </Tooltip>
            <Tooltip label="Grid View">
              <IconButton
                color="gray.500"
                borderTopLeftRadius="0"
                borderBottomLeftRadius="0"
                icon={<FaThLarge />}
              />
            </Tooltip>
          </Flex>
          <Button color="gray.500" leftIcon={<FaFilter />}>
            Filter
          </Button>
        </Flex>
      </Flex>
      {studies && (
        <Grid gap="25px" templateColumns="1fr 1fr">
          {studies.map((study, index) => (
            <StudyCardSmall key={index} study={study} />
          ))}
        </Grid>
      )}
      <AutoScroll />
    </>
  );
}

export default FindStudies;
