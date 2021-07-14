import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";

import {
  Flex,
  Heading,
  Button,
  Text,
  Box as ChakraBox,
} from "@chakra-ui/react";
import { Spinner } from "components";

import moment from "moment";

import { UserContext, StudiesContext } from "context";

import ViewMode from "./ViewMode";
import SearchInput from "./SearchInput";
import FilterList from "./FilterList";
import ConditionsList from "./ConditionsList";
import GridView from "./GridView";
import MapView from "./MapView";

function FindStudiesSection() {
  const user = useContext(UserContext);
  const studies = useContext(StudiesContext);

  console.log(studies);

  const [isLoaded, setIsLoaded] = useState(true);
  const [view, setView] = useState("map");
  const [location, setLocation] = useState();
  const [filters, setFilters] = useState({
    search: "",
    control: false,
    observational: false,
    interventional: false,
    hideEnrolled: false,
    hideSaved: false,
    conditions: [],
  });

  useEffect(() => {
    setIsLoaded(false);
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords);
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const handleFilters = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCondition = (condition) => {
    setFilters((prev) => {
      if (!prev.conditions.includes(condition)) {
        const updated = prev.conditions.concat(condition);
        return { ...prev, conditions: updated };
      }
    });
  };

  const handleDeleteCondition = (index) => {
    setFilters((prev) => {
      const updated = prev.conditions.filter((_, i) => i !== index);
      return { ...prev, conditions: updated };
    });
  };

  const handleClearConditions = () => {
    setFilters((prev) => ({ ...prev, conditions: [] }));
  };

  // const isValidAge = (studyAgeRange, userBirthdate) => {
  //   const [minAge, maxAge] = studyAgeRange.split("-");
  //   const userAge = moment().diff(userBirthdate, "years");
  //   return minAge <= userAge && userAge <= maxAge;
  // };

  const filter = (studies) => {
    return studies.filter((study) => {
      // ========== MANDATORY ==========
      if (!study.published) return false;
      if (!study.activated) return false;
      // if (![user.sex, "All"].includes(study.sex)) return false;
      // if (!isValidAge(study.age, user.birthdate)) return false;

      // ========== OPTIONAL ==========

      // FILTERS
      // show only "Accepts Healthy Volunteers" where control === "Yes"
      if (filters.control && study.control !== "Yes") return false;
      if (filters.observational && study.type === "Observational") return false;
      if (filters.interventional && study.type === "Interventional")
        return false;
      // if (filters.hideEnrolled && user.enrolled.includes(study.id))
      //   return false;
      // if (filters.hideSaved && user.saved.includes(study.id)) return false;

      if (filters.search) {
        const cleanedSearch = filters.search.trim().toLowerCase();
        const cleanedTitle = study.title.toLowerCase();
        const match = cleanedTitle.includes(cleanedSearch);

        if (!match) {
          return false;
        }
      }

      // CONDITIONS
      if (filters.conditions.length) {
        const intersection = study.conditions.filter((value) =>
          filters.conditions.includes(value)
        );

        if (!intersection.length) {
          return false;
        }
      }
      return true;
    });
  };

  // const filteredStudies = filter(studies);
  let filteredStudies = studies;
  if (studies !== undefined && studies.length > 0){
    filteredStudies = filter(studies);
  }

  useEffect(() => {
    if (studies !== undefined && studies.length > 0) {
      filteredStudies = filter(studies);
      setIsLoaded(true);
    }
  });

  return (
    <Box>
      <Heading size="xl" lineHeight="1.25">
        Find Studies
      </Heading>
      <Flex justify="space-between" mb="25px" gridGap="10px">
        <SearchInput value={filters.search} onChange={handleFilters} />
        <ViewMode view={view} setView={setView} />
      </Flex>

      <FilterList filters={filters} handleFilters={handleFilters} />

      {/* <ConditionsList
        conditions={filters.conditions}
        handleDeleteCondition={handleDeleteCondition}
        handleClearConditions={handleClearConditions}
      /> */}

      {isLoaded ? (
        view === "grid" ? (
          <ChakraBox
            style={{
              width: "100%",
              overflowX: "hidden",
              position: "relative",
            }}
          >
            <ShadowBox></ShadowBox>
            <InnerBox>
              <GridView
                conditions={filters.conditions}
                filteredStudies={filteredStudies}
                handleAddCondition={handleAddCondition}
              />
            </InnerBox>
          </ChakraBox>
        ) : (
          <MapView
            loc={location}
            user={user}
            conditions={filters.conditions}
            studies={filteredStudies}
          />
        )
      ) : (
        <Spinner />
      )}
    </Box>
  );
}

const Box = styled.section`
  height: 95vh;
  padding: 50px;
  background-color: #f8f9fb;

  @media only screen and (max-width: 600px) {
    padding: 30px;
    grid-gap: 30px;
  }

  @media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1) {
    height: 80vh;
  }
`;

const InnerBox = styled.section`
  height: 55vh;
  overflow-y: scroll;

  @media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1) {
    height: 50vh;
  }
`;

const ShadowBox = styled.section`
  position: absolute;
  top: 55vh;
  box-shadow: 0 0 30px #aaaaaa;
  height: 1vh;
  width: 100vw;

  @media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1) {
    top: 50vh;
  }
`;

// const Box = styled.section`
//   height: 100vh;
//   padding: 100px 50px 50px 50px;
//   display: flex;
//   grid-gap: 60px;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   background-color: #f8f9fb;

//   @media only screen and (max-width: 600px) {
//     padding: 30px;
//     grid-gap: 30px;
//   }
// `;

export default FindStudiesSection;
