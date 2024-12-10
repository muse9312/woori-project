import styled, { css } from 'styled-components';
import { useState } from 'react';

const WOCheckbox = ({ item, blind, disabled, isChecked, flex, onChange, readonly, titleArea, type, round, fontWght }) => {
  // 로컬 상태 추가
  const [checked, setChecked] = useState(!!isChecked || false);

  // 체크박스 상태 토글 함수
  const toggleChecked = () => {
    setChecked(!checked);
    if (onChange) {
      onChange(item, !checked);
    }
  };

  return (
    <Wrapper $titleArea={titleArea} $type={type}>
      <Inner $flex={flex} $round={round} $type={type}>
        <Form
          type='checkbox'
          name={item.name}
          id={item.id}
          disabled={!!disabled || !!readonly}
          checked={checked}
          onChange={toggleChecked}
          $readonly={readonly}
          $round={round}
        />

        <Label htmlFor={item.id} $blind={blind} $type={type} $fontWght={fontWght}>
          {item.label}
        </Label>
      </Inner>
    </Wrapper>
  );
};
export default WOCheckbox;

const Wrapper = styled.div`
  ${(props) =>
    props.$titleArea &&
    css`
      display: flex;
      align-items: flex-end;
      height: 54px;
    `}
  ${(props) =>
    props.$type === 'table' &&
    css`
      width: fit-content;
      margin: 0 auto;
    `}
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  /* height: ${(props) => (props.$round ? '' : '32px')}; */
  ${(props) =>
    props.$round &&
    css`
      height: auto;
    `}

  gap: 0 8px;
  ${(props) =>
    props.$type === 'table' &&
    css`
      height: auto;
    `}
`;

const Label = styled.label`
  min-width: 94px;
  padding-right: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #333;
  cursor: pointer;
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
    props.$type === 'fit' &&
    css`
      min-width: auto;
    `}

    ${(props) =>
    props.$fontWght &&
    css`
      font-weight: 700;
    `}
`;
const Form = styled.input`
  display: block;
  width: 16px;
  height: 16px;
  background: url(/assets/images/icon/checkbox-default.svg) no-repeat center / cover;
  cursor: pointer;
  &:checked {
    background: url(/assets/images/icon/checkbox-active.svg) no-repeat center / cover;
    ${(props) =>
      props.$readonly &&
      css`
        background: url(/assets/images/icon/checkbox-default.svg) no-repeat center / cover;
      `}
  }
  &:disabled {
    background: url(/assets/images/icon/checkbox-disabled.svg) no-repeat center / cover;
    cursor: unset;
    & + ${Label} {
      color: #ccc;
      cursor: default;
    }
    &:checked {
      background: url(/assets/images/icon/checkbox-checked-disabled.svg) no-repeat center / cover;
    }
  }

  ${(props) =>
    props.$round &&
    css`
      width: 18px;
      height: 18px;
      background: url(/assets/images/icon/circle.svg) no-repeat center / cover;
      cursor: pointer;
      &:checked {
        background: url(/assets/images/icon/circle-active.svg) no-repeat center / cover;
      }
    `}
`;
