import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { SYS_03_breadCrumbList } from '../../data/response';
import { TD_SYS0308M01 } from '../../data/tableDatas';
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOCheckbox from '../../components/common/WOCheckbox';
import WOLabel from '../../components/common/WOLabel';
import WOComboBox from '../../components/common/WOComboBox';

const SYS0308M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_03_breadCrumbList} />
          <S.Title>사용자유형별 사이트권한관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'사용자 유형'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>사용자유형별 사이트권한</div>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    추가
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_SYS0308M01} hasStateBar={true} stateBarHeader={'신규/수정'} fixedColumn={1} />
            </S.TableBox>
          </S.ViewArea>

          <WOBottomSheet
            title={'사용자유형별 사이트권한관리 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOComboBox label={'유형구분'} optionList={[{ id: 1, label: '서울시-개인' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='유형설명' value='우리은행 공금영업점' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='유형코드' value='세입업무' disabled />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='순번' value='7' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='비고' value='서울시청 전체 DW업무(세입/세출)' />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'사용여부'}
                  optionList={[
                    { id: 1, label: 'Y' },
                    { id: 2, label: 'N' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>

              <WOFormColumn direction='column' col={4}>
                <WOLabel label={'사이트'} />
                <div className='flex'>
                  <WOCheckbox
                    item={{
                      id: 'input01-03',
                      label: '세무관리',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-04',
                      label: '자금관리',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-05',
                      label: '산하기관',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-06',
                      label: '의사결정지원',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-07',
                      label: '세무정보',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-08',
                      label: '자금전망',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-09',
                      label: '공금영업부',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-10',
                      label: '시스템관리',
                      name: 'input01',
                    }}
                  />
                </div>
              </WOFormColumn>
            </WOSearchArea>
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
              저장
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default SYS0308M01;
