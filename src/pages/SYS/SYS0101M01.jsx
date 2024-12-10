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
import { SYS_01_breadCrumbList, TD_SYS0101M01_01 } from '../../data/response';
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import { TD_SYS0101M01_1, TD_SYS0101M01_Sub01 } from '../../data/tableDatas';
import WOSubTable from '../../components/common/WOSubTable';
import WOComboBox from '../../components/common/WOComboBox';

const SYS0101M01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_01_breadCrumbList} />
          <S.Title>기관/부서코드관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOInput label='고객기관명' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='고객기관코드' />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          {/* START: 고객 기관 목록 */}
          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>고객 기관 목록</div>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    추가
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_SYS0101M01_01} hasStateBar={true} stateBarHeader='신규/수정' />
            </S.TableBox>
          </S.ViewArea>
          {/* END: 고객 기관 목록 */}

          <WOBottomSheet
            title={'고객 기관 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOInput label='고객기관코드' value='000000' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='기관명' value='강남구청' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='OCR 기관코드' value='사용계좌' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='e호조 기관코드' value='0000000' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='은행기관코드' value='0000000' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='법인카드용 기관코드' value='0000000' />
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
              <WOFormColumn col={5}>
                <WOInput label='비고' placeholder={''} />
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
            기관별 부서목록
          </WOButton>
          <S.RightBtnWrap>
            <WOButton variant={'primary'} size={'lg'}>
              저장
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>

      <WOModal direction='center' size='xl' isOpen={isModalOpen} title={'기관별 부서목록'} onClose={() => setIsModalOpen(false)}>
        <ModalContentArea>
          <WOSubTable tableData={TD_SYS0101M01_Sub01} type='modal' />
          <S.TableBox>
            <S.ModalTitleWrap>
              <div className='tit'>기관별 부서목록</div>
              <div className='btn-wrap'>
                <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                  삭제
                </WOButton>
                <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                  추가
                </WOButton>
              </div>
            </S.ModalTitleWrap>
            <WOTable tableData={TD_SYS0101M01_1} height={252} hasStateBar={true} stateBarHeader={'신규/수정'} type='modal' />
          </S.TableBox>
          <WOBottomSheet
            type='modal'
            title={'기관별 부서 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal' gap={14}>
              <WOFormColumn>
                <WOInput label='부서코드' value='00000000' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='부서명' value='도시환경국 건축과' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='법인카드용 사업자번호' value='000-00-00000' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='E호조 부서코드' value='00000000' />
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
              <WOFormColumn col={3} gridType='modal'>
                <WOInput label='비고' />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
        </ModalContentArea>
        <ModalButtonArea>
          <WOButton variant={'outlined'} size={'md'} startIcon={<WOIcon icon={'download'} width={16} height={16} />}>
            다운로드
          </WOButton>
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

export default SYS0101M01;
