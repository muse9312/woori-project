import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { RPT_05_breadCrumbList } from '../../data/response';
import { TD_RPT0402M01_01, TD_RPT0402M01_02, TD_RPT0402P04_Sub } from '../../data/tableDatas';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOSubTable from '../../components/common/WOSubTable';
import WOApprovalStateTable from '../../components/common/WOApprovalStateTable';
import { test1 } from '../../data/sewonTableDatas';
const RPT0402P04 = ({ user }) => {
  // logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(true);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={RPT_05_breadCrumbList} />
          <S.Title>전자보고서 일괄승인</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox
                  label={'기관명'}
                  optionList={[
                    { id: 1, label: '서울시청' },
                    { id: 2, label: 'option' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'부서명'}
                  optionList={[
                    { id: 1, label: '전체' },
                    { id: 2, label: 'option' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WODateRangePicker label={'보고일자'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'회계연도'}
                  optionList={[
                    { id: 1, label: '2023' },
                    { id: 2, label: 'option' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'보고서종류'}
                  optionList={[
                    { id: 1, label: '전체' },
                    { id: 2, label: 'option' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'보고단계'}
                  optionList={[
                    { id: 1, label: '전체' },
                    { id: 2, label: 'option' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.Notice>* 일괄결제 전 다시 한번 목록 조회 부탁드립니다.</S.Notice>
          <>
            <S.ViewArea>
              <S.TableTitleWrap>
                <div className='tit'>보고서 내역</div>
                <div className='btn-wrap'>
                  <WOButton
                    onClick={() => {
                      setIsModalOpen(true);
                    }}
                    variant='outlined'>
                    전자보고서 관리대장
                  </WOButton>
                  <WOButton
                    onClick={() => {
                      setIsModalOpen2(true);
                    }}
                    variant='outlined'>
                    보고서 명세 출력
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <S.TableBox>
                <WOTable tableData={TD_RPT0402M01_01} hasCheckBar={true} hasAllCheckbox={true} />
              </S.TableBox>
            </S.ViewArea>
            <S.ViewArea>
              <S.TableTitleWrap>
                <div className='tit'>보고서 확인 이력</div>
              </S.TableTitleWrap>
              <S.TableBox>
                <WOTable tableData={TD_RPT0402M01_02} />
              </S.TableBox>
            </S.ViewArea>
          </>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
            {user !== 1 && (
              <>
                <WOButton variant='outlined' size='lg'>
                  연초보정
                </WOButton>
                <WOButton variant='outlined' size='lg'>
                  일괄초기화
                </WOButton>
              </>
            )}
            <S.RightBtnWrap>
              <WOButton variant='primary' size='lg'>
                일괄승인
              </WOButton>
            </S.RightBtnWrap>
          </>
        </S.InnerFooter>
      </SubFooter>
      {/* START: modal */}
      <WOModal isOpen={isModalOpen} direction='center' size='xl' bgColor='gray' title='전자보고서 관리대장' onClose={() => setIsModalOpen(false)}>
        <S.EditorArea $type='modal'>
          <div className='img-wrap'>
            <img src='/assets/images/temp/editor-modal.svg' alt='' />
          </div>
        </S.EditorArea>
        <ModalButtonArea>
          <ButtonRightArea>
            <WOButton variant={'primary'} size={'md'}>
              확인
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>
      <WOModal isOpen={isModalOpen2} direction='center' size='xl' bgColor='gray' title='전자보고서 확인 명세' onClose={() => setIsModalOpen2(false)}>
        <S.EditorArea $type='modal'>
          <div className='img-wrap'>
            <img src='/assets/images/temp/editor-modal.svg' alt='' />
          </div>
        </S.EditorArea>
        <ModalButtonArea>
          <ButtonRightArea>
            <WOButton variant={'primary'} size={'md'}>
              확인
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>

      <WOModal isOpen={isModalOpen3} direction='center' size='xl' bgColor='white' title='세입세출 자금일계표' onClose={() => setIsModalOpen3(false)}>
        <ModalContentArea gap={20}>
          <WOSubTable tableData={TD_RPT0402P04_Sub} type='modal' />
          <WOApprovalStateTable title={'결제진행상태'} tableData={test1} type={'modal'} />
          <S.EditorArea $height={548}>
            <div className='img-wrap'>
              <img src='/assets/images/temp/editor-modal.svg' alt='' />
            </div>
          </S.EditorArea>
        </ModalContentArea>
        <ModalButtonArea>
          <ButtonRightArea>
            <WOButton variant={'secondary'} size={'md'}>
              재상신
            </WOButton>
            <WOButton variant={'primary'} size={'md'}>
              보고서결재
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>

      {/* END: modal */}
    </S.Wrap>
  );
};

export default RPT0402P04;
