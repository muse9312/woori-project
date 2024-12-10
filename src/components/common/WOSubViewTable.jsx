import React from 'react';
import styled from 'styled-components';

const WOSubViewTable = ({ tableData, bullet }) => {
  return (
    <Wrapper className='sub-view-table'>
      {tableData.map((item) => (
        <TableItem key={item.id}>
          {bullet && <>• </>}
          {item.title} {item.text}
        </TableItem>
      ))}
    </Wrapper>
  );
};

export default WOSubViewTable;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background: #f7f8fa;
`;

const TableItem = styled.div`
  width: 50%;
  padding: 0 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  color: var(--W-Dark-09);
`;
