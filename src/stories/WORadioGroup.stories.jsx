import WORadioGroup from '../components/common/WORadioGroup';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const WORadioGroupStory = {
  title: 'Form/WORadioGroup',
  component: WORadioGroup,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    radioItems: {
      control: 'object',
      description: 'Radio Name,id,label,disabled,checked 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'object', required: true },
    },
    defaultValue: {
      control: 'object',
      description: '초기 체크된 아이템 객체입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'object', required: false },
    },
  },
};

export default WORadioGroupStory;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    radioItems: [
      {
        name: 'radio01',
        id: 1,
        label: 'Y',
        value: 'Y',
      },
      {
        name: 'radio01',
        id: 2,
        label: 'N',
        value: 'N',
      },
    ],
  },
};

export const DefaultChecked = {
  args: {
    radioItems: [
      {
        name: 'radio02',
        id: 1,
        label: 'Y',
        value: 'Y',
      },
      {
        name: 'radio02',
        id: 2,
        label: 'N',
        value: 'N',
      },
    ],
    defaultCheckedValue: {
      name: 'radio02',
      id: 2,
      label: 'N',
      value: 'N',
    },
  },
};
