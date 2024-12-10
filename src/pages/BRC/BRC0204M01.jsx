import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { BRC_02_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_BRC0204M01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WOInput from '../../components/common/WOInput';
import WOSubFormContainer, { SubFormColumn } from '../../components/common/WOSubFormContainer';
import WOSubFormItem from '../../components/common/WOSubFormItem';

const BRC0204M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $heightAuto={true}>
        <S.TopArea>
          <WOBreacCrumbs list={BRC_02_breadCrumbList} />
          <S.Title>서울시 사업자번호 관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 서울시 사업자번호 관리 */}
        <WOTabContent>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 상위기관 사업자번호 */}
                <WOFormColumn>
                  <WOInput id={'input-01'} label={'상위기관 사업자번호'} value={''} />
                </WOFormColumn>

                {/* 사업자번호 */}
                <WOFormColumn>
                  <WOInput id={'input-01'} label={'사업자번호'} value={''} />
                </WOFormColumn>

                {/* 사업자명 */}
                <WOFormColumn>
                  <WOInput id={'input-01'} label={'사업자명'} value={''} />
                </WOFormColumn>

                {/* 구분 */}
                <WOFormColumn>
                  <WOComboBox label={'구분'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 정렬 */}
                <WOFormColumn>
                  <WOComboBox label={'정렬'} optionList={[{ id: 1, label: '-' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            {/* 사업자번호 */}
            <S.ViewArea $height={'325px'}>
              <S.TableTitleWrap>
                <div className='tit'>사업자번호</div>
              </S.TableTitleWrap>
              <S.TableBox>
                <WOTable tableData={TD_BRC0204M01} hasStateBar={true} stateBarHeader={'신규/수정'} />
              </S.TableBox>
            </S.ViewArea>

            {/* 고객기본정보 입력/수정 */}
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap $isJustifyBetween={true}>
                  <div className='tit'>고객기본정보 입력/수정</div>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined'>
                      신규
                    </WOButton>
                    <WOButton onClick={() => {}} variant='outlined'>
                      상위기관선택
                    </WOButton>
                    <WOButton onClick={() => {}} variant='outlined'>
                      수정
                    </WOButton>
                    <WOButton onClick={() => {}} variant='outlined' color={'var(--Red-01, #FF5D5D)'}>
                      삭제
                    </WOButton>
                  </div>
                </S.TableTitleWrap>

                <WOSubFormContainer isMargin={true} isAlignStart={true}>
                  {/* column */}
                  <SubFormColumn>
                    <WOSubFormItem title={'상태'}>
                      <WOFormColumn col={2}>
                        <WOInput disabled={true} placeholder={'신규'} placeholderStyle={true} />
                        <WOInput disabled={true} />
                      </WOFormColumn>
                    </WOSubFormItem>

                    <WOSubFormItem title={'사업자명'}>
                      <WOFormColumn col={2}>
                        <WOInput id={'input-01'} value={''} placeholder={''} />
                      </WOFormColumn>
                    </WOSubFormItem>
                  </SubFormColumn>

                  {/* column */}
                  <SubFormColumn>
                    <WOSubFormItem title={'상위기관'}>
                      <WOFormColumn col={2}>
                        <WOInput disabled={true} />
                        <WOInput disabled={true} />
                      </WOFormColumn>
                    </WOSubFormItem>

                    <WOSubFormItem title={'구분'}>
                      <WOFormColumn col={2}>
                        <WOComboBox optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
                      </WOFormColumn>
                    </WOSubFormItem>
                  </SubFormColumn>

                  {/* column */}
                  <SubFormColumn>
                    <WOSubFormItem title={'사업자번호'}>
                      <WOInput id={'input-01'} value={''} placeholder={''} />
                    </WOSubFormItem>
                  </SubFormColumn>
                </WOSubFormContainer>
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>

      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter content='space-between'>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
          <S.RightBtnWrap>
            <WOButton onClick={() => {}} variant='primary' size='lg'>
              저장
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default BRC0204M01;
