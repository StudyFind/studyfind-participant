import React from "react";

import { firestore } from "database/firebase";
import { useCollection } from "hooks";

import Search from "./Search";
import AutoScroll from "./AutoScroll";

import { Spinner } from "components";
import { Grid, Flex, Heading, Button, IconButton, Tooltip } from "@chakra-ui/react";
import { FaFilter, FaLocationArrow, FaSquare, FaThLarge } from "react-icons/fa";
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
      <Flex justify="space-between">
        <Search />
        <Flex>
          <Flex>
            <Tooltip label="Detailed View">
              <IconButton
                color="gray.500"
                borderTopRightRadius="0"
                borderBottomRightRadius="0"
                icon={<FaSquare />}
              />
            </Tooltip>
            <Tooltip label="Condensed View">
              <IconButton
                color="gray.500"
                borderTopLeftRadius="0"
                borderBottomLeftRadius="0"
                icon={<FaThLarge />}
              />
            </Tooltip>
          </Flex>
          <Button color="gray.500" leftIcon={<FaLocationArrow />} colorScheme="gray" ml="10px">
            Location
          </Button>
          <Button color="gray.500" leftIcon={<FaFilter />} colorScheme="gray" ml="10px">
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
