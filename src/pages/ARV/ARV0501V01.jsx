import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import { APV_05_breadCrumbList, TD_ARV0501V01 } from '../../data/tableDatas';
import WOIcon from '../../components/common/WOIcon';

const ARV0501V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={APV_05_breadCrumbList} />
          <S.Title>희망번호통장 표지 출력</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'기관구분'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_ARV0501V01} hasStateBar={true} stateBarHeader='수정' />
            </S.TableBox>
          </S.ViewArea>
          {/* START: 계좌 및 희망번호 입력/수정 */}
          <WOBottomSheet
            title={'계좌 및 희망번호 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOInput type='number' label='공금세입계좌' value={'0000000000'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='요구불계좌' value={'0000000000'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='희망번호' value={'0000000000'} />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
          {/* END: 계좌 및 희망번호 입력/수정 */}
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
          <S.RightBtnWrap>
            <WOButton variant={'primary'} size={'lg'}>
              저장
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default ARV0501V01;
