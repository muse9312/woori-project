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
import { TD_SYS0304M01 } from '../../data/tableDatas';
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOCheckbox from '../../components/common/WOCheckbox';
import WOLabel from '../../components/common/WOLabel';
import WOComboBox from '../../components/common/WOComboBox';

const SYS0304M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_03_breadCrumbList} />
          <S.Title>프로그램 등록</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOInput label='프로그램 명' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='파일 명' />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>
                  프로그램 등록<span className='notice-red'>* xml을 제외한 파일명을 작성해주세요.</span>
                </div>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    추가
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_SYS0304M01} noneIndicator={true} stateBarHeader={'신규/수정'} hasStateBar={true} />
            </S.TableBox>
          </S.ViewArea>

          <WOBottomSheet
            title={'프로그램 등록 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOInput label='프로그램 명' value='공통코드' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='파일명' value='CCCOCodeGroupSAV' />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'법인카드 사용구분'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'아이콘 구분'} optionList={[{ id: 1, label: '입력/조회' }]} isAutoComplete={true} />
              </WOFormColumn>

              <WOFormColumn>
                <WOComboBox
                  label={'기금사용여부'}
                  optionList={[
                    { id: 1, label: 'Y' },
                    { id: 2, label: 'N' },
                  ]}
                  isAutoComplete={true}
                  disabled
                />
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
                <WOLabel label={'버튼사용 여부'} />
                <div className='flex'>
                  <WOCheckbox
                    item={{
                      id: 'input01-03',
                      label: '조회',
                      name: 'input01',
                    }}
                    isChecked={true}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-04',
                      label: '추가',
                      name: 'input01',
                    }}
                    isChecked={true}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-05',
                      label: '삽입',
                      name: 'input01',
                    }}
                    isChecked={true}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-06',
                      label: '삭제',
                      name: 'input01',
                    }}
                    isChecked={true}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-07',
                      label: '저장',
                      name: 'input01',
                    }}
                    isChecked={true}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-08',
                      label: '출력',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-09',
                      label: '차트',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-10',
                      label: '엑셀',
                      name: 'input01',
                    }}
                    isChecked={true}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-11',
                      label: '한셀',
                      name: 'input01',
                    }}
                    isChecked={true}
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

export default SYS0304M01;
