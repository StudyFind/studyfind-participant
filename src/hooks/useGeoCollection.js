import firebase from "firebase";
import { useState, useEffect } from "react";
const MAX_QUERY_RANGE = 100
const MILE_TO_KILO = 1.609

function useGeoCollection(ref, user, range) {
  const [collection, setCollection] = useState();
  const [init, setInitial] = useState();

  useEffect(() => {
    if (user) {
      //CENTER COORDINATES FOR TESTING PURPOSES: 34.131707, -83.729398
      const query = ref.near({
        center: new firebase.firestore.GeoPoint(34.131707, -83.729398),
        radius: user.timezone.split('/')[0] === "America" ? MAX_QUERY_RANGE * MILE_TO_KILO : MAX_QUERY_RANGE
      })
      const documents = []
      query.get().then(val => {
        val.docs.forEach(doc => {
          console.log(doc)
          documents.push({id: doc.id, distance: doc.distance, ...doc.data()})
        })
        setCollection(documents)
        setInitial(documents)
      })
    }
  }, [user])

  useEffect(() => {
    if (user) {
      const radius = user.timezone.split('/')[0] === "America" ? range * MILE_TO_KILO : range
      setCollection(init.filter(study => {
        if (study.distance > radius) return false
        return true
      }))
    }
  }, [range])

  return collection
}

export default useGeoCollection;