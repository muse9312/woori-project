import React from 'react';
import WOModal from '../../components/common/WOModal';
import WOGridDownloadButton, { GridDownLoadButtonWrap } from '../../components/common/WOGridDownloadButton';

const GridDownLoadModal = () => {
  return (
    <WOModal isOpen={true} direction='center' height={240} title='다운로드' onClose={() => {}}>
      <GridDownLoadButtonWrap>
        <WOGridDownloadButton imgUrl={'assets/images/etc/excel.svg'} fileFormat={'xlsx'} onClick={() => {}} />
        <WOGridDownloadButton imgUrl={'assets/images/etc/hancell.svg'} fileFormat={'cell'} onClick={() => {}} />
      </GridDownLoadButtonWrap>
    </WOModal>
  );
};

export default GridDownLoadModal;
