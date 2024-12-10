import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { CAD_04_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_CAD0404V01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WOIcon from '../../components/common/WOIcon';
import WODateRangePicker from '../../components/common/WODateRangePicker';

const CAD0404V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={CAD_04_breadCrumbList} />
          <S.Title>부서별 사용현황</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 부서별 사용현황 */}
        <WOTabContent disable>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기관명 */}
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 사업자번호 */}
                <WOFormColumn>
                  <WOComboBox label={'사업자번호'} optionList={[{ id: 1, label: '000-00-00000' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 계좌번호 */}
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>

                <WOFormColumn>
                  <WODateRangePicker label={'승인기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.Notice>* 결제계좌 및 법인카드 보유현황은 현재시점 기준이며, 사용내역은 승인기준입니다.</S.Notice>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_CAD0404V01} hasFooter={true} />
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
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default CAD0404V01;
