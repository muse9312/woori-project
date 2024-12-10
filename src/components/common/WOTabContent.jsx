import React from 'react';
import styled from 'styled-components';

const WOTabContent = ({ children, id, activeTabId }) => {
  return id === activeTabId && <Wrap>{children}</Wrap>;
};

export default WOTabContent;

const Wrap = styled.div`
  height: 100%;
`;
