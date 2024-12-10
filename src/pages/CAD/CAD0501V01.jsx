import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { CAD0501V01_selectTypeList, CAD_05_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_CAD0501V01, TD_CAD0501V01_1, TD_CAD0501V01_2 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WOIcon from '../../components/common/WOIcon';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOInput from '../../components/common/WOInput';

const CAD0501V01 = () => {
  const [selected, setSelected] = useState(CAD0501V01_selectTypeList[0]);
  const handleTimeChange = (selectedItem) => {
    selectedItem && setSelected(selectedItem);
  };
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={CAD_05_breadCrumbList} />
          <S.Title>구매내역 조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 구매내역 조회 */}
        <WOTabContent disable>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 조회구분 */}
                <WOFormColumn>
                  <WOComboBox label={'조회구분'} optionList={CAD0501V01_selectTypeList} isAutoComplete={true} onChange={handleTimeChange} />
                </WOFormColumn>

                {/* 기관명 */}
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 사업자번호 */}
                <WOFormColumn>
                  <WOComboBox label={'사업자번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 계좌번호 */}
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 대상사업자번호 */}
                <WOFormColumn>
                  <WOInput label={'대상사업자번호'} placeholder={''} />
                </WOFormColumn>

                {/* 승인기간 */}
                <WOFormColumn>
                  <WODateRangePicker label={'승인기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>

                {/* 구매실적구분 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'구매실적구분'}
                    disabled={selected?.id === 2 || selected?.id === 1}
                    optionList={[{ id: 1, label: '사회적약자기업' }]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            <S.ViewArea>
              {selected?.id === 1 && (
                <S.TableBox>
                  <WOTable tableData={TD_CAD0501V01} />
                </S.TableBox>
              )}
              {selected?.id === 2 && (
                <S.TableBox>
                  <WOTable tableData={TD_CAD0501V01_1} />
                </S.TableBox>
              )}
              {selected?.id === 3 && (
                <S.TableBox>
                  <WOTable tableData={TD_CAD0501V01_2} />
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
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default CAD0501V01;
