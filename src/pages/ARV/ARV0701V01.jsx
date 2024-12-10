import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { APV_07_breadCrumbList, TD_ARV0701V01 } from '../../data/tableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WODatePicker from '../../components/common/WODatePicker';
const ARV0701V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={APV_07_breadCrumbList} />
          <S.Title>이자지급결산 사전검증</S.Title>
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
                <WOComboBox label={'평잔금액'} optionList={[{ id: 1, label: '1백만 초과 ~ 10백만 이하' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'상품종류'} optionList={[{ id: 1, label: '서울시/ 구청 공금기업자유예금' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'사업자번호'} optionList={[{ id: 1, label: '104-83-00469 [서울시청]' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'이자금액'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODatePicker label={'기준일자'} value={''} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.Notice>
            * 지급이자가 1,000원 미만인 계좌의 이자는 소수점 절사 계산으로 약정금리와 일치하지 않을 수 있습니다.
            <span className='blue-color'>* 적용이율 ⓒ = 미지급이자 ⓑ/ 평잔 ⓐ * 365/ 일수 ⓓ | * 평잔 및 일수는 전결산일부터 조회기준일까지 입니다.</span>
          </S.Notice>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_ARV0701V01} />
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

export default ARV0701V01;
