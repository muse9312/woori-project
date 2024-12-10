import styled, { css } from 'styled-components';
import React, { useState } from 'react';

const WOMainTabs = ({ tabs, onChange }) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  const handleSelectedTab = (tabId) => {
    setSelectedTab(tabId);
    onChange(tabId);
  };

  return (
    <TabList>
      {tabs.map((tab) => (
        <TabItem type='button' key={tab.id} $active={selectedTab === tab.id ? true : false} onClick={() => handleSelectedTab(tab.id)}>
          {tab.name}
        </TabItem>
      ))}
    </TabList>
  );
};

export default WOMainTabs;

const TabList = styled.div`
  display: flex;
  align-items: center;
  gap: 0 20px;
  width: fit-content;
  height: 42px;
`;

const TabItem = styled.button`
  padding-bottom: 11px;
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  height: 42px;
  ${(props) =>
    props.$active
      ? css`
          border-bottom: 1px solid var(--C-Dark-11);
          color: var(--C-Dark-11);
        `
      : css`
          color: rgba(26, 44, 73, 0.4);
          border-bottom: 1px solid transparent;
        `}
`;
