import WOInput from '../components/common/WOInput';

const WOInputStory = {
  title: 'Form/WOInput',
  component: WOInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Input Name 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    id: {
      control: 'text',
      description: 'Input Id 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    label: {
      control: 'text',
      description: 'Input Label 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    readonly: {
      control: 'boolean',
      description: 'Input readonly 상태입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    disabled: {
      control: 'boolean',
      description: 'Input disabled 상태입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    blind: {
      control: 'boolean',
      description: 'label 화면에 보이지 않는 상태입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
    flex: {
      control: 'text',
      description: 'Input 정렬 방식 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    rightText: {
      control: 'text',
      description: 'Input rightText 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
  },
};

export default WOInputStory;

export const Default = {
  args: {
    name: 'input01',
    id: 'input01-01',
    label: 'label',
    placeholder: 'text',
  },
};

export const Blind = {
  args: {
    name: 'input04',
    id: 'input04-04',
    label: 'label',
    blind: true,
    placeholder: 'text',
  },
};
export const Row = {
  args: {
    name: 'input05',
    id: 'input05-05',
    label: 'label',
    blind: false,
    placeholder: 'text',
    flex: 'row',
  },
};
export const Disabled = {
  args: {
    name: 'input06',
    id: 'input06-06',
    label: 'label',
    blind: false,
    placeholder: 'text',
    disabled: true,
    value: 'value',
  },
};
export const ReadOnly = {
  args: {
    name: 'input06',
    id: 'input06-06',
    blind: false,
    placeholder: 'text',
    value: 'value',
    readonly: true,
  },
};

export const RightText = {
  args: {
    name: 'input05',
    id: 'input05-05',
    label: 'label',
    blind: false,
    placeholder: 'text',
    rightText: '만원이상',
  },
};
