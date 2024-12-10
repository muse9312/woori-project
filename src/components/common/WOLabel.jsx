import { InputLabel } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { labelStyle } from '../../styles/common.styled';

const WOLabel = ({ label, color }) => {
  return (
    <>
      {
        <InputLabelCustom id={label} $color={color}>
          {label}
        </InputLabelCustom>
      }
    </>
  );
};

export default WOLabel;

const InputLabelCustom = styled(InputLabel)`
  &.MuiFormLabel-root {
    ${labelStyle}
  }
`;
