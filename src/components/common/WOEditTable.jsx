import React from 'react';
import styled, { css } from 'styled-components';

const WOEditTable = ({ scroll, children }) => {
  return (
    <TableWrap scroll={scroll} className='edit-table'>
      <TableMain>{children}</TableMain>
    </TableWrap>
  );
};
export default WOEditTable;

const TableWrap = styled.div`
  flex: 0 0 auto;
  width: 100%;
  overflow: hidden;
  border-top: 1px solid #ededf3;
  border-bottom: 1px solid #ededf3;
  box-sizing: border-box;
  ${(props) =>
    props.scroll === 'x' &&
    css`
      overflow-x: auto;
    `}
  ${(props) =>
    props.scroll === 'y' &&
    css`
      height: 100%;
      overflow-y: auto;
    `}
    caption {
    font-style: normal !important;
    font-variant-ligatures: normal !important;
    font-variant-caps: normal !important;
    line-height: 0 !important;
    color: transparent !important;
    text-shadow: none !important;
    background-color: transparent !important;
    border: 0 !important;
    z-index: -1;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    position: absolute;
  }
`;
const TableMain = styled.table`
  width: calc(100% + 2px);
  margin-left: -1px;
  text-align: left;
  border-collapse: collapse;

  th,
  td {
    height: 60px;
    min-height: 60px;
    padding: 14px 20px;
    vertical-align: middle;
    word-break: normal;
  }
  tbody {
    th,
    td {
      border-top: 1px solid #ededf3;
    }
    td {
      background-color: #fff;
      .flex-box {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .input {
          & + .input {
            margin-left: 4px;
          }
        }
      }
      .editor-box {
        width: 100%;
        height: 164px;
      }
    }
    th {
      width: 160px;
      min-width: 160px;
      max-width: 160px;
    }
  }

  th {
    text-align: left;
    background-color: var(--C-Dark-01);
    color: var(--Cool-Dark-11);
    font-size: 12px;
    font-weight: 700;
    line-height: 18px;
    &.bg-dark02 {
      background-color: var(--C-Dark-02);
    }
  }
  tbody tr:first-child td,
  tbody tr:first-child th {
    border-top: none;
  }
`;
