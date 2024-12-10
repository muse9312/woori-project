// 컴포넌트 import
import WOBadge from '../components/common/WOBadge';
import WOIconButton from '../components/common/WOIconButton';

const WOBadgeStory = {
  // 좌측 메뉴 depth
  title: 'Button/WOBadge',
  // 컴포넌트 명
  component: WOBadge,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    count: {
      control: 'number',
      description: '건수 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'number', required: true },
    },
    children: {
      description: '보여질 icon요소 입니다',
    },
  },
};

export default WOBadgeStory;

// 죄측 메뉴 컴포넌트 명
export const Default = () => {
  return (
    <WOBadge count={2}>
      <WOIconButton icon={'bell'} width={40} height={40} />
    </WOBadge>
  );
};
