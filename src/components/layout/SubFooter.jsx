import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styled, { css } from 'styled-components';

const SubFooter = ({ children }) => {
  // logic
  const { sideOpen } = useOutletContext();
  // view
  return (
    <Wrap className='footer' $sideOpen={sideOpen}>
      {children}
    </Wrap>
  );
};

export default SubFooter;

const Wrap = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  padding: 15px 36px 15px 116px;
  box-shadow: 0px -8px 8px 0px rgba(0, 0, 0, 0.04);
  background-color: #fff;
  z-index: 850;
  transition: all 0.5s;
  ${(props) =>
    props.$sideOpen &&
    css`
      margin-left: 374px;
      padding-left: 36px;
    `}
`;
