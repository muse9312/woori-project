import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { APV_03_breadCrumbList, TD_ARV0301V01 } from '../../data/tableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOInput from '../../components/common/WOInput';
const ARV0301V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={APV_03_breadCrumbList} />
          <S.Title>보조금교부내역조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WODateRangePicker label={'입금일자'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='구청명(예금주)' value={''} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='입금계좌' value={'16110546548213'} placeholder={'-없이 입력하세요'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='요구부서명' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='입금금액' />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_ARV0301V01} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
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

export default ARV0301V01;
