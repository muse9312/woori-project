import React from 'react';
import styled from 'styled-components';

const WOGrayBox = ({ px, py, children }) => {
  return (
    <Wrap $px={px} $py={py}>
      {children}
    </Wrap>
  );
};

export default WOGrayBox;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border-radius: 16px;
  background: var(--C-Dark-01);

  padding-left: ${(props) => `${props.$px || 24}px`};
  padding-right: ${(props) => `${props.$px || 24}px`};
  padding-top: ${(props) => `${props.$py || 24}px`};
  padding-bottom: ${(props) => `${props.$py || 24}px`};
`;
