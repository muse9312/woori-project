import React from 'react';
import styled from 'styled-components';

const Layout = ({ children }) => {
  return <Wrap className='wrap'>{children}</Wrap>;
};

export default Layout;

const Wrap = styled.div`
  height: 100%;
`;
