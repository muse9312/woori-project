import React from 'react';
import styled, { css } from 'styled-components';

const WOFormColumn = ({ col, width, noWidth, children, gridType, isAlignCenter, isAlignStart, direction, gap }) => {
  return (
    <Wrap
      className='form-column'
      $gridType={gridType}
      $col={col || 1}
      $isAlignCenter={isAlignCenter}
      $isAlignStart={isAlignStart}
      $width={width}
      $noWidth={noWidth}
      $direction={direction}
      $gap={gap}>
      {children}
    </Wrap>
  );
};

export default WOFormColumn;

const Wrap = styled.div`
  display: flex;
  align-items: ${(props) => `${props.$isAlignCenter ? 'center' : 'end'}`};
  gap: ${(props) => `${props.$gap ?? 4}px`};
  /* width: 230px; */
  width: ${(props) => (props.$noWidth ? '100%' : `${props.$width || `${props.$col * 230 + (props.$col - 1) * 36}`}px`)};
  ${(props) =>
    props.$direction === 'column' &&
    css`
      flex-direction: column;
      align-items: flex-start;
    `}

  ${(props) =>
    props.$isAlignStart &&
    css`
      align-items: flex-start;
    `}
  ${(props) =>
    props.$gridType === 'modal' &&
    css`
      width: ${(props) => `${props.$width || `${props.$col * 230 + (props.$col - 1) * 14}`}px`};
    `}
  ${(props) =>
    props.$gridType === 'type01' &&
    css`
      > * {
        &:first-child {
          min-width: 113px;
          width: 113px;
        }
        &:last-child {
          width: 100%;
        }
      }
    `}
  ${(props) =>
    props.$gridType === 'type02' &&
    css`
      align-items: center;
      > * {
        &:first-child {
          min-width: 60px;
          width: 60px;
        }
        &:last-child {
          width: 100%;
        }
      }
      .line {
        width: 1px;
        height: 16px;
        margin: 0 12px;
        background-color: var(--C-Dark-05);
      }
    `}

    

    ${(props) =>
    props.$gridType === 'login' &&
    css`
      align-items: center;
      > * {
        &:first-child {
          min-width: 60px;
          width: 60px;
        }
        &:last-child {
          width: 100%;
        }
      }
    `}

    /* email input 스타일 */
    ${(props) =>
    props.$gridType === 'type04' &&
    css`
      > * {
        &:first-child {
          min-width: 113px;
          width: 113px;
        }
        &:last-child {
          width: 100%;
        }
      }
    `}
    
    /* email input 스타일 */
    ${(props) =>
    props.$gridType === 'type03' &&
    css`
      > * {
        &:first-child {
          min-width: 210px;
          width: 210px;
        }
        &:last-child {
          width: 100%;
        }
      }
    `}
    
    ${(props) =>
    props.$gridType === 'full' &&
    css`
      width: 100%;
    `}

    ${(props) =>
    props.$gridType === 'email' &&
    css`
      border-radius: 4px;
      border: 1px solid var(--Cool-Dark-02, #ededf3);
    `}
`;
