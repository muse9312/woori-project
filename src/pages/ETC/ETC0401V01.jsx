import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ETC_04_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_ETC0401V01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOInput from '../../components/common/WOInput';

const ETC0401V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_04_breadCrumbList} />
          <S.Title>계좌조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 계좌조회 */}

        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              {/* 기관구분 */}
              <WOFormColumn>
                <WOComboBox label={'기관구분'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
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
              <WOTable tableData={TD_ETC0401V01} hasStateBar={true} stateBarHeader={'수정'} />
            </S.TableBox>
          </S.ViewArea>

          {/* 수정영역 */}
          <WOBottomSheet
            title={'계좌조회 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOComboBox label={'판매구분'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='계좌번호' value={''} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='상품권명' value={''} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'기관구분'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'사용여부'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
        </S.ContentWrap>
      </S.Main>

      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>

          <S.RightBtnWrap>
            <WOButton variant='primary' size='lg'>
              저장
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default ETC0401V01;
