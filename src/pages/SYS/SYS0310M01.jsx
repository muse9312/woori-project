import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { SYS_03_breadCrumbList } from '../../data/response';
import { TD_SYS0310M01, TD_SYS0310M01_1 } from '../../data/tableDatas';
import WOComboBox from '../../components/common/WOComboBox';
import { ButtonRightArea } from '../../components/common/WOModal';
import WOInput from '../../components/common/WOInput';
import WODatePicker from '../../components/common/WODatePicker';
import WORadioGroup from '../../components/common/WORadioGroup';

const SYS0310M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_03_breadCrumbList} />
          <S.Title>사용자별 메뉴권한관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'검색'} optionList={[{ id: 1, label: '기관' }]} isAutoComplete={true} />
                <WOComboBox optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='성명' value='홍길동' />
              </WOFormColumn>
              <WOFormColumn>
                <WODatePicker label={'최종로그인일자'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'사용자유형'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn col={2}>
                <WORadioGroup
                  onChange={() => {}}
                  radioItems={[
                    {
                      id: 1,
                      label: '이하',
                      name: 'radio01',
                      value: '이하',
                    },
                    {
                      id: 2,
                      label: '이상',
                      name: 'radio01',
                      value: '이상',
                    },
                    {
                      id: 3,
                      label: '미사용',
                      name: 'radio01',
                      value: '미사용',
                    },
                    {
                      id: 4,
                      label: '전체',
                      name: 'radio01',
                      value: '전체',
                    },
                  ]}
                  defaultCheckedValue={{
                    id: 1,
                    label: '이하',
                    name: 'radio01',
                    value: '이하',
                  }}
                />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.GridBox>
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>사용자</div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_SYS0310M01} />
              </S.TableBox>
            </S.ViewArea>
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>사용자별메뉴</div>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined'>
                      초기화
                    </WOButton>
                  </div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_SYS0310M01_1} hasStateBar={true} stateBarHeader='수정' editable={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.GridBox>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <ButtonRightArea>
            <WOButton variant={'primary'} size={'lg'}>
              저장
            </WOButton>
          </ButtonRightArea>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default SYS0310M01;
