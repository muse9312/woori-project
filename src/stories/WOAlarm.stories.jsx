// 컴포넌트 import
import WOAlarm from '../components/common/WOAlarm';

const WOAlarmStory = {
  // 좌측 메뉴 depth
  title: 'Button/WOAlarm',
  // 컴포넌트 명
  component: WOAlarm,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    label: {
      control: 'text',
      description: 'label 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    count: {
      control: 'text',
      description: '건수 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    severity: {
      control: 'select',
      options: ['warning', 'caution'],
      description: '심각도 타입 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'arstringray', required: false },
    },
    styleType: {
      control: 'select',
      options: ['inline', 'block'],
      description: '스타일 타입 입니다.',
      defaultValue: { summary: 'inline' },
      type: { summary: 'arstringray', required: false },
    },
  },
};

export default WOAlarmStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값
    severity: 'warning',
    label: '경고',
    count: '002',
    styleType: 'inline',
  },
};

export const Block = {
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값
    severity: 'caution',
    label: '주의',
    count: '005',
    styleType: 'block',
  },
};
