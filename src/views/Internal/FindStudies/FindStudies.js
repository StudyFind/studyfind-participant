import { useState, useEffect, useContext } from "react";
import moment from "moment";

import { UserContext, StudiesContext } from "context";
import { 
  Flex, 
  Heading,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
  Text
} from "@chakra-ui/react";

import ViewMode from "./ViewMode";
import SearchInput from "./SearchInput";
import FilterList from "./FilterList";
import ConditionsList from "./ConditionsList";
import GridView from "./GridView";
import MapView from "./MapView";
import GoogleMapReact from "google-map-react";

function FindStudies() {
  const user = useContext(UserContext);
  const { studies, range, setRange } = useContext(StudiesContext);
  console.log("studies: ", studies)

  const [view, setView] = useState("grid");
  const [filters, setFilters] = useState({
    search: "",
    control: false,
    observational: false,
    interventional: false,
    hideEnrolled: false,
    hideSaved: false,
    range: false,
    conditions: [],
  });

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

  const isValidAge = (studyAgeRange, userBirthdate) => {
    const [minAge, maxAge] = studyAgeRange.split("-");
    const userAge = moment().diff(userBirthdate, "years");
    return minAge <= userAge && userAge <= maxAge;
  };

  const filter = (studies) => {
    return studies.filter((study) => {
      // ========== MANDATORY ==========
      if (!study.published) return false;
      if (!study.activated) return false;
      if (![user.sex, "All"].includes(study.sex)) return false;
      if (!isValidAge(study.age, user.birthdate)) return false;

      // ========== OPTIONAL ==========

      // FILTERS
      // show only "Accepts Healthy Volunteers" where control === "Yes"
      if (filters.control && study.control !== "Yes") return false;
      if (filters.observational && study.type === "Observational") return false;
      if (filters.interventional && study.type === "Interventional") return false;
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

  const filteredStudies = filter(studies);

  console.log("filtered Studies: ", filteredStudies)

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

      {filters.range ? (
      <Box
        size="sm"
        color={`grey.500`}
        bg={'white'}
        borderColor={`grey.300`}
        borderRadius={'10px'}
        borderWidth="1px"
        padding={'10px'}
        width={`calc(50% - 10px)`}
        mb='25px'
        >
        <Text>Showing studies {range} {user.timezone.split('/')[0] === "America" ? "mi" : "km"} away</Text>
        <Slider  
          aria-label="slider-ex-1" min={0} 
          max={100} 
          defaultValue={range}
          onChange={val => {setRange(val)}}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
        </Box>
        ) : (<></>)}

      <ConditionsList
        conditions={filters.conditions}
        handleDeleteCondition={handleDeleteCondition}
        handleClearConditions={handleClearConditions}
      />

      {view === "grid" ? (
        <GridView
          conditions={filters.conditions}
          filteredStudies={studies}
          handleAddCondition={handleAddCondition}
        />
      ) : (
        <MapView
          loc={user.location}
          user={user}
          conditions={filters.conditions}
          studies={studies}
        />
        // <Box style={{ height: '100vh', width: '100%' }} rounded="lg">
        //   <GoogleMapReact
        //     style={{ height: '100vh', width: '100%' }}
        //     bootstrapURLKeys={{ key: "AIzaSyAed_hgBp7VzxxTXlC9Buh9l_6gmNgNK1g" }}
        //     center={user.location}
        //     zoom={11}
        //   />
        // </Box>
      )}
    </>
  );
}

export default FindStudies;
