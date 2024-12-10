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
import WOTabContent from '../../components/common/WOTabContent';
import WOApprovalStateTable from '../../components/common/WOApprovalStateTable';
import { test1 } from '../../data/sewonTableDatas';
import WOTable from '../../components/common/WOTable';
import { TD_RPT0102V01 } from '../../data/tableDatas';
import { dateFormatMonth } from '../../data/common';

const RPT0102V02 = () => {
  const [activeTabID, setActiveTabID] = useState('tab2');

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={RPT_01_breadCrumbList} />
          <S.Title>
            수입금월중 총괄보고서
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
                  <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'세입회계'} optionList={[{ id: 1, label: '00000 시세' }]} isAutoComplete={true} />
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
                  <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'세입회계'} optionList={[{ id: 1, label: '00000 시세' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODatePicker label={'기준연월'} value={'2023-10'} dateFormat={dateFormatMonth} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_RPT0102V01} hasFooter={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>
      <SubFooter>
        <S.InnerFooter>
          <S.RightBtnWrap>
            <WOButton variant={'secondary'} size={'lg'}>
              재상신
            </WOButton>
            <WOButton variant={'primary'} size={'lg'}>
              보고서결재
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>
      {/* END: Content */}
    </S.Wrap>
  );
};

export default RPT0102V02;
