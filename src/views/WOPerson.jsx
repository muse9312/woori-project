import React from 'react';
import styled from 'styled-components';
import { person } from '../data/response';
import WOButton from '../components/common/WOButton';

const WOPerson = () => {
  // logic
  const { name, department, infoList } = person;

  const handleLogout = () => {};

  // view
  return (
    <Wrap>
      <div className="person">
        <p className="person__text">
          {department} <span className="bold">{name}</span>님 환영합니다!
        </p>
        <WOButton variant="personal" onClick={handleLogout}>
          로그아웃
        </WOButton>
        <ul className="person__info-list">
          {infoList.map((info) => (
            <li key={info.id} className="person__info-item">
              <span className="title">{info.name}</span>
              <span className="content bold"> {info.count}건</span>
            </li>
          ))}
        </ul>
      </div>
    </Wrap>
  );
};

export default WOPerson;

const Wrap = styled.div`
  margin-right: auto;
  .person {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    &__text {
      margin-right: 8px;
    }
    &__info {
      &-list {
        display: flex;
        align-items: center;
        padding-left: 32px;
      }
      &-item {
        & ~ .person__info-item {
          display: flex;
          align-items: center;
          &::before {
            content: '';
            display: block;
            width: 1px;
            height: 12px;
            margin: 0 12px;
            background: #566479;
          }
        }
        .title {
        }
      }
    }
  }
`;
