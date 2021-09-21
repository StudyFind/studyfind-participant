import { useTabs } from "hooks";

import { useDetectDevice } from "hooks";

import { Flex, SimpleGrid } from "@chakra-ui/react";
import VerticalTabItem from "./VerticalTabItem";
/*
  tabs = [
    {
      name: string,
      link: string,
      content: ReactNodeList,
    }
  ]
*/

function VerticalTabs({ tabs, useURL = true, ...rest }) {
  const [tabIndex, setTabIndex] = useTabs(tabs, useURL);
  const { isPhone } = useDetectDevice();

  return (
    <Flex direction={isPhone ? "column" : "row"} align={isPhone || "flex-start"}>
      <SimpleGrid spacing="10px" columns={isPhone ? 2 : 1} width={isPhone ? "100%" : "180px"}>
        {tabs.map((t, i) => (
          <VerticalTabItem
            key={i}
            name={t.name}
            icon={t.icon}
            selected={tabIndex === i}
            onClick={() => setTabIndex(i)}
            showBorder={isPhone}
          />
        ))}
      </SimpleGrid>
      <Flex {...rest}>{tabs[tabIndex].content}</Flex>
    </Flex>
  );
}

export default VerticalTabs;
