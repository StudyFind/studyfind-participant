import { notification } from "database/mutations";

import { VStack } from "@chakra-ui/react";
import { LoadMoreButton } from "components";
import NotificationItem from "components/feature/Notifications/NotificationItem";
import { auth } from "database/firebase";

function NotificationList({
  notifications,
  fetchedAll,
  loadingMore,
  handleLoadMore,
}) {
  const handleNotificationRead = ({ id }) => {
    return notification.read(auth.currentUser.uid, id);
  };

  return (
    <>
      <VStack spacing="12px">
        <VStack spacing="10px" width="100%" marginBottom="10px">
          {notifications.map((n) => (
            <NotificationItem
              key={n.id}
              notification={n}
              handleNotificationRead={handleNotificationRead}
            />
          ))}
        </VStack>
        <LoadMoreButton
          fetchedAll={fetchedAll}
          fetchedAllText={`Showing all ${notifications.length} notifications`}
          isLoading={loadingMore}
          onClick={handleLoadMore}
        />
      </VStack>
    </>
  );
}

export default NotificationList;
