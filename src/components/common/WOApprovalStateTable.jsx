import React from 'react';
import { css, styled } from 'styled-components';
import WOApprovalColumn from './WOApprovalColumn';

const WOApprovalStateTable = ({ title, tableData, type, disabled }) => {
  return (
    <Wrap $type={type}>
      {/* 메인타이틀 이름 */}

      <TableWrapper $type={type}>
        <TableTitle $type={type}>{title}</TableTitle>
        <div className='test'>
          {tableData.map((item) =>
            item.columns.map((column) => {
              return <WOApprovalColumn key={column.id} {...column} modify={!column.isApprove} disabled={disabled} />;
            })
          )}
        </div>
      </TableWrapper>
    </Wrap>
  );
};

export default WOApprovalStateTable;

const Wrap = styled.div`
  min-width: 1256px;
  ${(props) =>
    props.$type === 'modal' &&
    css`
      min-width: auto;
    `}
`;

const TableWrapper = styled.div`
  ${(props) =>
    props.$type !== 'modal' &&
    css`
      display: flex;
      flex-direction: column;
      padding: 20px;
      background: #fff;
      border: 1px solid #ededf3;
      border-radius: 12px;
    `}

  .test {
    display: flex;
  }

  ${(props) => props.$disabled && css``}
`;

const TableTitle = styled.div`
  display: flex;
  color: #0e213f;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 12px;
  ${(props) =>
    props.$type === 'modal' &&
    css`
      margin-bottom: 8px;
    `}
`;
