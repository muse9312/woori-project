import React, { useState } from 'react';
import styled from 'styled-components';
import NoticeBar from './NoticeBar';
import WOButton from '../common/WOButton';
import WOIcon from '../common/WOIcon';
import { noticeList } from '../../data/response';

const Notice = ({ text }) => {
  // logic
  const [isOpen, setIsOpen] = useState(false);

  // view
  return (
    <>
      {/* START: 공지사항 */}
      <NoticeBar text={text} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <NoticeBox>
          <div className='notice'>
            <p className='notice__title'>
              공지사항
              <WOButton onClick={() => {}} variant='outlined' endIcon={<WOIcon height={10} icon='arrow' width={9} />}>
                모두보기
              </WOButton>
            </p>
            <ul className='notice__list'>
              {noticeList.map((noticeItem) => (
                <li key={noticeItem.id} className='notice__item'>
                  <span className='notice__text'>{noticeItem.content}</span>
                  <span className='notice__text notice__text--sub'>{noticeItem.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </NoticeBox>
      )}
      {/* END: 공지사항 */}
    </>
  );
};

export default Notice;

const NoticeBox = styled.div`
  position: absolute;
  top: 58px;
  right: 86px;
  width: 717px;
  z-index: 1101;
  /* height: 415px; */
  border-radius: 16px;
  box-shadow: 0px 16px 42px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  // border 그라데이션 처리
  border: 1px solid transparent;
  /* border-image: linear-gradient(0deg, #b0ebcc 0%, #99a3ff 100%) 1; */
  background-image: linear-gradient(#fff, #fff), linear-gradient(0deg, #b0ebcc 0%, #99a3ff 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  // 공지사항
  .notice {
    padding: 24px;
    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #333;
      font-size: 20px;
      font-weight: 700;
    }
    &__list {
      padding: 16px 0 20px;
    }
    &__item {
      display: flex;
      align-items: center;
      padding: 16px 0px;
    }
    &__text {
      display: block;
      color: #333;
      font-size: 16px;
      font-weight: 500;
      line-height: 16px;
      &--sub {
        margin-left: auto;
        color: #999;
        font-size: 12px;
        font-weight: 400;
      }
    }
  }
`;
