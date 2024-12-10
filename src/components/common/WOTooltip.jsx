import React from 'react';
import styled, { css } from 'styled-components';
import WOIconButton from './WOIconButton';

/**
 * position: up, down
 * useIcon: 아이콘 사용여부
 * width: 아이콘 width
 * height: 아이콘 height
 * iconName: 아이콘 비활성화 상태 파일명
 * iconActiveName: 아이콘 활성화 상태 파일명
 */

const WOTooltip = ({ children, position, useIcon, width, height, iconName, iconActiveName }) => {
  return (
    <TooltipWrap $iconActiveName={iconActiveName}>
      {useIcon && <WOIconButton width={width} height={height} icon={iconName} onClick={() => {}} />}
      <Tooltip className='tooltip' $position={position} $height={height}>
        <TooltipContent>{children}</TooltipContent>
        <svg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <rect x='7.02344' y='0.924805' width='9.9354' height='9.9354' rx='2' transform='rotate(45 7.02344 0.924805)' fill='white' />
        </svg>
      </Tooltip>
    </TooltipWrap>
  );
};

const TooltipWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  height: 100%;
  margin-left: 2px;

  &:hover {
    .tooltip {
      display: block;
    }

    .icon-btn {
      background-image: url(/assets/images/icon/${(props) => props.$iconActiveName}.svg);
    }
  }
`;

const Tooltip = styled.div`
  display: none;
  position: absolute;
  left: -11px;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1), 0px 8px 20px 0px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  z-index: 900;

  ${(props) => {
    if (props.$position === 'top') {
      return css`
        bottom: calc(${(props) => props.$height}px + 11px);
        > svg {
          position: absolute;
          bottom: -5.5px;
          left: 12px;
        }
      `;
    } else if (props.$position === 'bottom') {
      return css`
        top: calc(${(props) => props.$height}px + 11px);
        > svg {
          position: absolute;
          top: -5.5px;
          left: 12px;
        }
      `;
    }
  }}
`;

const TooltipContent = styled.div``;

export default WOTooltip;
