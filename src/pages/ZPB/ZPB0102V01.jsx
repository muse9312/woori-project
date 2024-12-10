import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ZPB_01_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_ZPB0102V01 } from '../../data/tableDatas';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOFormColumn from '../../components/common/WOFormColumn';
import * as S from '../../styles/subPage.styled';

const ZPB0102V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ZPB_01_breadCrumbList} />
          <S.Title>승인•집행 불일치조회</S.Title>
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
                <WOComboBox label={'일상경비계좌'} optionList={[{ id: 1, label: '000-00-00000' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'일치/불일치'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>

              <WOFormColumn>
                <WODateRangePicker label={'승인기간'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.Notice>
            * 승인계좌와 집행계좌 불일치건이 존재합니다. <br />* 문의사항은 해당 구청영업점 공금담당자에게 확인 부탁드립니다.
          </S.Notice>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_ZPB0102V01} />
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

export default ZPB0102V01;
