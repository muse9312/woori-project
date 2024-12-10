import React from 'react';
import { css, styled } from 'styled-components';

const WOSubTable = ({ tableData: tableList, type, title, disableWrap, titleWidth }) => {
  // view
  return (
    <TableWrap className='sub-table' $type={type}>
      {title && <Title>{title}</Title>}
      <Table $type={type}>
        <div className='sub-table__wrap'>
          {tableList.map((column) => (
            <TableColumn $type={type} key={column.id}>
              {column.children &&
                column.children.map((item) => (
                  <TableItem key={item.id} $disableWrap={disableWrap} $type={type} titleWidth={titleWidth}>
                    <div className='title'>{item.title}</div>
                    {/* {renderText(item)} */}
                    <div className={`text ${item.isNum && `num`}`}>
                      {item.isError ? (
                        <>
                          <div className={'error'}>0</div>원
                        </>
                      ) : (
                        <>{item.text}</>
                      )}
                    </div>
                  </TableItem>
                ))}
            </TableColumn>
          ))}
        </div>
      </Table>
    </TableWrap>
  );
};

export default WOSubTable;

const TableWrap = styled.div`
  flex: 0 0 auto;
  min-width: 1256px;
  overflow: hidden;
  & + & {
    margin-top: 8px;
  }
  ${(props) =>
    props.$type === 'modal' &&
    css`
      min-width: auto;
    `};
`;

const Table = styled.div`
  padding: 16px 32px;
  border-radius: 12px;
  background: #f5f6fa;

  ${(props) =>
    props.$type === 'page' &&
    css`
      background: #ededf3;
    `};
  .sub-table {
    &__wrap {
      margin: 0 -36px;
      display: flex;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
`;
const TableColumn = styled.div`
  min-width: 33.3%;
  border-right: 1px solid var(--C-Dark-03);
  padding: 0 36px;
  ${(props) =>
    props.$type === 'page' &&
    css`
      border-right: 1px solid var(--W-Dark-03);
    `}
  &:last-child {
    border-right: unset;
    /* padding-right: 0; */
  }
`;

const TableItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  min-height: 36px;
  .title {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    width: ${(props) => `${props.titleWidth || 160}px`};
    color: #263752;
    white-space: wrap;
    line-height: 110%;
  }
  .text {
    display: flex;
    align-items: center;
    color: #566479;
    font-weight: 400;
    white-space: wrap;
    line-height: 110%;
    &.num {
      margin-left: auto;
    }
    .error {
      color: #ff5d5d;
      line-height: 21px;
    }
  }
  ${(props) =>
    props.$type === 'page' &&
    css`
      .title {
        font-size: 14px;
        font-weight: 700;
      }
      .text {
        font-size: 14px;
        font-weight: 400;
      }
    `}

  ${(props) =>
    props.$type === 'modal' &&
    css`
      .title {
        font-size: 12px;
        font-weight: 700;
      }
      .text {
        font-size: 12px;
        font-weight: 400;
      }
    `}
`;
