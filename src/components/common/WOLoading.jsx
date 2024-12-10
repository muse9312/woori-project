import React from 'react';
import styled, { css } from 'styled-components';

const WOLoading = ({ type }) => {
  return (
    <LoadingWrap $type={type}>
      <Content>
        <img src='/assets/images/etc/loading.svg' alt='loading...' />
        <TextBox>
          <div className='text en'>LOADING...</div>
          <div className='text ko'>잠시만 기다려주세요.</div>
        </TextBox>
      </Content>
    </LoadingWrap>
  );
};

export default WOLoading;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-bottom: 3px;
  }
`;

const TextBox = styled.div`
  .text {
    text-align: center;

    &.en {
      color: var(--C-Dark-08);
      font-size: 20px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    &.ko {
      color: var(--C-Dark-06);
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

const LoadingWrap = styled.div`
  position: fixed;
  top: 0px;
  left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100vw - 80px);
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(24px);
  z-index: 1300;
  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: -80px;
    width: 80px;
    height: 100%;
  }

  ${(props) =>
    props.$type === 'content' &&
    css`
      position: absolute;
      left: 0;
      width: 100%;
      backdrop-filter: blur(2px);
      border-radius: 12px;
      z-index: 740;
      ::before {
        display: none;
      }
      ${Content} {
        flex-direction: row;
        gap: 0 30px;
        img {
          margin-bottom: 0;
        }
      }
      ${TextBox} {
        .text {
          &.en {
            margin-bottom: 0;
          }
        }
      }
    `}
  ${(props) =>
    props.$type === 'table' &&
    css`
      position: absolute;
      left: 0;
      width: 100%;
      z-index: 740;
      background-color: #fff;
      ::before {
        display: none;
      }
    `}
`;

// content
