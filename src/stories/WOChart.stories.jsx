// 컴포넌트 import
import WOChart from '../components/common/WOChart';
import { fdsChartOptions } from '../data/response';

/**
```jsx
Highcharts 공통 컴포넌트 
```
 **/

const WOChartStory = {
  // 좌측 메뉴 depth
  title: 'ETC/WOChart',
  // 컴포넌트 명
  component: WOChart,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '230px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    options: {
      control: 'object',
      description: 'highCharts의 데이터 옵션 입니다',
      defaultValue: { summary: undefined },
      type: { summary: 'object', required: false },
    },
    type: {
      control: 'select',
      options: ['fds'],
      description: '차트 스타일을 지정하는 타입 입니다',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
  },
};

export default WOChartStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
  args: {
    options: fdsChartOptions,
    type: 'fds',
  },
};
