import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { SYS_01_breadCrumbList } from '../../data/response';
import WOInput from '../../components/common/WOInput';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOEditTable from '../../components/common/WOEditTable';
import WOCheckbox from '../../components/common/WOCheckbox';
import WOTextArea from '../../components/common/WOTextArea';
import { TD_SYS0106M01_1, TD_SYS0107M01 } from '../../data/tableDatas';
import WOTextBadge from '../../components/common/WOTextBadge';
import WOComboBox from '../../components/common/WOComboBox';
import WOIcon from '../../components/common/WOIcon';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOLabel from '../../components/common/WOLabel';

const SYS0107P01_1 = () => {
  // 질문답변 상세 답변등록전 case
  const [isModalOpen, setIsModalOpen] = useState(false);
  // 질문답변 상세 답변등록전 수정 case
  const [isEditableModal, setisEditableModal] = useState(false);
  // 질문답변 상세 답변등록 후 case
  const [isModalOpen2, setIsModalOpen2] = useState(true);
  // 질문답변 상세 답변등록 후 수정 case
  const [isEditableModal2, setisEditableModal2] = useState(false);
  // 질문답변 상세 답변등록 case
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  // 질문 등록
  const [isModalOpen4, setIsModalOpen4] = useState(false);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_01_breadCrumbList} />
          <S.Title>질문답변게시판(Q&A)</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'검색'} optionList={[{ id: 1, label: '제목' }]} isAutoComplete={true} />
                <WOInput />
              </WOFormColumn>
              <WOFormColumn>
                <WODateRangePicker label={'게시기간'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'답변상태'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_SYS0107M01} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
          <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
            출력
          </WOButton>
          <WOButton variant={'outlined'} size={'lg'}>
            신규등록
          </WOButton>
        </S.InnerFooter>
      </SubFooter>

      {/* START: modal */}

      {/* START: 질문답변 상세 답변 등록 전 case*/}
      <WOModal direction='center' size='xl' isOpen={isModalOpen} title={'질문답변 상세'} onClose={() => setIsModalOpen(false)}>
        <ModalContentArea>
          <WOEditTable>
            <caption>질문답변 상세</caption>
            <tbody>
              <tr>
                <th>제목</th>
                <td colSpan='3'>
                  <WOInput id='input01' name='input01-01' value='법인카드, 제로페이 괸리 권한 부여 요청' readonly={!isEditableModal} />
                </td>
              </tr>
              <tr>
                <th>요청부서</th>
                <td>
                  <WOFormColumn gridType='type02'>
                    <WOInput id='input01' name='input01-01' value='중구청' readonly />
                    <div className='line'></div>
                    <WOInput id='input01' name='input01-01' value='행정관리국 문화청책과' readonly />
                  </WOFormColumn>
                </td>
                <th>요청자</th>
                <td>
                  <WOInput id='input01' name='input01-02' value='김현원' readonly />
                </td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>
                  <WOInput id='input01' name='input01-03' value='02-0000-0000' readonly={!isEditableModal} />
                </td>
                <th>요청일</th>
                <td>
                  <WOInput id='input01' name='input01-04' value='2023.12.12' readonly />
                </td>
              </tr>
              <tr>
                <th>질문</th>
                <td colSpan='3'>
                  {!isEditableModal ? (
                    <WOTextArea
                      height={97}
                      readonly
                      value='고향사랑기금 업무 담당자
기금권한부여요청드립니다.'
                    />
                  ) : (
                    <div className='editor-box'>
                      <img src='/assets/images/temp/toastui-editor.svg' alt='' />
                    </div>
                  )}
                </td>
              </tr>
              <tr>
                <th>답변</th>
                <td colSpan='3'>
                  <WOTextArea height={97} disabled value='' />
                </td>
              </tr>
            </tbody>
          </WOEditTable>
          <S.TableBox>
            <S.ModalTitleWrap>
              <div className='tit'>첨부파일</div>
              <WOTextBadge size='sm' type='grayTertiary'>
                00/00 MB
              </WOTextBadge>
              <div className='btn-wrap'>
                <WOButton onClick={() => {}} variant='outlined' disabled={!isEditableModal} color={'#ff5d5d'}>
                  파일 삭제
                </WOButton>
                <WOButton onClick={() => {}} variant='outlined' disabled={!isEditableModal}>
                  파일 첨부
                </WOButton>
              </div>
            </S.ModalTitleWrap>
            <WOTable tableData={TD_SYS0106M01_1} height={126} hasCheckBar={true} checkBarHeader={'선택'} noneIndicator={true} type='modal' />
          </S.TableBox>
        </ModalContentArea>
        <ModalButtonArea>
          {isEditableModal ? (
            <ButtonRightArea>
              <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
                저장
              </WOButton>
            </ButtonRightArea>
          ) : (
            <>
              <WOButton variant={'outlined'} size={'md'} startIcon={<WOIcon icon={'print'} width={16} height={16} />}>
                출력
              </WOButton>
              <WOButton variant={'outlined'} size={'md'} onClick={() => setisEditableModal(true)}>
                수정
              </WOButton>
              <WOButton variant={'outlined'} size={'md'}>
                삭제
              </WOButton>
              <ButtonRightArea>
                <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
                  확인
                </WOButton>
              </ButtonRightArea>
            </>
          )}
        </ModalButtonArea>
      </WOModal>
      {/* END: 질문답변 상세 답변 등록 전 case */}
      {/* START: 질문답변 상세 답변 등록 후 case*/}
      <WOModal direction='center' size='xl' isOpen={isModalOpen2} title={'질문답변 상세'} onClose={() => setIsModalOpen2(false)}>
        <ModalContentArea>
          <WOEditTable>
            <caption>질문답변 상세</caption>
            <tbody>
              <tr>
                <th>제목</th>
                <td colSpan='3'>
                  <WOInput name='input01' id='input01-01' value='법인카드, 제로페이 괸리 권한 부여 요청' readonly />
                </td>
              </tr>
              <tr>
                <th>요청부서</th>
                <td>
                  <WOFormColumn gridType='type02'>
                    <WOInput name='input01' id='input01-02' value='중구청' readonly />
                    <div className='line'></div>
                    <WOInput name='input01' id='input01-03' value='행정관리국 문화청책과' readonly />
                  </WOFormColumn>
                </td>
                <th>요청자</th>
                <td>
                  <WOInput name='input01' id='input01-04' value='김현원' readonly />
                </td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>
                  <WOInput name='input01' id='input01-05' value='02-0000-0000' readonly />
                </td>
                <th>요청일</th>
                <td>
                  <WOInput name='input01' id='input01-06' value='2023.12.12' readonly />
                </td>
              </tr>
              <tr>
                <th>질문</th>
                <td colSpan='3'>
                  <WOTextArea
                    height={97}
                    readonly
                    value='고향사랑기금 업무 담당자
기금권한부여요청드립니다.'
                  />
                </td>
              </tr>
              <tr>
                <th>답변</th>
                <td colSpan='3'>
                  {!isEditableModal2 ? (
                    <WOTextArea
                      height={97}
                      readonly
                      value='안녕하세요 ^^
마포구청 고향사랑기금 계좌가 없습니다. 
필요 시 마포구청지점으로 문의 부탁드립니다.
감사합니다.'
                    />
                  ) : (
                    <>
                      <div className='editor-box'>
                        <img src='/assets/images/temp/toastui-editor.svg' alt='' />
                      </div>
                    </>
                  )}
                </td>
              </tr>
            </tbody>
          </WOEditTable>
          <S.TableBox>
            <S.ModalTitleWrap>
              <div className='tit'>첨부파일</div>
              <WOTextBadge size='sm' type='grayTertiary'>
                00/00 MB
              </WOTextBadge>
              <div className='btn-wrap'>
                <WOButton onClick={() => {}} variant='outlined' disabled={!isEditableModal2} color={'#ff5d5d'}>
                  파일 삭제
                </WOButton>
                <WOButton onClick={() => {}} variant='outlined' disabled={!isEditableModal2}>
                  파일 첨부
                </WOButton>
              </div>
            </S.ModalTitleWrap>
            <WOTable tableData={TD_SYS0106M01_1} height={126} hasCheckBar={true} checkBarHeader={'선택'} noneIndicator={true} type='modal' />
          </S.TableBox>
          <WOBottomSheet type='modal'>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOComboBox label={'답변상태'} optionList={[{ id: 1, label: '완료' }]} isAutoComplete={true} disabled={!isEditableModal2} />
              </WOFormColumn>
              <WOFormColumn direction='column'>
                <WOLabel label={'FAQ표시'} />
                <WOCheckbox
                  blind
                  item={{
                    id: 'input01-01',
                    label: 'FAQ표시',
                    name: 'input01-11',
                  }}
                  disabled={!isEditableModal2}
                />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
        </ModalContentArea>

        <ModalButtonArea>
          {isEditableModal2 ? (
            <ButtonRightArea>
              <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
                저장
              </WOButton>
            </ButtonRightArea>
          ) : (
            <>
              <WOButton variant={'outlined'} size={'md'} startIcon={<WOIcon icon={'print'} width={16} height={16} />}>
                출력
              </WOButton>
              <WOButton variant={'outlined'} size={'md'} onClick={() => setisEditableModal2(true)}>
                수정
              </WOButton>
              <WOButton variant={'outlined'} size={'md'}>
                삭제
              </WOButton>
              <ButtonRightArea>
                <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
                  확인
                </WOButton>
              </ButtonRightArea>
            </>
          )}
        </ModalButtonArea>
      </WOModal>
      {/* END: 질문답변 상세 답변 등록 후 case */}
      {/* START: 질문답변 상세 답변 등록 case*/}
      <WOModal direction='center' size='xl' isOpen={isModalOpen3} title={'질문답변 상세'} onClose={() => setIsModalOpen3(false)}>
        <ModalContentArea>
          <WOEditTable>
            <caption>질문답변 상세</caption>
            <tbody>
              <tr>
                <th>제목</th>
                <td colSpan='3'>
                  <WOInput name='input01' id='input01-01' value='법인카드, 제로페이 괸리 권한 부여 요청' readonly />
                </td>
              </tr>
              <tr>
                <th>요청부서</th>
                <td>
                  <WOFormColumn gridType='type02'>
                    <WOInput name='input01' id='input01-02' value='중구청' readonly />
                    <div className='line'></div>
                    <WOInput name='input01' id='input01-03' value='행정관리국 문화청책과' readonly />
                  </WOFormColumn>
                </td>
                <th>요청자</th>
                <td>
                  <WOInput name='input01' id='input01-04' value='김현원' readonly />
                </td>
              </tr>
              <tr>
                <th>연락처</th>
                <td>
                  <WOInput name='input01' id='input01-05' value='02-0000-0000' readonly />
                </td>
                <th>요청일</th>
                <td>
                  <WOInput name='input01' id='input01-06' value='2023.12.12' readonly />
                </td>
              </tr>
              <tr>
                <th>질문</th>
                <td colSpan='3'>
                  <WOTextArea
                    height={97}
                    readonly
                    value='고향사랑기금 업무 담당자
기금권한부여요청드립니다.'
                  />
                </td>
              </tr>
              <tr>
                <th>답변</th>
                <td colSpan='3'>
                  <div className='editor-box'>
                    <img src='/assets/images/temp/toastui-editor.svg' alt='' />
                  </div>
                </td>
              </tr>
            </tbody>
          </WOEditTable>
          <S.TableBox>
            <S.ModalTitleWrap>
              <div className='tit'>첨부파일</div>
              <WOTextBadge size='sm' type='grayTertiary'>
                00/00 MB
              </WOTextBadge>
              <div className='btn-wrap'>
                <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                  파일 삭제
                </WOButton>
                <WOButton onClick={() => {}} variant='outlined'>
                  파일 첨부
                </WOButton>
              </div>
            </S.ModalTitleWrap>
            <WOTable tableData={TD_SYS0106M01_1} height={126} hasCheckBar={true} checkBarHeader={'선택'} noneIndicator={true} type='modal' />
          </S.TableBox>
          <WOBottomSheet type='modal'>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOComboBox label={'답변상태'} optionList={[{ id: 1, label: '완료' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn direction='column'>
                <WOLabel label={'FAQ표시'} />
                <WOCheckbox
                  blind
                  item={{
                    id: 'input01-01',
                    label: 'FAQ표시',
                    name: 'input01-11',
                  }}
                />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
        </ModalContentArea>
        <ModalButtonArea>
          <>
            <WOButton variant={'outlined'} size={'md'} startIcon={<WOIcon icon={'print'} width={16} height={16} />}>
              출력
            </WOButton>

            <WOButton variant={'outlined'} size={'md'}>
              삭제
            </WOButton>
            <ButtonRightArea>
              <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
                저장
              </WOButton>
            </ButtonRightArea>
          </>
        </ModalButtonArea>
      </WOModal>
      {/* END: 질문답변 상세 답변 등록 case */}
      {/* START: 질문 등록*/}
      <WOModal direction='center' size='xl' isOpen={isModalOpen4} title={'질문답변 상세'} onClose={() => setIsModalOpen4(false)}>
        <ModalContentArea>
          <WOEditTable>
            <caption>질문 등록</caption>
            <tbody>
              <tr>
                <th>제목</th>
                <td colSpan='3'>
                  <WOInput name='input01' id='input01-01' />
                </td>
              </tr>
              <tr>
                <th>요청자</th>
                <td>
                  <WOInput name='input01' id='input01-04' value='김현원' readonly />
                </td>
                <th>연락처</th>
                <td>
                  <WOInput name='input01' id='input01-01' />
                </td>
              </tr>
              <tr>
                <th>요청일</th>
                <td colSpan='3'>
                  <WOInput name='input01' id='input01-06' value='2023.12.12' readonly />
                </td>
              </tr>
              <tr>
                <th>질문</th>
                <td colSpan='3'>
                  <div className='editor-box'>
                    <img src='/assets/images/temp/toastui-editor.svg' alt='' />
                  </div>
                </td>
              </tr>
            </tbody>
          </WOEditTable>
          <S.TableBox>
            <S.ModalTitleWrap>
              <div className='tit'>첨부파일</div>
              <WOTextBadge size='sm' type='grayTertiary'>
                00/00 MB
              </WOTextBadge>
              <div className='btn-wrap'>
                <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                  파일 삭제
                </WOButton>
                <WOButton onClick={() => {}} variant='outlined'>
                  파일 첨부
                </WOButton>
              </div>
            </S.ModalTitleWrap>
            <WOTable tableData={TD_SYS0106M01_1} height={126} hasCheckBar={true} checkBarHeader={'선택'} noneIndicator={true} type='modal' />
          </S.TableBox>
        </ModalContentArea>
        <ModalButtonArea>
          <>
            <ButtonRightArea>
              <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
                저장
              </WOButton>
            </ButtonRightArea>
          </>
        </ModalButtonArea>
      </WOModal>
      {/* END: 질문 등록 */}

      {/* END: modal */}
    </S.Wrap>
  );
};

export default SYS0107P01_1;
