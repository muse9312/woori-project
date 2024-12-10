import React from 'react';
import styled, { css } from 'styled-components';
import WOIcon from './WOIcon';

const WOTransfer = ({ mainTitle, children }) => {
  return (
    <Wrap>
      <MainTitle>{mainTitle}</MainTitle>
      {children[0]} {/* FromArea */}
      <WOIcon icon='arrow-down-double' width={42} height={42} />
      {children[1]} {/* ToArea */}
    </Wrap>
  );
};

export default WOTransfer;

const contentStyle = css`
  display: flex;
  align-items: center;
  padding: 16px 32px;
  border-radius: 12px;
  background: var(--C-Dark-01);
  gap: 16px;
`;

const Wrap = styled.div`
  .icon {
    margin: 2px auto;
  }
`;

const MainTitle = styled.span`
  display: block;
  color: var(--W-Dark-11);
  font-size: 14px;
  font-weight: 700;
  padding-bottom: 8px;
`;
export const TransferTitle = styled.span`
  display: flex;
  align-items: center;
  color: var(--C-Dark-10);
  font-size: 14px;
  font-weight: 700;
  padding-right: 32px;
  &::before {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50px;
    background-color: var(--C-Dark-10);
    margin-right: 8px;
  }
`;
export const FromArea = styled.div`
  ${contentStyle}
`;
export const ToArea = styled.div`
  ${contentStyle}
`;
