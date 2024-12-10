import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { SYS_01_breadCrumbList, TD_SYS0106M01 } from '../../data/response';
import WOInput from '../../components/common/WOInput';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOEditTable from '../../components/common/WOEditTable';
import WOCheckbox from '../../components/common/WOCheckbox';
import WODatePicker from '../../components/common/WODatePicker';
import WOTextArea from '../../components/common/WOTextArea';
import { TD_SYS0106M01_1 } from '../../data/tableDatas';
import WOTextBadge from '../../components/common/WOTextBadge';
import WORadioGroup from '../../components/common/WORadioGroup';

const SYS0106M01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isEditableModal, setisEditableModal] = useState(false);
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_01_breadCrumbList} />
          <S.Title>공지사항관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOInput label='제목' />
              </WOFormColumn>
              <WOFormColumn>
                <WODateRangePicker label={'게시기간'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_SYS0106M01} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton
            variant={'outlined'}
            size={'lg'}
            onClick={() => {
              setIsModalOpen1(true);
            }}>
            신규등록
          </WOButton>
        </S.InnerFooter>
      </SubFooter>

      {/* START: modal */}

      {/* START: 공지사항 상세 모달 */}
      <WOModal direction='center' size='xl' isOpen={isModalOpen} title={'공지사항 상세'} onClose={() => setIsModalOpen(false)}>
        <ModalContentArea>
          <WOEditTable>
            <colgroup>
              <col width='160px' />
              <col width='360px' />
              <col width='160px' />
              <col width='360px' />
              <col />
            </colgroup>
            <caption>공지 상세</caption>
            <tbody>
              <tr>
                <th>제목</th>
                <td colSpan='3'>
                  <WOInput
                    name='input01'
                    id='input01-01'
                    value='2023년 11월 은행연합회 공시 COFLX(신규취급액, 잔액기준) 금리 안내'
                    readonly={!isEditableModal}
                  />
                </td>
              </tr>
              <tr>
                <th>게시기간</th>
                <td>
                  <WODateRangePicker periodValue={['2023-11-01', '2023-11-01']} readonly={!isEditableModal} />
                </td>
                <th>작성일</th>
                <td>
                  <WODatePicker value={'2023-11-01'} readonly={!isEditableModal} disabled={isEditableModal} />
                </td>
              </tr>
              <tr>
                <th>긴급</th>
                <td>
                  {!isEditableModal ? (
                    <WOInput name='input01' id='input01-01' value='Y' readonly />
                  ) : (
                    <WORadioGroup
                      radioItems={[
                        {
                          name: 'radio02',
                          id: 1,
                          label: 'Y',
                          value: 'Y',
                        },
                        {
                          name: 'radio02',
                          id: 2,
                          label: 'N',
                          value: 'N',
                        },
                      ]}
                      defaultCheckedValue={{
                        name: 'radio02',
                        id: 1,
                        label: 'Y',
                        value: 'Y',
                      }}
                    />
                  )}
                </td>
                <th>연락처</th>
                <td>
                  <WOInput name='input01' id='input01-03' value='010-0000-0000' readonly={!isEditableModal} />
                </td>
              </tr>
              <tr>
                <th>사이트</th>
                <td colSpan='3'>
                  <div className='flex-box'>
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '세무관리',
                        id: 'input01-04',
                      }}
                      disabled={!isEditableModal}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '자금관리',
                        id: 'input01-05',
                      }}
                      disabled={!isEditableModal}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '산하기관',
                        id: 'input01-06',
                      }}
                      disabled={!isEditableModal}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '의사결정지원',
                        id: 'input01-07',
                      }}
                      disabled={!isEditableModal}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '세무정보',
                        id: 'input01-08',
                      }}
                      disabled={!isEditableModal}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '자금전망',
                        id: 'input01-09',
                      }}
                      disabled={!isEditableModal}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '공금영업부',
                        id: 'input01-10',
                      }}
                      disabled={!isEditableModal}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '시스템관리',
                        id: 'input01-11',
                      }}
                      disabled={!isEditableModal}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td colSpan='3'>
                  <WOTextArea
                    height={160}
                    placeholder={'최대(한글 4,000자리) 입력 제한'}
                    readonly={!isEditableModal}
                    value='○ 신규기준 COFIX 금리 (공시일 : 2023. 11. 15) : 3.97% (전월대비 +0.15%)
○ 잔액기준 COFIX 금리 (공시일 : 2023. 11. 15) : 3.90% (전월대비 +0.02%)
○ 다음 신규, 잔액 COFIX 금리공시일 : 2023.12.15
○ 금리적용기간: 2023.11.16 ~ 2023.12.15
※ COFIX 공시일자 안내: 매월 15일 15시 (다만, 15일이 공휴일인 경우 익영업일)
(COFIX 금리는 전국은행연합회 홈페이지→ 소비자포털 → 금융상품정보 → COFIX → COFIX공시에서 확인가능)
업무에 참고하시기 바랍니다.'
                  />
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
      {/* END: 공지사항 상세 모달 */}
      {/* START: 공지사항 등록 모달 */}
      <WOModal direction='center' size='xl' isOpen={isModalOpen1} title={'공지사항 등록'} onClose={() => setIsModalOpen1(false)}>
        <ModalContentArea>
          <WOEditTable>
            <colgroup>
              <col width='160px' />
              <col width='360px' />
              <col width='160px' />
              <col width='360px' />
              <col />
            </colgroup>
            <caption>공지 상세</caption>
            <tbody>
              <tr>
                <th>제목</th>
                <td colSpan='3'>
                  <WOInput id='input01' name='input01-01' />
                </td>
              </tr>
              <tr>
                <th>게시기간</th>
                <td>
                  <WODateRangePicker />
                </td>
                <th>작성일</th>
                <td>
                  <WODatePicker value={'2023-11-01'} readonly />
                </td>
              </tr>
              <tr>
                <th>긴급</th>
                <td>
                  <WORadioGroup
                    radioItems={[
                      {
                        name: 'radio02',
                        id: 1,
                        label: 'Y',
                        value: 'Y',
                      },
                      {
                        name: 'radio02',
                        id: 2,
                        label: 'N',
                        value: 'N',
                      },
                    ]}
                    defaultCheckedValue={{
                      name: 'radio02',
                      id: 1,
                      label: 'Y',
                      value: 'Y',
                    }}
                  />
                </td>
                <th>연락처</th>
                <td>
                  <WOInput id='input01' name='input01-03' />
                </td>
              </tr>
              <tr>
                <th>사이트</th>
                <td colSpan='3'>
                  <div className='flex-box'>
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '세무관리',
                        id: 'input01-04',
                      }}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '자금관리',
                        id: 'input01-05',
                      }}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '산하기관',
                        id: 'input01-06',
                      }}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '의사결정지원',
                        id: 'input01-07',
                      }}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '세무정보',
                        id: 'input01-08',
                      }}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '자금전망',
                        id: 'input01-09',
                      }}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '공금영업부',
                        id: 'input01-10',
                      }}
                    />
                    <WOCheckbox
                      item={{
                        name: 'input01',
                        label: '시스템관리',
                        id: 'input01-11',
                      }}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th>내용</th>
                <td colSpan='3'>
                  <WOTextArea height={160} />
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
          <ButtonRightArea>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
              저장
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>
      {/* END: 공지사항 등록 모달 */}
      {/* END: modal */}
    </S.Wrap>
  );
};

export default SYS0106M01;
