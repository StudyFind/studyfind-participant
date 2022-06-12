import styled from "styled-components";
import { useTabs, useColor, useDetectDevice } from "hooks";
import { Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";

/*
  tabs = [
    {
      name: string,
      link: string,
      content: ReactNodeList,
    }
  ]
*/

function HorizontalTabs({ tabs, useURL = true, ...rest }) {
  const color = useColor("gray.400", "gray.500");
  const borderColor = useColor("gray.300", "gray.600");

  const [tabIndex, setTabIndex] = useTabs(tabs, useURL);

  const { isPhone } = useDetectDevice();

  return (
    <Tabs colorScheme="blue" height="100%" index={tabIndex}>
      <TabList
        overflowX={isPhone && "scroll"}
        overflowY={isPhone && "hidden"}
        borderBottomWidth={isPhone ? "0" : "2px"}
        borderBottomColor={borderColor}
        height="42px"
      >
        {tabs.map((t, i) => (
          <TabItem
            key={i}
            className="tab-item"
            onClick={() => setTabIndex(i)}
            color={color}
            borderBottomColor={borderColor}
          >
            {t.name}
          </TabItem>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map((t, i) => (
          <TabPanel key={i} paddingX="0" {...rest}>
            {t.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

const TabItem = styled(Tab)`
  font-weight: 600;
  display: flex;
  grid-gap: 8px;
  align-items: center;

  &:active {
    background: transparent !important;
    color: rgb(101, 115, 132);
  }

  &:focus {
    box-shadow: none !important;
  }
`;

export default HorizontalTabs;
