import WOLoading from '../components/common/WOLoading';
import WOSearchArea from '../components/common/WOSearchArea';

const WOLoadingStory = {
  // 좌측 메뉴 depth
  title: 'Loading/WOLoading',
  // 컴포넌트 명
  component: WOLoading,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명

    type: {
      control: null,
      description: 'loading 모션이 왼쪽에 배치됩니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'function', required: false },
    },
  },
};

export default WOLoadingStory;

export const dafalut = () => {
  return (
    <>
      <WOLoading />
    </>
  );
};

export const type = () => {
  return (
    <>
      <WOSearchArea>
        <WOLoading type={'content'} />
      </WOSearchArea>
    </>
  );
};
