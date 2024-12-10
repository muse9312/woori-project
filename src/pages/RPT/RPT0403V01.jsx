import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { RPT_05_breadCrumbList } from '../../data/response';
import { TD_RPT0401M01_01, TD_RPT0401M01_02, TD_RPT0401M01_03, TD_RPT0403V01 } from '../../data/tableDatas';
import WOTabs from '../../components/common/WOTabs';
import WOTable from '../../components/common/WOTable';
import WOTabContent from '../../components/common/WOTabContent';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOInput from '../../components/common/WOInput';
const RPT0403V01 = () => {
  // logic
  const [activeTabID, setActiveTabID] = useState(2);
  const [activeBtn, setActiveBtn] = useState(false);
  const [selectAccount, setSelectAccount] = useState(null);
  const handleComboBoxChange = (selectedItem) => {
    setSelectAccount(selectedItem.id); // Update the state with the new selected option's ID
  };
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={RPT_05_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '보고서 관리대장' },
              { id: 2, name: '전자보고서 지점별 관리' },
            ]}
          />
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <WOTabContent id={1} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox
                    label={'기관명'}
                    optionList={[
                      { id: 1, label: '서울시청' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'부서명'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOInput id='input01' name='input01' value='00700' label='영업점' disabled />
                  <WOComboBox
                    optionList={[
                      { id: 1, label: '코어공통부' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.GridBox>
              <S.GridBox $direction='column'>
                <S.ViewArea>
                  <S.TableBox>
                    <S.TableTitleWrap>
                      <div className='tit'>보고서 제공 고백 부서 내역</div>
                      <div className='btn-wrap'>
                        <WOButton onClick={() => {}} variant='outlined'>
                          초기화
                        </WOButton>
                        <WOButton onClick={() => {}} variant='outlined' color='#FF5D5D'>
                          삭제
                        </WOButton>
                        <WOButton onClick={() => {}} variant='outlined' color='#3284FF'>
                          추가
                        </WOButton>
                      </div>
                    </S.TableTitleWrap>
                    <WOTable tableData={TD_RPT0401M01_01} hasStateBar={true} stateBarHeader='신규/수정' editable={true} />
                  </S.TableBox>
                </S.ViewArea>
                <S.ViewArea>
                  <S.TableBox>
                    <S.TableTitleWrap>
                      <div className='tit'>부서별 보고서 제공 리스트 </div>
                    </S.TableTitleWrap>
                    <WOTable tableData={TD_RPT0401M01_02} editable={true} hasStateBar={true} stateBarHeader='수정' />
                  </S.TableBox>
                </S.ViewArea>
              </S.GridBox>

              <S.ViewArea>
                <S.TableBox>
                  <S.TableTitleWrap>
                    <div className='tit'>계좌 및 회계 선택 </div>
                    <div className='notice-blue'>1.세입월계표 보고대상 선택</div>
                  </S.TableTitleWrap>

                  <WOTable tableData={TD_RPT0401M01_03} editable={true} hasStateBar={true} stateBarHeader='수정' />
                </S.TableBox>
              </S.ViewArea>
            </S.GridBox>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={2} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {selectAccount === 2 ? (
                  <>
                    <WOFormColumn col={2}>
                      <WOComboBox
                        label={'점출력구분'}
                        optionList={[
                          { id: 1, label: '전체' },
                          { id: 2, label: '개별영업점' },
                        ]}
                        isAutoComplete={true}
                        onChange={handleComboBoxChange}
                      />
                      <WOInput id={'input_02'} value={''} placeholder={'영업점코드'} disabled />
                      <WOComboBox optionList={[{ id: 1, label: '영업점명' }]} isAutoComplete={true} />
                    </WOFormColumn>

                    {activeBtn ? (
                      <WOFormColumn col={1.2}>
                        <WOComboBox
                          label={'보고서종류'}
                          optionList={[
                            { id: 1, label: '전체' },
                            { id: 2, label: 'option' },
                          ]}
                          isAutoComplete={true}
                        />
                        <WOInput id={'input_01'} value={''} placeholder={'일자 입력'} />
                        <WOButton onClick={() => {}} size='md' variant='fillOutlined'>
                          일괄수정
                        </WOButton>
                      </WOFormColumn>
                    ) : (
                      <WOFormColumn>
                        <WOComboBox
                          label={'보고서종류'}
                          optionList={[
                            { id: 1, label: '전체' },
                            { id: 2, label: 'option' },
                          ]}
                          isAutoComplete={true}
                        />
                        <WOButton
                          onClick={() => {
                            setActiveBtn(true);
                          }}
                          size='md'
                          variant='fillOutlined'>
                          보고일자수정
                        </WOButton>
                      </WOFormColumn>
                    )}
                  </>
                ) : (
                  <>
                    <WOFormColumn>
                      <WOComboBox
                        label={'점출력구분'}
                        optionList={[
                          { id: 1, label: '전체' },
                          { id: 2, label: '개별영업점' },
                        ]}
                        isAutoComplete={true}
                        onChange={handleComboBoxChange}
                      />
                    </WOFormColumn>
                    {activeBtn ? (
                      <WOFormColumn col={1.2}>
                        <WOComboBox
                          label={'보고서종류'}
                          optionList={[
                            { id: 1, label: '전체' },
                            { id: 2, label: 'option' },
                          ]}
                          isAutoComplete={true}
                        />
                        <WOInput id={'input_01'} value={''} placeholder={'일자 입력'} />
                        <WOButton onClick={() => {}} size='md' variant='fillOutlined'>
                          일괄수정
                        </WOButton>
                      </WOFormColumn>
                    ) : (
                      <WOFormColumn>
                        <WOComboBox
                          label={'보고서종류'}
                          optionList={[
                            { id: 1, label: '전체' },
                            { id: 2, label: 'option' },
                          ]}
                          isAutoComplete={true}
                        />
                        <WOButton
                          onClick={() => {
                            setActiveBtn(true);
                          }}
                          size='md'
                          variant='fillOutlined'>
                          보고일자수정
                        </WOButton>
                      </WOFormColumn>
                    )}
                  </>
                )}
              </WOSearchArea>
            </S.SearchArea>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_RPT0403V01} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          {activeTabID === 1 && (
            <>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
                다운로드
              </WOButton>
              <S.RightBtnWrap>
                <WOButton onClick={() => {}} variant='primary' size='lg'>
                  저장
                </WOButton>
              </S.RightBtnWrap>
            </>
          )}
          {activeTabID === 2 && (
            <>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
                다운로드
              </WOButton>
              <S.RightBtnWrap>
                <WOButton onClick={() => {}} variant='primary' size='lg' disabled>
                  저장
                </WOButton>
              </S.RightBtnWrap>
            </>
          )}
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default RPT0403V01;
