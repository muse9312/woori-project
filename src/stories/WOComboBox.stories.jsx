// 컴포넌트 import
import WOComboBox from '../components/common/WOComboBox';
import { sampleOptionList } from '../data/response';

const WOComboBoxStory = {
  // 좌측 메뉴 depth
  title: 'Form/WOComboBox',
  // 컴포넌트 명
  component: WOComboBox,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '230px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    label: {
      control: 'text',
      description: 'Label 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'text', required: false },
    },
    labelColor: {
      control: 'select',
      options: ['default', 'blue', 'red'],
      description: 'label 색상 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    optionList: {
      control: 'array',
      description: '콤보 데이터 리스트 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'array', required: true },
    },
    isAutoComplete: {
      control: 'boolean',
      description: '텍스트 입력 가능여부 입니다.',
      defaultValue: { summary: false },
      type: { summary: 'boolean', required: false },
    },
    defaultValue: {
      control: 'object',
      description: '진입시 선택될 value 입니다. 미입력시 첫번째 아이템 기본선택 입니다',
      defaultValue: { summary: undefined },
      type: { summary: 'object', required: false },
    },
    disabled: {
      control: 'boolean',
      description: 'disabled여부 입니다.',
      defaultValue: { summary: false },
      type: { summary: 'boolean', required: false },
    },
    readonly: {
      control: 'boolean',
      description: 'readonly여부 입니다.',
      defaultValue: { summary: false },
      type: { summary: 'boolean', required: false },
    },
    isError: {
      control: 'boolean',
      description: 'error여부 입니다.',
      defaultValue: { summary: false },
      type: { summary: 'boolean', required: false },
    },
    width: {
      control: 'number',
      description: '콤보박스 너비값 입니다.',
      defaultValue: { summary: 230 },
      type: { summary: 'number', required: false },
    },
    type: {
      control: 'select',
      options: ['default', 'filter'],
      description: '스타일 타입 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    isHorizontal: {
      control: 'boolean',
      description: 'label 가로스타일 여부입니다.',
      defaultValue: { summary: false },
      type: { summary: 'boolean', required: false },
    },
    onChange: {
      control: 'number',
      description: '메뉴 선택시 실행되는 메소드로 선택된 value를 넘겨줍니다',
      defaultValue: { summary: undefined },
      type: { summary: 'function', required: false },
    },
  },
};

export default WOComboBoxStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
  args: {
    label: 'label',
    optionList: sampleOptionList,
  },
};

export const AutoComplete = {
  args: {
    label: 'label',
    optionList: sampleOptionList,
    isAutoComplete: true,
  },
};

export const Disabled = {
  args: {
    label: 'label',
    optionList: sampleOptionList,
    disabled: true,
  },
};

export const Error = {
  args: {
    label: 'label',
    optionList: sampleOptionList,
    isError: true,
  },
};

export const LabelBlue = {
  args: {
    label: 'label',
    optionList: sampleOptionList,
    labelColor: 'blue',
  },
};

export const LabelRed = {
  args: {
    label: 'label',
    optionList: sampleOptionList,
    labelColor: 'red',
  },
};

export const ReadOnly = {
  args: {
    label: 'label',
    optionList: sampleOptionList,
    readonly: true,
  },
};

export const DefaultValue = {
  args: {
    label: 'label',
    optionList: sampleOptionList,
    defaultValue: sampleOptionList[2],
  },
};

export const Width = {
  args: {
    label: 'label',
    width: 180,
    optionList: sampleOptionList,
  },
};

export const TypeFilter = {
  args: {
    label: 'label',
    optionList: sampleOptionList,
    type: 'filter',
  },
};

export const Horizontal = {
  args: {
    label: 'label',
    optionList: sampleOptionList,
    isHorizontal: 'true',
    isAutoComplete: true,
  },
};
