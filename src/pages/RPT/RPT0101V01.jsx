import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WODatePicker from '../../components/common/WODatePicker';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { RPT_01_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';
import WOTabs from '../../components/common/WOTabs';
import SubFooter from '../../components/layout/SubFooter';
import WOIcon from '../../components/common/WOIcon';
import WOTabContent from '../../components/common/WOTabContent';
import WOApprovalStateTable from '../../components/common/WOApprovalStateTable';
import { test1 } from '../../data/sewonTableDatas';
import WOTable from '../../components/common/WOTable';
import { TD_RPT0101V01 } from '../../data/tableDatas';
import { dateFormatMonth } from '../../data/common';
import WOModal, { ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOEditTable from '../../components/common/WOEditTable';
import WORadioGroup from '../../components/common/WORadioGroup';

const RPT0101V01 = () => {
  const [activeTabID, setActiveTabID] = useState('tab1');
  const [isOpenModal, setIsOpenModal] = useState(false);
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={RPT_01_breadCrumbList} />
          <S.Title>
            세입월계표
            <WOTabs
              activeTabID={activeTabID}
              onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
              tabs={[
                {
                  id: 'tab1',
                  name: '보고서',
                },
                {
                  id: 'tab2',
                  name: '내역',
                },
              ]}
              type='type3'
            />
          </S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <WOTabContent id={'tab1'} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관구분'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'시세/구세/계좌별'} optionList={[{ id: 1, label: '계좌별' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '0000-00000-000-0[시세외]' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODatePicker label={'기준연월'} value={'2023-10'} dateFormat={dateFormatMonth} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <WOApprovalStateTable title='결제진행상태' tableData={test1} />
            <S.EditorArea>
              <div className='img-wrap'>
                <img src='assets/images/temp/editor-page.svg' alt='임시 에디터' />
              </div>
            </S.EditorArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={'tab2'} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관구분'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'시세/구세/계좌별'} optionList={[{ id: 1, label: '계좌별' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '0000-00000-000-0' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODatePicker label={'기준연월'} value={'2023-10'} dateFormat={dateFormatMonth} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_RPT0101V01} hasFooter={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>
      <SubFooter>
        <S.InnerFooter>
          {activeTabID === 'tab1' ? (
            <>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled>
                다운로드
              </WOButton>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'print'} width={24} height={24} />} disabled>
                출력
              </WOButton>
            </>
          ) : (
            <>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
                다운로드
              </WOButton>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
                출력
              </WOButton>
            </>
          )}

          <S.RightBtnWrap>
            <WOButton variant={'secondary'} size={'lg'}>
              재상신
            </WOButton>
            <WOButton
              variant={'primary'}
              size={'lg'}
              onClick={() => {
                setIsOpenModal(true);
              }}>
              보고서결재
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>
      {/* END: Content */}
      <WOModal direction='center' size='md' height={200} isOpen={isOpenModal} title={'보고서결재 확인 '} onClose={() => setIsOpenModal(false)}>
        {/* START: modalContent */}
        <ModalContentArea>
          <S.TableBox>
            <WOEditTable>
              <caption>공지 상세</caption>
              <tbody>
                <tr>
                  <th>확인결과</th>
                  <td colSpan='3'>
                    <WORadioGroup
                      radioItems={[
                        {
                          name: 'radio01',
                          id: 1,
                          label: '승인',
                          value: '승인',
                        },
                        {
                          name: 'radio02',
                          id: 2,
                          label: '반려',
                          value: '반려',
                        },
                      ]}
                      defaultCheckedValue={{
                        id: 1,
                        label: '승인',
                        name: 'radio01',
                        value: '승인',
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </WOEditTable>
          </S.TableBox>
        </ModalContentArea>
        {/* END: modalContent */}
        <ModalButtonArea $isBoxShadow={true}>
          <S.RightBtnWrap>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
              저장
            </WOButton>
          </S.RightBtnWrap>
        </ModalButtonArea>
      </WOModal>
    </S.Wrap>
  );
};

export default RPT0101V01;
