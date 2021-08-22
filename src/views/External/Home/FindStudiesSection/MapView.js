import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import StudyCardSmall from "molecules/StudyCardSmall";
import { Loader } from "./Loader";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Box, Grid, useMediaQuery } from "@chakra-ui/react";
import styled from "styled-components";
import StudyCardSmallLandingPage from "molecules/StudyCardSmallLandingPage";

function MapView({ loc, user, studies, conditions, handleConditions }) {
  const [location, setLocation] = useState(loc);
  const [selected, setSelected] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  // identify if window is compact
  const handleWindowSizeChange = () => {
    if (window.innerWidth < 800) {
      setIsCompact(true);
    } else {
      setIsCompact(false);
    }
  };

  // check for window size change
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  // update if the window is compact
  useEffect(() => {
    handleWindowSizeChange();
  }, []);

  useEffect(() => setLocation(loc), [loc]);

  const handleClick = (studyID) => {
    const study = studies.find((study) => study.id === studyID);
    const { locations } = study;

    if (locations) {
      setLocation({
        lat: locations[0].latitude,
        lng: locations[0].longitude,
      });

      setSelected(study);
    }
  };

  if (!location) return <Loader />;

  const content = (
    // Important! Always set the container height explicitly
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyAed_hgBp7VzxxTXlC9Buh9l_6gmNgNK1g" }}
      center={location}
      zoom={11}
    >
      {studies.map((study) => {
        if (study.locations === undefined || study.locations.length === 0) {
          return null;
        }

        const lat = study.locations[0].latitude;
        const lng = study.locations[0].longitude;

        return (
          <FaMapMarkerAlt
            key={study.id}
            lat={lat}
            lng={lng}
            size={30}
            color="red"
            onClick={() => handleClick(study.id)}
          />
        );
      })}
    </GoogleMapReact>
  );

  if (selected && isCompact) {
    return (
      <>
        {/* <Box h="68%" w="100%" rounded="lg" position="relative">
          {content}
        </Box> */}
        <Box
          style={{
            width: "100%",
            overflowX: "hidden",
            position: "relative",
          }}
        >
          <ShadowBox></ShadowBox>
          <InnerBox>
            <Grid gap="25px" templateRows="1fr 1fr">
              <Box h="100%" w="100%" rounded="lg">
                {content}
              </Box>
              <StudyCardSmallLandingPage
                study={selected}
                conditions={conditions}
                handleConditions={handleConditions}
              />
            </Grid>
          </InnerBox>
        </Box>
      </>
    );
  }
  if (selected && !isCompact) {
    return (
      <Grid gap="25px" templateColumns="1fr 1fr">
        <Box h="100%" w="100%" rounded="lg">
          {content}
        </Box>
        <StudyCardSmallLandingPage
          study={selected}
          conditions={conditions}
          handleConditions={handleConditions}
        />
      </Grid>
    );
  }
  return (
    <Box h="68%" w="100%" rounded="lg">
      {content}
    </Box>
  );
}

const InnerBox = styled.section`
  height: 65vh;
  overflow-y: scroll;

  @media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1) {
    height: 50vh;
  }
`;

const ShadowBox = styled.section`
  position: absolute;
  top: 65vh;
  box-shadow: 0 0 30px #aaaaaa;
  height: 1vh;
  width: 100vw;

  @media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1) {
    top: 50vh;
  }
`;

export default MapView;
