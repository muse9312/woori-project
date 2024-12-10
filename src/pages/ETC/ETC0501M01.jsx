import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ETC_05_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_ETC0501M01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WODatePicker from '../../components/common/WODatePicker';
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';

const ETC0501M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_05_breadCrumbList} />
          <S.Title>Data Correction</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* Data Correction */}

        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              {/* 교환회부일자 */}
              <WOFormColumn>
                <WODatePicker label='교환회부일자' onChange={() => {}} />
              </WOFormColumn>

              {/* 세입입금일자 */}
              <WOFormColumn>
                <WODatePicker label='세입입금일자' onChange={() => {}} />
              </WOFormColumn>

              {/* 구분 */}
              <WOFormColumn>
                <WOComboBox
                  label={'구분'}
                  optionList={[
                    { id: 1, label: '비ORC' },
                    { id: 2, label: 'ORC' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn gridType={'type01'}>
                <WOInput label={'징수기관'} />
                <WOInput />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
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
            <S.TableBox>
              <WOTable tableData={TD_ETC0501M01} hasStateBar={true} hasFooter={true} stateBarHeader='신규/수정' />
            </S.TableBox>
          </S.ViewArea>
          {/* START: Data Correction 입력/수정 */}
          <WOBottomSheet
            title={'Data Correction 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn gridType={'type01'}>
                <WOInput label={'수납기관'} />
                <WOInput />
              </WOFormColumn>
              <WOFormColumn gridType={'type01'}>
                <WOInput label={'영업점'} />
                <WOInput />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='text' label='손해배상건수' value={''} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='text' label='손해배상금' value={''} />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
        </S.ContentWrap>
      </S.Main>

      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter content='space-between'>
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

export default ETC0501M01;
