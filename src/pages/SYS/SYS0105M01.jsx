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
import { SYS_01_breadCrumbList } from '../../data/response';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOInput from '../../components/common/WOInput';
import WOComboBox from '../../components/common/WOComboBox';
import WOLabel from '../../components/common/WOLabel';
import WOSeal from '../../components/common/WOSeal';
import { TD_SYS0105M01 } from '../../data/tableDatas';

const SYS0105M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_01_breadCrumbList} />
          <S.Title>직인관리</S.Title>
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
                <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          {/* START: 직인관리목록 */}
          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>직인관리목록</div>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    추가
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_SYS0105M01} hasStateBar={true} stateBarHeader='신규/수정' />
            </S.TableBox>
          </S.ViewArea>
          {/* END: 직인관리목록 */}

          {/* START: 직인관리 상세 */}
          <WOBottomSheet
            title={'직인관리 상세'}
            button={
              <>
                <WOButton onClick={() => {}} variant='outlined'>
                  직인 파일 업로드
                </WOButton>
                <WOButton onClick={() => {}} variant='outlined'>
                  초기화
                </WOButton>
              </>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn isAlignStart={true}>
                <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn isAlignStart={true}>
                <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '건설 교통국 건설관리과' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn isAlignStart={true}>
                <WOComboBox label={'지점명'} optionList={[{ id: 1, label: '강동구청지점' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn isAlignStart={true}>
                <WOComboBox
                  label={'내부여부'}
                  optionList={[
                    { id: 1, label: 'Y' },
                    { id: 2, label: 'N' },
                  ]}
                  isAutoComplete={true}
                  disabled
                />
              </WOFormColumn>

              <WOFormColumn isAlignStart={true}>
                <WOInput label='비고' value={''} />
              </WOFormColumn>
              <WOFormColumn direction='column'>
                <WOLabel label={'직인'} />
                <WOSeal imgName='seal' />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
          {/* END: 직인관리 상세 */}
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

export default SYS0105M01;
