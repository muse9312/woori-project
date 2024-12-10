import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';

import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { ZPB_02_breadCrumbList, TD_ZPB0204V01 } from '../../data/response';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOInput from '../../components/common/WOInput';

const ZPB0204V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true}>
        <S.TopArea>
          <WOBreacCrumbs list={ZPB_02_breadCrumbList} />
          <S.Title>카카오톡 전송내역 조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='사용자 ID' placeholder='영문,숫자조합 6~10자리 입력' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='text' label='제로페이승인번호' placeholder='13자리 영문,숫자 입력' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='SMS/카카오톡 수신번호' placeholder='‘-’없이 11자리 숫자 입력' />
              </WOFormColumn>
              <WOFormColumn>
                <WODateRangePicker label={'발신일자'} periodValue={['2023-11-23', '2023-12-02']} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_ZPB0204V01} fixedColumn={2} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
    </S.Wrap>
  );
};

export default ZPB0204V01;
