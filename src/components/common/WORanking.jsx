import React from 'react';
import styled, { css } from 'styled-components';
import WOIcon from './WOIcon';

const WORanking = ({ rankingData }) => {
  const { title, type, ranking, amount, cases } = rankingData;
  return (
    <Wrap className='ranking' $type={type}>
      <div className='ranking__wrap'>
        <span className='ranking__num'>{ranking}</span>
        <div className='ranking__category'>
          <div className='medal-area'>
            <WOIcon width={58} height={58} icon={`medal-${type}`} />
          </div>
          <span className='title'>{title}</span>
        </div>
        <div className='ranking__amount'>
          <span className='text'>
            {amount.value}
            <span className='unit'>{amount.unit}</span>
          </span>
          <span className='sub-text'>
            {cases.value}
            <span className='unit'>{cases.unit}</span>
          </span>
        </div>
      </div>
    </Wrap>
  );
};

export default WORanking;

const Wrap = styled.div`
  width: 100%;
  height: 98px;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid transparent;
  background-image: linear-gradient(var(--White), var(--White)), linear-gradient(343deg, #b0ebcc -1.81%, #99a3ff 46.2%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  color: var(--White);
  .ranking {
    &__wrap {
      padding: 0 50px;
      position: relative;
      display: flex;
      align-items: center;
      height: 100%;
    }
    &__num {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 32px;
      height: 32px;
      font-size: 16px;
      font-weight: 700;
      border-bottom-right-radius: 12px;
      background: linear-gradient(343deg, #b0ebcc -1.81%, #99a3ff 46.2%);
    }
    &__category {
      display: flex;
      align-items: center;
      .medal-area {
        width: 68px;
        height: 68px;
        padding: 5px;
        border-radius: 100px;
        background-color: #fff6e4;
      }
      .title {
        padding-left: 20px;
        color: var(--C-Dark-12);
        font-size: 20px;
        font-weight: 700;
      }
    }
    &__amount {
      text-align: right;
      margin-left: auto;
      .text {
        display: block;
        color: #0500e2;
        font-size: 20px;
        font-weight: 700;
        .unit {
          font-size: 14px;
        }
      }
      .sub-text {
        display: block;
        color: var(--C-Dark-07);
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  ${(props) =>
    props.$type !== 'gold' &&
    css`
      border: 1px solid var(--C-Dark-03);
      .ranking__num {
        background: var(--C-Dark-04);
      }
      .ranking__category {
        .medal-area {
          background-color: ${(props) => `${props.$type === 'silver' ? 'var(--C-Dark-01)' : '#FFF2EB'}`};
        }
      }
    `}
`;
