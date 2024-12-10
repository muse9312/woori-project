import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { districtDatas } from '../../data/common';
import WOAlarm from '../common/WOAlarm';
import { alarmList } from '../../data/response';

function WOMap({ isExpand }) {
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const handleDistrictClick = (id) => {
    setSelectedDistrict(id);
  };

  return (
    <Wrap $isExpand={isExpand} className="map-wrap">
      {!isExpand && (
        <WarningArea>
          <div className="total">
            <span className="total__title">이상감지</span>
            <span className="total__text">총 144건</span>
          </div>
          <AlarmWrap className="alarm-wrap">
            {alarmList.map((alarm) => (
              <WOAlarm key={alarm.id} severity={alarm.severity} label={alarm.label} count={alarm.count} styleType="block" />
            ))}
          </AlarmWrap>
        </WarningArea>
      )}
      <MapSvg>
        <svg width={isExpand ? '300' : '250'} height={isExpand ? '235' : '197'} viewBox="0 0 300 235" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_194_32673)">
            {districtDatas.map((data, index) => (
              <path key={index} id={data.id} onClick={() => handleDistrictClick(data.id)} d={data.d} fill={selectedDistrict === data.id ? '#FF5D5D' : '#BDD7FF'} fillOpacity={selectedDistrict === data.id ? '0.5' : '0.2'} />
            ))}
          </g>
          <defs>
            <path id="clip0_194_32673">
              <rect width="300" height="235" fill="white" />
            </path>
          </defs>
        </svg>
        <div className="notice">* FDS 현황을 조회할 지역을 선택하실 수 있습니다.</div>
      </MapSvg>
      {isExpand && (
        <DetectionWrap>
          <div className="total-detection">
            <span className="tit">실시간 탐지 진행</span>
            <span className="num">1552건</span>
          </div>
          <ul className="detection-list">
            <li className="detection-item purple-dot">
              <span className="tit">우회시도 탐지</span>
              <span className="num ">3건</span>
            </li>
            <li className="detection-item grey-dot">
              <span className="tit">기간만료 탐지</span>
              <span className="num ">3건</span>
            </li>
            <li className="detection-item blue-dot">
              <span className="tit">탐지 중지</span>
              <span className="num ">3건</span>
            </li>
          </ul>
          <AlarmWrap className="alarm-wrap">
            {alarmList.map((alarm) => (
              <WOAlarm key={alarm.id} severity={alarm.severity} label={alarm.label} count={alarm.count} styleType="block" />
            ))}
          </AlarmWrap>
        </DetectionWrap>
      )}
    </Wrap>
  );
}

export default WOMap;

const Wrap = styled.div`
  position: relative;
  /* width: 336px;
  height: 325px; */
  border-radius: 16px;
  background: #0e213f;
  padding: 16px;
  ${(props) =>
    props.$isExpand &&
    css`
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 18px 20px 18px 30px;
      ${MapSvg} {
        .notice {
          text-align: left;
        }
      }
    `}
`;

const WarningArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 12px 4px;
  .total {
    * {
      display: block;
    }
    &__title {
      color: #fff;
      font-size: 14px;
      font-weight: 400;
    }
    &__text {
      color: #fc8686;
      font-size: 18px;
      font-weight: 600;
    }
  }
`;

const AlarmWrap = styled.div`
  display: flex;
  align-items: left;
`;

const MapSvg = styled.div`
  text-align: center;
  path {
    cursor: pointer;
  }
  .notice {
    margin-top: 6px;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: #c9c9d0;
    text-align: center;
  }
`;

// isExpand인 경우 노출
const DetectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  .total-detection {
    padding: 12px;
    text-align: center;
    .tit {
      display: block;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
      color: #fff;
    }
    .num {
      display: block;
      font-size: 18px;
      font-weight: 600;
      line-height: 27px;
      color: #fc8686;
    }
  }
  .detection-list {
    padding: 32px 8px 8px;
    .detection-item {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 4px 0px 4px 8px;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: #249a9a;
      }
      &.purple-dot {
        &::before {
          background: #a964a6;
        }
      }
      &.grey-dot {
        &::before {
          background: #949494;
        }
      }
      &.blue-dot {
        &::before {
          background: #5c80db;
        }
      }
      .tit {
        display: block;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        & + .num {
          margin-left: 28px;
        }
      }
      .num {
        display: block;
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
      }
    }
  }

  ${AlarmWrap} {
    margin-top: auto;
  }

  .alarm {
    & + .alarm {
      margin-left: 8px;
    }
  }
`;
