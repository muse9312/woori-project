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
import WOComboBox from '../../components/common/WOComboBox';
import { TD_SYS0301M01, TD_SYS0301M01_Sub01, TD_SYS0301P01 } from '../../data/tableDatas';
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOSubTable from '../../components/common/WOSubTable';

const SYS0301P01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_03_breadCrumbList} />
          <S.Title>공통코드</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'공통구분 명'} optionList={[{ id: 1, label: '시스템공통' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='코드그룹 명' placeholder={'-제외하고 입력해주세요.'} />
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
              <WOTable tableData={TD_SYS0301M01} hasStateBar={true} stateBarHeader={'신규/수정'} noneIndicator={true} />
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
                <WOInput label='구분' value='시스템공통' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='코드그룹명' value='내외부구분' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='비고' value='사용자 로그인 유형 관리' />
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
          <WOButton
            variant={'outlined'}
            size={'lg'}
            onClick={() => {
              setIsModalOpen(true);
            }}>
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
          <WOSubTable tableData={TD_SYS0301M01_Sub01} type={'modal'} />
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
            <WOTable tableData={TD_SYS0301P01} hasStateBar={true} stateBarHeader={'신규/수정'} height={294} />
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
                <WOComboBox label={'사용자권한'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
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
            <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
              저장
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>
    </S.Wrap>
  );
};

export default SYS0301P01;
