import React, { useState } from 'react';
import styled from 'styled-components';
import { agencyList, workDatas } from '../data/workDatas';
import WOIcon from '../components/common/WOIcon';
import WOMainTabs from '../components/main/WOMainTabs';
import WODepthRow from './WODepthRow';
import WOTabContent from '../components/common/WOTabContent';
import WOWorkMenuDepthList from '../components/common/WOWorkMenuDepthList';
import WOWorkMenuDepthItem from '../components/common/WOWorkMenuDepthItem';
import WOAgencyMenuDepthList from '../components/common/WOAgencyMenuDepthList';
import WOAgencyMenuDepthItem from '../components/common/WOAgencyMenuDepthItem';
import WOButton from '../components/common/WOButton';
import WOSelectedView from './WOSelectedView';

const SelectedData = [
  { id: 1, check: true, depth1: '세입계좌', depth2: '세입계좌조회', depth3: '강남구청', depth4: '전체' },
  { id: 2, check: false, depth1: '세입계좌', depth2: '세입계좌조회', depth3: '강서구청' },
  { id: 3, check: true, depth1: '세입계좌', depth2: '세입계좌조회', depth3: '전략팀', depth4: '전략팀' },
  { id: 4, check: false, depth1: '세입계좌', depth2: '세입계좌조회' },
  { id: 5, check: false, depth1: '세입계좌', depth2: '세입계좌조회', depth3: '강북구청', depth4: '전략팀' },
];

const WOMainSelectWorkArea = ({ user }) => {
  const [selectedMenu, setSelectedMenu] = useState(workDatas[0]);
  const [checkedItems, setCheckedItems] = useState({});
  const [radioCheckedItems, setRadioCheckedItems] = useState({});
  const [activeTab, setActiveTab] = useState('tab1');

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  const handleDepth3Click = (e) => {
    e.stopPropagation();
  };

  const handleCheckboxChange = (item, isChecked) => {
    setCheckedItems((prev) => ({
      ...prev,
      [item.id]: isChecked,
    }));
  };
  const handleRadioChange = (item) => {
    setRadioCheckedItems({ [item.id]: true });
  };

  return (
    <Wrppaer className='main-select-work-area'>
      <TitleArea>조회할 업무를 선택해 주세요!</TitleArea>
      <TabArea>
        <WOMainTabs
          onChange={(selectedTabID) => setActiveTab(selectedTabID)}
          tabs={[
            {
              id: 'tab1',
              name: '📂  자주 쓰는 업무',
            },
            {
              id: 'tab2',
              name: '📋 업무 선택',
            },
          ]}
        />
      </TabArea>
      <>
        {activeTab === 'tab1' && (
          <WOTabContent>
            <WorkSelectArea>
              <FavoritesWorksList>
                {SelectedData.map((data, index) => (
                  <WODepthRow key={index} initialFollowState={false} data={data} isHover={true} />
                ))}
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} startIcon={<WOIcon height={10} icon='plus-blue' width={10} />} variant='box'>
                    자주 쓰는 업무 추가
                  </WOButton>
                </div>
              </FavoritesWorksList>
            </WorkSelectArea>
          </WOTabContent>
        )}
        {activeTab === 'tab2' && (
          <>
            <WOTabContent>
              <WorkSelectArea>
                <WorkMenuList>
                  {workDatas.map((data) => (
                    <WorkMenuItem type='button' key={data.id} onClick={() => handleMenuClick(data)} $isSelected={selectedMenu.id === data.id}>
                      <WorkMenuIcon $imgName={data.imgName}></WorkMenuIcon>
                      {data.title}
                    </WorkMenuItem>
                  ))}
                </WorkMenuList>
                <WorkSelectMenu>
                  <MenuStep>
                    <MenuTitleBox>
                      <span className='step'>Step 01</span>업무 상세 선택
                      <SearchInput>
                        <input type='text' id='form01' name='form01' placeholder='업무 검색' />
                        <WOIcon icon='search' width={14} height={14} />
                      </SearchInput>
                    </MenuTitleBox>
                    <MenuDepthList>
                      {selectedMenu &&
                        selectedMenu.children.map((depth2) =>
                          (depth2.children === undefined || depth2.children.length === 0) && (depth2.tabItems === undefined || depth2.tabItems.length === 0) ? (
                            // depth2에 children과 tabItems가 없는 경우
                            <WOWorkMenuDepthList
                              key={depth2.id}
                              title={depth2.title}
                              type='depth2'
                              onChange={(item, checked) => handleCheckboxChange(item, checked)}
                              item={{
                                name: depth2.id,
                                id: depth2.id,
                                label: depth2.title,
                              }}
                              isChecked={checkedItems[depth2.id]}></WOWorkMenuDepthList>
                          ) : (
                            <WOWorkMenuDepthList
                              key={depth2.id}
                              title={depth2.title}
                              onChange={(item, checked) => handleCheckboxChange(item, checked)}
                              item={{
                                name: depth2.id,
                                id: depth2.id,
                                label: depth2.title,
                              }}
                              type={depth2.tabItems === undefined && 'has-depth'}
                              isChecked={checkedItems[depth2.id]}
                              numOfChildrenItems={(depth2.children ? depth2.children.length : 0) + (depth2.tabItems ? depth2.tabItems.length : 0)}>
                              <MenuDepthList>
                                {depth2.tabItems &&
                                  depth2.tabItems.map((depth3) => (
                                    <WOWorkMenuDepthItem
                                      key={depth3.id}
                                      onChange={(item, checked) => handleCheckboxChange(item, checked)}
                                      item={{
                                        name: depth3.id,
                                        id: depth3.id,
                                        label: depth3.title,
                                      }}
                                      title={depth3.title}
                                      type='tab'
                                      onClick={(e) => handleDepth3Click(e)}
                                      isChecked={checkedItems[depth3.id]}
                                    />
                                  ))}
                                {depth2.children &&
                                  depth2.children.map((depth3) => (
                                    <WOWorkMenuDepthItem
                                      key={depth3.id}
                                      onChange={(item, checked) => handleCheckboxChange(item, checked)}
                                      item={{
                                        name: depth3.id,
                                        id: depth3.id,
                                        label: depth3.title,
                                      }}
                                      title={depth3.title}
                                      onClick={(e) => handleDepth3Click(e)}
                                      isChecked={checkedItems[depth3.id]}
                                    />
                                  ))}
                              </MenuDepthList>
                            </WOWorkMenuDepthList>
                          )
                        )}
                    </MenuDepthList>
                  </MenuStep>
                  {user.id === 1 && (
                    <MenuStep>
                      <MenuTitleBox className='right-box'>
                        <span className='step'>Step 02</span>기관 선택
                      </MenuTitleBox>
                      {agencyList.map((item) => (
                        <MenuDepthList>
                          <WOAgencyMenuDepthList
                            key={item.id}
                            title={item.title}
                            onChange={(item) => handleRadioChange(item)}
                            item={{
                              name: 'agency01',
                              id: item.id,
                              label: item.title,
                            }}
                            isChecked={radioCheckedItems[item.id]}
                            numOfChildrenItems={item.children.length}>
                            {item.children.map((item2) => (
                              <MenuDepthList>
                                <WOAgencyMenuDepthItem
                                  key={item2.id}
                                  onChange={(item2) => handleRadioChange(item2)}
                                  item={{
                                    name: 'agency01',
                                    id: item2.id,
                                    label: item2.title,
                                  }}
                                  title={item2.title}
                                  isChecked={radioCheckedItems[item2.id]}
                                  onClick={(e) => handleDepth3Click(e)}
                                />
                              </MenuDepthList>
                            ))}
                          </WOAgencyMenuDepthList>
                        </MenuDepthList>
                      ))}
                    </MenuStep>
                  )}

                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} startIcon={<WOIcon height={8} icon='check-active' width={12} />} variant='box'>
                      업무선택
                    </WOButton>
                  </div>
                </WorkSelectMenu>
              </WorkSelectArea>
              <WOSelectedView />
            </WOTabContent>
          </>
        )}
      </>
    </Wrppaer>
  );
};

export default WOMainSelectWorkArea;

const Wrppaer = styled.div`
  width: fit-content;
`;

const TitleArea = styled.div`
  margin-bottom: 28px;
  color: #333;
  font-size: 28px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`;

const TabArea = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  .search-input {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }
`;

const WorkSelectArea = styled.div`
  display: flex;
  gap: 0 30px;
  margin-bottom: 20px;
`;

const WorkMenuList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 184px;
  gap: 8px;
`;
const WorkMenuItem = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px 0;
  width: 88px;
  height: 88px;
  border-radius: 16px;
  background: ${(props) => (props.$isSelected ? 'linear-gradient(180deg, #C7CDFF 0%, #FDDEDE 100%)' : '#f6f6fa')};
  box-shadow: ${(props) => (props.$isSelected ? 'box-shadow: 0px 2px 4px 0px rgba(255, 255, 255, 0.45) inset;' : 'unset')};
  color: #1a2c49;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
`;
const WorkMenuIcon = styled.div`
  width: 34px;
  height: 34px;
  ${(props) =>
    props.$imgName &&
    `
  background: url('/assets/images/menu/${props.$imgName}.svg') no-repeat center /cover;
    
  `}
`;
const WorkSelectMenu = styled.div`
  position: relative;
  display: flex;
  width: 733px;
  height: 376px;
  border: 1px solid #efefef;
  border-radius: 16px;
  overflow: hidden;
  background: #f6f6fa;
  .btn-wrap {
    position: absolute;
    bottom: 24px;
    right: 24px;
  }
`;

const MenuTitleBox = styled.div`
  display: flex;
  align-items: center;
  height: 54px;
  padding: 0 16px;
  gap: 8px;
  border-radius: 16px 0px 0px 0px;
  background: #fff;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  &.right-box {
    border-radius: 0px 16px 0px 0px;
  }
  .step {
    display: block;
    height: 26px;
    padding: 0px 8px;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 16px;
    color: #333;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
  }
  .search-input {
    margin-left: auto;
  }
`;
const MenuDepthList = styled.div`
  &.flex-row {
    display: flex;
    flex-wrap: wrap;
  }
`;

const MenuStep = styled.div`
  width: 100%;
  &:first-child {
    border-right: 1px solid #efefef;
  }
  > ${MenuDepthList} {
    max-height: 320px;
    overflow-y: overlay;
  }
`;

const FavoritesWorksList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 947px;
  height: 522px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid #efefef;
  background: #f6f6fa;
  overflow-y: overlay;
  .btn-wrap {
    position: absolute;
    bottom: 24px;
    right: 24px;
  }
`;

// 임시

const SearchInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 138px;
  margin-left: auto;
  input {
    width: 100%;
    height: 30px;
    padding: 0 30px 0 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: #333;
    border-radius: 8px;
    background: #f5f6fa;
    &::placeholder {
      color: #9ea6b2;
    }
  }
  .icon {
    display: block;
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
