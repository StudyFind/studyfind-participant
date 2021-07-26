import { useEffect } from "react";
import { firestore } from "database/firebase";

function useDetectLocation(user) {
    useEffect(() => {
        if (user && !user?.location) {
            navigator.geolocation.getCurrentPosition((position) => {
                firestore.collection("participants").doc(user.id).update({
                    location: {latitude: position.coords.latitude, longitude: position.coords.longitude}
                }).catch(err => {
                    console.log(err)
                })
            })
        }
    }, [user])
}

export default useDetectLocation