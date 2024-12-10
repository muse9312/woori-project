import React from 'react';
import styled from 'styled-components';

const WODetailBox = ({ detail }) => {
  const { title, value, unit, isHigh } = detail;
  return (
    <Wrap className='box' $isHigh={isHigh}>
      <dt className='box__title'>{title}</dt>
      <dd className='box__value'>
        <span className='text'>{value}</span>
        <span className='unit'>{unit}</span>
      </dd>
    </Wrap>
  );
};

export default WODetailBox;

const Wrap = styled.dl`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;
  overflow: hidden;
  padding: 8px 40px;
  border-radius: 8px;
  background: var(--C-Dark-01);

  .box {
    &__title {
      color: var(--C-Dark-11);
      font-size: 14px;
      font-weight: 400;
    }
    &__value {
      color: ${(props) => (props.$isHigh ? 'var(--Red-01)' : 'var(--C-Dark-12)')};
      font-size: 16px;
      font-weight: 700;
      display: flex;
      align-items: center;
    }
  }
`;
