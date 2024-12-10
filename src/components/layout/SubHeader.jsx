import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import Hamburger from './Hamburger';
import WOAlarm from '../common/WOAlarm';
import { alarmList } from '../../data/response';
import WOPerson from './../../views/WOPerson';
import MenuList from './MenuList';
import { useOutletContext } from 'react-router-dom';

const SubHeader = ({ color }) => {
  // logic
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { sideOpen } = useOutletContext();
  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  // view
  return (
    <>
      <HeaderWrap className='header' color={color} $sideOpen={sideOpen}>
        <WOPerson />
        {alarmList.map((alarm) => (
          <WOAlarm key={alarm.id} severity={alarm.severity} label={alarm.label} count={alarm.count} styleType='inline' />
        ))}

        <HamburgerWrap>
          <Hamburger color='white' onClick={handleMenuOpen} />
        </HamburgerWrap>
      </HeaderWrap>
      <MenuList isOpen={isMenuOpen} isClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default SubHeader;

const HeaderWrap = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  height: 60px;
  padding-left: 120px;
  z-index: 750;
  transition: padding 0.5s;
  ${(props) =>
    props.color === 'navy' &&
    css`
      background-color: #0e213f;
    `}
  ${(props) =>
    props.$sideOpen &&
    css`
      padding-left: 414px;
    `}
`;

const HamburgerWrap = styled.div`
  margin: 0 18px 0 40px;
`;
