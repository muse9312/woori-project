import { Dialog, Drawer } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import WOIconButton from './WOIconButton';

// type size = 'sm' | 'md' | 'lg' | 'xl' (center 타입인 경우)
// type direction = 'center' | 'bottom'
// type bgColor = 'white' | 'gray'

const WOModal = ({ isOpen: isPropOpen, direction, size, bgColor, title, height, onClose, children, type }) => {
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
      {direction === 'bottom' ? (
        <DrawerCustom anchor={'bottom'} className={'bottom-layer'} open={isOpen} onClose={(event) => handleClose(event)}>
          <ModalWrap>
            <TitleArea>
              <p className='title'>{title || ''}</p>
              <WOIconButton icon={'close'} width={24} height={24} onClick={(event) => handleClose(event)} />
            </TitleArea>
            {children instanceof Array ? (
              <>
                <ContentArea className='bottom'>{children[0]}</ContentArea> {children[1]}
              </>
            ) : (
              <ContentArea className='bottom'>{children}</ContentArea>
            )}
          </ModalWrap>
        </DrawerCustom>
      ) : (
        <DialogCustom
          $type={type || ''}
          $size={size || 'sm'}
          $bgColor={bgColor || 'white'}
          open={isOpen}
          height={height}
          aria-labelledby='title'
          aria-describedby='description'
          onClose={handleClose}>
          <TitleArea>
            <p className='title'>{title || ''}</p>
            <WOIconButton icon={'close'} width={24} height={24} onClick={(event) => handleClose(event)} />
          </TitleArea>
          {children instanceof Array ? (
            <>
              <ContentArea>{children[0]}</ContentArea> {children[1]}
            </>
          ) : (
            <ContentArea>{children}</ContentArea>
          )}
        </DialogCustom>
      )}
    </>
  );
};

export default WOModal;

const ModalWrap = styled.div`
  position: relative;
  padding: 0 48px 30px;
`;

const TitleArea = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  .title {
    color: #333;
    font-size: 18px;
    line-height: 21px;
    font-weight: 700;
  }
`;

const ContentArea = styled.div`
  overflow: hidden;
  overflow-y: auto;
  &.bottom {
    overflow-x: auto;
  }
`;

// mui drawer

const DrawerCustom = styled(Drawer)`
  &.MuiModal-root {
    // modalWrap
    z-index: 840;
    left: 80px;
    bottom: 70px;
  }
  .MuiBackdrop-root {
    // modalBackdrop
    left: 80px;
    bottom: 70px;
  }
  .MuiDrawer-paperAnchorBottom {
    // modalContentWrap
    border-radius: 24px 24px 0px 0px;
    left: 80px;
    bottom: 70px;
  }
`;

// mui modal

const DialogCustom = styled(Dialog)`
  .MuiDialog-paper {
    width: 400px;
    height: ${(props) => (props.height ? props.height : 400)}px;
    max-width: unset;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
    ${(props) =>
      props.$type === 'main' &&
      css`
        overflow: visible;
      `}
  }

  ${TitleArea} {
    padding: 20px;
  }

  ${ContentArea} {
    height: calc(100% - 60px);
    position: relative;
    overflow: inherit;
  }

  // size
  ${(props) =>
    props.$size === 'md' &&
    css`
      .MuiDialog-paper {
        width: 600px;
        /* height: 600px; */
        height: ${(props) => (props.height ? props.height : 600)}px;
      }
    `}
  ${(props) =>
    props.$size === 'lg' &&
    css`
      .MuiDialog-paper {
        width: 753px;
        /* height: 600px; */
        height: ${(props) => (props.height ? props.height : 600)}px;
      }
    `}
  ${(props) =>
    props.$size === 'xl' &&
    css`
      .MuiDialog-paper {
        width: 1080px;
        height: ${(props) => (props.height ? props.height : 693)}px;
        ${(props) =>
          props.$type === 'guide' &&
          css`
            height: auto;
          `}/* height: 693px; */
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
  gap: ${(props) => `${props.$gap ? `${props.$gap}px` : '20px'}`};
  padding: 0 20px 20px;
  height: 100%;
  overflow-y: auto;
  .modal__view-area {
    padding: 0;
  }
  > div:not(.bottom-sheet) {
    height: fit-content;
  }
`;

export const GuideModalContent = styled.div`
  display: flex;
  flex-direction: column;
  .img-wrap {
    &.tab1 {
      padding: 0 0;
      img {
        width: 100%;
        height: auto;
      }
    }
    &.tab2 {
      padding: 12px 20px 20px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
`;
export const ModalButtonArea = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px 20px;
  box-shadow: 0px -8px 8px 0px rgba(0, 0, 0, 0.04);
  ${(props) =>
    props.$nonBoxShadow &&
    css`
      box-shadow: none;
    `}
  margin-top: auto;
  z-index: 749;
`;

export const ButtonRightArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
