import WOTabs from '../components/common/WOTabs';

/**
```jsx
Tabs Components 사용시 사용 페이지에서 
OnClick 이벤트 사용
선택된 탭 받아와 상태 변경후 상태에 따라 렌더
선택된 탭 content는 WOTabContent 컴포넌트 사용
```
 **/

const WOTabsStory = {
  title: 'Tabs/WOTabs',
  component: WOTabs,
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
    type: {
      control: 'text',
      description: 'Tabs Type 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
    activeTabID: {
      control: 'text',
      description: 'Tabs activeTabID 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: false },
    },
  },
};

export default WOTabsStory;

export const TextTabs = {
  args: {
    onChange: () => {},
    tabs: [
      {
        id: 'tab1',
        name: '계좌현황',
      },
      {
        id: 'tab2',
        name: '거래내역장',
      },
    ],
  },
};
export const Type2 = {
  args: {
    onChange: () => {},
    tabs: [
      {
        id: 'tab1',
        name: '전체',
      },
      {
        id: 'tab2',
        name: '일상경비',
      },
      {
        id: 'tab3',
        name: '보통예금',
      },
      {
        id: 'tab4',
        name: '공금계좌',
      },
    ],
    type: 'type2',
  },
};
export const Type3 = {
  args: {
    onChange: () => {},
    tabs: [
      {
        id: 'tab1',
        name: '보고서',
      },
      {
        id: 'tab2',
        name: '내역',
      },
    ],
    type: 'type3',
  },
};
