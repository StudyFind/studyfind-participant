// returns function that triggers notification
// const triggerNotification = useTriggerNotification();

import { useEffect } from "react";
import { firestore } from "database/firebase";

function useTriggerNotification(user) {
  const setLocalNotificationPreference = (preference) => {
    const notifications = { ...user.notifications, local: preference };
    firestore.collection("researchers").doc(user.id).update({ notifications });
  };

  const requestPermission = (callback) => {
    Notification.requestPermission().then(callback);
  };

  useEffect(() => {
    if (user.notifications.local) {
      // only requests if Notification.permission is set to "default"
      requestPermission((status) => {
        if (status === "denied") {
          setLocalNotificationPreference(false);
        }
      });
    }
  }, []);

  const triggerNotification = ({ title, body, icon }) => {
    const notification = new Notification(title, { body, icon });

    setTimeout(() => {
      notification.close();
    }, 3000);
  };

  return triggerNotification;
}

export default useTriggerNotification;
