import { usePagination, useUserData } from "hooks";
import { auth } from "database/firebase";
import { buildDashboardQuery, buildParticipantsQuery } from "database/queries";

import { useState, useEffect } from "react";
import moment from "moment";

import { Flex, Heading } from "@chakra-ui/react";

import ViewMode from "./../../../views/Internal/FindStudies/ViewMode";
import SearchInput from "./../../../views/Internal/FindStudies/SearchInput";
import FilterList from "./../../../views/Internal/FindStudies/FilterList";
import ConditionsList from "./../../../views/Internal/FindStudies/ConditionsList";
import MapView from "./../../../views/Internal/FindStudies/MapView";

import { Loader } from "components";

import FindStudiesGrid from "./FindStudiesGrid";
import FindStudiesEmpty from "./FindStudiesEmpty";
import FindStudiesError from "./FindStudiesError";

function FindStudiesPage() {
  const { uid, emailVerified } = useUserData(auth);

  const participantQuery = buildParticipantsQuery(uid);

  //   const {
  //     documents: studies,
  //     loading,
  //     loadingMore,
  //     handleLoadMore,
  //     fetchedAll,
  //     error,
  //   } = usePagination(participantQuery, 10);

  const studies = [];
  const loading = false;
  const loadingMore = false;
  const handleLoadMore = () => {
    return true;
  };
  const fetchedAll = false;
  const error = false;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <FindStudiesError />;
  }

  //   if (studies.length === 0) {
  //     return <FindStudiesEmpty />;
  //   }

  const [view, setView] = useState("grid");
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

  const isValidAge = (studyAgeRange, userBirthdate) => {
    if (!studyAgeRange || !userBirthdate) {
      return true;
    }

    const [minAge, maxAge] = studyAgeRange.split("-");
    const userAge = moment().diff(userBirthdate, "years");
    return minAge <= userAge && userAge <= maxAge;
  };

  const filter = (studies) => {
    return studies.filter((study) => {
      // ========== MANDATORY ==========
      if (study.researcher.id && !study.published) return false;
      if (study.researcher.id && !study.activated) return false;
      //   if (![user.sex, "All"].includes(study.sex)) return false;
      //   if (!isValidAge(study.age, user.birthdate)) return false;

      // ========== OPTIONAL ==========

      // FILTERS
      // show only "Accepts Healthy Volunteers" where control === "Yes"
      if (filters.control && study.control !== "Yes") return false;
      if (filters.observational && study.type !== "Observational") return false;
      if (filters.interventional && study.type !== "Interventional") return false;
      //   if (filters.hideEnrolled && user.enrolled.includes(study.id)) return false;
      //   if (filters.hideSaved && user.saved.includes(study.id)) return false;

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

  const filteredStudies = filter(studies);

  return (
    <>
      <Flex justify="space-between" align="center" mb="25px">
        <Heading size="lg">Find Studies</Heading>
      </Flex>

      <Flex justify="space-between" mb="25px" gridGap="10px">
        <SearchInput value={filters.search} onChange={handleFilters} />
        <ViewMode view={view} setView={setView} />
      </Flex>
      <FilterList filters={filters} handleFilters={handleFilters} />
      <ConditionsList
        conditions={filters.conditions}
        handleDeleteCondition={handleDeleteCondition}
        handleClearConditions={handleClearConditions}
      />

      {view === "grid" ? (
        <FindStudiesGrid
          conditions={filters.conditions}
          filteredStudies={filteredStudies}
          handleAddCondition={handleAddCondition}
          studies={studies}
          fetchedAll={fetchedAll}
          loadingMore={loadingMore}
          handleLoadMore={handleLoadMore}
        />
      ) : (
        <MapView
          loc={location}
          //   user={user}
          conditions={filters.conditions}
          studies={filteredStudies}
        />
      )}
    </>
  );
}

export default FindStudiesPage;
