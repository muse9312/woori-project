import React from 'react';
import styled from 'styled-components';
import WOIcon from './WOIcon';

// type styleType = 'block' | 'inline'
// type severityType = 'warning' | 'caution'

const WOAlarm = ({ severity, label, count, styleType, onClick }) => {
  return (
    <Alarm type="button" className={`alarm ${styleType || 'inline'}-type ${severity}`} $styleType={styleType} onClick={onClick}>
      <WOIcon icon={severity} />
      <div className="txt-box">
        <span className="txt">{label}</span>
        <span className="count">{count}</span>
      </div>
    </Alarm>
  );
};

export default WOAlarm;

const Alarm = styled.button`
  width: 108px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 8px 10px;
  border-radius: 12px;
  .txt-box {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    margin-left: 5px;
    .txt {
      /* display: block;
      line-height: 12px; */
      line-height: 12px;

      & + .count {
        margin-left: 20px;
      }
    }
    .count {
      line-height: 12px;
    }
  }

  &.block-type {
    width: 78px;
    padding: 12px 10px;
    .txt-box {
      display: block;
      margin-left: 0;
      text-align: right;
      .txt {
        display: block;
        & + .count {
          margin: 5px 0 0;
        }
      }
      .count {
        display: block;
      }
    }
  }

  & + .alarm {
    margin-left: 4px;
  }

  // severity
  &.warning {
    background: linear-gradient(90deg, #ff5d5d 0.07%, #e26f6f 99.93%);
  }

  &.caution {
    background: linear-gradient(180deg, #ffa985 0%, #fab530 100%);
  }
`;
