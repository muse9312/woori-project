import React from 'react';
import styled, { keyframes } from 'styled-components';

const NoticeBar = ({ text, onClick }) => {
  return (
    <Button className='notice-bar' type='button' onClick={onClick}>
      <div className='move-slide'>
        <span className='text'>{text}</span>
        <span className='text'>{text}</span>
        <span className='text'>{text}</span>
        <span className='text'>{text}</span>
      </div>
    </Button>
  );
};

export default NoticeBar;

const moveSlideshow = keyframes`
  0%{
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-380px *2));
  }
  `;
const Button = styled.button`
  display: flex;
  width: 380px;
  height: 46px;
  padding: 10px 20px;
  border-radius: 0 0 20px 20px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(270deg, #a6cae3 0%, #99a3ff 100%);
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  .move-slide {
    overflow: hidden;
    position: absolute;
    left: 20px;
    width: calc(380px * 4);
    transform: translateX(0);
    animation: ${moveSlideshow} 12s 1s infinite linear;
  }
  .text {
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    padding: 0 4px;
  }
`;
