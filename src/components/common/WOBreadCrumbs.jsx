import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// type ColorType = 'white' | 'gray'

const WOBreadCrumbs = ({ list, color }) => {
  // view
  return (
    <List className='bread'>
      {list.map((item, index) => (
        <Item key={index} color={color}>
          <Link to={item.path}>{item.title}</Link>
        </Item>
      ))}
    </List>
  );
};

export default WOBreadCrumbs;

const List = styled.ol`
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  font-size: 14px;
  color: #fff;
  font-weight: 400;
  display: inline-flex;
  align-items: center;
  a {
    font-size: 14px;
    color: #fff;
    font-weight: 400;
    line-height: 20px;
    white-space: nowrap;
  }
  & ~ & {
    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      background: url(/assets/images/icon/arrow-bread-gray200.svg) no-repeat center / cover;
    }
  }

  ${(props) =>
    props.color === 'gray' &&
    css`
      color: #555;
      a {
        color: #555;
      }

      & ~ & {
        &::before {
          content: '';
          display: block;
          width: 20px;
          height: 20px;
          background: url(/assets/images/icon/arrow-bread-gray.svg) no-repeat center / cover;
        }
      }
    `}
`;
