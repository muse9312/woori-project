import React from 'react';
import styled, { css } from 'styled-components';

const WOMenuPermissionTable = ({ children, isTableOpen }) => {
  return <TableMain $isTableOpen={isTableOpen}>{children}</TableMain>;
};

export default WOMenuPermissionTable;

export const TableWrapper = styled.div`
  background-color: #fff;
  border: 1px solid var(--C-Dark-02, #ededf3);
  border-top: none;
`;

export const TableWrap = styled.div`
  display: flex;
  width: calc(100% + 2px);
  margin: 0 -1px -1px;
`;
const TableMain = styled.table`
  width: 100%;
  height: fit-content;
  table-layout: fixed;
  border-collapse: collapse;
  margin-left: -1px;
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
  thead {
    tr {
      background: var(--C-Dark-02, #ededf3);
      th {
        height: 42px;
        padding: 0px 12px;
        border: 1px solid var(--C-Dark-04, #d7d7de);
        vertical-align: middle;
        color: var(--W-Dark-11, #333);
        font-size: 14px;
        font-weight: 700;
        line-height: 120%; /* 16.8px */
      }
    }
  }
  tbody {
    ${(props) =>
      props.$isTableOpen
        ? css``
        : css`
            display: none;
          `}
    tr {
      background-color: #fff;
      &.tab-item {
        background: var(--W-Dark-01, #f9f9f9);
        td {
          &:first-child {
            padding: 0 24px;
          }
        }
      }
      &.depth3-item {
        background: var(--W-Dark-01, #f9f9f9);
        td {
          &:first-child {
            padding: 0 24px;
          }
        }
      }
      th,
      td {
        height: 32px;
        padding: 0px 12px;
        border: 1px solid var(--C-Dark-02, #ededf3);
        border-top: none;
        vertical-align: middle;
        color: var(--W-Dark-10, #555);
        font-size: 14px;
        font-weight: 400;
        line-height: 150%; /* 21px */
      }
    }
  }
`;
