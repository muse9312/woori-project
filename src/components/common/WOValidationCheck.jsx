import React from 'react';
import styled from 'styled-components';
import WOIcon from './WOIcon';

const WOValidationCheck = ({ itemList }) => {
  return (
    <Wrap>
      {itemList.map((item) => (
        <TextBox key={item.id}>
          <WOIcon icon={(!item.isCheck && 'check') || (item.isCheck === 'pass' ? 'check_blue' : 'check_red')} width={12} height={12} />
          <TextArea $vailCheck={item.isCheck}>{item.title}</TextArea>
        </TextBox>
      ))}
    </Wrap>
  );
};

export default WOValidationCheck;

const Wrap = styled.div`
  display: flex;
  gap: 0 12px;
`;

const TextBox = styled.div`
  display: flex;
  gap: 0 4px;
  align-items: center;
`;

const TextArea = styled.div`
  color: ${(props) => {
    switch (props.$vailCheck) {
      case 'pass':
        return 'var(--Blue-02)';
      case 'error':
        return 'var(--Red-02)';
      default:
        return 'var(--W-Dark-06)';
    }
  }};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.12px;
`;
