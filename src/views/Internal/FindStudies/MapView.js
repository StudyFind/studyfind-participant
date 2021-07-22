import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import StudyCardSmall from "molecules/StudyCardSmall";
import { Loader } from "components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Box, Grid, Text } from "@chakra-ui/react";
import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function MapView({ loc, user, studies, conditions, handleConditions }) {

  console.log("location", loc)

  const [location, setLocation] = useState(loc);
  const [selected, setSelected] = useState(null);

  useEffect(() => setLocation(loc), [loc]);

  const handleClick = (studyID) => {
    const study = studies.find((study) => study.id === studyID);
    console.log(study)
    // const { locations } = study;

    // if (locations) {
    //   setLocation({
    //     lat: locations[0].latitude,
    //     lng: locations[0].longitude,
    //   });

    //   setSelected(study);
    // }
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAed_hgBp7VzxxTXlC9Buh9l_6gmNgNK1g"
  })

  //THE BELOW MAP OBJECT CAN BE USED TO INTEGRATE THE GOOGLE API FURTHER

  // const [map, setMap] = React.useState(null)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  return (isLoaded && location) ? (
    <Grid gap="25px" templateColumns="1fr 1fr">
      <Box h="320px" w="100%" rounded="lg">
        <GoogleMap
          center={{lat: location.latitude, lng: location.longitude}}
          zoom={10}
          // onLoad={onLoad}
          // onUnmount={onUnmount}
        >
          <></>
          { /* Child components, such as markers, info windows, etc. */ }
          {studies.map((study) => {
            // if (study.locations.length === 0) {
            //   return null;
            // }

            const lat = study.g.geopoint.latitude
            const lng = study.g.geopoint.longitude

            return (
              <FaMapMarkerAlt
                key={study.id}
                position={{lat: lat, lng: lng}}
                size={30}
                color="red"
                onClick={() => handleClick(study.id)}
              />
            );
          })}
        </GoogleMap>
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
