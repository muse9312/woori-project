import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import WOButton from './WOButton';
import WOIcon from './WOIcon';
import { useOutletContext } from 'react-router-dom';

const WOSearchArea = ({ children, noneToggleBtn, noneBtn, type, btnText, hasColumnTitle, gap }) => {
  const [moreForm, setMoreForm] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const { sideOpen } = useOutletContext() ?? {};
  const formRef = useRef(null);
  useEffect(() => {
    const checkHeight = () => {
      if (formRef.current) {
        const formHeight = formRef.current.clientHeight;
        const formWrapHeight = 54;

        if (formHeight > formWrapHeight) {
          // 1줄보다 많을 때
          setMoreForm(true);
        } else {
          // 1줄 이하일 때
          setMoreForm(false);
        }
      }
    };

    setTimeout(() => {
      checkHeight();
    }, 300);
    // 화면 크기 변화 감지
    window.addEventListener('resize', checkHeight);
    checkHeight(); // 초기 실행

    return () => {
      window.removeEventListener('resize', checkHeight);
    };
  }, [sideOpen]);

  return (
    <Wrapper $type={type}>
      <Wrap $isOpen={isOpen}>
        <FormWrap ref={formRef} $gap={gap} $isOpen={isOpen} $moreForm={moreForm} $hasColumnTitle={hasColumnTitle}>
          {children}
        </FormWrap>
        <BtnWrap>
          {moreForm && type !== 'modal' && noneToggleBtn !== true && (
            <ToggleBtn type='button' onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <>
                  접기
                  <WOIcon width='16' height='16' icon='search-close' />
                </>
              ) : (
                <>
                  상세
                  <WOIcon width='16' height='16' icon='search-open' />
                </>
              )}
            </ToggleBtn>
          )}
          {!noneBtn && <WOButton variant='gradient'>{btnText ? btnText : '조회'}</WOButton>}
        </BtnWrap>
      </Wrap>
    </Wrapper>
  );
};

export default WOSearchArea;

export const ColumnTitle = styled.div`
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  padding: 4.5px 12px 4.5px 26px;
  color: var(--Cool-Dark-10);
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 12px;
    transform: translateY(-50%);
    width: 6px;
    height: 6px;
    background-color: #263752;
    border-radius: 50%;
  }
`;

export const ColumnWrap = styled.div`
  display: flex;
  padding-right: 36px;
  gap: 16px 36px;
  border-right: 1px solid var(--C-Dark-03);
  flex-wrap: wrap;
  &:last-child {
    padding-right: 0;
    border-right: unset;
  }
  ${(props) =>
    props.$type === 'sub' &&
    css`
      gap: 0 4px;
      padding-right: 0;
      border-right: unset;
      ${ColumnTitle} {
        align-items: flex-end;
        &::before {
          top: auto;
          bottom: 12px;
          transform: unset;
        }
      }
    `}
`;

const Wrapper = styled.form`
  position: relative;
  width: 100%;
  min-width: ${(props) => (props.$type === 'modal' ? 'auto' : '1256px')};
  border-radius: 12px;
  box-shadow: ${(props) => (props.$type === 'modal' ? 'unset' : '0px 5px 8px 0px rgba(0, 0, 0, 0.05)')};
  background-color: ${(props) => (props.$type === 'modal' ? 'var(--C-Dark-01)' : '#fff')};
`;
const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  height: 86px;
  clip-path: inset(0px);

  ${(props) =>
    props.$isOpen &&
    `
    height:auto;
    clip-path: none;

  `}
`;

const FormWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 36px;
  height: fit-content;
  width: 100%;
  ${(props) =>
    props.$gap &&
    css`
      gap: ${props.$gap}px;
    `}

  ${(props) =>
    props.$hasColumnTitle &&
    css`
      flex-wrap: nowrap;
    `}
`;

const BtnWrap = styled.div`
  flex: 0 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0 12px;
  margin-top: auto;
  margin-left: 10px;
  button {
    flex: 0 0 auto;
    width: fit-content;
  }
`;
const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0 4px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  color: #0e213f;
  white-space: nowrap;
`;
