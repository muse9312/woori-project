import React from 'react';
import styled, { css } from 'styled-components';
import { defaulButtonStyle, disabledIconStyle, primaryButtonStyle, secondaryButtonStyle, sizeMdButtonStyle } from '../../styles/common.styled';

// type type = 'button' | 'submit'
// type VariantType = 'text' | 'primary' |'secondary' | 'outlined' | 'fillOutlined' |'notice' | 'gradient' | 'help' | 'box' | 'personal'
// type size = 'sm' | 'md' | 'lg' ('primary' |'secondary' | 'outlined' 용도)
// type severityType = 'error' | 'warning' | info | 'success'

const WOButton = ({ type, variant, size, severity, disabled, isActive, startIcon, endIcon, children, onClick, color, isMargin }) => {
  return (
    <Button
      type={type || 'button'}
      className={`btn ${variant} ${isActive ? 'active' : ''}`}
      onClick={onClick}
      disabled={!!disabled}
      $variant={variant || (!severity && 'primary')}
      $size={size || 'sm'}
      $severity={severity || ''}
      color={color}
      $isMargin={isMargin}>
      {startIcon && <span className='icon-wrap start'>{startIcon}</span>}
      {children}
      {endIcon && <span className='icon-wrap end'>{endIcon}</span>}
    </Button>
  );
};

export default WOButton;

const iconDisabledStyle = css`
  &:disabled {
    .icon-wrap .icon {
      ${disabledIconStyle}
    }
  }
`;

const iconIntervalStyle = css`
  .icon-wrap {
    &.start {
      margin-left: -4px;
    }
    &.end {
      margin-right: -4px;
    }
  }
`;

const Button = styled.button`
  ${defaulButtonStyle}

  // default variant
  background-color: #0e213f;
  color: #fff;

  & + .btn {
    margin-left: ${(props) => (props.$isMargin ? 'none' : '10px')};
  }

  .icon-wrap {
    display: flex;
    align-items: center;
    &.start {
      padding-right: 4px;
      margin-left: -2px; // 4, 4
    }
    &.end {
      padding-left: 4px;
      margin-right: -2px;
    }
  }

  // variant
  ${(props) =>
    props.$variant === 'primary' &&
    css`
      ${primaryButtonStyle}
    `}
  ${(props) =>
    props.$variant === 'secondary' &&
    css`
      ${secondaryButtonStyle}
      ${iconDisabledStyle}
    `}

  ${(props) =>
    props.$variant === 'outlined' &&
    css`
      background-color: transparent;
      color: #263752;
      border: 1px solid #d7d7de;

      // color
      ${(props) =>
        props.color &&
        css`
          color: ${props.color};
        `}

      &:hover,
      &.active {
        background-color: #f5f6fa;
      }

      &:disabled {
        background-color: transparent;
        color: #9ea6b2;
      }

      ${iconDisabledStyle}
    `}

  // size
  ${(props) =>
    props.$size === 'md' &&
    css`
      ${sizeMdButtonStyle}
      ${iconIntervalStyle}
    `}
  ${(props) =>
    props.$size === 'lg' &&
    css`
      font-size: 16px;
      min-width: 116px;
      height: 40px;
      padding: 8px 16px;
      ${iconIntervalStyle}
    `}

  // variant (TODO: 디자인 확정후 수정, hover 임시)
  ${(props) =>
    props.$variant === 'text' &&
    css`
      background-color: transparent;
    `}
  ${(props) =>
    props.$variant === 'notice' &&
    css`
      width: 140px;
      height: 48px;
      padding: 16px 28px 16px 32px;
      font-size: 16px;
      border-radius: 80px;
      background-color: #f6f6fa;
      color: #333;

      &:hover,
      &.active {
        background-color: #f6f6fa;
      }
      .icon-wrap {
        &.end {
          margin-right: 0;
          padding-left: 10px;
        }
      }

      ${iconDisabledStyle}
    `}
  ${(props) =>
    props.$variant === 'gradient' &&
    css`
      height: 32px;
      padding: 4px 16px;
      font-size: 14px;
      background: linear-gradient(343deg, #b0ebcc -1.81%, #99a3ff 46.2%);
      color: #fff;
    `}
  ${(props) =>
    props.$variant === 'help' &&
    css`
      min-width: 53px;
      height: 24px;
      padding: 4px 8px;
      font-size: 14px;
      border: 1px solid #3c4b63;
      background-color: transparent;
      color: #86909f;

      &:hover,
      &.active {
        background-color: transparent;
      }
    `}
  ${(props) =>
    props.$variant === 'fillOutlined' &&
    css`
      min-width: 87px;
      height: 32px;
      padding: 4px 12px;
      font-size: 12px;
      border: 1px solid #e5e5ed;
      background-color: #f5f6fa;
      color: #3c4b63;

      &:hover,
      &.active {
        background-color: #f5f6fa;
      }
    `}
  ${(props) =>
    props.$variant === 'box' &&
    css`
      height: 40px;
      padding: 12px 16px;
      border-radius: 12px;
      box-shadow: 0px 8px 12px 0px rgba(0, 0, 0, 0.08);
      background-color: #fff;

      color: #0e213f;
      font-size: 16px;
      font-weight: 500;

      .icon-wrap {
        &.start {
          padding-right: 6px;
          margin-left: 0;
        }
      }
    `}

  ${(props) =>
    props.$variant === 'personal' &&
    css`
      height: 24px;
      padding: 5px 8px;
      color: #fff;
      background-color: #263752;

      font-size: 12px;
      font-weight: 700;
    `}

    // severityType
    ${(props) =>
    props.$severity === 'error' &&
    css`
      min-width: 40px;
      width: 40px;
      height: 24px;
      padding: 4px;
      background-color: transparent;
      font-size: 12px;
      font-weight: 600;
      color: #ff5d5d;
      border: 1px solid rgba(14, 33, 63, 0.1);
      border-radius: 12px;
    `}
    
    // color
    ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
`;
