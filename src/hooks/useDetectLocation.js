import { useEffect } from "react";
import { firestore } from "database/firebase";

function haversine_distance(mk1, mk2) { //STRAIGHT LINE DISTANCE BETWEEN LAT LNG MARKERS
    const R = 3958.8; // Radius of the Earth in miles
    const rlat1 = mk1.latitude * (Math.PI/180); // Convert degrees to radians
    const rlat2 = mk2.latitude * (Math.PI/180); // Convert degrees to radians
    const difflat = rlat2-rlat1; // Radian difference (latitudes)
    const difflon = (mk2.longitude-mk1.longitude) * (Math.PI/180); // Radian difference (longitudes)

    const d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
}

function useDetectLocation(user) {
    useEffect(() => {
        if (user) {
            if (user?.location) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const queryPosition = {latitude: position.coords.latitude, longitude: position.coords.longitude}
                    const distanceBetweenPositions = haversine_distance(user.location, queryPosition)
                    if (distanceBetweenPositions > 5) { //THIS IS ALWAYS IN MILES. NO NEED TO CONVERT WON'T BE USER FACING
                        firestore.collection("participants").doc(user.id).update({
                            location: queryPosition
                        }).catch(err => {
                            console.log(err)
                        })
                    }
                })
            } else {
                navigator.geolocation.getCurrentPosition((position) => {
                    const queryPosition = {latitude: position.coords.latitude, longitude: position.coords.longitude}
                    firestore.collection("participants").doc(user.id).update({
                        location: queryPosition
                    }).catch(err => {
                        console.log(err)
                    })
                })
            }
        }
    }, [user])
}

export default useDetectLocation