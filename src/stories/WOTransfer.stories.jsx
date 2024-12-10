// 컴포넌트 import
import WOComboBox from '../components/common/WOComboBox';
import WOFormColumn from '../components/common/WOFormColumn';
import WOTransfer, { FromArea, ToArea, TransferTitle } from '../components/common/WOTransfer';

const WOTransferStory = {
  // 좌측 메뉴 depth
  title: 'Box/WOTransfer',
  // 컴포넌트 명
  component: WOTransfer,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    mainTitle: {
      control: 'text',
      description: '타이틀명 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    children: {
      description: 'sheet에 보여질 콘텐츠입니다',
    },
  },
};

export default WOTransferStory;

// 죄측 메뉴 컴포넌트 명
export const Default = () => {
  return (
    <WOTransfer mainTitle='A의 기금 권한을 B에게 이관'>
      <FromArea>
        <TransferTitle>A의 기금권한</TransferTitle>
        <WOFormColumn>
          <WOComboBox label='부서명' optionList={[{ id: 1, label: '119특수구조단' }]} isAutoComplete={true} />
        </WOFormColumn>
      </FromArea>
      <ToArea>
        <TransferTitle>B의 기금권한</TransferTitle>
        <WOFormColumn>
          <WOComboBox label='부서명' optionList={[{ id: 1, label: '119특수구조단' }]} isAutoComplete={true} />
        </WOFormColumn>
      </ToArea>
    </WOTransfer>
  );
};
