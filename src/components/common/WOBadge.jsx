import React from 'react';
import styled from 'styled-components';
import { Badge } from '@mui/material';

const WOBadge = ({ count, children }) => {
  return <CustomBadge badgeContent={count}>{children}</CustomBadge>;
};

export default WOBadge;

const CustomBadge = styled(Badge)`
  .MuiBadge-badge {
    background-color: #99a3ff;
    padding: 4px 6px;
    border-radius: 80px;
    font-family: 'Pretendard', sans-serif;
    color: #fff;
    font-size: 12px;
    font-weight: 800;
    line-height: 12px;
    pointer-events: none;

    left: unset;
    bottom: unset;
    right: -2px;
    top: -2px;
    transform: none;
  }
`;
