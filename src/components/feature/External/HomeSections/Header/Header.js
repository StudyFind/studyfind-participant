import { useColor, useDetectDevice } from "hooks";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "components";
import HeaderLogo from "./HeaderLogo";
import { useState } from "react";
import { useWindowScroll, useWindowSize } from "react-use";
import { useEffect } from "react";

function Header({ logoLink }) {
  const { isPhone } = useDetectDevice();
  const background = useColor("white", "gray.900");
  const borderColor = useColor("gray.200", "gray.700");

  const [active, setActive] = useState(false);

  const { y } = useWindowScroll();
  const { height } = useWindowSize();

  useEffect(() => {
    setActive(y > height);
  }, [y, height]);

  const links = [
    { link: "/team", title: "Our Team" },
  ];

  if (!active) {
    return null;
  }

  const navLinkItems = links.map((item) => (
    <Link key={item.title} to={item.link}>
      <Text
        color="blue.500"
        fontWeight="400"
        _hover={{ transform: "scale(1.05)" }}
      >
        {item.title}
      </Text>
    </Link>
  ));

  return (
    <Flex
      top="0"
      position="fixed"
      justify="space-between"
      align="center"
      padding={isPhone ? "20px" : "20px 50px"}
      background={background}
      width="100%"
      boxShadow="sm"
      zIndex="400"
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
    >
      <Link to={logoLink}>
        <HeaderLogo />
      </Link>
      <Flex>{navLinkItems}</Flex>
    </Flex>
  );
}

export default Header;
