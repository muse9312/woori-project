import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import WOButton from './WOButton';

const WOInput = ({
  label,
  id,
  name,
  flex,
  height,
  size,
  readonly,
  disabled,
  blind,
  placeholder,
  value,
  rightText,
  type,
  styleType,
  placeholderStyle,
  rightButton,
  rightTimeText,
  onClick,
  RtBtnDisable,
  vailCheck,
}) => {
  const [inputText, setInputText] = useState(value || '');
  const rightTextRef = useRef(null); // rightText의 ref를 생성\
  const [rightPadding, setRightPadding] = useState(32); // 기본 오른쪽 패딩 값

  useEffect(() => {
    if (rightTextRef.current) {
      setRightPadding(rightTextRef.current.offsetWidth + 32); // rightText의 너비 + 기본 패딩 + 6px
    }
  }, [rightText, rightButton]); // rightText가 변경될 때마다 실행

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const clearText = () => {
    setInputText(''); // 입력 필드를 비우는 함수
  };

  return (
    <Wrap $flex={flex} $size={size} className='input'>
      {label && (
        <Label htmlFor={id} $blind={blind} $flex={flex}>
          {label}
        </Label>
      )}
      <FormWrap>
        <Form
          type={type || 'text'}
          id={id}
          name={name}
          readOnly={readonly}
          disabled={disabled}
          placeholder={placeholder}
          onChange={onChange}
          value={inputText}
          placeholderStyle={placeholderStyle}
          $styleType={styleType}
          $height={height}
          $rightPadding={rightPadding}
          $vailCheck={vailCheck}
        />
        {inputText && <ClearBtn className='clear-btn' type='button' onClick={clearText} $rightPadding={rightPadding} />}{' '}
        {/* 텍스트가 있을 때만 Clear 버튼 표시 */}
      </FormWrap>
      {rightText && <RightText ref={rightTextRef}>{rightText}</RightText>}
      {rightButton && (
        <RightButton ref={rightTextRef}>
          <WOButton variant={'secondary'} size={'md'} onClick={onClick} disabled={RtBtnDisable}>
            {rightButton}
          </WOButton>
        </RightButton>
      )}
      {rightTimeText && <RightTimeText ref={rightTextRef}>{rightTimeText}</RightTimeText>}
    </Wrap>
  );
};

export default WOInput;

const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px 0px;
  width: 100%;
  ${(props) =>
    props.$flex === 'row' &&
    css`
      flex-direction: row;
      align-items: center;
      gap: 0px 2px;
    `}
`;

const Label = styled.label`
  width: 100%;
  color: #333;
  font-size: 13px;
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
  ${(props) =>
    props.$flex === 'row' &&
    css`
      width: 60px;
      font-weight: 700;
    `}
`;

const FormWrap = styled.div`
  position: relative;
`;
const ClearBtn = styled.button`
  position: absolute;
  top: 50%;
  right: ${(props) => (props.$rightPadding ? `${props.$rightPadding - 16}px` : '10px')}; // rightPadding 값에 따라 right 값을 동적으로 변경
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background: url(/assets/images/icon/input-clear-gray.svg) no-repeat center / cover;
`;

const Form = styled.input`
  display: flex;
  width: 100%;
  height: ${(props) => (props.$height ? `${props.$height}px` : '32px')};
  padding: 7px ${(props) => props.$rightPadding}px 7px 10px; // 오른쪽 패딩 동적 적용
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  border-radius: 4px;
  border: ${(props) => (props.$styleType === 'email' ? 'none' : '1px solid #ededf3')};

  ${(props) =>
    props.$styleType === 'login' &&
    css`
      height: 48px;
      padding: 16px ${(props) => props.$rightPadding}px 16px 16px; // 오른쪽 패딩 동적 적용
      border-radius: 4px;

      ${(props) => (props.$vailCheck === 'error' ? 'border: 1px solid #fc8686;' : 'border: 1px solid var(--C-Dark-03);')}

      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      &::placeholder {
        color: var(--C-Dark-06);
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
      }
    `}

  background: #fff;
  color: #333;
  &::placeholder {
    color: #aaa;
    ${(props) =>
      props.placeholderStyle &&
      css`
        color: var(--Red-01, #ff5d5d);
        font-size: 12px;
        font-weight: 700;
        line-height: 18px;
      `}
  }

  &:focus {
    border: 1px solid var(--C-Dark-06);
    outline: none;
  }
  &:read-only {
    border: unset;
    padding: 0 0;
    &:focus {
      border: unset;
    }
    & + .clear-btn {
      display: none;
    }
  }
  &:disabled {
    background: var(--C-Dark-02);
    border: unset;
    color: var(--W-Dark-07);
    padding: 10px;
    &:focus {
      border: unset;
    }
    & + .clear-btn {
      display: none;
    }
  }
`;

const RightText = styled.div`
  position: absolute;
  right: 10px;
  bottom: 7px;
  color: #333;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const RightTimeText = styled.div`
  position: absolute;
  right: 10px;
  bottom: 30%;
  color: var(--Red-01);
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`;

const RightButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 7px;
`;
