import { useEffect } from "react";
import { firestore } from "database/firebase";
import useDetectLocation from "./useDetectLocation";

//STRAIGHT LINE DISTANCE BETWEEN LAT LNG POINTS
const distance = (p1, p2) => {
  const R = 3958.8; // Radius of the Earth in miles

  const lat1 = p1.latitude;
  const lat2 = p2.latitude;
  const lng1 = p1.longitude;
  const lng2 = p2.longitude;

  const latDiff = (lat2 - lat1) * (Math.PI / 180); // Radian difference (latitudes)
  const lngDiff = (lng2 - lng1) * (Math.PI / 180); // Radian difference (longitudes)

  const latDiffSinSqr = Math.sin(latDiff / 2) * Math.sin(latDiff / 2);
  const lngDiffSinSqr = Math.sin(lngDiff / 2) * Math.sin(lngDiff / 2);

  return (
    2 * R * Math.asin(Math.sqrt(latDiffSinSqr + lngDiffSinSqr * Math.cos(lat1) * Math.cos(lat2)))
  );
};

function useAutoUpdateLocation(user) {
  const [detected] = useDetectLocation();

  useEffect(() => {
    if (user && detected) {
      const { coordinates, autodetect } = user.location;

      // ONLY UPDATE LOCATION IF USER IS MORE THAN 5 MILES AWAY FROM PREVIOUS RECORDED LOCATION
      if (autodetect && distance(user.location, detected) > 5) {
        firestore
          .collection("researchers")
          .doc(user.id)
          .update({ location: { ...user.location, coordinates } });
      }
    }
  }, [user, detected]);
}

export default useAutoUpdateLocation;
