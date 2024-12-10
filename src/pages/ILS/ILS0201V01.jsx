import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';

import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { ILS_0201_breadCrumbList, TD_ILS0201V01, TD_ILS0201V01_Sub01, TD_ILS0201V01_SubView01 } from '../../data/response';
import WODatePicker from '../../components/common/WODatePicker';
import WOSubTable from '../../components/common/WOSubTable';
import WOSubViewTable from '../../components/common/WOSubViewTable';
import { dateFormatMonth } from '../../data/common';

const ILS0201V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true}>
        <S.TopArea>
          <WOBreacCrumbs list={ILS_0201_breadCrumbList} />
          <S.Title>일상경비 수입/지출월계표 및 잔액증명서</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
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
                <WOComboBox label={'세출계좌'} optionList={[{ id: 1, label: '0000-000000-000-0' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'대행계좌구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODatePicker label={'기준연월'} dateFormat={dateFormatMonth} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea $fit={true}>
            <WOSubTable tableData={TD_ILS0201V01_Sub01} titleWidth={248} />
          </S.ViewArea>
          <S.ViewArea $fit={true} $gap={24}>
            <WOTable tableData={TD_ILS0201V01} height={462} />

            <S.Container $gap={8}>
              <S.Notice>* 본 계좌는 자금집중 통합관리 대상계좌 이므로 잔액은 0원입니다.</S.Notice>
              <WOSubViewTable tableData={TD_ILS0201V01_SubView01} type='page' bullet={true} />
            </S.Container>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
    </S.Wrap>
  );
};

export default ILS0201V01;
