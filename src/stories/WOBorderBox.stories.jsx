// 컴포넌트 import
import WOBorderBox from '../components/common/WOBorderBox';
import WOEventItem from '../components/main/WOEventItem';
import { liveEventList } from '../data/response';

const WOBorderBoxStory = {
  // 좌측 메뉴 depth
  title: 'Box/WOBorderBox',
  // 컴포넌트 명
  component: WOBorderBox,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    height: {
      control: 'text',
      description: '박스 높이값 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'number', required: false },
    },
    children: {
      description: '보여질 icon요소 입니다',
    },
  },
};

export default WOBorderBoxStory;

// 죄측 메뉴 컴포넌트 명
export const Default = () => {
  return (
    <WOBorderBox>
      <ul>
        {liveEventList.map((event) => (
          <WOEventItem key={event.id} event={event} type='live' />
        ))}
      </ul>
    </WOBorderBox>
  );
};
