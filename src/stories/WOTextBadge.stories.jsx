// 컴포넌트 import
import WOTextBadge from '../components/common/WOTextBadge';

const WOTextBadgeStory = {
  // 좌측 메뉴 depth
  title: 'Badge/WOTextBadge',
  // 컴포넌트 명
  component: WOTextBadge,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'gray', 'grayTertiary', undefined],
      description: 'WOTextBadge Type 입니다.',
      defaultValue: { summary: 'primary' },
      type: { summary: 'string', required: false },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', undefined],
      description: 'WOTextBadge Size 입니다.',
      defaultValue: { summary: 'md' },
      type: { summary: 'string', required: false },
    },
    children: {
      description: 'Badge 내부 텍스트 입니다.',
    },
  },
};

export default WOTextBadgeStory;

export const PrimarySm = {
  args: {
    type: 'primary',
    size: 'sm',
    children: '글자',
  },
};
export const PrimaryMd = {
  args: {
    type: 'primary',
    size: 'md',
    children: '글자',
  },
};
export const PrimaryLg = {
  args: {
    type: 'primary',
    size: 'lg',
    children: '글자',
  },
};
export const SecondarySm = {
  args: {
    type: 'secondary',
    size: 'sm',
    children: '글자',
  },
};
export const SecondaryMd = {
  args: {
    type: 'secondary',
    size: 'md',
    children: '글자',
  },
};
export const SecondaryLg = {
  args: {
    type: 'secondary',
    size: 'lg',
    children: '글자',
  },
};
export const TertiarySm = {
  args: {
    type: 'tertiary',
    size: 'sm',
    children: '글자',
  },
};
export const TertiaryMd = {
  args: {
    type: 'tertiary',
    size: 'md',
    children: '글자',
  },
};
export const TertiaryLg = {
  args: {
    type: 'tertiary',
    size: 'lg',
    children: '글자',
  },
};
export const GraySm = {
  args: {
    type: 'gray',
    size: 'sm',
    children: '글자',
  },
};
export const GrayMd = {
  args: {
    type: 'gray',
    size: 'md',
    children: '글자',
  },
};
export const GrayLg = {
  args: {
    type: 'gray',
    size: 'lg',
    children: '글자',
  },
};
export const GrayTertiarySm = {
  args: {
    type: 'grayTertiary',
    size: 'sm',
    children: '글자',
  },
};
export const GrayTertiaryMd = {
  args: {
    type: 'grayTertiary',
    size: 'md',
    children: '글자',
  },
};
export const GrayTertiaryLg = {
  args: {
    type: 'grayTertiary',
    size: 'lg',
    children: '글자',
  },
};
