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

import WOTable from '../../components/common/WOTable';
import { TD_RPT0104V02 } from '../../data/tableDatas';
import { dateFormatMonth } from '../../data/common';

const RPT0104V02 = () => {
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
            세입월계표 (시청지점총괄)
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
                  <WOComboBox label={'조회구분'} optionList={[{ id: 1, label: '주택비총괄' }]} isAutoComplete={true} disabled />
                </WOFormColumn>

                <WOFormColumn>
                  <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
                </WOFormColumn>

                <WOFormColumn>
                  <WODatePicker label={'기준연월'} value={'2023-10'} dateFormat={dateFormatMonth} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            <S.EditorArea>
              <div className='img-wrap'>
                <img src='assets/images/temp/editor-page.svg' alt='임시 에디터' />
              </div>
            </S.EditorArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={'tab2'} activeTabId={activeTabID}>
          <S.ContentWrap>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'조회구분'} optionList={[{ id: 1, label: '주택비총괄' }]} isAutoComplete={true} disabled />
              </WOFormColumn>

              <WOFormColumn>
                <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
              </WOFormColumn>

              <WOFormColumn>
                <WODatePicker label={'기준연월'} value={'2023-10'} dateFormat={dateFormatMonth} />
              </WOFormColumn>
            </WOSearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_RPT0104V02} hasFooter={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>
      <SubFooter>
        <S.InnerFooter>
          {activeTabID === 'tab1' && (
            <>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled>
                다운로드
              </WOButton>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'print'} width={24} height={24} />} disabled>
                출력
              </WOButton>
            </>
          )}
          {activeTabID === 'tab2' && (
            <>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
                다운로드
              </WOButton>
              <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
                출력
              </WOButton>
            </>
          )}
        </S.InnerFooter>
      </SubFooter>
      {/* END: Content */}
    </S.Wrap>
  );
};

export default RPT0104V02;
