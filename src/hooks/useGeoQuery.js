import firebase from "firebase";
import { useState, useEffect } from "react";

const sortByDistance = (studies) => {
  return studies.sort((study1, study2) => {
    const dist1 = study1.distance;
    const dist2 = study2.distance;

    if (dist1 < dist2) return -1;
    if (dist1 > dist2) return +1;

    return 0;
  });
};

const getDocuments = async (query) => {
  const value = query.get();
  const documents = [];

  value.docs.forEach((doc) => {
    documents.push({
      id: doc.id,
      distance: doc.distance,
      ...doc.data(),
    });
  });

  return documents;
};

function useGeoQuery(ref, user, range) {
  const [initial, setInitial] = useState(null);
  const [studies, setStudies] = useState(null);

  const MAX_RANGE = 100;
  const MILE_TO_KM = 1.609;

  useEffect(() => {
    const initialLoad = async () => {
      if (user && !initial) {
        const { latitude, longitude } = user.location.coordinates;

        const query = ref.near({
          center: new firebase.firestore.GeoPoint(latitude, longitude),
          radius: MAX_RANGE * MILE_TO_KM,
        });

        const filtered = await getDocuments(query);
        const sorted = sortByDistance(filtered);

        setStudies(sorted);
        setInitial(sorted);
      }
    };

    initialLoad();
  }, [user]);

  useEffect(() => {
    if (user) {
      const radius = range * MILE_TO_KM;
      const filtered = initial.filter((study) => study.distance <= radius);
      const sorted = sortByDistance(filtered);

      setStudies(sorted);
    }
  }, [range]);

  return studies;
}

export default useGeoQuery;
