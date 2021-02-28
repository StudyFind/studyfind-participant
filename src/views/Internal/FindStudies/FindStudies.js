import React, { useState } from "react";

import { firestore } from "database/firebase";
import { useCollection } from "hooks";

import { Spinner, Input } from "components";
import { Grid, Flex, Heading, Button, Icon, IconButton, Tooltip } from "@chakra-ui/react";
import { FaSearch, FaFilter, FaLocationArrow, FaThLarge } from "react-icons/fa";

import AutoScroll from "./AutoScroll";
import StudyCardSmall from "views/Internal/StudyCardSmall";

function FindStudies({ user }) {
  const [inputs, setInputs] = useState({ search: "" });
  const [studies, loading, error] = useCollection(
    firestore.collection("studies").where("published", "==", true)
  );

  const handleChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) return <Spinner />;
  if (error) return <div>There was an error loading your studies...</div>;

  return (
    <>
      <Flex justify="space-between" align="center" mb="25px">
        <Heading size="lg">Find Studies</Heading>
      </Flex>
      <Flex justify="space-between" mb="25px" gridGap="10px">
        <Input
          name="search"
          value={inputs.search}
          onChange={handleChange}
          placeholder="Search"
          left={<Icon color="gray.400" as={FaSearch} />}
          leftWidth="40px"
        />
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
