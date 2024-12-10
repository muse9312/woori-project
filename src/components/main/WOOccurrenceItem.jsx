import styled, { css } from 'styled-components';
import React from 'react';

const WOOccurrenceItem = ({ item, isActive, width, onClick }) => {
  const handleClick = () => {
    onClick && onClick(item);
  };
  return (
    <BoxWrap type="button" className={`occurrence-item ${isActive ? 'active' : ''}`} $width={width} key={item.id} onClick={handleClick}>
      <TitleWrap>
        <span className={`count block text-center ${item.severity}`}>{item.count >= 10 ? item.count : `0${item.count}`}건</span>
        <span className="title block text-center">{item.title}</span>
      </TitleWrap>
      {/* <LocationWrap className="location" $isOpen={isOpen}> */}
      {item.detailList && item.detailList.length && (
        <LocationWrap className="location">
          {item.detailList.map((detail) => (
            <li className="location__item" key={detail.id}>
              <span className="title">{detail.location}</span>
              <span className="count">{detail.count}건</span>
            </li>
          ))}
        </LocationWrap>
      )}
    </BoxWrap>
  );
};

export default WOOccurrenceItem;

const BoxWrap = styled.button`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 16px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  ${(props) =>
    props.$width === 164
      ? css`
          width: 164px;
          &.active {
            background: url('/assets/images/menu/fds-border-full164.svg') no-repeat center / 100%;
          }
        `
      : css`
          &.active {
            background: url('/assets/images/menu/fds-border-full.svg') no-repeat center / 100%;
          }
        `}
`;

const TitleWrap = styled.div`
  width: 100%;
  .title {
    font-size: 14px;
    font-weight: 400;
  }
  .count {
    font-size: 20px;
    font-weight: 700;
    &.caution {
      color: #fab530;
    }
    &.warning {
      color: #ff5d5d;
    }
  }
`;

const LocationWrap = styled.ul`
  padding-top: 6px;
  margin-top: auto;
  width: 100%;
  .location {
    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2px 0;
      .title,
      .count {
        font-size: 12px;
        font-weight: 400;
        display: block;
      }
      .title {
        padding-right: 10px;
      }
    }
  }

  ${(props) =>
    props.$isOpen &&
    css`
      /* position: relative; */
      /* display: flex; */
      /* justify-content: space-between; */
      /* flex-wrap: wrap; */
      /* padding: 24px 32px; */
    `}
`;
