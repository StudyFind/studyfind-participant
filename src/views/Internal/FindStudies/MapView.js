import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import StudyCardSmall from "molecules/StudyCardSmall";
import { Loader } from "components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Box, Grid } from "@chakra-ui/react";
import React from 'react'

function MapView({ loc, user, studies, conditions, handleConditions }) {

  const [location, setLocation] = useState(loc);
  const [selected, setSelected] = useState(null);

  useEffect(() => setLocation(loc), [loc]);

  const handleClick = (studyID, lat, lng) => {
    const study = studies.find((study) => study.id === studyID);
    //DONT FORGET TO UNCOMMENT THIS BEFORE MERGE SO IT WORKS WITH ACTUAL STUDY DATA STRUCTURE----------------------------------------------------
    // const { locations } = study;

    // if (locations) {
    //   setLocation({
    //     lat: locations[0].latitude,
    //     lng: locations[0].longitude,
    //   });
      setLocation({latitude: lat, longitude: lng})
      setSelected(study);
    // }
  };

  return (location) ? (
    <Grid gap="25px" templateColumns="1fr 1fr">
      <Box h="320px" w="100%" rounded="lg">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAed_hgBp7VzxxTXlC9Buh9l_6gmNgNK1g" }}
          center={{lat: location.latitude, lng: location.longitude}}
          defaultZoom={11}
        >
          <></>
          {studies.map((study) => {
            //DONT FORGET TO UNCOMMENT THIS BEFORE MERGE SO IT WORKS WITH ACTUAL STUDY DATA STRUCTURE-------------------------------------------
            // if (study.locations.length === 0) {
            //   return null;
            // }

            const lat = study.g.geopoint.latitude
            const lng = study.g.geopoint.longitude

            return (
              <FaMapMarkerAlt
                key={study.id}
                lat={lat}
                lng={lng}
                size={30}
                color="red"
                onClick={() => handleClick(study.id, lat, lng)}
              />
            );
          })}
        </GoogleMapReact>
      </Box>
      {selected && (
        <StudyCardSmall
          study={selected}
          user={user}
          conditions={conditions}
          handleConditions={handleConditions}
        />
      )}
    </Grid>
  ) : <Loader/>
}

export default React.memo(MapView);
