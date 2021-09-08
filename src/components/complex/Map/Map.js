import { FaMapMarkerAlt } from "react-icons/fa";
import GoogleMapReact from "google-map-react";

function Map({ center, markers }) {
  return (
    // Important! Always set the container height explicitly
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY }}
      center={center}
      zoom={11}
    >
      {markers.map((marker, i) => {
        return (
          <FaMapMarkerAlt
            key={i}
            color="red"
            size={30}
            lat={marker.lat}
            lng={marker.lng}
            onClick={marker.onClick}
          />
        );
      })}
    </GoogleMapReact>
  );
}

export default Map;
