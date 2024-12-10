import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import WOCollapseFDS from '../../views/main/WOCollapseFDS';
import { Fade } from '@mui/material';
import WOExpandFDS from '../../views/main/WOExpandFDS';
import { userList } from '../../data/response';

const MainFDS = ({ user = userList[0] }) => {
  // logic
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    const result = !isOpen;
    setIsOpen(result);
  };

  useEffect(() => {
    // 총괄 관리자, 시금고 관리자, 시금고 담당자 세팅
    // setUser(userList[0]);
  }, []);

  // view
  return (
    <Wrapper>
      <Inner $isOpen={isOpen}>
        <Fade in={!isOpen} timeout={1000}>
          <Container className='collapse' $isOpen={isOpen}>
            <WOCollapseFDS user={user} />
          </Container>
        </Fade>
        <Fade in={isOpen} timeout={1000}>
          <Container className='expand' $isOpen={isOpen}>
            <WOExpandFDS user={user} />
          </Container>
        </Fade>
      </Inner>

      <OpenBtn type='button' onClick={toggleOpen}></OpenBtn>
    </Wrapper>
  );
};

export default MainFDS;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 80px;
  height: 100vh;
  z-index: 900;
`;

const Inner = styled.div`
  height: 100%;
  background: linear-gradient(0deg, #3a3d64 0%, #1d2e4b 100%);
  color: #fff;
  overflow: hidden;
  transition: 0.5s;
  ${(props) =>
    props.$isOpen
      ? css`
          width: 1200px;
          position: relative;
        `
      : css`
          width: 400px;
        `};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${(props) =>
    props.$isOpen &&
    css`
      &.expand {
        position: absolute;
        top: 0;
        left: 0;
      }
    `};
`;

const OpenBtn = styled.button`
  position: absolute;
  top: 50%;
  right: -20px;
  width: 20px;
  height: 75px;
  background: url(/assets/images/sidebar-button-black.png) no-repeat center / cover;
  border-radius: 0 24px 24px 0;
`;
