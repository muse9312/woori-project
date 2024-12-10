import React, { useState } from 'react';
import WOToggleButton from '../common/WOToggleButton';
import styled, { css } from 'styled-components';
import WOButton from '../common/WOButton';
import WOIconButton from '../common/WOIconButton';
import WorkSelectModal from '../../views/WorkSelectModal';

const DepthData = [
  {
    check: true,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
  {
    check: true,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '계좌별 세입세출',
  },
  {
    check: true,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '재정자금 및 미수금',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '보고서 관리대장',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '세출/기금보고서',
    depth3: '세입세출 자금일계표',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
  {
    check: false,
    depth1: '세출업무',
    depth2: '회계별',
    depth3: '회계별 전기관 잔액',
  },
];

const Side = ({ onOpen, isOpen }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const toggleIsOpen = () => {
    onOpen && onOpen(!isOpen);
  };

  return (
    <Wrapper $isOpen={isOpen}>
      <Inner $isOpen={isOpen}>
        <ContentWrap>
          <TopMenu>
            <h2 className='title'>선택된 업무</h2>
            <div className='btn-wrap'>
              <WOButton
                onClick={() => {
                  setIsOpenModal(true);
                }}
                variant='outlined'>
                업무선택
              </WOButton>
            </div>
          </TopMenu>
          <WorkList>
            {DepthData.map((data, index) => (
              <WorkItem key={index}>
                <ItemOption>
                  <div className='starred-tasks'>
                    <WOToggleButton width={16} height={16} icon='star' initialFollowState={data.check}></WOToggleButton>
                    <span>자주 쓰는 업무</span>
                  </div>
                  <WOIconButton width={16} height={16} icon='close' />
                </ItemOption>
                <ItemDepth>
                  <span className='depth'>{data.depth1}</span>
                  {data.depth2 && (
                    <>
                      <span className='arr'></span> <span className='depth'>{data.depth2}</span>
                    </>
                  )}
                  {data.depth3 && (
                    <>
                      <span className='arr'></span> <span className='depth'>{data.depth3}</span>
                    </>
                  )}
                </ItemDepth>
              </WorkItem>
            ))}
          </WorkList>
        </ContentWrap>
      </Inner>
      <OpenBtn type='button' onClick={toggleIsOpen}></OpenBtn>

      {/* 업무선택 modal */}
      <WorkSelectModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />
    </Wrapper>
  );
};

export default Side;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 80px;
  height: 100vh;
  z-index: 800;
`;
const Inner = styled.div`
  height: 100%;
  background: linear-gradient(180deg, #ebedff 0%, #ffeaea 100%);
  overflow: hidden;
  transition: 0.5s;

  ${(props) =>
    props.$isOpen === true
      ? css`
          width: 294px;
        `
      : css`
          width: 0px;
        `};
`;

const TopMenu = styled.div`
  flex: 0 0 auto;
  padding: 40px 24px 24px;
  .title {
    margin-bottom: 14px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    line-height: 27px;
  }
  .btn-wrap {
    display: flex;
    // 버튼 분리 예정
    .btn {
      & + .btn {
        margin-left: 4px;
      }
    }
  }
`;

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 294px;
  height: 100%;
`;

const WorkList = styled.ul`
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  overflow-y: overlay;
`;
const WorkItem = styled.li`
  position: relative;
  padding: 16px 24px;
  & + & {
    margin-top: 1px;
    &::before {
      content: '';
      position: absolute;
      top: -1px;
      left: 24px;
      width: calc(100% - 48px);
      height: 1px;
      background-color: #0e213f;
      opacity: 0.1;
    }
  }
`;

const ItemDepth = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .depth {
    display: block;
    color: #555;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
  }
  .arr {
    display: block;
    width: 20px;
    height: 20px;
    background: url(/assets/images/depth-arrow-right.png) no-repeat center / cover;
  }
`;
const ItemOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  .starred-tasks {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: #555;
    gap: 4px;
    span {
      display: block;
      line-height: 24px;
    }
  }
`;

const OpenBtn = styled.button`
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  width: 20px;
  height: 75px;
  background: url(/assets/images/sidebar-button.png) no-repeat center / cover;
  border-radius: 0 24px 24px 0;
`;
