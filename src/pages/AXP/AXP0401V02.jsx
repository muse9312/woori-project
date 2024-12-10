import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { AE_04_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_AXP0401V01, TD_AXP0401V02 } from '../../data/tableDatas';
import WODatePicker from '../../components/common/WODatePicker';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabs from '../../components/common/WOTabs';
import WOTabContent from '../../components/common/WOTabContent';
const AXP0401V02 = () => {
  const [activeTabID, setActiveTabID] = useState(2);
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={AE_04_breadCrumbList} />

          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '회계별 전기관 잔액' },
              { id: 2, name: '회계별 지급현황' },
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
                  <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'세출회계'} optionList={[{ id: 1, label: '00000 일반회계' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODatePicker label={'기준일자'} value={'2023-10-30'} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_AXP0401V01} hasFooter={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={2} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'세출회계'} optionList={[{ id: 1, label: '00000 일반회계' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODatePicker label={'기준일자'} value={'2023-10-30'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'대행계좌구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_AXP0401V02} hasFooter={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
            출력
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default AXP0401V02;
