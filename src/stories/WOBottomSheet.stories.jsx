// 컴포넌트 import
import WOBottomSheet from '../components/common/WOBottomSheet';
import WOButton from '../components/common/WOButton';

const WOBottomSheetStory = {
  // 좌측 메뉴 depth
  title: 'Box/WOBottomSheet',
  // 컴포넌트 명
  component: WOBottomSheet,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '800px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    title: {
      control: 'text',
      description: 'sheet 타이틀명 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    button: {
      control: null,
      description: '우측 상단에 배치될 element입니다',
      defaultValue: { summary: undefined, required: false },
    },
    children: {
      description: 'sheet에 보여질 콘텐츠입니다',
    },
  },
};

export default WOBottomSheetStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
  args: {
    title: '타이틀',
    button: <WOButton variant='outlined'>버튼</WOButton>,
    children: '시트 콘텐츠',
  },
};
