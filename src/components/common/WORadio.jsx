import styled, { css } from 'styled-components';
import { useState } from 'react';

const WORadio = ({ item, blind, disabled, isChecked, flex, onChange }) => {
  // 로컬 상태 추가
  const [checked, setChecked] = useState(!!isChecked || false);

  const toggleChecked = (e) => {
    e.stopPropagation();
    setChecked(!checked);
    if (onChange) {
      onChange(item, !checked);
    }
  };
  return (
    <Wrap flex={flex} className='radio'>
      <Form type='radio' name={item.name || 'radio'} id={item.id} disabled={!!disabled} checked={isChecked} onChange={toggleChecked}></Form>
      <Label htmlFor={item.id} $blind={blind} flex={flex}>
        {item.label}
      </Label>
    </Wrap>
  );
};

export default WORadio;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  ${(props) =>
    props.flex === 'reverse' &&
    css`
      flex-direction: row-reverse;
    `}
`;

const Label = styled.label`
  margin: 0 0 0 8px;
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
`;

const Form = styled.input`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: url(/assets/images/icon/radio-default.svg) no-repeat center / cover;
  cursor: pointer;
  &:checked {
    background: url(/assets/images/icon/radio-active.svg) no-repeat center / cover;
    & + ${Label} {
      /* font-weight: 600; */
    }
  }
  &:disabled {
    background: url(/assets/images/icon/radio-disabled.svg) no-repeat center / cover;
  }
`;
