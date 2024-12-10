import WOMenuIconButton from '../components/common/WOMenuIconButton';

const WOMenuIconButtonStory = {
  // 좌측 메뉴 depth
  title: 'Button/WOMenuIconButton',
  // 컴포넌트 명
  component: WOMenuIconButton,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    imageFile: {
      // 스토리북 control 방식
      control: 'text',
      // 설명
      description: 'WOMenuIconButton 아이콘 이미지 입니다.',
      // 초기값
      defaultValue: { summary: undefined },
      // 타입, 필수 인지 정의
      type: { summary: 'string', required: true },
    },
    text: {
      control: 'text',
      description: 'WOMenuIconButton 아이콘 아래에 보여질 텍스트 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    activeMenu: {
      control: 'object',
      description: 'WOMenuIconButton 아이콘에 active되어야하는 메뉴정보 입니다',
      defaultValue: { summary: undefined },
      type: { summary: 'object', required: true },
    },
    onClick: {
      control: 'text',
      description: 'WOMenuIconButton 아이콘 버튼 클릭 메소드 입니다.',
      action: 'onClick',
      type: { summary: 'function', required: false },
    },
  },
};

export default WOMenuIconButtonStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    imageFile: '/assets/images/menu/icon_main_01',
    text: '세입',
  },
};
