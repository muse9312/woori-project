import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';

import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { ZPB_02_breadCrumbList, TD_ZPB0205V01 } from '../../data/response';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOInput from '../../components/common/WOInput';

const ZPB0205V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true}>
        <S.TopArea>
          <WOBreacCrumbs list={ZPB_02_breadCrumbList} />
          <S.Title>사용자 전용앱 로그인 이력조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WODateRangePicker label={'로그인기간'} periodValue={['2023-11-23', '2023-12-02']} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='사용자 ID' placeholder='영문,숫자조합 6~10자리 입력' value={''} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.Notice>
            <span className='block'>* 조회 조건에 맞는 사용자전용앱 로그인 이력을 최대 1000건까지만 보여줍니다.</span>
            <span className='block'>* 총 건수가 1000건인 경우 조회 대상의 남아 있을 수 있습니다. 조회 조건을 변경하여 다시 조회하세요.</span>
          </S.Notice>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_ZPB0205V01} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
    </S.Wrap>
  );
};

export default ZPB0205V01;
