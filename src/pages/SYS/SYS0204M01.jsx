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
import { SYS_02_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_SYS0204M01 } from '../../data/tableDatas';
import WOInput from '../../components/common/WOInput';
import WODatePicker from '../../components/common/WODatePicker';
import WOBottomSheet from '../../components/common/WOBottomSheet';

const SYS0204M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_02_breadCrumbList} />
          <S.Title>사용자 IP관리</S.Title>
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
                <WOInput label='성명' />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'사용자유형'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODatePicker label={'등록일'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>사용자 IP관리 목록</div>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_SYS0204M01} hasStateBar={true} stateBarHeader={'수정'} />
            </S.TableBox>
          </S.ViewArea>

          <WOBottomSheet
            title={'사용자 IP 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOComboBox label={'사용자유형'} optionList={[{ id: 1, label: '과/동주민센터(전체)' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'기관'} optionList={[{ id: 1, label: '관악구청' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'부서'} optionList={[{ id: 1, label: '복지가족국 이동청소년과' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'영업점'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} disabled />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='사용자명' value='홍길동' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='식별자' value='0000' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='사번' value='0000' />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'조회권한'} optionList={[{ id: 1, label: '해당 부서' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'기금권한'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'카드권한'} optionList={[{ id: 1, label: '총괄관리(L1)' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'환경세권한'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
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

export default SYS0204M01;
