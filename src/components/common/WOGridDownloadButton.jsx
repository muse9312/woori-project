import React from 'react';
import styled from 'styled-components';
import WOIcon from './WOIcon';

const WOGridDownloadButton = ({ fileFormat, imgUrl, onClick }) => {
  return (
    <Button type={'button'} onClick={onClick}>
      <div className='img-wrap'>
        <img src={imgUrl} alt='download-icon-img' />
      </div>
      <span className='title'>{fileFormat === 'xlsx' ? '엑셀 다운로드' : fileFormat === 'cell' ? '한셀 다운로드' : ''}</span>
      <WOIcon icon='download-blue' width={16} height={16} />
    </Button>
  );
};

export default WOGridDownloadButton;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 170px;
  height: 160px;
  border-radius: 16px;
  border: 1px solid #ededf3;
  background: #fff;

  &:hover {
    border: 2px solid #b0ebcc;
    background: rgba(153, 163, 255, 0.08);
    box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
  }
  .img-wrap {
    margin-bottom: 16px;
  }
  .title {
    margin-bottom: 2px;
    color: #263752;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    line-height: 150%;
  }
`;

export const GridDownLoadButtonWrap = styled.div`
  display: flex;
  gap: 0 10px;
  justify-content: center;
`;
