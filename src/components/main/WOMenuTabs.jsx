import styled, { css } from 'styled-components';
import React, { useState } from 'react';

const WOMenuTabs = ({ tabs, onChange }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const handleSelectedTab = (tabId) => {
    setSelectedTab(tabId);
    onChange(tabId);
  };

  return (
    <TabList>
      {tabs.map((tab) => (
        <TabItem type='button' key={tab.id} $active={selectedTab === tab.id ? true : false} onClick={() => handleSelectedTab(tab.id)}>
          <Icon icon={tab.icon} />
          <Title>{tab.title}</Title>
        </TabItem>
      ))}
    </TabList>
  );
};

export default WOMenuTabs;

const TabList = styled.div`
  display: flex;
  align-items: center;
  gap: 0 3px;
  padding: 4px;
  border-radius: 30px;
  background: #f6f6fa;
`;

const Icon = styled.div`
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  ${(props) =>
    props.icon &&
    css`
      background: url(/assets/images/menu/${props.icon}.svg) no-repeat center / cover;
    `}
`;
const Title = styled.div`
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
`;
const TabItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 2px;
  min-width: 100px;
  height: 30px;
  padding: 0 23px 0 17px;
  border-radius: 30px;

  ${(props) =>
    props.$active
      ? css`
          border: 1px solid var(--C-Dark-08);
          background: #fff;

          ${Title} {
            color: var(--C-Dark-11);
          }
        `
      : css`
          border: 1px solid transparent;
          ${Title} {
            color: var(--C-Dark-08);
          }
        `}
`;
