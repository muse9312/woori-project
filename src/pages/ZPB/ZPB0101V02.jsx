import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ZPB_01_breadCrumbList } from '../../data/response';
import WOModal, { ModalButtonArea } from '../../components/common/WOModal';
import { TD_ZPB0101P01_Sub01, TD_ZPB0101P01_Sub02, TD_ZPB0101V01_1, TD_ZPB0101V01_2, TD_ZPB0101V02 } from '../../data/tableDatas';
import WOTabs from '../../components/common/WOTabs';
import WOTable from '../../components/common/WOTable';
import WOTabContent from '../../components/common/WOTabContent';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import * as S from '../../styles/subPage.styled';
import WOInput from '../../components/common/WOInput';
import WOFormColumn from '../../components/common/WOFormColumn';
import WORadioGroup from '../../components/common/WORadioGroup';
import WOSubTable from '../../components/common/WOSubTable';
const ZPB0101V02 = () => {
  // logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [activeTabID, setActiveTabID] = useState(2);
  const [checkedItem, setCheckedItem] = useState(1);

  const handleChangeCheckedItem = (checkedItem) => {
    setCheckedItem(checkedItem.id);
  };

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ZPB_01_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '승인내역 조회' },
              { id: 2, name: '집행내역 조회' },
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
                <WOFormColumn gridType='full'>
                  <WORadioGroup
                    onChange={(checkedItem) => handleChangeCheckedItem(checkedItem)}
                    radioItems={[
                      {
                        id: 1,
                        label: '기관',
                        name: 'radio01',
                        value: '기관',
                      },
                      {
                        id: 2,
                        label: '산하기관',
                        name: 'radio01',
                        value: '산하기관',
                      },
                    ]}
                    defaultCheckedValue={{
                      id: 1,
                      label: '기관',
                      name: 'radio01',
                      value: '기관',
                    }}
                  />
                </WOFormColumn>
                {checkedItem === 1 && (
                  <>
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
                      <WOComboBox
                        label={'사업자번호'}
                        optionList={[
                          { id: 1, label: '전체' },
                          { id: 2, label: 'option' },
                        ]}
                        isAutoComplete={true}
                      />
                    </WOFormColumn>
                    <WOFormColumn>
                      <WOComboBox
                        label={'회계연도'}
                        optionList={[
                          { id: 1, label: '2023' },
                          { id: 2, label: 'option' },
                        ]}
                        isAutoComplete={true}
                      />
                    </WOFormColumn>
                    <WOFormColumn>
                      <WOComboBox
                        label={'계좌번호'}
                        optionList={[
                          { id: 1, label: '전체' },
                          { id: 2, label: 'option' },
                        ]}
                        isAutoComplete={true}
                      />
                    </WOFormColumn>
                    <WOFormColumn>
                      <WODateRangePicker label={'승인기간'} periodValue={['2023-11-01', '2023-11-01']} />
                    </WOFormColumn>
                    <WOFormColumn>
                      <WOComboBox
                        label={'승인구분'}
                        optionList={[
                          { id: 1, label: '전체' },
                          { id: 2, label: 'option' },
                        ]}
                        isAutoComplete={true}
                      />
                    </WOFormColumn>
                  </>
                )}
                {checkedItem === 2 && (
                  <>
                    <WOFormColumn>
                      <WOComboBox
                        label={'기관명'}
                        optionList={[
                          { id: 1, label: '전체' },
                          { id: 2, label: 'option' },
                        ]}
                        isAutoComplete={true}
                      />
                    </WOFormColumn>
                    <WOFormColumn>
                      <WOInput id='input-01' name='input-01' label='출금계좌번호' />
                    </WOFormColumn>
                    <WOFormColumn>
                      <WODateRangePicker label={'승인기간'} periodValue={['2023-11-01', '2023-11-01']} />
                    </WOFormColumn>
                    <WOFormColumn>
                      <WOInput id='input-02' name='input-02' label='카드번호' />
                    </WOFormColumn>
                    <WOFormColumn>
                      <WOComboBox
                        label={'승인구분'}
                        optionList={[
                          { id: 1, label: '전체' },
                          { id: 2, label: 'option' },
                        ]}
                        isAutoComplete={true}
                      />
                    </WOFormColumn>
                  </>
                )}
              </WOSearchArea>
            </S.SearchArea>
            {checkedItem === 1 && (
              <S.ViewArea>
                <S.TableBox>
                  <WOTable tableData={TD_ZPB0101V01_1} fixedColumn={3} hasCheckBar={true} />
                </S.TableBox>
              </S.ViewArea>
            )}
            {checkedItem === 2 && (
              <S.ViewArea>
                <S.TableBox>
                  <WOTable tableData={TD_ZPB0101V01_2} fixedColumn={3} hasCheckBar={true} />
                </S.TableBox>
              </S.ViewArea>
            )}
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={2} activeTabId={activeTabID}>
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
                  <WOComboBox
                    label={'사업자번호'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'회계연도'}
                    optionList={[
                      { id: 1, label: '2023' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'계좌번호'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn col={2} gridType='type01'>
                  <WOComboBox
                    label={'일자구분'}
                    optionList={[
                      { id: 1, label: '승인일자' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                  <WODateRangePicker label={''} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'집행구분'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.Notice>* 집행 완료 건은 전송 제외입니다. (지출경과는 승인일로부터 6영업일 이상 지닌 건이며 조회 조건과 상관없이 보여줍니다.)</S.Notice>

            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined'>
                      카카오톡전송
                    </WOButton>
                    <WOButton onClick={() => {}} variant='outlined'>
                      SMS전송
                    </WOButton>
                  </div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_ZPB0101V02} fixedColumn={2} hasCheckBar={true} checkBarHeader='전송' checkBarWidth={100} indicatorReverse={true} />
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
              <WOButton variant='outlined' size='lg' onClick={() => setIsModalOpen(true)}>
                전표 출력
              </WOButton>
            </>
          )}
          {activeTabID === 2 && (
            <>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
                다운로드
              </WOButton>
            </>
          )}
        </S.InnerFooter>
      </SubFooter>
      {/* START: modal */}
      <WOModal isOpen={isModalOpen} direction='center' size='xl' bgColor='gray' title='전표 출력' onClose={() => setIsModalOpen(false)}>
        <S.EditorArea $type='modal'>
          <div className='img-wrap'>
            <img src='/assets/images/temp/editor-modal.svg' alt='' />
          </div>
        </S.EditorArea>
        <ModalButtonArea>
          <S.RightBtnWrap>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
              확인
            </WOButton>
          </S.RightBtnWrap>
        </ModalButtonArea>
      </WOModal>
      {/* START: modal */}
      <WOModal isOpen={isModalOpen2} direction='center' height={388} size='xl' title={'사용자 요약 조회'} onClose={() => setIsModalOpen2(false)}>
        <S.TableBox>
          <WOSubTable type={'modal'} tableData={TD_ZPB0101P01_Sub01} />
          <WOSubTable type={'modal'} tableData={TD_ZPB0101P01_Sub02} />
        </S.TableBox>
        <ModalButtonArea>
          <S.RightBtnWrap>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
              확인
            </WOButton>
          </S.RightBtnWrap>
        </ModalButtonArea>
      </WOModal>
    </S.Wrap>
  );
};

export default ZPB0101V02;
