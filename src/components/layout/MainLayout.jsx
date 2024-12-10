import React from 'react';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import MainHeader from './MainHeader';
import MainFooter from './MainFooter';
import Lnb from './Lnb';
import MainFDS from './MainFDS';

const MainLayout = ({ user }) => {
  return (
    <MainLayoutWrap>
      <MainHeader />
      <Lnb />
      <MainFDS user={user} />
      <Main>
        <Outlet />
      </Main>
      <MainFooter />
    </MainLayoutWrap>
  );
};

export default MainLayout;

const MainLayoutWrap = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  padding-left: 80px;
  background-color: #fff;
`;

// content

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px 0;
  min-height: 100%;
  padding: 109px 0 40px 500px;
  background-color: #fff;
  min-width: 1660px;

  .main-select-work-area {
    margin-bottom: 20px;
  }
`;
