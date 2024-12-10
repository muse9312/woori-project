import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { EBK_01_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOSubTable from '../../components/common/WOSubTable';
import { TD_EBK0201V01_Sub01, TD_EBK0201V01_Sub02 } from '../../data/tableDatas';
const EBK0201V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true} $heightAuto={true}>
        <S.TopArea>
          <WOBreacCrumbs list={EBK_01_breadCrumbList} />
          <S.Title>공금잔액(한도) 및 은행마감시간조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
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
                <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: 'yyyy' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'세출계좌'} optionList={[{ id: 1, label: '0000-00000-000-0' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea $heightAuto={true}>
            <WOSubTable tableData={TD_EBK0201V01_Sub01} />
          </S.ViewArea>
          <S.ViewArea $heightAuto={true}>
            <WOSubTable tableData={TD_EBK0201V01_Sub02} title='은행 마감 조회' />
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
    </S.Wrap>
  );
};

export default EBK0201V01;
