// 컴포넌트 import
import { BrowserRouter } from 'react-router-dom';
import WOBreadCrumbs from '../components/common/WOBreadCrumbs';
import { sampleBreadCrumbList } from '../data/response';

const WOBreadCrumbsStory = {
  // 좌측 메뉴 depth
  title: 'Button/WOBreadCrumbs',
  // 컴포넌트 명
  component: WOBreadCrumbs,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    list: {
      control: 'array',
      description: '데이터 리스트 입니다.',
      defaultValue: { summary: [] },
      type: { summary: 'array', required: true },
    },
    color: {
      control: 'select',
      description: '텍스트 및 아이콘 색상 입니다.',
      options: ['white', 'gray'],
      defaultValue: { summary: 'white' },
      type: { summary: 'string', required: false },
    },
  },
};

export default WOBreadCrumbsStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값
    list: sampleBreadCrumbList,
  },
};
export const Gray = {
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값
    list: sampleBreadCrumbList,
    color: 'gray',
  },
};
