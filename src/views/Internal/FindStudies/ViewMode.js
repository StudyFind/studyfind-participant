import React from "react";
import { Flex, Tooltip, IconButton } from "@chakra-ui/react";
import { FaThLarge, FaMapMarkerAlt } from "react-icons/fa";

function getRandomBool() {
  const randInt = Math.floor(Math.random() * 2);
  return randInt ? true : false
}

function getRandomString() {
  const NUM_CHARS = 50
  const length = Math.floor(Math.random() * NUM_CHARS)
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)]
}

function getRandomSex() {
  return getRandomItem(["All", "Male", "Female"])
}

function getRandomStudyType() {
  return getRandomItem(["Observational", "Interventional"])
}
function getRandomInt(mi, ma) {
  const min = Math.ceil(mi);
  const max = Math.floor(ma);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumberLow() {
  return getRandomInt(18, 30)
}

function getRandomNumberHigh() {
  return getRandomInt(55, 90)
}

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getRandomTimestamp() {
  return randomDate(new Date(1970, 1, 1), new Date()).getTime()
}

function generateTestStudy() {
  const study = {
    activated: getRandomBool(),
    title: getRandomString(),
    description: getRandomString(),
    sex: getRandomSex(),
    minAge: getRandomNumberLow(),
    maxAge: getRandomNumberHigh(),
    acceptsHealthyVolunteers: getRandomBool(),
    type: getRandomStudyType(),
    createdAt: getRandomTimestamp(),
  }
  console.log(study)
}

function generateTestStudies(n) {
  for (let i = 0; i < n; i++) {
    generateTestStudy()
  }
}

function ViewMode({ view, setView }) {
  return (
    <Flex gridGap="10px">
      <Flex>
        <Tooltip label="Grid View">
          <IconButton
            icon={<FaThLarge />}
            color={view === "grid" ? "blue.500" : "gray.500"}
            bg={view === "grid" ? "blue.100" : "gray.100"}
            _hover={view === "grid" ? "blue.100" : "gray.100"}
            _active={view === "grid" ? "blue.100" : "gray.100"}
            borderTopRightRadius="0"
            borderBottomRightRadius="0"
            onClick={() => setView("grid")}
          />
        </Tooltip>
        <Tooltip label="Map View">
          <IconButton
            icon={<FaMapMarkerAlt />}
            color={view === "map" ? "blue.500" : "gray.500"}
            bg={view === "map" ? "blue.100" : "gray.100"}
            _hover={view === "map" ? "blue.100" : "gray.100"}
            _active={view === "map" ? "blue.100" : "gray.100"}
            borderTopLeftRadius="0"
            borderBottomLeftRadius="0"
            // onClick={() => setView("map")}
            onClick={() => generateTestStudies(5)}
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
}

export default ViewMode;
