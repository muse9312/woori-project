import React, { useState } from 'react';
import styled from 'styled-components';

const WOToggleButton = ({ width, height, icon, initialState }) => {
  const [isActive, setIsActive] = useState(!!initialState || false);

  const handleClick = (event) => {
    event.stopPropagation(); // 이벤트 버블링을 중단
    event.preventDefault(); // 기본 동작을 취소
    setIsActive(!isActive);
  };

  return <ToggleBtn type="button" className="toggle-btn" $width={width ? width : 18} $height={height ? height : 18} $icon={icon} $isActive={isActive} onClick={handleClick}></ToggleBtn>;
};

export default WOToggleButton;

const ToggleBtnBaseStyled = styled.button`
  cursor: pointer;
  width: ${(props) => props.$width && `${props.$width}px`};
  height: ${(props) => props.$height && `${props.$height}px`};
`;

const ToggleBtn = styled(ToggleBtnBaseStyled)`
  ${(props) =>
    props.$isActive
      ? `
        background:url('/assets/images/icon/${props.$icon}-active.svg') no-repeat center / cover;
  `
      : `background:url('/assets/images/icon/${props.$icon}.svg') no-repeat center / cover;`}
`;
