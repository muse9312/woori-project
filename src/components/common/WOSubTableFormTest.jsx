import React from 'react';
import { css, styled } from 'styled-components';
import WOFormColumn from './WOFormColumn';
import WOInput from './WOInput';

const WOSubTableFormTest = ({ tableData, type, title, disableWrap }) => {
  return (
    <TableWrap className='sub-table' $type={type}>
      {title && <Title>{title}</Title>}
      <Table>
        <TableColumn>
          <TableItem>
            <div className='title'>채권번호</div>
            <div className='text'>
              <WOFormColumn>
                <WOInput />
              </WOFormColumn>
            </div>
          </TableItem>
          <TableItem>
            <div className='title'>채권번호</div>
            <div className='text'>
              <WOFormColumn>
                <WOInput />
              </WOFormColumn>
            </div>
          </TableItem>
        </TableColumn>
        <TableColumn>
          <TableItem>
            <div className='title'>채권번호</div>
            <div className='text'>
              <WOFormColumn>
                <WOInput />
              </WOFormColumn>
            </div>
          </TableItem>
          <TableItem className='full'>
            <div className='title'>채권번호</div>
            <WOInput />
          </TableItem>
        </TableColumn>
      </Table>
    </TableWrap>
  );
};

export default WOSubTableFormTest;

const TableWrap = styled.div`
  min-width: 1256px;
  & + & {
    margin-top: 8px;
  }
`;

const Table = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 28px 26px;
  border-radius: 16px;
  background: #f5f6fa;
  gap: 0 48px;
  ${(props) =>
    props.$type === 'page' &&
    css`
      background: #ededf3;
    `}
`;

const Title = styled.div`
  padding: 0 20px;
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
`;
const TableItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  &.full {
    width: calc(100% + 48px);
  }
  .title {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    width: 160px;
    padding: 0 12px;
    color: #263752;
    white-space: wrap;

    // wrap 제거
    ${(props) =>
      props.$disableWrap === true &&
      css`
        white-space: nowrap;
      `}
    line-height: 30px;
  }
  .text {
    display: flex;
    align-items: center;
    width: 250px;
    color: #566479;
    font-weight: 400;
    white-space: wrap;
    line-height: 30px;

    &.num {
      justify-content: end;
    }
    .error {
      color: #ff5d5d;
      line-height: 30px;
    }
  }
`;

const TableColumn = styled.div`
  flex: 1;
  border-right: 1px solid var(--W-Dark-03);
  &:last-child {
    border-right: unset;
    flex: 2;
    padding-right: 48px;
    ${TableItem} {
      justify-content: flex-start;
    }
  }
`;
