import React, { useState } from 'react';
import styled from 'styled-components';
import WOIcon from '../common/WOIcon';

const WOMainSearchForm = ({ id, name, value, onChange, placeholder, $style }) => {
  const [inputText, setInputText] = useState(value || '');

  const handleOnChange = (e) => {
    const value = e.target.value;
    setInputText(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Wrapper>
      <Form type='text' id={id} name={name} value={inputText} placeholder={placeholder} onChange={handleOnChange} $style={$style} />
      <WOIcon icon='search' width={16} height={16} />
    </Wrapper>
  );
};

export default WOMainSearchForm;

const Wrapper = styled.div`
  position: relative;
  .icon {
    position: absolute;
    top: 50%;
    right: 12px;
    transform: translateY(-50%);
  }
`;

const Form = styled.input`
  display: flex;
  width: ${(props) => (props.$style === 'modal' ? '186px' : '138px')};
  height: 30px;
  padding: 0 30px 0 12px;
  border-radius: 8px;
  background: var(--C-Dark-01);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #333;

  &:focus {
    border: 1px solid var(--C-Dark-06);
    outline: none;
  }
  &::placeholder {
    color: #aaa;
  }
`;
