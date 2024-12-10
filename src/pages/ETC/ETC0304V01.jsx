import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ETC_03_breadCrumbList, dateOptionList } from '../../data/response';
import WOTable from '../../components/common/WOTable';

import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_ETC0304V01, TD_ETC0304V01_1, TD_ETC0304V01_2 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WODatePicker from '../../components/common/WODatePicker';

const ETC0304V01 = () => {
  const [selectedRecipientItem, setSelectedRecipientItem] = useState(dateOptionList[0]);
  const handleRecipientChange = (selectedItem) => {
    selectedItem && setSelectedRecipientItem(selectedItem);
  };
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_03_breadCrumbList} />
          <S.Title>보조금사업 계좌수 및 예산점유율</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 보조금사업 계좌수 및 예산점유율 */}
        <WOTabContent disable>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기간 */}
                <WOFormColumn col={2} gridType={'type04'}>
                  <WOComboBox
                    label={'기간'}
                    optionList={dateOptionList}
                    defaultValue={dateOptionList[0]}
                    isAutoComplete={true}
                    onChange={handleRecipientChange}
                  />

                  {selectedRecipientItem.id === 1 && <WODatePicker label={'기준일자'} value={''} dateFormat='YYYY.MM' />}
                  {selectedRecipientItem.id === 2 && <WODateRangePicker label={'기준일자'} value={''} />}
                  {selectedRecipientItem.id === 3 && (
                    <>
                      <WODatePicker value={''} onChange={() => {}} dateFormat={'YYYY'} />
                      <WOComboBox optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                    </>
                  )}
                </WOFormColumn>

                {/* 조회구분 */}
                <WOFormColumn>
                  <WOComboBox label={'조회구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            {/* 신청목록 */}
            <S.ViewArea>
              {selectedRecipientItem.id === 1 && (
                <S.TableBox>
                  <WOTable tableData={TD_ETC0304V01} hasFooter={true} />
                </S.TableBox>
              )}
              {selectedRecipientItem.id === 2 && (
                <S.TableBox>
                  <WOTable tableData={TD_ETC0304V01_1} hasFooter={true} />
                </S.TableBox>
              )}
              {selectedRecipientItem.id === 3 && (
                <S.TableBox>
                  <WOTable tableData={TD_ETC0304V01_2} hasFooter={true} />
                </S.TableBox>
              )}
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

export default ETC0304V01;
