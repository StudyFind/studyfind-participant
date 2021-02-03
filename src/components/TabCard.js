import React from "react";
import styled from "styled-components";

function Card({ tabs, current, hideTabs, handleSelect, children, ...rest }) {
  if (!(tabs && tabs.length)) {
    return <Box {...rest}>{children}</Box>;
  }

  const format = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  const TABS = (
    <Tabs>
      {tabs.map((tab, index) => (
        <Tab key={index} selected={current === tab} onClick={() => handleSelect(tab)}>
          {format(tab)}
        </Tab>
      ))}
    </Tabs>
  );

  const CONTENT = children.find((child) => child.props.tab === current);

  return (
    <TabBox {...rest}>
      {hideTabs || TABS}
      <Content>{CONTENT}</Content>
    </TabBox>
  );
}

const Box = styled.div`
  display: inline-block;
  background: #f8f9fa;
  border: 1px solid #e7eaf3;
  border-radius: 0.3125rem;
  padding: 1.5rem;
`;

const TabBox = styled(Box)`
  padding: 0;
`;

const Content = styled.div`
  padding: 1.5rem;
`;

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #e7eaf3;
`;

const Tab = styled.div`
  flex: 1;
  color: #96a0aa;
  text-align: center;
  padding: 1rem 0.75rem;
  cursor: pointer;
  font-weight: 500;
  margin-bottom: -2px;

  &:hover {
    color: #377dff;
  }

  ${(props) =>
    props.selected &&
    `
    color: #377dff;
    border-bottom: 3px solid #377dff;
  `}
`;

export default Card;
