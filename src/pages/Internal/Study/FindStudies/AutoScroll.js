import { FaArrowUp } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";
import { useWindowSize } from "react-use";

function AutoScroll() {
  const handleAutoscroll = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const { height } = useWindowSize();

  return (
    <IconButton
      onClick={handleAutoscroll}
      display={height > 100 ? "flex" : "none"}
      position="fixed"
      right="16px"
      bottom="16px"
      opacity="0.7"
      _hover={{ opacity: "1" }}
      colorScheme="blue"
      icon={<FaArrowUp />}
    />
  );
}

export default AutoScroll;
