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
import { SYS_01_breadCrumbList, TD_SYS0102M01_01 } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOInput from '../../components/common/WOInput';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOTransfer, { FromArea, ToArea, TransferTitle } from '../../components/common/WOTransfer';
const SYS0102M01 = () => {
  // logic
  const [isModalSYS0102P01, setIsModalSYS0102P01] = useState(false);
  const [isModalSYS0102P02, setIsModalSYS0102P02] = useState(false);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_01_breadCrumbList} />
          <S.Title>부서별 계좌번호 관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'계좌사용구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'연결계좌 여부'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'세입/세출구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'세출계좌구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'시구세구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

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
              <WOTable tableData={TD_SYS0102M01_01} hasStateBar={true} stateBarHeader='신규/수정' />
            </S.TableBox>
          </S.ViewArea>
          {/* END: 계좌 목록 */}

          {/* START: 부서별 계좌번호 관리 입력/수정 */}
          <WOBottomSheet
            title={'부서별 계좌번호 입력/수정'}
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
                <WOComboBox
                  label={'기금여부'}
                  optionList={[
                    { id: 1, label: 'Y' },
                    { id: 2, label: 'N' },
                  ]}
                  isAutoComplete={true}
                  disabled
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label='사용구분'
                  optionList={[
                    {
                      id: 1,
                      label: '사용계좌',
                    },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label='기관명'
                  optionList={[
                    {
                      id: 1,
                      label: '서울대공원',
                    },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label='부서명'
                  optionList={[
                    {
                      id: 1,
                      label: '관리부 총무과',
                    },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label='기금담당자'
                  optionList={[
                    {
                      id: 1,
                      label: 'option',
                    },
                  ]}
                  isAutoComplete={true}
                  disabled={true}
                />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
          {/* END: 부서별 계좌번호 관리 입력/수정 */}
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
          <WOButton variant={'outlined'} size={'lg'} isActive={isModalSYS0102P01} onClick={() => setIsModalSYS0102P01(true)}>
            기금권한이관
          </WOButton>
          <WOButton variant={'outlined'} size={'lg'} isActive={isModalSYS0102P02} onClick={() => setIsModalSYS0102P02(true)}>
            기금권한복사
          </WOButton>
          <S.RightBtnWrap>
            <WOButton variant={'primary'} size={'lg'}>
              저장
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>
      {/* START: modal */}
      <WOModal direction='center' size='lg' isOpen={isModalSYS0102P01} title={'기금권한이관'} onClose={() => setIsModalSYS0102P01(false)}>
        {/* START: modalContent */}
        <ModalContentArea>
          <S.Container>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOComboBox
                  label='기관명'
                  optionList={[
                    {
                      id: 1,
                      label: '서울시청',
                    },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
            </WOSearchArea>
            <WOTransfer mainTitle='A의 기금 권한을 B에게 이관'>
              <FromArea>
                <TransferTitle>A</TransferTitle>
                <WOFormColumn>
                  <WOComboBox label='부서명' optionList={[{ id: 1, label: '119특수구조단' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label='사용자명' optionList={[{ id: 1, label: '홍길순' }]} isAutoComplete={true} />
                </WOFormColumn>
              </FromArea>
              <ToArea>
                <TransferTitle>B</TransferTitle>
                <WOFormColumn>
                  <WOComboBox label='부서명' optionList={[{ id: 1, label: '119특수구조단' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label='사용자명' optionList={[{ id: 1, label: '홍길순' }]} isAutoComplete={true} />
                </WOFormColumn>
              </ToArea>
            </WOTransfer>
          </S.Container>
        </ModalContentArea>

        {/* END: modalContent */}
        <ModalButtonArea>
          <ButtonRightArea>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
              권한이관
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>
      <WOModal direction='center' size='lg' isOpen={isModalSYS0102P02} title={'기금권한복사'} onClose={() => setIsModalSYS0102P02(false)}>
        {/* START: modalContent */}
        <ModalContentArea>
          <S.Container>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOComboBox
                  label='기관명'
                  optionList={[
                    {
                      id: 1,
                      label: '서울시청',
                    },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
            </WOSearchArea>
            <WOTransfer mainTitle='A의 기금 권한을 B에게 복사'>
              <FromArea>
                <TransferTitle>A</TransferTitle>
                <WOFormColumn>
                  <WOComboBox label='부서명' optionList={[{ id: 1, label: '119특수구조단' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label='사용자명' optionList={[{ id: 1, label: '홍길순' }]} isAutoComplete={true} />
                </WOFormColumn>
              </FromArea>
              <ToArea>
                <TransferTitle>B</TransferTitle>
                <WOFormColumn>
                  <WOComboBox label='부서명' optionList={[{ id: 1, label: '119특수구조단' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label='사용자명' optionList={[{ id: 1, label: '홍길순' }]} isAutoComplete={true} />
                </WOFormColumn>
              </ToArea>
            </WOTransfer>
          </S.Container>
        </ModalContentArea>

        {/* END: modalContent */}
        <ModalButtonArea>
          <ButtonRightArea>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
              권한복사
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>
      {/* END: modal */}
    </S.Wrap>
  );
};

export default SYS0102M01;
