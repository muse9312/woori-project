import styled from 'styled-components';
import React, { useEffect, useState } from 'react';

const WOMenuIconButton = ({ imageFile, text, activeMenu, isMenuOpen, onHover }) => {
  const [, setIsHover] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleHover = (isHover) => {
    setIsHover(isHover);
    onHover(isHover);
  };
  useEffect(() => {
    // lnb메뉴 닫힐때 activeMenu비우지 않기위해 사용 (for 애니매이션)
    isMenuOpen && activeMenu && activeMenu.title === text ? setIsActive(true) : setIsActive(false);
  }, [isMenuOpen, activeMenu, text]);

  return (
    // <Button className={`${isActive ? 'active' : ''}`} onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>
    <Button type="button" className={`${isActive ? 'active' : ''}`} onMouseOver={() => handleHover(true)} onMouseOut={() => handleHover(false)}>
      {/* <i className="mark" /> */}
      <div className="area">
        <Icon src={isActive ? `${imageFile}_selected.svg` : `${imageFile}.svg`} />
        <Title className="title">{text}</Title>
      </div>
    </Button>
  );
};

export default WOMenuIconButton;

const Icon = styled.img`
  display: block;
  margin: 0 auto;
  width: 34px;
  height: 34px;
`;

const Title = styled.span`
  display: block;
  color: #fff;
  font-size: 13px;
  line-height: 13px;
  font-weight: 700;
  opacity: 0.6;
`;

const Button = styled.button`
  display: inline-block;
  position: relative;
  padding: 0 8px;
  margin: 1px 0;
  width: 100%;
  text-align: center;
  .area {
    padding: 6px 0;
  }

  .mark {
    display: block;
    position: absolute;
    width: 6px;
    left: -8px;
    top: 0;
    bottom: 0;
    background-color: transparent;
  }
  &:hover,
  &.active {
    ${Title} {
      color: var(--woori-navy);
      opacity: 1;
    }
    .area {
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 8px;
    }
    .mark {
      background-color: var(--woori-navy);
    }
  }
`;
