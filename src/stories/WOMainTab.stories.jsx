import WOMainTabs from '../components/main/WOMainTabs';

/**
```jsx
Tabs Components 사용시 사용 페이지에서 
OnClick 이벤트 사용
선택된 탭 받아와 상태 변경후 상태에 따라 렌더
선택된 탭 content는 WOTabContent 컴포넌트 사용
```
 **/

const WOMainTab = {
  title: 'Tabs/WOMainTab',
  component: WOMainTabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      control: 'text',
      description: 'Tabs onChange 함수 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'function', required: true },
    },
    tabs: {
      control: 'array',
      description: 'Tabs id,name 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'array', required: true },
    },
  },
};

export default WOMainTab;

export const Main = {
  args: {
    onChange: () => {},
    tabs: [
      {
        id: 'tab1',
        name: '📂  자주 쓰는 업무',
      },
      {
        id: 'tab2',
        name: '📋  주제별 업무',
      },
    ],
  },
};
