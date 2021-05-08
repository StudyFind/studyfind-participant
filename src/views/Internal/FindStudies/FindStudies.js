import React, { useState, useEffect, useContext } from "react";

import { firestore, auth } from "database/firebase";
import { useCollection, useDocument } from "hooks";
import { UserContext, StudiesContext } from "context";

import { Spinner, Input, Message } from "components";
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
  Tag,
  TagLabel,
  TagCloseButton,
 } from "@chakra-ui/react";
import { FaSearch, FaFilter, FaLocationArrow, FaThLarge } from "react-icons/fa";

import AutoScroll from "./AutoScroll";
import MapView from "./MapView"
import StudyCardSmall from "views/Internal/StudyCardSmall";
import { functions } from "lodash";

function FindStudies() {
  const user = useContext(UserContext);
  const studies = useContext(StudiesContext);

  const [inputs, setInputs] = useState({ search: "" });
  const [mapView, setView] = useState(false)
  const [conditions, setConditions] = useState([]);

  const {isOpen, onOpen, onClose} = useDisclosure()

  const [filter, setFilter] = useState({});

  const [localized, setLocalized] = useState(false)

  const [location, setLocation] = useState()

  const [saved, setSaved] = useState([]);

  useEffect(() => {
    if (user) {
      setFilter(user.filter)
      setSaved(user.saved)
      console.log(filter)
      console.log(auth.currentUser.uid)
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLocation({zoom: 11, center: {lat: position.coords.latitude, lng: position.coords.longitude}})
        setLocalized(true)
        console.log("Longitude is :", position.coords.longitude);
      });
    } else {
      console.log("nope")
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

  const handleConditions = (type, value) => {
    setConditions((prevState) => {
      let conditions = [...prevState];
      switch (type) {
        case "add":
          conditions.push(value);
          break;
        case "remove":
          conditions = conditions.filter((condition) => condition !== value);
          break;
        case "clear":
          conditions = [];
          break;
      }
      return conditions;
    });
  }

  const handleBookmark = (type,studyID) => {
    let savedStudies = [...user.saved];
    switch (type) {
      case "add":
        savedStudies.push(studyID);
        break;
      case "remove":
        savedStudies = savedStudies.filter((study) => study !== studyID);
        break;
    }
    firestore
    .collection("participants")
    .doc(user.id)
    .update({
      saved: savedStudies,
    });
    setSaved(savedStudies);
  }

  const calculateAge = birthdate => {
    // accepts birthdate in form YYYY/MM/DD
    if(birthdate) {
      const birthDay = parseInt(birthdate.substring(8));
      const birthMonth = parseInt(birthdate.substring(5, 7));
      const birthYear = parseInt(birthdate.substring(0,4));

      const today = new Date();

      const currentDay = today.getDate();
      const currentMonth = today.getMonth() + 1;
      const currentYear = today.getFullYear();

      return (currentYear - birthYear) - (birthMonth > currentMonth) - (birthMonth === currentMonth && (birthDay > currentDay));
    }
  }

  const filterFunctions = {
    age: (user, study) => {
      if(user.birthdate) {
        const ageRange = study.age && study.age.split("-");
        const minAge = parseInt(ageRange[0]);
        const maxAge = parseInt(ageRange[1]);
        const age = calculateAge(user.birthdate)
        return minAge <= age && age <= maxAge
      }
      return true
    },

    sex: (user, study) => {
      if(user.sex) {
        return [user.sex, 'All'].includes(study.sex)
      }
      return true
    },

    saved: (user, studies) => {
      return studies.filter(study => user.saved.includes(study.nctID))
    },

    enrolled: (user, studies) => {
      return studies.filter(study => user.enrolled.includes(study.nctID))
    },

    screened: (user, studies) => {
      return studies.filter(study => filterFunctions.age(user, study) && filterFunctions.sex(user, study))
    },

    observational: (studies) => {
      return studies.filter(study => study.type === 'Observational')
    },

    interventional: (studies) => {
      return studies.filter(study => study.type === 'Interventional')
    },

    controlYes: (studies) => {
      return studies.filter(study => study.control === 'Yes')
    },

    controlNo: (studies) => {
      return studies.filter(study => study.control === 'No')
    },

    search: (search, studies) => {
      if(search) {
        return studies.filter(study => {
          const searchInput = search.trim().toLowerCase()
          return study.title.toLowerCase().includes(searchInput)
        })
      }
      return studies
    },

    conditions: (conditions, studies) => {
      if(conditions.length) {
        return studies.filter(study => {
          for(let condition of conditions) {
            if(!study.conditions.includes(condition)) {
              return false
            }
          }
          return true
        })
      }
      return studies
    },

    published: (studies) => {
      return studies.filter(study => study.published === true)
    },

    activated: (studies) => {
      return studies.filter(study => study.activated === true)
    },
  };

  const filterStudies = (studies) => {
    let filteredStudies = [...studies];
    filteredStudies = filterFunctions.published(filteredStudies);
    filteredStudies = filterFunctions.activated(filteredStudies);
    if(filter.enrolled) filteredStudies = filterFunctions.enrolled(user, filteredStudies);
    if(filter.saved) filteredStudies = filterFunctions.saved(user, filteredStudies);
    if(!filter.enrolled && !filter.saved) filteredStudies = filterFunctions.screened(user, filteredStudies);
    if(filter.observational) filteredStudies = filterFunctions.observational(filteredStudies);
    if(filter.interventional) filteredStudies = filterFunctions.interventional(filteredStudies);
    if(filter.control_yes) filteredStudies = filterFunctions.controlYes(filteredStudies);
    if(filter.control_no) filteredStudies = filterFunctions.controlNo(filteredStudies);
    filteredStudies = filterFunctions.conditions(conditions, filteredStudies);
    filteredStudies = filterFunctions.search(inputs.search, filteredStudies);
    return filteredStudies;
  };

  const CLEAR_ALL = (
    <Box onClick={() => handleConditions("clear")}>
      <Tag m="3px" size="md">
        <TagLabel>Clear all</TagLabel>
      </Tag>
    </Box>
  );

  const EMPTY = (
    <Box h="500px">
      <Message
        type="neutral"
        title="Find Studies"
        description="No studies to display. Try changing your search filters for better results!"
      />
    </Box>
  );

  if (!localized) return <Spinner />;
  // if (error) return <div>There was an error loading your studies...</div>;
  if (!user || !studies || !filter) return EMPTY;

  const filteredStudies = filterStudies(studies);

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
                onClick={() => setView(true)}
                color="gray.500"
                borderTopRightRadius="0"
                borderBottomRightRadius="0"
                icon={<FaLocationArrow />}
              />
            </Tooltip>
            <Tooltip label="Grid View">
              <IconButton
                onClick={() => setView(false)}
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
      {mapView ? (
      <MapView loc={location} user={user} conditions={conditions} handleConditions={handleConditions} studies={filteredStudies}/>
      ) : (
      <>
      <Flex m="5px">
        {conditions &&
          conditions.map((condition, index) => (
            <Tag m="3px" key={index} variant="solid" size="md" colorScheme="facebook">
              <TagLabel>{condition}</TagLabel>
              <TagCloseButton onClick={() => handleConditions("remove", condition)} />
            </Tag>
          ))
        }
        {conditions.length > 3 ? CLEAR_ALL : <div></div>}
      </ Flex>
      {filteredStudies && filteredStudies.length
        ? (
        <Grid gap="25px" templateColumns="1fr">
          {filteredStudies.map((study, index) => (
            <StudyCardSmall conditions={conditions} handleConditions={handleConditions} key={index} study={study} user={user} handleBookmark={handleBookmark}/>
          ))}
        </Grid>
        ) : EMPTY}
      </>
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
            { filter && Object.entries(filter).map((p, i) => (
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
    {mapView ? (<></>) : (<AutoScroll />)}
    </>
  );
}

export default FindStudies;
