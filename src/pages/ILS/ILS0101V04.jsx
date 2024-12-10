import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';

import WOTabs from '../../components/common/WOTabs';
import WOTable from '../../components/common/WOTable';
import WOTabContent from '../../components/common/WOTabContent';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import {
  ILS_0101_breadCrumbList,
  TD_ILS0101V01,
  TD_ILS0101V02,
  TD_ILS0101V03,
  TD_ILS0101V04,
  TD_ILS0101P01_Sub01,
  TD_ILS0101P01_Sub02,
  TD_ILS0101P03_Sub02,
  TD_ILS0101P03_Sub01,
  TD_ILS0101P03_Sub03,
  TD_ILS0101P04_Sub03,
} from '../../data/response';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOModal from '../../components/common/WOModal';
import WOSubTable from '../../components/common/WOSubTable';

const ILS0101V04 = () => {
  // logic
  const [activeTabID, setActiveTabID] = useState(4);
  const [isModalILS0101P01, setIsModalILS0101P01] = useState(false);
  const [isModalILS0101P02, setIsModalILS0101P02] = useState(false);
  const [isModalILS0101P03, setIsModalILS0101P03] = useState(false);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ILS_0101_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '계좌현황' },
              { id: 2, name: '거래내역장' },
              { id: 3, name: '거래명세' },
              { id: 4, name: '반납금 입금거래명세' },
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
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌상태'} optionList={[{ id: 1, label: '정상(활동계좌)' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'일상경비구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_ILS0101V01} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={2} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'일상경비계좌'} optionList={[{ id: 1, label: '0000-000000-000-0' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'조회기간'} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_ILS0101V02} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={3} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'조회기간'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'일상경비계좌'} optionList={[{ id: 1, label: '0000-000000-000-0' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_ILS0101V03} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={4} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'조회기간'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'통합거래'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'일상경비계좌 '} optionList={[{ id: 1, label: '0000-000000-000-0' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'가상계좌 '} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'한도구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_ILS0101V04} hasFooter={true} />
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
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled={isModalILS0101P01}>
                다운로드
              </WOButton>

              {isModalILS0101P01 ? (
                <>
                  <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
                    출력
                  </WOButton>
                  <WOButton variant='secondary' size='lg' startIcon={<WOIcon icon={'arrow-active2'} width={24} height={24} />}>
                    계좌현황 상세내역
                  </WOButton>
                </>
              ) : (
                <WOButton variant='secondary' size='lg' onClick={() => setIsModalILS0101P01(true)}>
                  계좌현황 상세내역
                </WOButton>
              )}
            </>
          )}
          {activeTabID === 2 && (
            <>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
                다운로드
              </WOButton>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
                출력
              </WOButton>
            </>
          )}
          {activeTabID === 3 && (
            <>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled={isModalILS0101P02}>
                다운로드
              </WOButton>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
                출력
              </WOButton>
              {isModalILS0101P02 ? (
                <WOButton variant='secondary' size='lg' startIcon={<WOIcon icon={'arrow-active2'} width={24} height={24} />}>
                  거래명세 상세내역
                </WOButton>
              ) : (
                <WOButton variant='secondary' size='lg' onClick={() => setIsModalILS0101P02(true)}>
                  거래명세 상세내역
                </WOButton>
              )}
            </>
          )}
          {activeTabID === 4 && (
            <>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled={isModalILS0101P03}>
                다운로드
              </WOButton>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
                출력
              </WOButton>

              {isModalILS0101P03 ? (
                <WOButton variant='secondary' size='lg' startIcon={<WOIcon icon={'arrow-active2'} width={24} height={24} />}>
                  반납금 입금거래명세 상세내역
                </WOButton>
              ) : (
                <WOButton variant='secondary' size='lg' onClick={() => setIsModalILS0101P03(true)}>
                  반납금 입금거래명세 상세내역
                </WOButton>
              )}
            </>
          )}
        </S.InnerFooter>
      </SubFooter>
      {/* START: modal */}
      <WOModal direction='bottom' isOpen={isModalILS0101P01} title={'계좌현황 상세내역'} onClose={() => setIsModalILS0101P01(false)}>
        <S.TableBox>
          <WOSubTable tableData={TD_ILS0101P01_Sub01} />
          <WOSubTable tableData={TD_ILS0101P01_Sub02} />
        </S.TableBox>
      </WOModal>
      <WOModal direction='bottom' isOpen={isModalILS0101P02} title={'거래명세 상세내역'} onClose={() => setIsModalILS0101P02(false)}>
        <S.TableBox>
          <WOSubTable tableData={TD_ILS0101P03_Sub01} />
          <WOSubTable tableData={TD_ILS0101P03_Sub02} />
          <WOSubTable tableData={TD_ILS0101P03_Sub03} />
        </S.TableBox>
      </WOModal>
      <WOModal direction='bottom' isOpen={isModalILS0101P03} title={'반납금 입금거래명세 상세내역'} onClose={() => setIsModalILS0101P03(false)}>
        <S.TableBox>
          <WOSubTable tableData={TD_ILS0101P04_Sub03} />
        </S.TableBox>
      </WOModal>
      {/* END: modal */}
    </S.Wrap>
  );
};

export default ILS0101V04;
