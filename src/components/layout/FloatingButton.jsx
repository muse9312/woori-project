import React from 'react';
import styled from 'styled-components';
import WOIcon from '../common/WOIcon';

const FloatingButton = ({ text, onClick }) => {
  return (
    <ButtonWrap>
      <Button type='button' onClick={onClick}>
        <WOIcon icon='floating' width={34} height={34} />
        <span className='text'>{text}</span>
      </Button>
    </ButtonWrap>
  );
};

export default FloatingButton;

const ButtonWrap = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 1100;
  filter: drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.15));
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 60px;
  height: 60px;
  overflow: hidden;
  background-color: #1d2e4b;
  border-radius: 12px;
  padding: 10px 10px 16px 16px;
  transition: all 0.6s;
  &:hover {
    width: 160px;
    .text {
      opacity: 1;
    }
  }
  .text {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    display: block;
    white-space: nowrap;
    padding: 6px 12px 0 14px;
    opacity: 0;
    transition: all 0.6s;
  }
`;
