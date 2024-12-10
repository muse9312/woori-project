import React, { useState } from 'react';
import { Outlet } from 'react-router';
import styled, { css } from 'styled-components';
import Lnb from './Lnb';
import Side from './Side';

const SubLayout = () => {
  const [sideOpen, setSideOpen] = useState(false);
  const handleLayout = (sideOpen) => {
    setSideOpen(sideOpen);
  };

  return (
    <SubLayoutWrap>
      <Lnb />
      <Side
        onOpen={(sideOpen) => {
          handleLayout(sideOpen);
        }}
        isOpen={sideOpen}
      />
      <Main $sideOpen={sideOpen}>
        <Outlet context={{ sideOpen }} />
      </Main>
    </SubLayoutWrap>
  );
};

export default SubLayout;

const SubLayoutWrap = styled.div`
  height: 100%;
`;

// content

const Main = styled.div`
  height: 100%;

  transition: 0.5s;

  ${(props) =>
    props.$sideOpen &&
    css`
      padding-left: 294px;
    `}
`;
