import { useState } from 'react';
import WOModal, { ModalButtonArea, ButtonRightArea } from '../components/common/WOModal';
import WOButton from '../components/common/WOButton';

const WOModalStory = {
  // 좌측 메뉴 depth
  title: 'Modal/WOModal',
  // 컴포넌트 명
  component: WOModal,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명
    isOpen: {
      // 스토리북 control 방식
      control: 'boolean',
      // 설명
      description: 'modal 오픈상태 입니다.',
      // 초기값
      defaultValue: { summary: false },
      // 타입, 필수 인지 정의
      type: { summary: 'boolean', required: true },
    },
    direction: {
      control: 'select',
      description: 'modal 열리는 방향 입니다.',
      options: ['center', 'bottom'],
      defaultValue: { summary: 'center' },
      type: { summary: 'string', required: false },
    },
    size: {
      control: 'select',
      description: 'modal 사이즈 입니다.',
      options: ['sm', 'md', 'lg', 'xl'],
      defaultValue: { summary: 'sm' },
      type: { summary: 'string', required: false },
    },
    bgColor: {
      control: 'select',
      description: 'modal 콘텐츠 배경색상 입니다.',
      options: ['white', 'gray'],
      defaultValue: { summary: 'white' },
      type: { summary: 'string', required: false },
    },
    height: {
      control: 'select',
      description: 'modal 높이 사이즈 입니다. \n 따로 height 값을 설정하지 않은경우 modal 사이즈의 높이가 기본값입니다',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    title: {
      control: 'text',
      description: 'modal 타이틀명 입니다.',
      defaultValue: { summary: undefined },
      type: { summary: 'string', required: true },
    },
    children: {
      description:
        'modal 콘텐츠 및 버튼영역 입니다. \n direction="center" 인 경우 콘텐츠는 하나의 태그로 묶고, 버튼영역 있는 경우 ModalButtonArea컴포넌트로 묶어줍니다.',
    },
    onClose: {
      control: 'text',
      description: 'modal 닫힐때 실행되는 메소드 입니다.',
      action: 'onClick',
      type: { summary: 'function', required: false },
    },
  },
};

export default WOModalStory;

// 죄측 메뉴 컴포넌트 명
export const Center = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>
        Open
      </WOButton>
      <WOModal isOpen={isOpen} direction='center' title='Title' onClose={() => setIsOpen(false)}>
        <div>모달 콘텐츠</div>
      </WOModal>
    </>
  );
};
export const Small = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>
        Open
      </WOButton>
      <WOModal isOpen={isOpen} direction='center' size='sm' title='Title' onClose={() => setIsOpen(false)}>
        <div>모달 콘텐츠</div>
      </WOModal>
    </>
  );
};
export const Medium = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>
        Open
      </WOButton>
      <WOModal isOpen={isOpen} direction='center' size='md' title='Title' onClose={() => setIsOpen(false)}>
        <div>모달 콘텐츠</div>
      </WOModal>
    </>
  );
};

export const Large = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>
        Open
      </WOButton>
      <WOModal isOpen={isOpen} direction='center' size='lg' title='Title' onClose={() => setIsOpen(false)}>
        <div>모달 콘텐츠</div>
      </WOModal>
    </>
  );
};

export const XLarge = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>
        Open
      </WOButton>
      <WOModal isOpen={isOpen} direction='center' size='xl' title='Title' onClose={() => setIsOpen(false)}>
        <div>모달 콘텐츠</div>
      </WOModal>
    </>
  );
};
export const BgGray = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>
        Open
      </WOButton>
      <WOModal isOpen={isOpen} direction='center' size='md' bgColor='gray' title='Title' onClose={() => setIsOpen(false)}>
        <div>모달 콘텐츠</div>
      </WOModal>
    </>
  );
};

export const Height = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>
        Open
      </WOButton>
      <WOModal isOpen={isOpen} direction='center' size='md' bgColor='gray' height={150} title='Title' onClose={() => setIsOpen(false)}>
        <div>모달 콘텐츠</div>
      </WOModal>
    </>
  );
};

export const Button = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>
        Open
      </WOButton>
      <WOModal isOpen={isOpen} direction='center' size='md' bgColor='gray' title='Title' onClose={() => setIsOpen(false)}>
        <div>모달 콘텐츠</div>
        <ModalButtonArea>
          <WOButton variant={'outlined'} size={'md'}>
            다운로드
          </WOButton>
        </ModalButtonArea>
      </WOModal>
    </>
  );
};
export const ButtonRight = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>
        Open
      </WOButton>
      <WOModal isOpen={isOpen} direction='center' size='md' bgColor='gray' title='Title' onClose={() => setIsOpen(false)}>
        <div>모달 콘텐츠</div>
        <ModalButtonArea>
          <WOButton variant={'outlined'} size={'md'}>
            다운로드
          </WOButton>
          <ButtonRightArea>
            <WOButton variant={'secondary'} size={'md'}>
              삭제
            </WOButton>
            <WOButton variant={'primary'} size={'md'}>
              저장
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>
    </>
  );
};

export const BottomLayer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <WOButton variant='secondary' size='lg' onClick={() => setIsOpen(true)}>
        Bottom Open
      </WOButton>
      <WOModal isOpen={isOpen} direction='bottom' title='Title' onClose={() => setIsOpen(false)}>
        <div>모달 콘텐츠</div>
      </WOModal>
    </>
  );
};
