import React from 'react';
import { css, styled } from 'styled-components';

const WOApprovalColumn = ({ manager, confirm, name, date, modify, id, disabled }) => {
  return (
    <Wrapper>
      <TableColumn>
        {/* 담당자 이름 */}
        <TableTitleBox $id={id} $disabled={disabled}>
          <p className='title-text'>{manager}</p>
        </TableTitleBox>

        <TableTextBox $id={id}>
          {/* 승인/반려 */}
          <TableTextItem $modify={modify}>
            <p className='item-text'>{!disabled && confirm}</p>
          </TableTextItem>

          <div className='rectangle' />

          {/* 담당자 이름 */}
          <TableTextItem $id={id}>
            <p className='item-text'>{!disabled && name}</p>
          </TableTextItem>

          <div className='rectangle' />

          {/* 승인 날짜 */}
          <TableTextItem>
            <p className='item-text'>{!disabled && date}</p>
          </TableTextItem>
        </TableTextBox>
      </TableColumn>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 845px;
  border-radius: '4px 0 0 0';
  &:nth-child(2) {
    margin-right: 18px;
  }
`;
const TableColumn = styled.div`
  flex: 1;
`;
const TableTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32px;
  padding: 5px 60px;
  gap: 10px;
  border: 1px solid #ededf3;
  background-color: #566479;
  ${(props) =>
    props.$disabled &&
    css`
      background-color: #ededf3;
    `}
  border-radius: 4px 0 0 0;
  ${(props) =>
    props.$id === 2 &&
    css`
      border-radius: 0 4px 0 0;
      border-left: unset;
    `}

  .title-text {
    color: #d7d7de;
    ${(props) =>
      props.$disabled &&
      css`
        color: #9ea6b2;
      `}
    font-size: 12px;
    font-weight: 700;
  }
`;
const TableTextBox = styled.div`
  display: flex;
  width: 100%;
  height: 38px;
  border: 1px solid #ededf3;
  border-top: unset;
  border-radius: 0 0 0 4px;
  ${(props) =>
    props.$id === 2 &&
    css`
      border-radius: 0 0 4px 0;
      border-left: unset;
    `}
  background: #fff;
  .rectangle {
    flex: 0 0 auto;
    background-color: #ededf3;
    width: 1px;
    height: 100%;
  }
`;

const TableTextItem = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 6px 12px;
  gap: 10px;

  .item-text {
    color: ${(props) => (props.$modify === true ? '#FF5D5D' : '#0E213F')};
    font-size: 12px;
    font-weight: 700;
    text-align: center;
  }
`;

export default WOApprovalColumn;
