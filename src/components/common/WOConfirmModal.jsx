import { Dialog } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import WOIconButton from './WOIconButton';

const WOConfirmMoal = ({ isOpen: isPropOpen, size, onClose, height }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    onClose();
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(isPropOpen);
  }, [isPropOpen]);

  return (
    <>
      <DialogCustom $size={size || 'sm'} open={isOpen} height={height} aria-labelledby='title' aria-describedby='description' onClose={handleClose}>
        <TopArea>
          <WOIconButton icon={'close'} width={24} height={24} onClick={(event) => handleClose(event)} />
        </TopArea>
      </DialogCustom>
    </>
  );
};

export default WOConfirmMoal;

const TopArea = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const ContentArea = styled.div`
  overflow: hidden;
  overflow-y: auto;
  &.bottom {
    overflow-x: auto;
  }
`;

// mui drawer

// mui modal

const DialogCustom = styled(Dialog)`
  .MuiPaper-root {
    width: 400px;
    height: 400px;

    max-width: unset;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
  }

  ${TopArea} {
    padding: 20px;
  }

  ${ContentArea} {
    height: 100%;
    padding: 0 20px 20px;
  }

  // size
  ${(props) =>
    props.$size === 'md' &&
    css`
      .MuiPaper-root {
        width: 600px;
        /* height: 600px; */
        height: ${(props) => (props.height ? props.height : 600)}px;
      }
    `}
  ${(props) =>
    props.$size === 'lg' &&
    css`
      .MuiPaper-root {
        width: 753px;
        /* height: 600px; */
        height: ${(props) => (props.height ? props.height : 600)}px;
      }
    `}
  ${(props) =>
    props.$size === 'xl' &&
    css`
      .MuiPaper-root {
        width: 1080px;
        /* height: 693px; */
        height: ${(props) => (props.height ? props.height : 693)}px;
      }
    `}

  ${(props) =>
    props.$bgColor === 'gray' &&
    css`
      ${ContentArea} {
        background-color: #ededf3;
      }
    `}
`;

export const ModalContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => `${props.$gap ? `${props.gap}px` : '20px'}`};
  .modal__view-area {
    padding: 0;
  }
`;
export const ModalButtonArea = styled.div`
  display: flex;
  /* justify-content: flex-end; */
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0px -8px 8px 0px rgba(0, 0, 0, 0.04);
  margin-top: auto;
`;

export const ButtonRightArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
