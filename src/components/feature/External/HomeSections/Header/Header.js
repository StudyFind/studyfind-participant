import { useColor, useDetectDevice } from "hooks";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "components";
import HeaderLogo from "./HeaderLogo";

function Header({ logoLink }) {
  const { isPhone } = useDetectDevice();
  const background = useColor("white", "gray.900");
  const borderColor = useColor("gray.200", "gray.700");

  const links = [{ link: "/team", title: "Our Team" }];

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
      gridGap="10px"
      onClick={() => window.scrollTo({ top: 0 })}
    >
      <Link to={logoLink}>
        <HeaderLogo />
      </Link>
      <Flex>{navLinkItems}</Flex>
    </Flex>
  );
}

export default Header;
