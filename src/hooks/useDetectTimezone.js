import { useEffect } from "react";
import { firestore } from "database/firebase";

import moment from "moment";

function useDetectTimezone(user) {
  useEffect(() => {
    if (user) {
      const timezone = user.timezone;
      const preference = user.preferences?.autodetectTimezone;

      moment.tz.setDefault(timezone);

      if (preference) {
        const guessed = moment.tz.guess(true);

        if (guessed !== timezone) {
          firestore.collection("researchers").doc(user.id).update({ timezone: guessed });
          moment.tz.setDefault(guessed);
        }
      }
    }
  }, [user]);
}

export default useDetectTimezone;
