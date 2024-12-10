import React from 'react';
import styled from 'styled-components';

const WelcomBox = () => {
  return (
    <Wrap className='login__welcome-box'>
      <div className='title-area'>
        <span className='text'>안녕하세요</span>
        <span className='text'>금고업무 통합관리 시스템입니다.</span>
        <span className='sub-text'>로그인 후 이용이 가능합니다. </span>
      </div>
      <div className='info-area'>
        <address>100-739 서울특별시 중구 덕수궁길 15번지 전화번호 : 02)120</address>
        <address>COPYRIGHT © 2017 by DESIGN SEOUL. ALL RIGHT RESERVED.</address>
        <div className='image-area'>
          <img src='/assets/images/etc/seoul.svg' alt='I SEOUL U' height='14px' />
          <img src='/assets/images/etc/woori-bank.svg' alt='우리은행' height='18px' />
        </div>
      </div>
    </Wrap>
  );
};

export default WelcomBox;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 480px;
  width: 480px;
  height: 100vh;
  position: fixed;
  z-index: 900;
  padding: 36px 36px 40px;
  background: url('/assets/images/etc/logo-login.svg') left -64px bottom -20px / 485px 526px no-repeat, linear-gradient(0deg, #3a3d64 0%, #1d2e4b 100%);
  .title-area {
    .text,
    .sub-text {
      display: block;
    }
    .text {
      color: var(--White);
      font-size: 18px;
      font-weight: 700;
    }
    .sub-text {
      color: var(--C-Dark-04);
      font-size: 14px;
      font-weight: 400;
      padding-top: 12px;
    }
  }
  .info-area {
    margin-top: auto;
    gap: 16px;
    address {
      color: var(--C-Dark-06);
      font-size: 12px;
      font-weight: 400;
      & + address {
        padding-top: 4px;
      }
    }
    .image-area {
      display: flex;
      align-items: center;
      gap: 18px;
      padding-top: 16px;
    }
  }
`;
