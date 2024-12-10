import React from 'react';
import WOBorderBox from '../common/WOBorderBox';
import styled from 'styled-components';
import WOIcon from '../common/WOIcon';

const WOAccountItem = ({ account }) => {
  const { title, abnormalTransaction, monthList, unit } = account;
  return (
    <Item className="account-item">
      <WOBorderBox>
        <div className="title-area">
          <div className="title">
            <span className="title__text">{title}</span>
            <span className="title__unit">(단위: {unit}) </span>
          </div>
          <div className="sub">
            <span className={`sub__text ${abnormalTransaction ? 'danger' : ''}`}>이상거래 {abnormalTransaction}건</span>
            <WOIcon icon={abnormalTransaction ? 'warning-fds' : 'warning-fds-gray'} width={24} height={24} />
          </div>
        </div>
        <div className="amount-area">
          {monthList &&
            monthList.map((month) => (
              <div key={month.id} className={`amount ${month.isAbnormalTransaction ? 'danger' : ''}`}>
                <span className="amount__text">{month.title}</span>
                <i style={{ width: month.width }} className="amount__progress" />
                <span className="amount__text">{month.amount}</span>
              </div>
            ))}
        </div>
      </WOBorderBox>
    </Item>
  );
};

export default WOAccountItem;

const Item = styled.li`
  /* height: 78px; */
  & + & {
    margin-top: 8px;
  }
  .border-box {
    padding: 8px 12px;
    height: 78px;
    overflow: hidden;
  }
  .title {
    display: flex;
    align-items: center;
    &-area {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .sub {
        display: flex;
        align-items: center;
        &__text {
          color: rgba(255, 255, 255, 0.4);
          font-size: 14px;
          font-weight: 400;
          &.danger {
            color: #ff5d5d;
          }
        }
      }
    }

    &__text {
      display: block;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
    }
    &__unit {
      display: block;
      color: #bdd7ff;
      font-size: 12px;
      padding-left: 2px;
    }
  }

  .amount {
    display: flex;
    align-items: center;
    gap: 4px;
    &-area {
    }
    &__text {
      color: #fff;
      font-size: 12px;
      font-weight: 400;
    }
    &__progress {
      display: block;
      height: 12px;
      background-color: var(--White);
      opacity: 0.4;
    }
    &.danger {
      .amount__progress {
        background-color: var(--Red-01);
      }
      .amount__text:last-child {
        color: var(--Red-01);
      }
    }
  }
`;
