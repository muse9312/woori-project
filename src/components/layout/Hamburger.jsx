import React from 'react';
import styled from 'styled-components';
import WOIcon from '../common/WOIcon';

const Hamburger = ({ color, onClick }) => {
  return (
    <HamburgerButton type="button" onClick={onClick}>
      <WOIcon icon={`hamburger-${color}`} width="24" height="24" />
      <span className="sr-only">메뉴 버튼</span>
    </HamburgerButton>
  );
};

export default Hamburger;

// 햄버거 메뉴
const HamburgerButton = styled.button`
  /* margin: 0 18px 0 44px; */
  position: relative;
`;
