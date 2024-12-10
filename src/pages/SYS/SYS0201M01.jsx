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
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOInput from '../../components/common/WOInput';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_SYS0201M01 } from '../../data/tableDatas';

const SYS0201M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_02_breadCrumbList} />
          <S.Title>사용자 관리</S.Title>
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
                <WOComboBox label={'승인여부'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>사용자</div>
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
              <WOTable tableData={TD_SYS0201M01} hasStateBar={true} stateBarHeader='신규/수정' />
            </S.TableBox>
          </S.ViewArea>

          <WOBottomSheet
            title={'사용자 입력/수정'}
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
                <WOInput label='이메일' value='yyyyyy12@xxxx.com' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='전화번호' value='010-0000-000' />
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
          <WOButton variant={'outlined'} size={'lg'}>
            사용자로 로그인
          </WOButton>
          <WOButton variant={'outlined'} size={'lg'}>
            비밀번호 초기화
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

export default SYS0201M01;
