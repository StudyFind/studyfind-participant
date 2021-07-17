import { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import StudyCardSmall from "molecules/StudyCardSmall";
import { Loader } from "components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Box, Grid, Text } from "@chakra-ui/react";

function MapView({ loc, user, studies, conditions, handleConditions }) {
  const [location, setLocation] = useState();
  const [selected, setSelected] = useState(null);

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

  return (
    // Important! Always set the container height explicitly
      <Box h="320px" w="100%" rounded="lg">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAed_hgBp7VzxxTXlC9Buh9l_6gmNgNK1g" }}
          center={location}
          zoom={11}
        >
          {studies.map((study) => {
            // if (study.locations.length === 0) {
            //   return null;
            // }

            // const lat = study.locations[0].latitude;
            // const lng = study.locations[0].longitude;

            const lat = study.g.geopoint.latitude
            console.log(lat)
            const lng = study.g.geopoint.longitude

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
      </Box>
  );
}

export default MapView;
