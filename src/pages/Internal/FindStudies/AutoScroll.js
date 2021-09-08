import React from "react";
import { useState } from "react";
import $ from "jquery";

import { FaArrowUp } from "react-icons/fa";
import { IconButton } from "@chakra-ui/react";

function AutoScroll() {
  const [active, setActive] = useState(false);

  const handleAutoscroll = () => {
    $("body").animate({ scrollTop: 0 }, "slow");
  };

  $("body").scroll(function () {
    const scrollPosition = $("body").scrollTop();
    setActive(scrollPosition > 100);
  });

  return (
    <IconButton
      onClick={handleAutoscroll}
      display={active ? "flex" : "none"}
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
