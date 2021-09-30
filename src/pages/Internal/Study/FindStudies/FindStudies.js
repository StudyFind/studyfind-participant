import moment from "moment-timezone";

import { useState, useEffect, useContext } from "react";

import { StudiesContext, UserContext } from "context";

import { Flex, Heading } from "@chakra-ui/react";

import ViewMode from "./ViewMode";
import SearchInput from "./SearchInput";
import FilterList from "./FilterList";
import ConditionsList from "./ConditionsList";
import GridView from "./GridView";
import MapView from "./MapView";

function FindStudies() {
  const user = useContext(UserContext);
  const studies = useContext(StudiesContext);

  const activatedStudies = studies.filter((study) => study.activated);

  const [view, setView] = useState("grid");
  const [location, setLocation] = useState();
  const [filters, setFilters] = useState({
    search: "",
    control: false,
    observational: false,
    interventional: false,
    hideEnrolled: false,
    hideSaved: false,
    onlySaved: false,
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
    setFilters((prev) => ({ ...prev, [name]: value }));
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

  const isValidAge = (studyMinAge, studyMaxAge, userBirthdate) => {
    if (!studyMinAge || !studyMaxAge || !userBirthdate) {
      return true;
    }

    const userAge = moment().diff(userBirthdate, "years");
    return studyMinAge <= userAge && userAge <= studyMaxAge;
  };

  const filter = (studies) => {
    if (!studies?.length) {
      return [];
    }

    return studies.filter((study) => {
      // ========== MANDATORY ==========
      if (study.researcher.id && !study.activated) return false;
      if (user.sex && ![user.sex, "All"].includes(study.sex)) return false;
      if (user.birthdate && !isValidAge(study.minAge, study.maxAge, user.birthdate)) return false;

      // ========== OPTIONAL ==========

      // FILTERS
      if (filters.acceptsHealthyVolunteers && !study.acceptsHealthyVolunteers) return false;
      if (filters.observational && study.type !== "Observational") return false;
      if (filters.interventional && study.type !== "Interventional") return false;
      if (filters.hideEnrolled && user.enrolled.includes(study.id)) return false;
      if (filters.hideSaved && user.saved.includes(study.id)) return false;
      if (filters.onlySaved && !user.saved.includes(study.id)) return false;

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

  const filteredStudies = filter(activatedStudies);

  return (
    <>
      <Flex justify="space-between" align="center" mb="25px">
        <Heading size="lg">Find Studies</Heading>
      </Flex>

      <Flex justify="space-between" mb="25px" gridGap="15px">
        <SearchInput value={filters.search} onChange={handleFilters} />
        <Flex width="120px">
          <ViewMode view={view} setView={setView} />
        </Flex>
      </Flex>

      <FilterList filters={filters} handleFilters={handleFilters} />

      <ConditionsList
        conditions={filters.conditions}
        handleDeleteCondition={handleDeleteCondition}
        handleClearConditions={handleClearConditions}
      />

      {view === "grid" ? (
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
      )}
    </>
  );
}

export default FindStudies;
