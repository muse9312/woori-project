import React from 'react';
import { css, styled } from 'styled-components';

const WOSubFormItem = ({ children, title, width, flexStart, type }) => {
  return (
    <>
      {width === 'full' ? (
        <Wrap $width='full' $flexStart={flexStart}>
          <div className='title'>{title}</div>
          <div className='form-box full'>{children}</div>
        </Wrap>
      ) : (
        <Wrap $type={type} $flexStart={flexStart}>
          <div className='title'>{title}</div>
          <div className='form-box '>{children}</div>
        </Wrap>
      )}
    </>
  );
};

export default WOSubFormItem;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  ${(props) =>
    props.$flexStart &&
    css`
      justify-content: flex-start;
    `}

  ${(props) =>
    props.$type === 'radio' &&
    css`
      height: 36px;
    `}

  .form-box {
    display: flex;
    align-items: center;
    width: 250px;
    &.full {
      width: 100%;
    }
    .radio {
      flex: 1;
    }
  }
  .title {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    width: 120px;
    font-size: 14px;
    font-weight: 700;
    color: #263752;
    white-space: wrap;
    line-height: 110%;
  }
`;
