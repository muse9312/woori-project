import styled, { css } from 'styled-components';
import React, { useState } from 'react';

const WOTabs = ({ tabs, type, onChange, activeTabID }) => {
  const [selectedTab, setSelectedTab] = useState(activeTabID || tabs[0].id);

  const handleSelectedTab = (tabId) => {
    setSelectedTab(tabId);
    onChange(tabId);
  };

  return (
    <TabList $type={type} className='tab'>
      {tabs.map((tab) => (
        <TabItem
          type='button'
          key={tab.id}
          $type={type}
          className={`tab-item ${type}`}
          $active={selectedTab === tab.id ? true : false}
          onClick={() => handleSelectedTab(tab.id)}>
          {tab.name}
        </TabItem>
      ))}
    </TabList>
  );
};

export default WOTabs;

const TabList = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  ${(props) =>
    props.$type === 'type2' &&
    css`
      padding: 2px;
      border-radius: 12px;
      background: #0e213f;
    `}
  ${(props) =>
    props.$type === 'type3' &&
    css`
      padding: 4px;
      border-radius: 100px;
      background: #1a2c49;
    `}
    ${(props) =>
    props.$type === 'guide' &&
    css`
      padding: 0 20px;
    `}
`;

const TabItem = styled.button`
  // 기본 스타일
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.4);
  border: 1px solid transparent;

  & + .tab-item {
    margin-left: 28px;
  }

  // 활성 상태 스타일
  ${(props) =>
    props.$active &&
    css`
      color: #fff;
      border-bottom: 1px solid #fff;
    `}

  // type2 스타일
  ${(props) =>
    props.$type === 'type2' &&
    css`
      & + .type2 {
        margin-left: 0;
      }
      // type2 스타일 세부 정의
      width: 60px;
      height: 20px;
      border-radius: 10px;
      background: #0e213f;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      color: rgba(255, 255, 255, 0.7);
      border: unset;
      text-align: center;

      // type2에서 활성 상태 스타일
      ${(props) =>
        props.$active &&
        css`
          background: #1d2e4b;
          font-weight: 700;
          color: #fff;
          border-bottom: unset;
        `}
    `}
  // type3 스타일
  ${(props) =>
    props.$type === 'type3' &&
    css`
      & + .type3 {
        margin-left: 0;
      }
      // type2 스타일 세부 정의
      width: 65px;
      height: 24px;
      border-radius: 100px;
      background: unset;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      color: #86909f;
      border: unset;
      text-align: center;

      // type2에서 활성 상태 스타일
      ${(props) =>
        props.$active &&
        css`
          background: #99a3ff;
          font-weight: 700;
          color: #fff;
          border-bottom: unset;
        `}
    `}

     // guide 스타일
  ${(props) =>
    props.$type === 'guide' &&
    css`
      & + .guide {
        margin-left: 17px;
      }
      // guide 스타일 세부 정의

      height: 27px;

      font-size: 14px;
      font-weight: 700;
      line-height: 21px;
      color: var(--C-Dark-11);
      opacity: 0.5;
      transition: all 0.7s;
      text-align: center;

      // guide 활성 상태 스타일
      ${(props) =>
        props.$active &&
        css`
          color: var(--C-Dark-11);
          opacity: 1;
          border-bottom: 1px solid var(--C-Dark-11);
        `}
    `}
`;
