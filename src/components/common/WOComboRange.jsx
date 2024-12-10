import React from 'react';
import styled from 'styled-components';
import WOComboBox from './WOComboBox';
import WOLabel from './WOLabel';

const WOComboRange = ({ label, optionRangeList, labelColor }) => {
  return (
    <Wrap>
      {label && <WOLabel label={label} color={labelColor} />}
      <TimeWrap>
        <WOComboBox optionList={optionRangeList && optionRangeList[0]} />
        <Seperator />
        <WOComboBox optionList={optionRangeList && optionRangeList[1]} />
      </TimeWrap>
    </Wrap>
  );
};

export default WOComboRange;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px 0;
  .date-picker {
    .MuiInputBase-root {
      min-width: calc(100% - 4px);
      width: calc(100% - 4px);
    }
  }
`;

const TimeWrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ededf3;

  height: 32px;
  border-radius: 4px;
  border: 1px solid var(--C-Dark-02);

  .MuiInputBase-root {
    border: none;
    height: 32px;
    background-color: transparent;
    .MuiInputBase-input {
      padding-right: 2px;
    }
  }
`;

const Seperator = styled.i`
  flex: 0 0 auto;
  display: block;
  width: 4px;
  height: 1px;
  background-color: #000;
`;
