import WOIcon from '../components/common/WOIcon';

/**
``
 Icon 컴포넌트 사용시 Icon Props Icon 파일 명으로 전달
 Icon 파일명은 ex) plus,arr 같이 아이콘 명만 작성 하고 svg 파일로 통일 
``
 **/
const Icons = {
  title: 'Icons/WOIcon',
  component: WOIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description: 'Icon Width 입니다.',
      defaultValue: { summary: 18 },
      type: { summary: 'number', required: false },
    },
    height: {
      control: 'number',
      description: 'Icon Height 입니다.',
      defaultValue: { summary: 18 },
      type: { summary: 'number', required: false },
    },
    icon: {
      control: 'text',
      description: 'Icon 명 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
  },
};

export default Icons;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plus = {
  args: {
    width: 20,
    height: 20,
    icon: 'plus',
  },
};
export const Warning = {
  args: {
    width: 18,
    height: 18,
    icon: 'warning',
  },
};
export const Caution = {
  args: {
    width: 18,
    height: 18,
    icon: 'caution',
  },
};
