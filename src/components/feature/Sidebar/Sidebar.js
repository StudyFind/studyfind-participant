import { useState } from "react";
import { useColor, useDetectDevice } from "hooks";

import { Flex } from "@chakra-ui/react";

import SidebarLogo from "./SidebarLogo";
import SidebarLinks from "./SidebarLinks";
import SidebarUser from "./SidebarUser";

function Sidebar({ name, email, links, ...rest }) {
  const [active, setActive] = useState(false);

  const { isPhone } = useDetectDevice();

  const background = useColor("blue.900", "gray.900");

  return (
    <Flex
      direction="column"
      height={(!isPhone || active) && "100vh"}
      background={background}
      {...rest}
    >
      <SidebarLogo isPhone={isPhone} active={active} setActive={setActive} />
      {(!isPhone || active) && (
        <>
          <SidebarLinks links={links} setActive={setActive} />
          <SidebarUser name={name} email={email} />
        </>
      )}
    </Flex>
  );
}

export default Sidebar;
