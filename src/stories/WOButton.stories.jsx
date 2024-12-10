import WOButton from '../components/common/WOButton';
import WOIcon from '../components/common/WOIcon';

const WOButtonStory = {
  // 좌측 메뉴 depth
  title: 'Button/WOButton',
  // 컴포넌트 명
  component: WOButton,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    variant: {
      // 스토리북 control 방식
      control: 'select',
      options: ['text', 'primary', 'secondary', 'outlined', 'fillOutlined', 'notice', 'gradient', 'help', 'box', 'personal'],
      // 설명
      description: '버튼 스타일타입 입니다.',
      // 초기값
      defaultValue: { summary: 'primary' },
      // 타입, 필수 인지 정의
      type: { summary: 'string', required: false },
    },
    type: {
      control: 'select',
      options: ['button', 'submit'],
      description: '버튼타입 입니다.',
      defaultValue: { summary: 'button' },
      type: { summary: 'string', required: false },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: '사이즈 입니다.',
      defaultValue: { summary: 'sm' },
      type: { summary: 'string', required: false },
    },
    severity: {
      control: 'select',
      options: ['error'],
      description: 'severity 타입 입니다.',
      defaultValue: { summary: '' },
      type: { summary: 'string', required: false },
    },
    disabled: {
      control: 'boolean',
      description: '버튼 disabled 여부입니다.',
      defaultValue: { summary: false },
      type: { summary: 'boolean', required: false },
    },
    isActive: {
      control: 'boolean',
      description: '버튼 active 여부로 hover와 같은 스타일로 변경 됩니다.',
      defaultValue: { summary: false },
      type: { summary: 'boolean', required: false },
    },
    startIcon: {
      control: null,
      description: '버튼 자식요소 앞에 배치될 아이콘 입니다',
      defaultValue: { summary: undefined },
    },
    endIcon: {
      control: null,
      description: '버튼 자식요소 뒤에 배치될 아이콘 입니다',
      defaultValue: { summary: undefined },
    },
    children: {
      description: '버튼 자식요소에 배치될 요소 입니다',
    },
    onClick: {
      control: 'text',
      description: '버튼 클릭 메소드 입니다.',
      action: 'onClick',
      type: { summary: 'function', required: false },
    },
  },
};

export default WOButtonStory;

// 죄측 메뉴 컴포넌트 명
export const Default = {
  // 컴포넌트에 넘겨줄 props 정리
  args: {
    // props명 : 넘겨줄 props 값-
    variant: 'primary',
    children: '버튼',
  },
};

export const SubmitType = {
  args: {
    variant: 'primary',
    children: '버튼',
    type: 'submit',
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    children: '버튼',
  },
};

export const IsActive = {
  args: {
    variant: 'outlined',
    isActive: true,
    children: '버튼',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: '버튼',
  },
};

export const SecondaryDisabled = {
  args: {
    variant: 'secondary',
    disabled: true,
    children: '버튼',
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    children: '버튼',
  },
};

export const OutlinedDisabled = {
  args: {
    variant: 'outlined',
    disabled: true,
    children: '버튼',
  },
};

export const FillOutlined = {
  args: {
    variant: 'fillOutlined',
    children: '버튼',
  },
};

export const Notice = {
  args: {
    variant: 'notice',
    children: '모두보기',
    endIcon: <WOIcon icon={'arrow'} width={9} height={10} />,
  },
};

export const Gradient = {
  args: {
    variant: 'gradient',
    children: '조회',
  },
};

export const Help = {
  args: {
    variant: 'help',
    children: '도움말',
  },
};

export const Box = {
  args: {
    variant: 'box',
    children: '자주 쓰는 업무',
    startIcon: <WOIcon width={10} height={10} icon='plus-blue' />,
  },
};

export const Personal = {
  args: {
    variant: 'personal',
    children: '로그아웃',
  },
};

export const PrimarySmall = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: '버튼',
  },
};

export const PrimaryMedium = {
  args: {
    variant: 'primary',
    size: 'md',
    children: '버튼',
  },
};

export const PrimaryLarge = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: '버튼',
  },
};

export const StartIcon = {
  args: {
    variant: 'primary',
    children: '버튼',
    startIcon: <WOIcon icon={'arrow-button-white'} width={16} height={16} />,
  },
};

export const EndIcon = {
  args: {
    variant: 'primary',
    children: '버튼',
    endIcon: <WOIcon icon={'arrow-button-white'} width={16} height={16} />,
  },
};

export const IconDisabled = {
  args: {
    variant: 'primary',
    children: '버튼',
    disabled: true,
    endIcon: <WOIcon icon={'arrow-button-white'} width={16} height={16} />,
  },
};

export const StartIconSecondary = {
  args: {
    variant: 'secondary',
    children: '버튼',
    startIcon: <WOIcon icon={'print'} width={16} height={16} />,
  },
};

export const IconSecondaryDisabled = {
  args: {
    variant: 'secondary',
    children: '버튼',
    disabled: true,
    startIcon: <WOIcon icon={'print'} width={16} height={16} />,
  },
};

export const StartIconOutlined = {
  args: {
    variant: 'outlined',
    children: '버튼',
    startIcon: <WOIcon icon={'print'} width={16} height={16} />,
  },
};

export const IconOutlinedDisabled = {
  args: {
    variant: 'outlined',
    children: '버튼',
    disabled: true,
    startIcon: <WOIcon icon={'print'} width={16} height={16} />,
  },
};

export const StartIconMedium = {
  args: {
    variant: 'outlined',
    size: 'md',
    children: '버튼',
    startIcon: <WOIcon icon={'print'} width={16} height={16} />,
  },
};
export const StartIconLarge = {
  args: {
    variant: 'outlined',
    size: 'lg',
    children: '버튼',
    startIcon: <WOIcon icon={'print'} width={24} height={24} />,
  },
};

export const Error = {
  args: {
    children: '버튼',
    severity: 'error',
  },
};
