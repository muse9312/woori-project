// 컴포넌트 import
import { React, useState } from 'react';
import WOTextArea from '../components/common/WOTextArea';
import styled from 'styled-components';

const WOTextAreaStory = {
  // 좌측 메뉴 depth
  title: 'Form/WOTextArea',
  // 컴포넌트 명
  component: WOTextArea,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    height: {
      control: 'number',
      description: 'height 값입니다. 따로 설정하지않으면 기본값 142px로 적용됩니다!',
      defaultValue: { summary: undefined },
      type: { summary: 'number', required: false },
    },
    placeholder: {
      control: 'text',
      description: 'placeholder 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    disabled: {
      control: 'text',
      description: 'disabled 입니다.',
      defaultValue: { summary: undefined },
    },
    readonly: {
      control: 'text',
      description: 'readonly 입니다.',
      defaultValue: { summary: undefined },
    },
    value: {
      control: 'text',
      description: 'value 값입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    onChange: {
      control: 'text',
      description: 'text 변경시 바뀐 value 값을 넘겨주는 메소드 입니다 ',
      defaultValue: { summary: undefined },
      type: { summary: 'function', required: false },
    },
  },
};

export default WOTextAreaStory;

// 죄측 메뉴 컴포넌트 명
export const Default = () => {
  return (
    <>
      <Wrap>
        <WOTextArea />
      </Wrap>
    </>
  );
};

export const Height = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <>
      <Wrap>
        <WOTextArea height={50} onChange={setValue} />
      </Wrap>
    </>
  );
};

export const Placeholder = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <>
      <Wrap>
        <WOTextArea height={50} onChange={setValue} placeholder={'placeholder 입니다'} />
      </Wrap>
    </>
  );
};

export const Disabled = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <>
      <Wrap>
        <WOTextArea height={50} onChange={setValue} disabled placeholder={'disabled 입니다'} />
      </Wrap>
    </>
  );
};

export const Readonly = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <>
      <Wrap>
        <WOTextArea height={50} readonly onChange={setValue} placeholder={'readonly 입니다'} />
      </Wrap>
    </>
  );
};

export const Value = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <>
      <Wrap>
        <WOTextArea height={50} onChange={setValue} value={'defaultValue 입니다'} />
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  width: 400px;
`;
