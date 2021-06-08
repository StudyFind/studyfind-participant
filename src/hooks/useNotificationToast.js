import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { notifications as templates } from "templates";

function useNotificationToast(notifications) {
  const toast = useToast();

  useEffect(() => {
    if (notifications?.length) {
      const mostRecent = notifications[0];
      const { type, meta, read } = mostRecent;

      const generateTemplate = templates[type] || templates.defaultTemplate;
      const { title, description } = generateTemplate(meta);

      if (read === false) {
        toast({
          title: title,
          description: description,
          status: "info",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
      }
    }
  }, [notifications]);
}

export default useNotificationToast;
