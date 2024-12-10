import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { APV_02_breadCrumbList, OD_ARV0102V01, TD_ARV0201V01, TD_ARV0201V01_1, TD_ARV0201V01_2, TD_ARV0201V01_3 } from '../../data/tableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WODatePicker from '../../components/common/WODatePicker';
import { dateFormatMonth } from '../../data/common';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
const ARV0201V01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditableModal, setisEditableModal] = useState(false);
  const [selectedOptionItem, setSelectedOptionItem] = useState(OD_ARV0102V01[0]);

  const handleOptionChange = (selectedItem) => {
    setSelectedOptionItem(selectedItem);
  };

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={APV_02_breadCrumbList} />
          <S.Title>세입이체일정표</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WODatePicker label={'세입연월'} value={'2023-10'} dateFormat={dateFormatMonth} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'세입구분'} optionList={OD_ARV0102V01} isAutoComplete={true} onChange={handleOptionChange} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>2023년 12월</div>
                <div className='btn-wrap'>
                  {selectedOptionItem && selectedOptionItem.id === 1 && (
                    <>
                      <div className='calender-cate exchange'>교환</div>
                      <div className='calender-cate difference'>차액</div>
                    </>
                  )}
                  {selectedOptionItem && selectedOptionItem.id === 2 && (
                    <>
                      <div className='calender-cate exchange'>교환</div>
                    </>
                  )}
                  {selectedOptionItem && selectedOptionItem.id === 3 && (
                    <>
                      <div className='calender-cate difference'>차액</div>
                    </>
                  )}
                </div>
              </S.TableTitleWrap>
              {selectedOptionItem && selectedOptionItem.id === 1 && <WOTable tableData={TD_ARV0201V01} noneIndicator={true} calendarType='type01' />}
              {selectedOptionItem && selectedOptionItem.id === 2 && <WOTable tableData={TD_ARV0201V01_1} noneIndicator={true} calendarType='type02' />}
              {selectedOptionItem && selectedOptionItem.id === 3 && <WOTable tableData={TD_ARV0201V01_1} noneIndicator={true} calendarType='type03' />}
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
            출력
          </WOButton>
          <WOButton variant='secondary' size='lg' onClick={() => setIsModalOpen(true)}>
            상세일정관리
          </WOButton>
        </S.InnerFooter>
      </SubFooter>

      <WOModal isOpen={isModalOpen} direction='center' size='xl' bgColor='white' title='세입이체일정표 상세일정관리' onClose={() => setIsModalOpen(false)}>
        <ModalContentArea $gap={12}>
          <WOSearchArea type='modal'>
            <WOFormColumn>
              <WODatePicker label={'세입연월'} value={'2023.11'} dateFormat={dateFormatMonth} />
            </WOFormColumn>
            <WOFormColumn>
              <WOComboBox
                label={'세입구분'}
                optionList={[
                  {
                    id: 1,
                    label: '교환결제',
                  },
                ]}
                isAutoComplete={true}
              />
            </WOFormColumn>
          </WOSearchArea>
          <S.TableBox>
            <S.Notice>* 초기일정은 세입구분없이 전체에 반영됩니다.</S.Notice>

            <S.TableTitleWrap>
              <div className='btn-wrap'>
                {isEditableModal ? (
                  <>
                    <WOButton onClick={() => {}} variant='outlined'>
                      추가
                    </WOButton>
                    <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                      삭제
                    </WOButton>
                    <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                      초기일정삭제
                    </WOButton>
                  </>
                ) : (
                  <>
                    <S.EmptyBox $height={24} />
                  </>
                )}
              </div>
            </S.TableTitleWrap>
            <WOTable
              tableData={isEditableModal ? TD_ARV0201V01_2 : TD_ARV0201V01_3}
              hasCheckBar={isEditableModal ? true : false}
              hasAllCheckbox={true}
              checkBarWidth={38}
              noneIndicator={true}
              height={420}
              type='calendarEdit'
              editable={isEditableModal ? true : false}
            />
          </S.TableBox>
        </ModalContentArea>
        <ModalButtonArea>
          {isEditableModal ? (
            <>
              <ButtonRightArea>
                <WOButton variant={'primary'} size={'md'}>
                  저장
                </WOButton>
              </ButtonRightArea>
            </>
          ) : (
            <>
              <WOButton variant={'secondary'} size={'md'} onClick={() => setisEditableModal(true)} disabled={isEditableModal}>
                수정
              </WOButton>
              <ButtonRightArea>
                <WOButton variant={'primary'} size={'md'}>
                  확인
                </WOButton>
              </ButtonRightArea>
            </>
          )}
        </ModalButtonArea>
      </WOModal>
    </S.Wrap>
  );
};

export default ARV0201V01;
