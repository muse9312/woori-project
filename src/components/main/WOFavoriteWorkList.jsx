import React from 'react';
import styled from 'styled-components';
import WOToggleButton from '../common/WOToggleButton';
import WOBreadCrumbs from '../common/WOBreadCrumbs';
import WOIconButton from '../common/WOIconButton';

const WOFavoriteWorkList = ({ list, area }) => {
  return (
    <Wrapper>
      <LeftWrap>
        <WOToggleButton icon='star' width={16} height={16} />
        <DepthWrap>
          <WOBreadCrumbs list={list} color='gray' />
          <AreaBox>
            {area.map((item, index) => (
              <span key={index}>{item.title}</span>
            ))}
          </AreaBox>
        </DepthWrap>
      </LeftWrap>
      <RightWrap>
        <WOIconButton icon='close-grey' width={16} height={16} />
      </RightWrap>
    </Wrapper>
  );
};

export default WOFavoriteWorkList;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 8px;
  &:hover {
    background: var(--C-Dark-01);
  }
`;

const LeftWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0 16px;
`;

const DepthWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px 0;
  .bread {
    a {
      font-weight: 500;
    }
  }
`;
const AreaBox = styled.div`
  display: flex;
  gap: 0 13px;
  span {
    position: relative;
    display: block;
    color: var(--C-Dark-06);
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    & + span {
      &::before {
        content: '';
        position: absolute;
        left: -7px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 9px;
        background: var(--C-Dark-06);
      }
    }
  }
`;

const RightWrap = styled.div``;
