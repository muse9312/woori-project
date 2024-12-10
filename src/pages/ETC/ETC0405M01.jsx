import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ETC_04_breadCrumbList } from '../../data/response';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WODatePicker from '../../components/common/WODatePicker';
import { TD_ETC0405M01, TD_ETC0405M01_Sub01 } from '../../data/sewonTableDatas';
import WOTable from '../../components/common/WOTable';
import WOSubTable from '../../components/common/WOSubTable';

const ETC0405M01 = () => {
  // TODO : subTable 차액 숫자 텍스트 색상 변경 로직 필요 & 테이블데이터
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_04_breadCrumbList} />
          <S.Title>처리내역조회 (관리자)</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 처리내역조회 (관리자) */}
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              {/* 기준일자 */}
              <WOFormColumn>
                <WODatePicker label={'기준일자'} value={'2023-11-01'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea $height={'144px'}>
            <WOSubTable tableData={TD_ETC0405M01_Sub01} />
          </S.ViewArea>

          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>서울페이플러스 처리현황</div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_ETC0405M01} fixedColumn={3} />
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
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default ETC0405M01;
