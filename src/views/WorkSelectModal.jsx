import React, { useState } from 'react';
import WOModal from '../components/common/WOModal';
import WOMenuTabs from '../components/main/WOMenuTabs';
import WOWorkMenuItem from '../components/main/WOWorkMenuItem';
import { agencyList, workDatas, workSelectList } from '../data/workDatas';
import WOAreaMenuItem from '../components/main/WOAreaMenuItem';
import WOMainSearchForm from '../components/main/WOMainSearchForm';
import WOSelectedWorkList from '../components/main/WOSelectedWorkList';
import styled from 'styled-components';
import WOIconButton from '../components/common/WOIconButton';
import WOButton from '../components/common/WOButton';
import WOIcon from '../components/common/WOIcon';

const WorkSelectModal = ({ isOpen, onClose }) => {
  const [selectedTab, setSelectedTab] = useState('tab1-1');

  const tabs = workDatas.map((workData) => ({
    id: `tab1-${workData.id}`, // creating a unique id for each tab
    icon: workData.icon,
    title: workData.title,
  }));

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };
  const filteredData = workDatas.find((workData) => `tab1-${workData.id}` === selectedTab)?.children || [];

  return (
    <>
      <WOModal isOpen={isOpen} title={'업무 선택'} size='xl' onClose={onClose} height={721}>
        <Wrapper>
          {/* 메뉴 탭 영역 */}
          <WorkSelectTitle>업무주제선택</WorkSelectTitle>
          <WOMenuTabs onChange={handleTabChange} tabs={tabs} />
          {/* 업무 선택 영역 */}
          <WorkSelectArea>
            {/* 업무 선택 */}
            <WorkSelectWrap>
              <WorkSelectBox>
                <WorkSelect>
                  <TitleWrap>
                    <div className='tit'>업무 상세 선택</div>
                    <WOMainSearchForm placeholder={'업무 검색'} />
                  </TitleWrap>
                  <SelectList>
                    {filteredData.map((depth2) => (
                      <WOWorkMenuItem key={depth2.id} id={depth2.id} title={depth2.title} hasChildren={depth2.children || depth2.tabItems ? true : false}>
                        {depth2.children &&
                          depth2.children.map((depth3) => <WOWorkMenuItem key={depth3.id} id={depth3.id} title={depth3.title} type='depth' />)}
                        {depth2.tabItems &&
                          depth2.tabItems.map((depth3, index) => (
                            <WOWorkMenuItem key={depth3.id} id={depth3.id} title={depth3.title} type={index === 0 ? 'firstTab' : 'tab'} />
                          ))}
                      </WOWorkMenuItem>
                    ))}
                  </SelectList>
                </WorkSelect>
                <AreaSelect>
                  <TitleWrap>
                    <div className='tit'>기관 선택</div>
                  </TitleWrap>
                  <SelectList>
                    {agencyList.map((depth1) => (
                      <WOAreaMenuItem key={depth1.id} title={depth1.title} hasChildren={depth1.children ? true : false}>
                        {depth1.children &&
                          depth1.children.map((depth2) => (
                            <WOAreaMenuItem key={depth2.id} id={depth2.id} hasChildren={depth2.children ? true : false} title={depth2.title} type='depth2'>
                              {depth2.children &&
                                depth2.children.map((depth3) => <WOAreaMenuItem key={depth3.id} id={depth3.id} title={depth3.title} type='depth3' />)}
                            </WOAreaMenuItem>
                          ))}
                      </WOAreaMenuItem>
                    ))}
                  </SelectList>
                </AreaSelect>
              </WorkSelectBox>
              <BtnWrap>
                <div className='left-box'>
                  <WOIconButton width={18} height={18} icon='refresh' />
                  <div className='txt'>
                    총 <span>04</span>건
                  </div>
                </div>
                <div className='right-box'>
                  <WOButton onClick={() => {}} variant='outlined' size='md' color='#3284FF' endIcon={<WOIcon width={16} height={16} icon='arr-blue-16' />}>
                    업무 선택
                  </WOButton>
                </div>
              </BtnWrap>
            </WorkSelectWrap>
            {/* 선택된 업무 */}
            <WorkSelectedWrap>
              <div className='title-wrap'>
                <div className='tit'>선택된 업무</div>
                <div className='num'>
                  총 <span>04</span>건
                </div>
              </div>
              <div className='list-wrap'>
                {workSelectList.map((list, index) => (
                  <WOSelectedWorkList key={index} workPath={list} />
                ))}
              </div>
            </WorkSelectedWrap>
          </WorkSelectArea>
        </Wrapper>
      </WOModal>
    </>
  );
};

export default WorkSelectModal;

const Wrapper = styled.div``;

const WorkSelectTitle = styled.div`
  margin-bottom: 8px;
  color: #333;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
`;

// 업무 선택
const WorkSelectArea = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0 40px;
  height: 533px;
  margin-top: 20px;
`;

const WorkSelectWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 6px 0 11px;
`;
const WorkSelectBox = styled.div`
  display: flex;
  gap: 0 32px;
  height: 100%;
`;

const WorkSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const AreaSelect = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: 246px;
`;

const SelectList = styled.div`
  height: 100%;
  border-top: 1px solid var(--C-Dark-05);
  overflow-y: auto;
  max-height: 405px;
`;

const TitleWrap = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 54px;
  padding: 0 16px;
  .tit {
    color: #333;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
  }
  .search {
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-top: 1px solid var(--C-Dark-05);
  .left-box {
    display: flex;
    align-items: center;
    gap: 0 8px;
    .txt {
      color: #333;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
    }
  }
  .right-box {
    display: flex;
    align-items: center;
  }
`;

const WorkSelectedWrap = styled.div`
  position: relative;
  width: 296px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.15);
  border: 1px solid transparent;
  background-image: linear-gradient(#fff, #fff), var(--Grad-BG-02);
  background-origin: border-box;
  background-clip: content-box, border-box;
  .title-wrap {
    display: flex;
    justify-content: space-between;
    padding: 20px 24px 0;
    .tit {
      color: #333;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
    .num {
      margin-top: auto;
      color: #333;
      font-size: 14px;
      font-weight: 400;
      line-height: 21px;
    }
  }
  .list-wrap {
    max-height: 402px;
    overflow-y: auto;
  }
  &::before {
    content: '';
    position: absolute;
    left: -12px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: url(/assets/images/icon/main-selected-work-icon.svg) no-repeat center / cover;
  }
`;
