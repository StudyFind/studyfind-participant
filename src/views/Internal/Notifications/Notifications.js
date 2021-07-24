import React from "react";
import { auth, firestore } from "database/firebase";
import { useRealtimePagination } from "hooks";

import { Heading } from "@chakra-ui/react";
import { Loader } from "components";

import NotificationList from "./NotificationList";
import NotificationsEmpty from "./NotificationsEmpty";

function Notifications() {
  const { uid } = auth.currentUser;

  const NOTIFICATIONS_PER_REQUEST = 10;
  const notificationsRef = firestore
    .collection("participants")
    .doc(uid)
    .collection("notifications")
    .orderBy("time", "desc");

  const [notifications, loading, error, handleFetchAdditional, additionalLoading, fetchedAll] =
    useRealtimePagination(notificationsRef, NOTIFICATIONS_PER_REQUEST);

  if (loading) return <Loader />;
  if (error) return <div>Error :(</div>;

  return (
    <>
      <Heading size="lg" mb="25px">
        Notifications
      </Heading>
      {notifications.length ? (
        <NotificationList
          notifications={notifications}
          fetchedAll={fetchedAll}
          additionalLoading={additionalLoading}
          handleFetchAdditional={handleFetchAdditional}
        />
      ) : (
        <NotificationsEmpty />
      )}
    </>
  );
}

export default Notifications;
