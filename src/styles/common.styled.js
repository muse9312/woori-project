import { css } from 'styled-components';

export const disabledIconStyle = css`
  filter: brightness(0) saturate(100%) invert(68%) sepia(15%) saturate(222%) hue-rotate(177deg) brightness(95%) contrast(87%);
`;

export const labelStyle = css`
  position: static;
  transform: none;
  pointer-events: all;

  display: flex;
  align-items: center;
  color: var(--W-Dark-11);
  font-family: 'Pretendard', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: 18px;

  &.Mui-focused {
    color: var(--W-Dark-11);
  }
  &.Mui-disabled {
    color: var(--W-Dark-11);
  }

  // label color
  ${(props) =>
    props.$color === 'blue' &&
    css`
      color: var(--Blue-01);
      &.Mui-focused {
        color: var(--Blue-01);
      }
    `}
  ${(props) =>
    props.$color === 'red' &&
    css`
      color: var(--Red-01);
      &.Mui-focused {
        color: var(--Red-01);
      }
    `}
`;

export const inputErrorStyle = css`
  border-color: var(--Red-02);
`;

export const inputReadonlyStyle = css`
  border-color: transparent;
  // input
  .MuiInputBase-input {
    padding-left: 0;
  }
  .MuiAutocomplete-endAdornment {
    display: none;
  }

  // datepicker
  // calendar 아이콘
  .MuiInputAdornment-root {
    display: none;
  }
`;

export const inputStyle = css`
  width: 100%;

  height: ${(props) => `${props.$height || 32}px`};

  padding: 0 !important;

  display: flex;
  border-radius: 4px;
  border: 1px solid #ededf3;
  background-color: var(--White);
  justify-content: space-between;
  align-items: center;

  font-family: 'Pretendard', sans-serif;
  color: #333;
  font-size: 12px;
  font-weight: 400;

  legend {
    display: none;
  }

  // error
  &.Mui-error {
    ${inputErrorStyle}
  }

  // disabled
  &.Mui-disabled {
    background: var(--C-Dark-02);
    .MuiSelect-icon,
    .MuiAutocomplete-popupIndicator {
      ${disabledIconStyle}
    }
    .MuiInputBase-input {
      color: var(--W-Dark-07);
    }
  }
  // input
  .MuiInputBase-input {
    height: auto;
    padding: 6px 0 6px 10px;
    padding-right: 48px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    ${((props) => props.type === 'type01') &&
    css`
      height: 100%;
      box-sizing: border-box;
    `}
    &:focus {
      border-radius: 4px;

      ${((props) => props.type === 'type01') &&
      css`
        border: none;
      `}
    }
  }

  // select
  &.readonly {
    .MuiSelect-icon {
      display: none;
    }
    ${inputReadonlyStyle}
  }

  // clear 아이콘
  .MuiAutocomplete-clearIndicator {
    margin-right: 0;
    svg {
      width: 14px;
      height: 14px;
    }
  }

  // arr 아이콘
  .MuiAutocomplete-endAdornment {
    top: 50%;
    transform: translateY(-50%);
    right: 10px;
    .MuiAutocomplete-clearIndicator {
      width: 16px;
      height: 16px;
      background: url(/assets/images/icon/input-clear-gray.svg) no-repeat center / cover;
      margin-right: 4px;
      padding: 0;
      .MuiSvgIcon-root {
        display: none;
      }
    }
    .MuiAutocomplete-popupIndicator {
      width: 16px;
      height: 16px;
      background: url(/assets/images/icon/arrow-dropdown-black.svg) no-repeat center / cover;
      padding: 0;
      .MuiSvgIcon-root {
        display: none;
      }
    }
  }
  .MuiSelect-icon {
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 16px;
    background: url(/assets/images/icon/arrow-dropdown-black.svg) no-repeat center / cover;
    right: 10px;
    &.MuiSelect-iconOpen {
      transform: translateY(-50%) rotate(180deg);
    }
    path {
      display: none;
    }
  }
`;

export const fdsComboStyle = css`
  .select-wrap {
    .MuiInputBase-root {
      border-color: rgba(189, 215, 255, 0.2);
      background: transparent;
      .MuiInputBase-input {
        color: #fff;
        font-weight: 700;
      }
      svg {
        filter: brightness(0) invert(1);
        opacity: 0.4;
      }
    }
  }
`;

export const defaulButtonStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border-radius: 4px;
  width: fit-content;

  // default size
  font-size: 12px;
  height: 24px;
  padding: 2px 8px;
`;

export const primaryButtonStyle = css`
  // default variant
  background-color: #0e213f;
  color: #fff;

  &:hover,
  &.active {
    background-color: #263752;
  }

  &:disabled {
    background-color: #3c4b63;
    color: #86909f;
    .icon-wrap .icon {
      filter: brightness(0) saturate(100%) invert(61%) sepia(8%) saturate(527%) hue-rotate(177deg) brightness(91%) contrast(95%);
    }
  }
`;

export const secondaryButtonStyle = css`
  background-color: #e5e5ed;
  color: #263752;

  &:hover,
  &.active {
    background-color: #ededf3;
  }

  &:disabled {
    background-color: #e5e5ed;
    color: #9ea6b2;
  }
`;

export const sizeMdButtonStyle = css`
  font-size: 14px;
  min-width: 80px;
  height: 32px;
  padding: 4px 12px;
`;

export const vaildationTextWrap = css`
  display: flex;
  align-items: center;
  height: 16px;
  gap: 0 12px;
`;

export const vaildationTextStyle = css`
  color: ${(props) => {
    switch (props.$vailCheck) {
      case 'pass':
        return 'var(--Blue-02)';
      case 'error':
        return 'var(--Red-02)';
      default:
        return 'var(--W-Dark-06)';
    }
  }};
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: -0.12px;
`;
