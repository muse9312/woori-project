import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';

import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { FXP_04_breadCrumbList, TD_FXP0403V01 } from '../../data/response';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOInput from '../../components/common/WOInput';

const FXP0403V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={FXP_04_breadCrumbList} />
          <S.Title>제로페이 승인, 정산대사 현황</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WODateRangePicker label={'조회기간'} />
              </WOFormColumn>
              <WOFormColumn col={2}>
                <WOInput label='계좌번호/회계연도' value={'0000-000-000000'} />
                <WOComboBox label={''} optionList={[{ id: 1, label: '' }]} disabled={true} />
                <WOInput label='' disabled={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='지급점' value={'9999999'} />
                <WOInput label='' value={'전점 조회'} disabled={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='전자뱅킹 이용자번호' value={'0000-000-000000'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='금융공동망거래고유번호' value={'0000-000-000000'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='제로페이거래일련번호' value={'0000-000-000000'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_FXP0403V01} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default FXP0403V01;
