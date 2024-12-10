import React from 'react';
import styled, { css } from 'styled-components';

const WOTextBadge = ({ type, size, children }) => {
  return (
    <Wrapper $type={type || 'primary'} $size={size || 'md'}>
      {children}
    </Wrapper>
  );
};

export default WOTextBadge;

const Wrapper = styled.div`
  border-radius: 1000px;
  text-align: center;
  margin-left: 8px;
  ${(props) =>
    props.$size === 'sm' &&
    css`
      min-width: 37px;
      height: 22px;
      padding: 0 4px;
      line-height: 21px;
      font-size: 12px;
      font-weight: 400;
    `}
  ${(props) =>
    props.$size === 'md' &&
    css`
      min-width: 41px;
      height: 24px;
      padding: 0 6px;
      line-height: 24px;
      font-size: 12px;
      font-weight: 700;
    `}
  ${(props) =>
    props.$size === 'lg' &&
    css`
      min-width: 45px;
      height: 29px;
      padding: 0 8px;
      line-height: 29px;
      font-size: 14px;
      font-weight: 700;
    `}
  ${(props) =>
    props.$type === 'primary' &&
    css`
      background: var(--Blue-02);
      color: #fff;
    `}
  ${(props) =>
    props.$type === 'secondary' &&
    css`
      background: var(--C-Dark-09);
      color: #fff;
    `}
  ${(props) =>
    props.$type === 'tertiary' &&
    css`
      border: 1px solid var(--Blue-01);
      color: var(--Blue-01);
    `}
  ${(props) =>
    props.$type === 'gray' &&
    css`
      background: var(--C-Dark-06);
      color: #fff;
    `}
  ${(props) =>
    props.$type === 'grayTertiary' &&
    css`
      border: 1px solid var(--C-Dark-05);
      color: var(--C-Dark-08);
    `}
`;
