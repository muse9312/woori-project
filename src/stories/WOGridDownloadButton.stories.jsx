import { useState } from 'react';
import WOGridDownloadButton, { GridDownLoadButtonWrap } from '../components/common/WOGridDownloadButton';
import WOModal from '../components/common/WOModal';

const WOGridDownloadButtonStory = {
  // 좌측 메뉴 depth
  title: 'Button/WOGridDownloadButton',
  // 컴포넌트 명
  component: WOGridDownloadButton,
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {
    // props 명

    imgUrl: {
      control: null,
      description: '이미지 경로 입니다',
      defaultValue: { summary: undefined },
      type: { summary: 'function', required: false },
    },
    fileFormat: {
      control: null,
      description: '파일 확장자 명이 xlsx 이면 엑셀 다운로드, cell 이면 한셀 다운로드 텍스트 반환합니다 ',
      defaultValue: { summary: undefined },
    },

    onClick: {
      control: 'text',
      description: '버튼 클릭 메소드 입니다.',
      action: 'onClick',
      type: { summary: 'function', required: false },
    },
  },
};

export default WOGridDownloadButtonStory;
export const Excel = {
  args: {
    fileFormat: 'xlsx',
    imgUrl: '/assets/images/etc/excel.svg',
  },
};
export const Hancell = {
  args: {
    fileFormat: 'cell',
    imgUrl: '/assets/images/etc/hancell.svg',
  },
};

/**  페이지 내 모달 사용시 GridDownloadButtonWrap 감싸서 사용 **/
export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type='button' onClick={() => setIsOpen(true)}>
        모달 열기
      </button>
      <WOModal isOpen={isOpen} direction='center' height={240} title='다운로드' onClose={() => setIsOpen(false)}>
        <GridDownLoadButtonWrap>
          <WOGridDownloadButton imgUrl={'assets/images/etc/excel.svg'} fileFormat={'xlsx'} onClick={() => {}} />
          <WOGridDownloadButton imgUrl={'assets/images/etc/hancell.svg'} fileFormat={'cell'} onClick={() => {}} />
        </GridDownLoadButtonWrap>
      </WOModal>
    </>
  );
};
