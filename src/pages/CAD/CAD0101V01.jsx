import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { CAD_01_breadCrumbList, CAD_01_timeTable, CAD_01_timeTable2 } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOTabs from '../../components/common/WOTabs';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_CAD0101V01, TD_CAD0101V02, TD_CAD0101V03, TD_CAD0101V04 } from '../../data/tableDatas';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOComboRange from '../../components/common/WOComboRange';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOCheckbox from '../../components/common/WOCheckbox';
import WOTabContent from '../../components/common/WOTabContent';
import WOInput from '../../components/common/WOInput';
import WOModal, { ModalButtonArea } from '../../components/common/WOModal';

const CAD0101V01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTabID, setActiveTabID] = useState(1);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={CAD_01_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '승인내역' },
              { id: 2, name: '매입내역' },
              { id: 3, name: '청구내역' },
              { id: 4, name: '미청구내역' },
            ]}
          />
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 승인내역 */}
        <WOTabContent id={1} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'사업자번호'} optionList={[{ id: 1, label: '000-00-00000' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'카드번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'승인기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>

                <WOFormColumn>
                  <WOComboRange label={'승인시간'} optionRangeList={[CAD_01_timeTable, CAD_01_timeTable2]} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOInput label='승인금액' rightText='만원이상' />
                </WOFormColumn>
                <WOFormColumn>
                  <WOCheckbox
                    item={{
                      id: 'input01-01',
                      label: '휴일내역',
                      name: 'input01-01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-02',
                      label: '서울시계외',
                      name: 'input01-02',
                    }}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'업종'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'국내/외'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_CAD0101V01} fixedColumn={3} hasCheckBar={true} checkBarWidth={40} checkBarHeader={'선택'} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>

        {/* 매입내역 */}
        <WOTabContent id={2} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'사업자번호'} optionList={[{ id: 1, label: '000-00-00000' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'카드번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'승인기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'매입구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_CAD0101V02} fixedColumn={3} hasCheckBar={true} checkBarWidth={40} checkBarHeader={'선택'} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>

        {/* 청구내역 */}
        <WOTabContent id={3} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'사업자번호'} optionList={[{ id: 1, label: '000-00-00000' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'카드번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'청구기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.Notice>
              * 연체가 있거나, 청구작업일 이후 선결제가 있는 경우 실제 결제(청구)금액과 상이할 수 있습니다. {<br />} * 작업기준일은 부서소계에 표기됩니다.
            </S.Notice>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_CAD0101V03} fixedColumn={4} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>

        {/* 미청구내역 */}
        <WOTabContent id={4} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'사업자번호'} optionList={[{ id: 1, label: '000-00-00000' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'카드번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'승인기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.Notice>
              * 매출건별 승인금액과 청구금액이 상이한 경우 미청구내역에 포함 될 수 있습니다. {<br />} * 미청구내역의 금액은 승인금액기준으로 조회됩니다. | *
              청구일자가 금일이후인 경우 미청구내역에 포함됩니다.
            </S.Notice>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_CAD0101V04} fixedColumn={3} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        {activeTabID === 1 && (
          <S.InnerFooter>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
            <WOButton variant='outlined' size='lg' onClick={() => setIsModalOpen(true)}>
              전표 출력
            </WOButton>
          </S.InnerFooter>
        )}
        {activeTabID === 2 && (
          <S.InnerFooter>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
            <WOButton variant='outlined' onClick={() => {}} size='lg'>
              증빙장표 저장
            </WOButton>
            <WOButton variant='outlined' onClick={() => {}} size='lg'>
              증빙장표 저장 후 열기
            </WOButton>
          </S.InnerFooter>
        )}
        {activeTabID === 3 && (
          <S.InnerFooter>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
          </S.InnerFooter>
        )}
        {activeTabID === 4 && (
          <S.InnerFooter>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
          </S.InnerFooter>
        )}
      </SubFooter>
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
    </S.Wrap>
  );
};

export default CAD0101V01;
