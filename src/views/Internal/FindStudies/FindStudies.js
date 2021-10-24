import React from "react";
import { useState, useEffect, useContext } from "react";
import moment from "moment";
import { useAlgoliaSearch } from "hooks"

import { UserContext, StudiesContext } from "context";
import { Flex, Heading } from "@chakra-ui/react";

import ViewMode from "./ViewMode";
import SearchInput from "./SearchInput";
import FilterList from "./FilterList";
import ConditionsList from "./ConditionsList";
import GridView from "./GridView";
import MapView from "./MapView";
import { Loader } from "components";

function FindStudies() {
  const user = useContext(UserContext);
  const studies = useContext(StudiesContext);
  //May want to combine algoliaFilters and normal filters for consistency.
  const [algoliaFilters, setAlgoliaFilters] = useState({
    search: "",
    title: false,
    sex: false,
    type: false,
    description: false,
    conditions: false,
    locations: false,
  });
  //Should be abstract enough to be used in other parts of the code. Just make sure the attributes to search on are formatted like above
  const [hits, isSearching] = useAlgoliaSearch("test_StudyFind", algoliaFilters)

  const [view, setView] = useState("grid");
  const [location, setLocation] = useState();
  const [filters, setFilters] = useState({
    search: "",
    hideEnrolled: false,
    hideSaved: false,
    conditions: [],
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const handleFilters = (name, value) => {
      if (name === "search") {
        setFilters((prev) => ({ ...prev, [name]: value }));
        setAlgoliaFilters((prev) => ({...prev, [name]: value}))
      } else if (Object.keys(algoliaFilters).includes(name)) {
        setAlgoliaFilters((prev) => ({...prev, [name]: value}))
      } else {
        setFilters((prev) => ({ ...prev, [name]: value }));
      }
  };

  const handleAddCondition = (condition) => {
    setFilters((prev) => {
      if (!prev.conditions.includes(condition)) {
        const updated = prev.conditions.concat(condition);
        return { ...prev, conditions: updated };
      }
      return prev;
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

  const isValidAge = (studyAgeRange, userBirthdate) => {
    if (!studyAgeRange || !userBirthdate) {
      return true;
    }

    const [minAge, maxAge] = studyAgeRange.split("-");
    const userAge = moment().diff(userBirthdate, "years");
    return minAge <= userAge && userAge <= maxAge;
  };

  //Might need to redo the filter function to account for fields already filtered during the retrieval.
  const filter = (studies) => {
    return studies.filter((study) => {
      console.log(study)
      // ========== MANDATORY ==========
      if (study.researcher.id && !study.published) return false;
      if (study.researcher.id && !study.activated) return false;
      if (![user.sex, "All"].includes(study.sex)) return false;
      if (!isValidAge(study.age, user.birthdate)) return false;
      // ========== OPTIONAL ==========

      // FILTERS
      // show only "Accepts Healthy Volunteers" where control === "Yes"
      if (filters.control && study.control !== "Yes") return false;
      if (filters.observational && study.type !== "Observational") return false;
      if (filters.interventional && study.type !== "Interventional") return false;
      if (filters.hideEnrolled && user.enrolled.includes(study.id)) return false;
      if (filters.hideSaved && user.saved.includes(study.id)) return false;

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
        const intersection = study.conditions.filter((value) => filters.conditions.includes(value));

        if (!intersection.length) {
          return false;
        }
      }
      return true;
    });
  };

  const filteredStudies = hits

  return (
    <>
      <Flex justify="space-between" align="center" mb="25px">
        <Heading size="lg">Find Studies</Heading>
      </Flex>

      <Flex justify="space-between" mb="25px" gridGap="10px">
        <SearchInput value={filters.search} onChange={handleFilters} />
        <ViewMode view={view} setView={setView} />
      </Flex>

      <FilterList filters={{...filters, ...algoliaFilters}} handleFilters={handleFilters} />

      <ConditionsList
        conditions={filters.conditions}
        handleDeleteCondition={handleDeleteCondition}
        handleClearConditions={handleClearConditions}
      />

      {!isSearching ? (
        view === "grid" ? (
          <GridView
            conditions={filters.conditions}
            filteredStudies={filteredStudies}
            handleAddCondition={handleAddCondition}
          />
        ) : (
          <MapView
            loc={location}
            user={user}
            conditions={filters.conditions}
            studies={filteredStudies}
          />
        )
      ) : (<Loader/>)}

    </>
  );
}

export default FindStudies;
