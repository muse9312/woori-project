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
import { SYS_01_breadCrumbList, TD_SYS0103M01 } from '../../data/response';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOInput from '../../components/common/WOInput';
import WOComboBox from '../../components/common/WOComboBox';

const SYS0103M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_01_breadCrumbList} />
          <S.Title>부서별 보통예금계좌 관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'고객기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'정렬순서'} optionList={[{ id: 1, label: '계좌번호순' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.Notice>* 계좌 상태가 정상인 계좌만 부서 연결 가능합니다.</S.Notice>

          {/* START: 계좌 목록 */}
          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>계좌 목록</div>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    삽입
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_SYS0103M01} hasStateBar={true} stateBarHeader='신규/수정' />
            </S.TableBox>
          </S.ViewArea>
          {/* END: 계좌 목록 */}

          {/* START: 부서별 보통예금계좌 관리 입력/수정 */}
          <WOBottomSheet
            title={'부서별 보통예금계좌 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOInput label='계좌번호' value={'0000-00000-000'} disabled={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='계좌명' value={'이자수입등계좌'} disabled={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label='사용구분' optionList={[{ id: 1, label: '사용계좌' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label='기관명' optionList={[{ id: 1, label: '재무국 재무과' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label='부서명' optionList={[{ id: 1, label: '기획재정국 재무과' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn col={5}>
                <WOInput label='비고' />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
          {/* END: 부서별 보통예금계좌 관리 입력/수정 */}
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

export default SYS0103M01;
