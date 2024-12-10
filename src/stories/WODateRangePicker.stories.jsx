// 컴포넌트 import
import WODateRangePicker from '../components/common/WODateRangePicker';

const WODateRangePickerStory = {
  // 좌측 메뉴 depth
  title: 'Form/WODateRangePicker',
  // 컴포넌트 명
  component: WODateRangePicker,
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
      type: { summary: 'string', required: false },
    },
    labelColor: {
      control: 'select',
      options: ['default', 'blue', 'red'],
      description: 'label 색상 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    periodValue: {
      control: 'array',
      description: '날짜 value 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'array', required: false },
    },
    dateFormat: {
      control: 'select',
      options: ['YYYY.MM.DD', 'YYYY.MM'],
      description: '날짜 Format 입니다.',
      defaultValue: { summary: 'YYYY.MM.DD' },
      type: { summary: 'string', required: false },
    },
    disabled: {
      control: 'boolean',
      description: 'disabled여부 입니다.',
      defaultValue: { summary: false },
      type: { summary: 'boolean', required: false },
    },
    isError: {
      control: 'boolean',
      description: 'error여부 입니다.',
      defaultValue: { summary: false },
      type: { summary: 'boolean', required: false },
    },
    onChange: {
      control: 'text',
      description: '날짜 변경시 실행되는 메소드로 바뀐 periodValue를 넘겨줍니다. (ex. ["2023-11-11", "2023-11-30"])',
      defaultValue: { summary: undefined },
      type: { summary: 'function', required: false },
    },
  },
};

export default WODateRangePickerStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
  args: {
    label: 'label',
  },
};

export const Value = {
  args: {
    label: 'label',
    periodValue: ['2023-11-11', '2023-12-11'],
  },
};

export const DateFormat = {
  args: {
    label: 'label',
    dateFormat: 'YYYY.MM',
  },
};

export const DateFormatValue = {
  args: {
    label: 'label',
    dateFormat: 'YYYY.MM',
    periodValue: ['2023-11-11', '2023-12-11'],
  },
};

export const Disabled = {
  args: {
    label: 'label',
    periodValue: ['2023-11-11', '2023-12-11'],
    disabled: true,
  },
};

export const Error = {
  args: {
    label: 'label',
    periodValue: ['2023-11-11', '2023-12-11'],
    isError: true,
  },
};

export const LabelBlue = {
  args: {
    label: 'label',
    periodValue: ['2023-11-11', '2023-12-11'],
    labelColor: 'blue',
  },
};

export const LabelRed = {
  args: {
    label: 'label',
    periodValue: ['2023-11-11', '2023-12-11'],
    labelColor: 'red',
  },
};
