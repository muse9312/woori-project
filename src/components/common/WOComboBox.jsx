import { Autocomplete, FormControl, MenuItem, Select, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { inputStyle, labelStyle, inputReadonlyStyle } from '../../styles/common.styled';
import WOLabel from './WOLabel';

// Type type = 'filter'

const WOComboBox = ({
  label,
  labelColor,
  optionList,
  isAutoComplete,
  defaultValue,
  disabled,
  readonly,
  isError,
  width,
  height,
  type,
  isHorizontal,
  onChange,
  placeholder,
}) => {
  // logic
  // defaultValue: { id: 1, label: 'data1' }

  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const handleSelectChange = (event) => {
    const { value } = event.target;
    const selectedItem = optionList.find((item) => item.id === value);
    setValue(value);
    onChange && selectedItem && onChange(selectedItem);
  };

  const handleAutoSelectChange = (_, newValue) => {
    setValue(newValue);
    onChange && onChange(newValue);
  };
  const handleAutoSelectInputChange = (_, newInputValue) => {
    setInputValue(newInputValue);
  };
  useEffect(() => {
    if (type === 'type01' && !defaultValue) {
      // type01이고 defaultValue가 없을 경우, 초기 value를 설정하지 않음
      if (isAutoComplete) {
        // Autocomplete의 경우 inputValue만 설정하여 placeholder 표시
        setInputValue(placeholder);
      }
      // Select 컴포넌트의 경우 value를 빈 문자열로 초기화하지 않고, placeholder 표시를 기대함
    } else {
      if (isAutoComplete) {
        setValue(defaultValue ? defaultValue.label : optionList[0].label);
        setInputValue(defaultValue ? defaultValue.label : optionList[0].label);
      } else {
        setValue(defaultValue ? defaultValue.id : optionList[0].id);
      }
    }
  }, [defaultValue, isAutoComplete, optionList, placeholder, type]);

  // view
  return (
    <>
      {isAutoComplete ? (
        <AutocompleteCustom
          disablePortal
          id='combo-box'
          className={`select-wrap autocomplete ${readonly ? 'readonly' : ''}`}
          width={width}
          $height={height}
          options={optionList}
          $isHorizontal={isHorizontal}
          $color={labelColor}
          renderInput={(params) => <TextField error={isError} {...params} $type={type} label={label} placeholder={placeholder} />}
          value={value}
          inputValue={inputValue}
          disabled={disabled}
          readOnly={readonly}
          $type={type}
          onChange={handleAutoSelectChange}
          onInputChange={handleAutoSelectInputChange}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          // PopperComponent={WOComboPopper}
          // open={true}
        />
      ) : (
        <SelectWrap width={width} className='select-wrap' $type={type} $isHorizontal={isHorizontal} $height={height}>
          <FormControl disabled={disabled}>
            {label && <WOLabel label={label} color={labelColor} />}
            <SelectCustom
              labelId={label}
              id='select'
              className={`select ${readonly ? 'readonly' : ''}`}
              label={label}
              value={value}
              inputProps={{ readOnly: readonly }}
              error={isError}
              onChange={handleSelectChange}
              // defaultOpen={true}
            >
              {optionList.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.label}
                </MenuItem>
              ))}
            </SelectCustom>
          </FormControl>
        </SelectWrap>
      )}
    </>
  );
};

export default WOComboBox;

const AutocompleteCustom = styled(Autocomplete)`
  width: ${(props) => `${props.width ? `${props.width}px` : '100%'}`};

  &.autocomplete {
    .MuiFormControl-root {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    // label
    .MuiFormLabel-root {
      ${labelStyle}
    }

    // inputWrap
    .MuiInputBase-root {
      ${inputStyle}
      ${(props) =>
        props.$type === 'type01' &&
        css`
          .MuiOutlinedInput-input {
            color: var(--W-Dark-11);
            font-size: 14px;
            font-weight: 400;
            line-height: 21px;
          }
          ::placeholder {
            color: var(--C-Dark-06, #9ea6b2);
            opacity: 1;
          }
        `}
    }
    &.readonly {
      .MuiInputBase-root {
        ${inputReadonlyStyle}
      }
    }

    // optionBox
    & + .MuiAutocomplete-popper {
      z-index: 999;
      padding-bottom: 50px;

      ${(props) =>
        props.$type === 'type01' &&
        css`
          padding-bottom: 0;
        `}
      .MuiPaper-root {
        max-height: 250px;
        .MuiAutocomplete-listbox {
          overflow: visible;
        }
      }

      // 각각의 옵션
      .MuiAutocomplete-option {
        font-family: 'Pretendard', sans-serif;
        color: #333;
        font-size: 12px;
        font-weight: 400;
        &[aria-selected='true'] {
          background-color: transparent;
        }
        &.Mui-focused {
          background-color: #ededf3;
        }
      }
    }
    & + .MuiAutocomplete-popper[data-popper-placement='top'] {
      padding-top: 50px;
      padding-bottom: 0;
    }
  }

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }

  // Horzontal
  ${(props) =>
    props.$isHorizontal &&
    css`
      &.autocomplete {
        .MuiFormControl-root {
          flex-direction: row;
          gap: 2px;
        }
        .MuiFormLabel-root {
          min-width: 60px;
          width: 60px;
        }
      }
    `}
`;

const SelectWrap = styled.div`
  width: ${(props) => `${props.width ? `${props.width}px` : '100%'}`};

  display: flex;
  flex-direction: column;

  .MuiFormControl-root {
    width: 100%;
    gap: 4px;
  }

  ${(props) =>
    props.$type === 'filter' &&
    css`
      width: fit-content;
      height: fit-content;
      .select.MuiInputBase-root {
        background: var(--White);
        height: 26px;
        .MuiInputBase-input {
          box-sizing: border-box;
          height: 26px;
          padding: 6px 32px 6px 6px;
          padding-right: 32px !important;
        }
        .MuiSelect-icon {
          width: 14px;
          height: 14px;
          right: 6px;
        }
        
      }
    }
  `}

  // Horzontal
  ${(props) =>
    props.$isHorizontal &&
    css`
      .MuiFormControl-root {
        flex-direction: row;
        gap: 2px;
      }
      .MuiFormLabel-root {
        min-width: 60px;
        width: 60px;
      }
    `}
`;

const SelectCustom = styled(Select)`
  // inputWrap

  &.MuiInputBase-root {
    ${inputStyle}
  }

  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
`;
