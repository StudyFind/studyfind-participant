import moment from "moment-timezone";

import { useEffect } from "react";
import { firestore } from "database/firebase";

function useAutoUpdateTimezone(user) {
  const detected = moment.tz.guess(true);

  useEffect(() => {
    if (user?.timezone) {
      const { region, autodetect, lastUpdated } = user.timezone;

      const now = moment().utc().valueOf();
      const thirtyMinutes = 30 * 60 * 1000;

      if (
        autodetect &&
        region !== detected &&
        lastUpdated + thirtyMinutes > now
      ) {
        firestore
          .collection("researchers")
          .doc(user.id)
          .update({
            timezone: {
              ...user.timezone,
              region: detected,
              lastUpdated: now,
            },
          });

        moment.tz.setDefault(detected);
      } else {
        moment.tz.setDefault(region);
      }
    }
  }, [user?.timezone]);
}

export default useAutoUpdateTimezone;
