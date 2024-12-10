import React from 'react';
import Lnb from '../../components/layout/Lnb';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CMM404 = () => {
  return (
    <>
      <Lnb />
      <Wrapper>
        <ErrorArea>
          <div className='error-img'>
            <img src='/assets/images/etc/404.svg' alt='404 에러 이미지' />
          </div>
          <div className='title-wrap'>
            <div className='title'>페이지를 찾을 수 없습니다.</div>
            <div className='text'>현재 페이지가 존재하지 않거나, 이용할 수 없는 페이지입니다.</div>
          </div>
          <MainBtn to='/'>메인으로</MainBtn>
        </ErrorArea>
      </Wrapper>
    </>
  );
};

export default CMM404;

const Wrapper = styled.div`
  width: 100%;
  min-width: 600px;
  height: 100%;
  padding: 294px 0 0 80px;
  background: #fff;
`;

const ErrorArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  .error-img {
    width: 512px;
    height: 212px;
    margin-bottom: 36px;
    img {
      width: 100%;
      height: auto;
    }
  }
  .title-wrap {
    margin-bottom: 40px;
    text-align: center;
    .title {
      margin-bottom: 8px;
      color: #333;
      font-size: 28px;
      font-weight: 700;
      line-height: 42px;
    }
    .text {
      color: var(--C-Dark-06);
      font-size: 18px;
      font-weight: 700;
      line-height: 27px;
    }
  }
`;

const MainBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 52px;
  border-radius: 4px;
  background: var(--C-Dark-12);
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
`;
