import React from 'react';
import styled from 'styled-components';

const WOBorderBox = ({ height, children }) => {
  return (
    <Wrap $height={height} className="border-box">
      {children}
    </Wrap>
  );
};

export default WOBorderBox;

const Wrap = styled.div`
  height: ${(props) => `${props.$height}px` || 'auto'};
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    background: rgba(237, 237, 243, 0); /* 스크롤바 트랙 색상 */
  }
  padding: 4px 20px 2px 20px;
  border-radius: 12px;
  border: 1px solid #3c4b63;
`;
