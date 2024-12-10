// 컴포넌트 import
import WOLabel from '../components/common/WOLabel';

/**
```jsx
Form에서 중복되는 label을 위한 공통 컴포넌트 
```
 **/

const WOLabelStory = {
  // 좌측 메뉴 depth
  title: 'Form/WOLabel',
  // 컴포넌트 명
  component: WOLabel,
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
    color: {
      control: 'select',
      options: ['default', 'blue', 'red'],
      description: 'label 색상 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
  },
};

export default WOLabelStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
  args: {
    label: 'label',
  },
};

export const LabelBlue = {
  args: {
    label: 'label',
    color: 'blue',
  },
};

export const LabelRed = {
  args: {
    label: 'label',
    color: 'red',
  },
};
