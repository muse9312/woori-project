import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled, { css } from 'styled-components';
import dayjs from 'dayjs';
import { defaultDateFormat } from '../../data/common';
import WOLabel from './WOLabel';
import { disabledIconStyle, inputErrorStyle, inputReadonlyStyle, labelStyle } from '../../styles/common.styled';
const WODatePicker = ({ label, labelColor, value, dateFormat, readonly, disabled, isError, onChange, noneFocus, hidePlaceholder }) => {
  // logic
  // dateValue : dayjs타입 날짜
  // formattingValue : '2023-11-11'
  const [dateValue, setDateValue] = useState('');

  const handleChange = (newValue) => {
    // calendar icon 클릭으로 데이터 바꾸는 경우
    const { $y: year, $M: mm, $D: day } = newValue;
    const month = mm + 1;
    const formatDate = `${year}-${month >= 10 ? month : `0${month}`}-${day >= 10 ? day : `0${day}`}`; // 2023-11-11
    setDateValue(newValue);
    onChange && onChange(formatDate);
  };

  useEffect(() => {
    setDateValue(value ? dayjs(value) : dayjs(''));
  }, [value]);

  const CalendarIcon = () => {
    return <img src='/assets/images/icon/calendar.svg' alt='Date picker opening icon' width={14} />;
  };

  // view
  return (
    <Wrap className='date-picker-wrap'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {label && <WOLabel label={label} color={labelColor} />}
        <DatePickerCustom
          className={`date-picker ${readonly ? 'readonly' : ''}`}
          label={''}
          openTo={dateFormat === 'YYYY.MM' ? 'month' : 'day'}
          views={dateFormat === 'YYYY.MM' ? ['year', 'month'] : ['day']}
          format={dateFormat || defaultDateFormat}
          slots={{ openPickerIcon: CalendarIcon }}
          value={dateValue ? dateValue : null}
          readOnly={readonly}
          disabled={disabled}
          $isError={isError}
          onChange={handleChange}
          $noneFocus={noneFocus}
          hidePlaceholder={hidePlaceholder}
        />
      </LocalizationProvider>
    </Wrap>
  );
};

export default WODatePicker;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
  .input-wrap {
    position: absolute;
    top: 26px;
    left: 4px;
  }
`;

const DatePickerCustom = styled(DatePicker)`
  &.date-picker {
    display: flex;
    flex-direction: column;
    gap: 4px 0;
  }

  .MuiInputBase-root:focus-within {
  }

  .MuiInputBase-input {
    ${(props) =>
      props.hidePlaceholder &&
      css`
        color: #ffff;
      `};
  }

  // label
  .MuiFormLabel-root {
    ${labelStyle}
  }

  // datePicker
  .MuiInputBase-root {
    width: 100%;
    height: 32px;
    padding-right: 0;

    display: flex;
    border-radius: 4px;
    border: 1px solid #ededf3;
    background: var(--White);
    justify-content: space-between;
    align-items: center;

    font-family: 'Pretendard', sans-serif;
    color: #333;
    font-size: 12px;
    font-weight: 400;
    ${(props) =>
      props.$noneFocus !== true &&
      css`
        &.Mui-focused {
          border-radius: 4px;
          border: 1px solid var(--Cool-Dark-06, #9ea6b2);
        }
      `}

    legend {
      display: none;
    }

    &.Mui-disabled {
      background-color: var(--C-Dark-02);
      color: var(--W-Dark-07);
      /* .MuiInputBase-input {
        -webkit-text-fill-color: var(--W-Dark-07);
      } */
      .MuiIconButton-root {
        img {
          ${disabledIconStyle}
        }
      }
    }

    // calendar 아이콘
    .MuiInputAdornment-root {
      margin: 0 2px 0 0;
      .MuiIconButton-root {
        padding: 8px;
        display: block;
        margin-right: 0;
      }
    }

    // input
    .MuiInputBase-input {
      display: flex;
      height: 100%;
      box-sizing: border-box;
      padding: 6px 0 6px 10px;
      -webkit-text-fill-color: initial;
      text-transform: lowercase;
      &::placeholder {
        opacity: 1;

        color: var(--W-Dark-06);
      }
    }
  }

  &.readonly {
    .MuiInputBase-root {
      ${inputReadonlyStyle}
    }
  }

  ${(props) =>
    props.$isError &&
    css`
      .MuiInputBase-root {
        ${inputErrorStyle}
      }
    `}

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
`;
