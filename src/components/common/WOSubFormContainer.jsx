import React from 'react';
import { styled, css } from 'styled-components';

const WOSubFormContainer = ({ children, isAlignStart, isMargin }) => {
  return (
    <Wrap isMargin={isMargin}>
      <WrapForm $isAlignStart={isAlignStart}>
        <div className='sub-table__wrap'>{children}</div>
      </WrapForm>
    </Wrap>
  );
};

export default WOSubFormContainer;

const Wrap = styled.div`
  min-width: 1216px;
  margin-top: ${(props) => (props.isMargin ? '0' : '8px')};
`;

const WrapForm = styled.div`
  padding: 16px 32px;
  border-radius: 16px;
  background: #f5f6fa;
  .sub-table__wrap {
    margin: 0 -36px;
    display: flex;
    align-items: ${(props) => (props.$isAlignStart ? 'flex-start' : 'flex-end')};
  }
`;

const contentStyle = css`
  flex-direction: column;
  min-width: 33.3%;
  border-right: 1px solid #e5e5ed;
  padding: 0 36px;
  display: flex;
  gap: 2px;
  &:last-child {
    border-right: unset;
    width: 100%;
  }
`;

export const SubFormColumn = styled.div`
  ${contentStyle}
`;
