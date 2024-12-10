/**

```
 ToggleButton 컴포넌트 사용시 Icon Props Icon 파일 명으로 전달
 Icon 파일명은 ex) plus,arr 같이 아이콘 명만 작성 하고 svg 파일로 통일 
 active 상태 Icon 파일 명은  ex) plus-active 같이 Icon 명 뒤 -active 붙여서 저장
```
 **/

import WOToggleButton from '../components/common/WOToggleButton';

const ToggleButtons = {
  title: 'Button/WOToggleButton',
  component: WOToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: 'number',
      description: 'ToggleButton Width 입니다.',
      defaultValue: { summary: 18 },
    },
    height: {
      control: 'number',
      description: 'ToggleButton Height 입니다.',
      type: { summary: 'number', required: false },
    },
    icon: {
      control: 'text',
      description: 'ToggleButtons 아이콘 명 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    initialState: {
      control: 'boolean',
      description: 'ToggleButtons 초기 상태 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'boolean', required: false },
    },
  },
};

export default ToggleButtons;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Star = {
  args: {
    width: 20,
    height: 20,
    icon: 'star',
  },
};
export const StarActive = {
  args: {
    width: 20,
    height: 20,
    icon: 'star',
    initialState: true,
  },
};
