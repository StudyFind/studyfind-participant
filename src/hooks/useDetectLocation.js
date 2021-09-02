import { useGeolocation } from "react-use";
// https://streamich.github.io/react-use/?path=/story/sensors-usegeolocation--demo
// const { loading, accuracy, altitude, altitudeAccuracy, heading, latitude, longitude, speed, timestamp } = useDetectLocation();

function useDetectLocation() {
  const { latitude, longitude, loading } = useGeolocation();

  const location = { latitude, longitude };
  const error = !loading && (!latitude || !longitude) ? "Permission Denied" : "";

  return [location, loading, error];
}

export default useDetectLocation;
