import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import WODatePicker from './WODatePicker';
import WOLabel from './WOLabel';
import { inputErrorStyle } from '../../styles/common.styled';

const WODateRangePicker = ({ label, labelColor, periodValue, dateFormat, readonly, disabled, isError, onChange, hidePlaceholder }) => {
  // logic
  // periodValue : ['2023-11-11', '2023-11-11']
  const [dateValue, setDateValue] = useState(['', '']);

  const handleChange = (index, newValue) => {
    const result = dateValue.map((item, itemIndex) => (index === itemIndex ? newValue : item));
    setDateValue(result);
    onChange && onChange(result);
  };

  useEffect(() => {
    periodValue && setDateValue(periodValue);
  }, [periodValue]);

  // view
  return (
    <Wrap>
      {label && <WOLabel label={label} color={labelColor} />}
      <DateWrap className={readonly ? 'readonly' : ''} $disabled={disabled} $isError={isError}>
        <WODatePicker
          label={''}
          value={periodValue && periodValue[0]}
          dateFormat={dateFormat}
          readonly={readonly}
          disabled={disabled}
          onChange={(newValue) => handleChange(0, newValue)}
          noneFocus={true}
          hidePlaceholder={hidePlaceholder}
        />
        <Seperator />
        <WODatePicker
          label={''}
          value={periodValue && periodValue[1]}
          dateFormat={dateFormat}
          readonly={readonly}
          disabled={disabled}
          onChange={(newValue) => handleChange(1, newValue)}
          noneFocus={true}
          hidePlaceholder={hidePlaceholder}
        />
      </DateWrap>
    </Wrap>
  );
};

export default WODateRangePicker;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
`;

const DateWrap = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 4px;
  border-radius: 4px;
  border: 1px solid var(--C-Dark-02);
  background-color: ${(props) => `${props.$disabled ? 'var(--C-Dark-02)' : 'var(--White)'}`};

  &:focus-within {
    border-radius: 4px;
    border: 1px solid var(--Cool-Dark-06, #9ea6b2);
  }

  .MuiInputBase-root {
    border: none;
    height: 32px;
    background-color: transparent;

    .MuiInputBase-input {
      padding-left: 6px;
    }

    // calendar 아이콘
    .MuiInputAdornment-root {
      margin: 0;
      .MuiIconButton-root {
        padding: 6px;
      }
    }
  }

  &.readonly {
    border-color: transparent;
    padding: 0;
    .date-picker-wrap:last-child {
      .readonly .MuiInputBase-root .MuiInputBase-input {
        padding-left: 6px;
      }
    }
  }

  ${(props) =>
    props.$isError &&
    css`
      ${inputErrorStyle}
    `}
`;

const Seperator = styled.i`
  display: block;
  flex: 0 0 auto;
  width: 4px;
  height: 1px;
  background-color: #000;
  background: var(--C-Dark-10);
`;
