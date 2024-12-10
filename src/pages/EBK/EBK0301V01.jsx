import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { EBK_02_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTable from '../../components/common/WOTable';
import { TD_EBK0301V01, TD_EBK0301V01_Sub01 } from '../../data/tableDatas';
import WOSubTable from '../../components/common/WOSubTable';
import WODatePicker from '../../components/common/WODatePicker';
const EBK0301V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={EBK_02_breadCrumbList} />
          <S.Title>회계별 지급명령금액 총괄 조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'회계구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'자금구분'} optionList={[{ id: 1, label: '구비' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODatePicker label={'회계연도'} dateFormat={'YYYY'} />
              </WOFormColumn>

              <WOFormColumn>
                <WODatePicker label={'지급일자'} value={'yyyy.mm.dd'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_EBK0301V01} />
            </S.TableBox>
          </S.ViewArea>
          <WOSubTable tableData={TD_EBK0301V01_Sub01} type='page' />
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
            출력
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default EBK0301V01;
