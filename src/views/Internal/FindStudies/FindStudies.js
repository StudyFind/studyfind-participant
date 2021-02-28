import React, { useState, useEffect } from "react";

import { firestore, auth } from "database/firebase";
import { useCollection, useDocument } from "hooks";

import { Spinner, Input } from "components";
import { 
  Grid,
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  IconButton,
  Tooltip,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
  FormControl,
  FormLabel,
  Switch,
 } from "@chakra-ui/react";
import { FaSearch, FaFilter, FaLocationArrow, FaThLarge } from "react-icons/fa";

import AutoScroll from "./AutoScroll";
import StudyCardSmall from "views/Internal/StudyCardSmall";

function FindStudies({ user }) {
  const [inputs, setInputs] = useState({ search: "" });
  const [studies, loading, error] = useCollection(
    firestore.collection("studies").where("published", "==", true)
  );

  const {isOpen, onOpen, onClose} = useDisclosure()

  const [user, loading2, error2] = useDocument(
    firestore.collection("participants").doc(auth.currentUser.uid)
  );

  const [filter, setFilter] = useState({});

  useEffect(() => {
    if (user) {
      setFilter(user.filter)
      console.log(filter)
      console.log(auth.currentUser.uid)
    }
  }, [user]);

  const handleChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleFilterChange = ({ target: { name, checked } }) => {
    setFilter((prev) => ({ ...prev, [name]: checked }));
    console.log(name)
  };

  const handleFilterSave = () => {
    firestore
    .collection("participants")
    .doc(user.id)
    .update({
      filter,
    });
  }

  const handleCancel = () => {
    setFilter(user.filter)
  }

  if (loading || loading2) return <Spinner />;
  if (error || error2) return <div>There was an error loading your studies...</div>;

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
          <Button onClick={onOpen} color="gray.500" leftIcon={<FaFilter />}>
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
      <Drawer size="md" placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <Flex align="center" justify="space-between">
            <div>
              <Heading size="md" textTransform="capitalize">
                Search Preferences
              </Heading>
            </div>
            <DrawerCloseButton position="static" />
          </Flex>
        </DrawerHeader>
        <DrawerBody p="25px" bg="#f8f9fa">
        <Grid gap="20px">
        <Box bg="white" borderWidth="1px" rounded="md" p="20px" w="100%">
            {Object.entries(filter).map((p, i) => (
              <FormControl key={i} display="flex" alignItems="center">
                <Switch
                  name={p[0]}
                  isChecked={filter[p[0]]}
                  onChange={handleFilterChange}
                />
                <FormLabel ml="10px" my="0" textTransform="capitalize">
                  {p[0].split("_").join(" ")}
                </FormLabel>
              </FormControl>
            ))}
            </Box>
          </Grid>
          <Flex gridGap="10px" py="20px" justify="flex-end">
          <Button onClick={handleCancel} variant="outline">
            Cancel
          </Button>
          <Button
            onClick={handleFilterSave}
            colorScheme="blue"
          >
            Save
          </Button>
        </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
      <AutoScroll />
    </>
  );
}

export default FindStudies;
