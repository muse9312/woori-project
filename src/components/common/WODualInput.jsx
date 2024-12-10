import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const WODualInput = ({ label, id, name, readonly, disabled, blind, placeholder, value, type }) => {
  console.log(value);
  const [inputText, setInputText] = useState(value ? value[0] : '');
  const [inputText2, setInputText2] = useState(value ? value[1] : '');
  const [isFocused, setIsFocused] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const onChange = (e) => {
    setInputText(e.target.value);
  };
  const onChange2 = (e) => {
    setInputText2(e.target.value);
  };

  // 포커스 관리
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  useEffect(() => {
    setIsReadOnly(readonly);
  }, [readonly]);

  return (
    <Wrap>
      <Label htmlFor={id} $blind={blind}>
        {label}
      </Label>
      <FormWrap $isFocused={isFocused} $disabled={disabled} $readOnly={isReadOnly}>
        <Form
          type={type || 'text'}
          id={id}
          name={name}
          readOnly={isReadOnly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          value={inputText}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <Seperator />
        <Form
          type={type || 'text'}
          id={`${id}-02`}
          name={name}
          readOnly={isReadOnly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange2}
          value={inputText2}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </FormWrap>
    </Wrap>
  );
};

export default WODualInput;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px 0px;
  width: 100%;
`;

const Label = styled.label`
  width: 100%;
  color: #333;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
  ${(props) =>
    props.$blind === true &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      clip: rect(0, 0, 0, 0);
      overflow: hidden;
    `}
`;

const FormWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4px;
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$isFocused ? '#9EA6B2' : '#ededf3')}; // focus 조건부 스타일
  background-color: ${(props) => (props.$disabled ? '#EDEDF3' : '#fff')}; // disabled 조건부 스타일
  ${(props) =>
    props.$readOnly &&
    css`
      border: unset;
      padding: 0 0;
    `}
`;

const Form = styled.input`
  display: flex;
  width: 100%;
  height: 32px;
  padding: 0px 6px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-radius: 4px;
  color: #333;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    outline: none;
  }
  &:read-only {
    &:first-child {
      padding: 0 6px 0 0;
    }
    &:last-child {
      padding: 0 0 0 6px;
    }
    &:disabled {
      padding: 0 6px;
    }
  }
`;
const Seperator = styled.i`
  display: block;
  flex: 0 0 auto;
  width: 4px;
  height: 1px;
  background-color: #000;
  background: var(--C-Dark-10);
`;
