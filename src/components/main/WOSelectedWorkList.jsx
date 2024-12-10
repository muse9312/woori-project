import React from 'react';
import styled from 'styled-components';
import WOToggleButton from '../common/WOToggleButton';
import WOIconButton from '../common/WOIconButton';
import WOBreadCrumbs from '../common/WOBreadCrumbs';

const WOSelectedWorkList = ({ workPath }) => {
  return (
    <Wrapper>
      <TitleWrap>
        <div className='tit-wrap'>
          <WOToggleButton icon='star' width={16} height={16} />
          <div className='tit'>자주 쓰는 업무</div>
        </div>
        <WOIconButton icon='close' width={16} height={16} />
      </TitleWrap>
      <DepthWrap>
        <WOBreadCrumbs list={workPath} color='gray' />
      </DepthWrap>
    </Wrapper>
  );
};

export default WOSelectedWorkList;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px 0px;
  width: 100%;
  padding: 16px 24px;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 37px);
    height: 1px;
    background-color: rgba(14, 33, 63, 0.1);
  }
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tit-wrap {
    display: flex;
    align-items: center;
    gap: 0 4px;
    height: 24px;
    .tit {
      color: #555;
      font-size: 12px;
      font-weight: 600;
      line-height: 14px;
    }
  }
`;
const DepthWrap = styled.div`
  display: flex;
  align-items: center;
  .depth {
    color: #555;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
  .arr {
    width: 20px;
    height: 20px;
    background: url(/assets/images/icon/main-depth-arrow-right.svg) no-repeat center/ cover;
  }
`;
