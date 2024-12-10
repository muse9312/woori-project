import React from 'react';
import styled from 'styled-components';

const WOIconButton = ({ icon, width, height, onClick }) => {
  return (
    <IconComponents
      type='button'
      className='icon-btn'
      $icon={icon}
      $width={width ? width : 18}
      $height={height ? height : 18}
      onClick={onClick}></IconComponents>
  );
};

export default WOIconButton;
const IconBaseStyle = styled.button`
  display: block;
  width: ${(props) => props.$width && `${props.$width}px`};
  height: ${(props) => props.$height && `${props.$height}px`};
`;

const IconComponents = styled(IconBaseStyle)`
  flex: 0 0 auto;
  ${(props) =>
    props.$icon &&
    `
        background:url('/assets/images/icon/${props.$icon}.svg') no-repeat center / cover;
  `}
`;
