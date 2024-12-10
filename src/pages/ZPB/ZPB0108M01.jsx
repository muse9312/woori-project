import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';

import WOTable from '../../components/common/WOTable';
import WOSearchArea, { ColumnTitle, ColumnWrap } from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { ZPB_01_breadCrumbList, TD_ZPB0108M01 } from '../../data/response';
import SubFooter from '../../components/layout/SubFooter';
import WOIcon from '../../components/common/WOIcon';
import WOComboBox from '../../components/common/WOComboBox';
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';

const ZPB0108M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ZPB_01_breadCrumbList} />
          <S.Title>서무담당 번호 등록</S.Title>
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
                <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2024' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'일상경비계좌'} optionList={[{ id: 1, label: '1601-32200-001-3[감사담당관]' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    추가
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_ZPB0108M01} hasStateBar={true} stateBarHeader='신규/수정' />
            </S.TableBox>
          </S.ViewArea>
          {/* START: 서무 담당 목록 입력/수정 */}
          <WOBottomSheet
            title={'서무 담당 목록 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOInput type='text' label='제로페이ID' value={'ABOUTJENNY'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='text' label='카카오톡 수신번호' value={'01000000000'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='text' label='일상경비계좌' value={'00000000000 '} disabled={true} />
              </WOFormColumn>
              <ColumnWrap $type={'sub'}>
                <ColumnTitle>카카오톡 수신여부</ColumnTitle>
                <WOFormColumn>
                  <WOComboBox
                    label={'승인건 전송'}
                    labelColor='blue'
                    optionList={[
                      {
                        id: 1,
                        label: '선택',
                      },
                    ]}
                    isAutoComplete={true}
                  />
                  <WOComboBox
                    label={'미집행건 전송'}
                    labelColor='red'
                    optionList={[
                      {
                        id: 1,
                        label: '선택',
                      },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </ColumnWrap>
              <ColumnWrap $type={'sub'}>
                <ColumnTitle>PUSH 수신여부</ColumnTitle>
                <WOFormColumn>
                  <WOComboBox
                    label={'승인건 전송'}
                    labelColor='blue'
                    optionList={[
                      {
                        id: 1,
                        label: '선택',
                      },
                    ]}
                    isAutoComplete={true}
                  />
                  <WOComboBox
                    label={'미집행건 전송'}
                    labelColor='red'
                    optionList={[
                      {
                        id: 1,
                        label: '선택',
                      },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </ColumnWrap>
            </WOSearchArea>
          </WOBottomSheet>
          {/* END: 서무 담당 목록 입력/수정 */}
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
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

export default ZPB0108M01;
