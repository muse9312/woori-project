import React from 'react';
import styled from 'styled-components';

const WOSeal = ({ imgName }) => {
  return (
    <Wrapper>
      <Img src={`/assets/images/temp/${imgName}.svg`} alt='직인'></Img>
    </Wrapper>
  );
};

export default WOSeal;

const Wrapper = styled.div`
  width: 96px;
  height: 96px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid var(--C-Dark-02);
  background: #fff;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
