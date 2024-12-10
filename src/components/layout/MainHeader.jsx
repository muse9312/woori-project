import React, { useState } from 'react';
import styled from 'styled-components';
import Hamburger from './Hamburger';
import MenuList from './MenuList';
import Notice from './Notice';

const MainHeader = () => {
  // logic
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  // view
  return (
    <>
      <HeaderWrap className='header'>
        {/* START: 공지사항 */}
        <Notice text={'👉2023년 2월 은행연합회 공시 COFIX (신규취급) 👉한국'} />
        {/* END: 공지사항 */}
        {/* START: 햄버거 메뉴 */}
        <HamburgerWrap>
          <Hamburger color='black' onClick={handleMenuOpen} />
        </HamburgerWrap>

        {/* END: 햄버거 메뉴 */}
      </HeaderWrap>
      <MenuList isOpen={isMenuOpen} isClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default MainHeader;

export const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: end;
  align-items: flex-start;
  height: 60px;
  z-index: 800;
`;

const HamburgerWrap = styled.div`
  margin: 18px 18px 0 44px;
`;
