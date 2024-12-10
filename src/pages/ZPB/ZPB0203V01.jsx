import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';

import WOTable from '../../components/common/WOTable';
import WOSearchArea, { ColumnTitle, ColumnWrap } from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { ZPB_02_breadCrumbList, TD_ZPB0203V01 } from '../../data/response';
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';

const ZPB0203V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ZPB_02_breadCrumbList} />
          <S.Title>공공기관 회계담당 번호등록</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='사업자번호' placeholder='‘-’없이 10자리 숫자 입력' />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'사용자구분'} optionList={[{ id: 1, label: '공공기관' }]} isAutoComplete={true} disabled={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
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
              <WOTable tableData={TD_ZPB0203V01} hasStateBar={true} stateBarHeader='신규/수정' />
            </S.TableBox>
          </S.ViewArea>
          {/* START: 회계 담당 목록 입력/수정 */}
          <WOBottomSheet
            title={'회계 담당 목록 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <ColumnWrap>
                <ColumnTitle>사업자 정보</ColumnTitle>
                <WOFormColumn>
                  <WOInput type='number' label='사업자번호' value={'0000000000'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOInput type='text' label='제로페이 ID' value={'SJCENTER00'} />
                </WOFormColumn>
              </ColumnWrap>
              <ColumnWrap>
                <ColumnTitle>회계/감사담당자 정보</ColumnTitle>
                <WOFormColumn>
                  <WOInput type='number' label='SMS 수신번호' value={'0000000000'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOInput type='text' label='제로페이 ID' value={'SJJEMU'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'수신여부'}
                    optionList={[
                      {
                        id: 1,
                        label: 'N',
                      },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </ColumnWrap>
            </WOSearchArea>
          </WOBottomSheet>
          {/* END: 회계 담당 목록 입력/수정 */}
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
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

export default ZPB0203V01;
