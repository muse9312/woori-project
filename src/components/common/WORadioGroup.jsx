import React, { useEffect, useState } from 'react';
import { styled, css } from 'styled-components';

const WORadioGroup = ({ radioItems, onChange, defaultCheckedValue, readonly, styleType }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    if (readonly) return; // Prevent changes if readonly is true
    const { value } = e.target;
    if (!value) return;
    const checkedItem = radioItems.find((item) => item.value === value);
    setValue(value);
    onChange && onChange(checkedItem);
  };

  useEffect(() => {
    if (defaultCheckedValue) {
      setValue(defaultCheckedValue.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {radioItems.map((item) => (
        <Wrap key={item.id}>
          {readonly ? (
            value === item.value && <Label>{item.label}</Label>
          ) : (
            <>
              <Form
                type='radio'
                name={item.name}
                id={item.id}
                value={item.value}
                checked={value === item.value}
                onChange={handleChange}
                disabled={item.disabled}
              />
              <Label htmlFor={item.id} styleType={styleType}>
                {item.label}
              </Label>
            </>
          )}
        </Wrap>
      ))}
    </Wrapper>
  );
};

export default WORadioGroup;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;
`;

const Label = styled.label`
  min-width: 74px;
  padding-right: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #333;
  cursor: pointer;

  ${(props) =>
    props.styleType === 'type01' &&
    css`
      font-size: 14px;

      line-height: 21px;
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
