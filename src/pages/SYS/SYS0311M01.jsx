import React, { useState } from 'react';
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
import { TD_SYS0301P01, TD_SYS0311M01 } from '../../data/tableDatas';
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOComboBox from '../../components/common/WOComboBox';

const SYS0311M01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_03_breadCrumbList} />
          <S.Title>특화메뉴코드관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOInput label='통제명' />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>코드그룹목록</div>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    추가
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_SYS0311M01} hasStateBar={true} stateBarHeader={'신규/수정'} />
            </S.TableBox>
          </S.ViewArea>

          <WOBottomSheet
            title={'코드그룹목록 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOInput label='특화구분코드' value='SPC01' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='특화구분명' value='기금권한' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='비고' />
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
          <WOButton variant={'outlined'} size={'lg'} onClick={() => setIsModalOpen(true)}>
            코드그룹목록 세부
          </WOButton>
          <S.RightBtnWrap>
            <WOButton variant={'primary'} size={'lg'}>
              저장
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>

      <WOModal isOpen={isModalOpen} title={'코드그룹목록세부'} size='xl' onClose={() => setIsModalOpen(false)}>
        <ModalContentArea>
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
            <WOTable tableData={TD_SYS0301P01} hasStateBar={true} stateBarHeader={'신규/수정'} height={294} noneIndicator={true} />
          </S.TableBox>
          <WOBottomSheet
            type='modal'
            title={'코드그룹목록 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOInput label='코드' value='L1' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='코드명' value='총괄관리(L1)' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='정렬순서' value='00' />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'사용유무'}
                  optionList={[
                    { id: 1, label: 'Y' },
                    { id: 2, label: 'N' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
        </ModalContentArea>
        <ModalButtonArea>
          <ButtonRightArea>
            <WOButton variant={'primary'} size={'lg'}>
              저장
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>
    </S.Wrap>
  );
};

export default SYS0311M01;
