import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useOutletContext } from 'react-router-dom';

const WOBottomSheet = ({ title, button, children, type }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const { sideOpen } = useOutletContext() ?? {};

  const updateHeight = () => {
    ref.current && setHeight(ref.current.clientHeight);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    ref.current && resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [children]);
  return (
    <Wrapper $height={height} $type={type} className='bottom-sheet'>
      <Wrap className='sheet' ref={ref} $type={type} $title={title} $sideOpen={sideOpen}>
        {title && (
          <TitleArea>
            <p className='title'>{title || ''}</p>
            <div className='button-area'>{button}</div>
          </TitleArea>
        )}
        <ContentArea>{children}</ContentArea>
      </Wrap>
    </Wrapper>
  );
};

export default WOBottomSheet;

const Wrapper = styled.div`
  flex: 0 0 auto;
  height: ${(props) => props.$height - 12}px;
  z-index: 745;
  ${(props) =>
    props.$type === 'modal' &&
    css`
      width: 100%;
      height: ${(props) => props.$height}px;
    `}
`;

const Wrap = styled.div`
  position: fixed;
  bottom: 70px;
  left: 80px;
  transition: all 0.5s;
  ${(props) =>
    props.$sideOpen &&
    css`
      left: 374px;
    `}
  right: 0;
  border-radius: 24px 24px 0px 0px;
  /* overflow: hidden; */
  background-color: var(--White);
  padding: 0 48px 30px;
  box-shadow: 0px -8px 8px 0px rgba(0, 0, 0, 0.04);

  ${(props) =>
    props.$type === 'modal' &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 20px;
      ${(props) =>
        props.$title &&
        css`
          padding: 0 20px 20px;
        `}
    `}
`;

const TitleArea = styled.div`
  display: flex;
  height: 67px;
  padding: 20px 0px;
  align-items: center;
  .title {
    color: var(--W-Dark-11);
    font-size: 18px;
    font-weight: 700;
  }
  .button-area {
    display: flex;
    margin-left: auto;
    .btn {
      & + .btn {
        margin-left: 8px;
      }
    }
    .select-wrap {
      & + .btn {
        margin-left: 8px;
      }
    }
  }
`;

const ContentArea = styled.div``;
