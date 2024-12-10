import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea, { ColumnTitle, ColumnWrap } from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { SYS_02_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_SYS0205M01 } from '../../data/tableDatas';
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';

const SYS0205M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_02_breadCrumbList} />
          <S.Title>부서 및 사용자 이관</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'부서변경 구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>변경 부서 목록</div>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined'>
                    양식 다운로드
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined'>
                    양식 업로드
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    추가
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_SYS0205M01} hasStateBar={true} stateBarHeader={'신규/수정'} />
            </S.TableBox>
          </S.ViewArea>

          <WOBottomSheet
            title={'부서 및 사용자 이관 입력/수정'}
            button={
              <>
                <WOComboBox optionList={[{ id: 1, label: '부서변경구분 - 신규' }]} width={133} type='filter' />
                <WOButton onClick={() => {}} variant='outlined'>
                  초기화
                </WOButton>
              </>
            }>
            <S.Container $gap={8}>
              <WOSearchArea noneBtn={true} type='modal' hasColumnTitle={true}>
                <ColumnTitle>변경 전</ColumnTitle>
                <ColumnWrap>
                  <WOFormColumn>
                    <WOInput label='부서코드 (GCC)' value='' disabled />
                  </WOFormColumn>
                  <WOFormColumn>
                    <WOInput label='부서명' value='' disabled />
                  </WOFormColumn>
                </ColumnWrap>
              </WOSearchArea>
              <WOSearchArea noneBtn={true} type='modal' hasColumnTitle={true}>
                <ColumnTitle>변경 후</ColumnTitle>
                <ColumnWrap>
                  <WOFormColumn>
                    <WOInput label='부서코드 (GCC)' value='' />
                  </WOFormColumn>
                  <WOFormColumn>
                    <WOInput label='부서명' value='' />
                  </WOFormColumn>
                  <WOFormColumn>
                    <WOInput label='고객기관코드' value='000000' />
                  </WOFormColumn>
                  <WOFormColumn>
                    <WOInput label='차상위부서코드' value='000000' />
                  </WOFormColumn>
                  <WOFormColumn>
                    <WOInput label='단축부서명' value='감사실' />
                  </WOFormColumn>
                  <WOFormColumn>
                    <WOInput label='사업자번호' value='0000000000' />
                  </WOFormColumn>
                </ColumnWrap>
              </WOSearchArea>
            </S.Container>
          </WOBottomSheet>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
          <S.RightBtnWrap>
            <WOButton variant={'primary'} size={'lg'}>
              부서이관
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default SYS0205M01;
