import { TextField } from '@mui/material';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const WOLoginInput = ({ id, name, label, type, placeholder, value, button, error, time, styleType }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const [labelShrink, setLabelShrink] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleInputFocus = () => {
    setLabelShrink(true);
  };

  const handleInputBlur = () => {
    if (inputValue === '') {
      setLabelShrink(false);
    }
  };

  const handleInputClear = () => {
    setInputValue('');
    setLabelShrink(false);
  };

  return (
    <Wrapper $labelShrink={labelShrink} $styleType={styleType}>
      <CustomInput
        type={type || 'text'}
        id={id}
        name={name}
        label={labelShrink ? label : placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        error={error}
        $hasButton={button}
        $hasTime={time}
        fullWidth={true}></CustomInput>
      {button && button}
      {time && <Time>{time}</Time>}
      {inputValue !== '' && setLabelShrink !== false ? <ClearBtn $hasButton={button} $hasTime={time} onClick={handleInputClear} /> : ''}
    </Wrapper>
  );
};

export default WOLoginInput;

const ClearBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  display: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: url(/assets/images/icon/clear-grey-18.svg) no-repeat center / cover;
  ${(props) =>
    props.$hasButton &&
    css`
      right: 116px;
    `}
  ${(props) =>
    props.$hasTime &&
    css`
      right: 65px;
    `}
`;

const Wrapper = styled.div`
  position: relative;
  transition: 0.3s;
  & + & {
    /* margin-top: 16px; */
  }
  .auth-btn {
    position: absolute;
    right: 7px;
    top: 50%;
    transform: translateY(-50%);
  }
  &:focus-within {
    ${ClearBtn} {
      display: block;
    }
  }
  ${(props) =>
    props.$styleType === 'popup' &&
    props.$labelShrink &&
    css`
      margin-top: 8px;
    `}
`;

const CustomInput = styled(TextField)`
  .MuiFormLabel-root {
    color: var(--C-Dark-06, #9ea6b2);
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 100%;
    top: 3px;
    &.Mui-focused {
      ${(props) =>
        props.error !== true &&
        css`
          color: var(--C-Dark-09, #3c4b63);
          border-color: var(--C-Dark-06, #9ea6b2);
        `}
    }
  }
  .MuiFormLabel-root[data-shrink='true'] {
    top: 3px;
    left: 2px;
  }

  .MuiInputBase-root {
    line-height: 100%;

    &.MuiOutlinedInput-root {
      border-radius: 4px;
      .MuiOutlinedInput-notchedOutline {
        border-width: 1px;
      }
      .MuiOutlinedInput-notchedOutline {
        border-color: var(--Red-02, #fc8686);
      }
      ${(props) =>
        props.error !== true &&
        css`
          .MuiOutlinedInput-notchedOutline {
            border-color: var(--C-Dark-03, #e5e5ed);
          }
          &:hover {
            .MuiOutlinedInput-notchedOutline {
              border-color: var(--C-Dark-03, #e5e5ed);
            }
          }
        `}
    }
    &.MuiOutlinedInput-root {
      &.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
          border-width: 1px;
        }
        ${(props) =>
          props.error !== true &&
          css`
            .MuiOutlinedInput-notchedOutline {
              border-color: var(--C-Dark-06, #9ea6b2);
              &:hover {
                .MuiOutlinedInput-notchedOutline {
                  border-color: var(--C-Dark-06, #9ea6b2);
                }
              }
            }
          `}
      }
    }

    .MuiInputBase-input {
      padding: 16px 16px;
      padding-right: 42px;
      color: var(--C-Dark-11, #1a2c49);
      font-family: Pretendard;
      font-size: 14px;
      font-weight: 400;
      line-height: 130%; /* 18.2px */
      text-overflow: ellipsis;
      ${(props) =>
        props.$hasButton &&
        css`
          padding-right: 146px;
        `}

      ${(props) =>
        props.$hasTime &&
        css`
          padding-right: 95px;
        `}
    }
  }
`;

const Time = styled.div`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: var(--Red-01, #ff5d5d);
  font-size: 14px;
  font-weight: 700;
`;
