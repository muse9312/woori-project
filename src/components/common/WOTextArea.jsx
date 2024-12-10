import React, { useState } from 'react';
import Textarea from '@mui/joy/Textarea';
import styled from 'styled-components';

const WOTextArea = ({ height, placeholder, disabled, readonly, value, onChange }) => {
  const [inputText, setInputText] = useState(value || '');

  // console.log('value는 : ' + inputText);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputText(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <>
      <CustomTextArea
        className={`textarea ${readonly ? 'readonly' : ''}`}
        placeholder={placeholder}
        height={height}
        onChange={handleChange}
        value={inputText}
        disabled={disabled}
        readOnly={readonly}
        maxRows={7}
      />
    </>
  );
};

export default WOTextArea;

const CustomTextArea = styled(Textarea)`
  &.textarea {
    width: 100%;
    height: ${(props) => (props.height ? props.height : '142')}px;
    background-color: #fff;
    font-size: 12px;
    box-shadow: none;
    border: unset;
    font-family: Pretendard;
    --Textarea-focusedThickness: none;
    --Textarea-paddingInline: none;
    --Textarea-paddingBlock: none;
    --Textarea-placeholderColor: #aaa;
    ::-webkit-scrollbar-thumb {
      background: #99a3ff;
    }

    .MuiTextarea-textarea {
      padding: 6px 10px;
      border: 1px solid #ededf3;
      border-radius: 4px;

      &:disabled {
        background: var(--C-Dark-02);
        border: unset;
      }
    }
    &.Mui-focused {
      border-radius: 4px;
      border: 1px solid var(--Cool-Dark-06, #9ea6b2);
    }
    &.readonly {
      .MuiTextarea-textarea {
        border: unset;
        padding: 6px 0;
      }
    }
  }
`;
