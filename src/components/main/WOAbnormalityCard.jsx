import React from 'react';
import styled, { css } from 'styled-components';

const WOAbnormalityCard = ({ title, count, severity, dataList, width }) => {
  // logic

  // view
  return (
    <Wrap $width={width} className="abnornality-card">
      <Title>
        {title} <span className={severity}>{count >= 10 ? count : `0${count}`}</span>건
      </Title>
      <List>
        {dataList.map((item) => (
          <Item key={item.id}>
            <dl>
              <dt>계좌</dt>
              <dd>{item.account}</dd>
            </dl>
            <dl>
              <dt>금액</dt>
              <dd>{item.amount}</dd>
            </dl>
            <dl>
              <dt>적요</dt>
              <dd>{item.briefs}</dd>
            </dl>
          </Item>
        ))}
      </List>
    </Wrap>
  );
};

export default WOAbnormalityCard;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px 20px;
  /* background: url('/assets/images/menu/fds-border-transparent.svg') no-repeat center / 100%; */

  ${(props) =>
    props.$width === 360
      ? css`
          background-color: red;
          width: 100%;
          background: url('/assets/images/menu/fds-border-transparent360.svg') no-repeat center / 100%;
        `
      : css`
          background: url('/assets/images/menu/fds-border-transparent.svg') no-repeat center / 100%;
        `}
`;

const Title = styled.div`
  color: var(--White);
  font-size: 14px;
  font-weight: 700;
  .caution {
    color: #fab530;
  }
  .warning {
    color: #ff5d5d;
  }
`;

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 0;
  margin: -1px 0j;

  dl {
    color: var(--C-Dark-06);
    font-size: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding: 1px 0;
    & ~ dl {
      &::before {
        content: '';
        display: block;
        width: 1px;
        height: 12px;
        margin: 0 8px;
        background: var(--C-Dark-08);
      }
    }
    &:last-child {
      &::before {
        display: none;
      }
    }
    dd {
      font-weight: 400;
      padding-left: 8px;
    }
  }
`;
