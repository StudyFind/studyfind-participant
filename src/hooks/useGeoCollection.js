import firebase from "firebase";
import { useState, useEffect } from "react";
const MAX_QUERY_RANGE = 100
const MILE_TO_KILO = 1.609

function useGeoCollection(ref, user, range) {
  const [collection, setCollection] = useState();
  const [init, setInitial] = useState();

  const sortByDistance = (studies) => (
    studies.sort((study1, study2) =>
      {
        const dist1 = study1.distance; const dist2 = study2.distance;
        return ((dist1 < dist2) ? -1 : ((dist1 > dist2) ? 1 : 0));
      }
    )
  )

  useEffect(() => {
    if (user && !init) {
      //CENTER COORDINATES FOR TESTING PURPOSES: 34.131707, -83.729398
      //USE USER COORDINATES WHEN MERGED
      const query = ref.near({
        center: new firebase.firestore.GeoPoint(34.131707, -83.729398),
        radius: user.timezone.split('/')[0] === "America" ? MAX_QUERY_RANGE * MILE_TO_KILO : MAX_QUERY_RANGE
      })
      const unsortedDocuments = []
      query.get().then(val => {
        val.docs.forEach(doc => {
          console.log(doc)
          unsortedDocuments.push({id: doc.id, distance: doc.distance, ...doc.data()})
        })
        const sortedDocuments = sortByDistance(unsortedDocuments)
        setInitial(sortedDocuments)
        setCollection(sortedDocuments)
      })
    }
  }, [user])

  useEffect(() => {
    if (user) {
      const radius = user.timezone.split('/')[0] === "America" ? range * MILE_TO_KILO : range
      const unsortedDocuments = init.filter(study => {
        if (study.distance > radius) return false
        return true
      })
      setCollection(sortByDistance(unsortedDocuments))
    }
  }, [range])

  return collection
}

export default useGeoCollection;