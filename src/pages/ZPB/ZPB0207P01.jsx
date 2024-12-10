import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';

import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import {
  ZPB_02_breadCrumbList,
  TD_ZPB0207M01,
  recipientOptionList,
  recipientDetailOptionList,
  selectTypeList,
  selectTimeList,
  selectAppVersionList,
} from '../../data/response';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOInput from '../../components/common/WOInput';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOEditTable from '../../components/common/WOEditTable';
import WOTextArea from '../../components/common/WOTextArea';
import WORadioGroup from '../../components/common/WORadioGroup';

const ZPB0207P01 = () => {
  // logic
  // !! 공지 등록
  const [isRegitrationModal, setIsRegitrationModal] = useState(true);
  // !! 공지 상세
  const [isDetailModal, setIsDetailModal] = useState(false);
  // !! 공지 수정
  const [isDetailEditable, setIsDetailEditable] = useState(false);

  const [selectedRecipientItem, setSelectedRecipientItem] = useState(recipientOptionList[0]);

  const handleRecipientChange = (selectedItem) => {
    selectedItem && setSelectedRecipientItem(selectedItem);
  };

  // 공지유형
  const [selectAccount, setSelectAccount] = useState(selectTypeList[0].id);
  const handleTypeChange = (selectedItem) => {
    selectedItem && setSelectAccount(selectedItem);
  };

  // 종일알림여부
  const [selectTimeItem, setSelectTimeItem] = useState(selectTimeList[1]);
  const handleTimeChange = (selectedItem) => {
    selectedItem && setSelectTimeItem(selectedItem);
  };

  // 앱버젼
  const [selectAppItem, setSelectAppItem] = useState(selectAppVersionList[1]);
  const handleAppVersionChange = (selectedItem) => {
    selectedItem && setSelectAppItem(selectedItem);
  };

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ZPB_02_breadCrumbList} />
          <S.Title>공지함</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'공지유형'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'OS유형'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODateRangePicker label={'공지기간'} periodValue={['2023-11-23', '2023-12-02']} />
              </WOFormColumn>
              <WOFormColumn col={2} gridType='type01'>
                <WOComboBox
                  label={'검색'}
                  optionList={[
                    { id: 1, label: '제목' },
                    { id: 2, label: '내용' },
                    { id: 3, label: '등록자' },
                  ]}
                  isAutoComplete={true}
                />
                <WOInput type='text' placeholder='검색어(영문 대소문자 구분 주의)' />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'사용자구분'}
                  optionList={[
                    { id: 1, label: '전체' },
                    { id: 2, label: '법인(개인사업자 포함)' },
                    { id: 3, label: '지자체(시청, 구청 등)' },
                    { id: 4, label: '보조금사업자' },
                    { id: 5, label: '공공기관' },
                    { id: 5, label: '공공기관' },
                    { id: 6, label: '공공기관' },
                    { id: 7, label: '공공기관' },
                    { id: 8, label: '공공기관' },
                  ]}
                  defaultValue={{ id: 5, label: '공공기관' }}
                  isAutoComplete={true}
                  disabled={true}
                />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_ZPB0207M01} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant={'outlined'} size={'lg'} isActive={isRegitrationModal} onClick={() => setIsRegitrationModal(true)}>
            신규등록
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
      {/* START: modal */}
      {/* START: 공지 등록 모달 */}
      <WOModal direction='center' size='xl' isOpen={isRegitrationModal} title={'공지 등록'} onClose={() => setIsRegitrationModal(false)}>
        {/* START: modalContent */}
        <ModalContentArea>
          <S.Container>
            <WOEditTable>
              <caption>공지 등록</caption>
              <tbody>
                {/* <tr>
              <th>잔액확인 권한설정</th>
              <td>내용</td>
            </tr> */}
                <tr>
                  <th>공지유형</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOComboBox optionList={selectTypeList} isAutoComplete={true} defaultValue={selectTypeList[1]} onChange={handleTypeChange} />
                      </WOFormColumn>
                    </div>
                  </td>
                  {selectAccount.id !== 1 && selectAccount.id !== 3 && (
                    <>
                      <th>앱업데이트유형</th>
                      <td>
                        <div className='flex-box'>
                          <WOFormColumn width={320}>
                            <WOComboBox optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                          </WOFormColumn>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
                <tr>
                  <th>공지기간</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WODateRangePicker periodValue={['2023-11-23', '2023-12-02']} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>종일알림여부</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WORadioGroup radioItems={selectTimeList} defaultCheckedValue={selectTimeItem} onChange={handleTimeChange} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                {selectTimeItem.id !== 1 && (
                  <tr>
                    <th>시간지정</th>
                    <td colSpan={3}>
                      <div className='flex-box'>
                        <WOFormColumn width={320} col={2}>
                          <WOComboBox optionList={[{ id: 1, label: '00시' }]} isAutoComplete={true} />
                          <WOComboBox optionList={[{ id: 1, label: '00시' }]} isAutoComplete={true} />
                        </WOFormColumn>
                      </div>
                    </td>
                  </tr>
                )}

                <tr>
                  <th>수신대상</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOComboBox
                          optionList={recipientOptionList}
                          isAutoComplete={true}
                          defaultValue={recipientOptionList[1]}
                          onChange={handleRecipientChange}
                        />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>수신대상세부</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        {/* 수신대상이 '전체'인 경우 */}
                        <WOComboBox
                          optionList={
                            selectedRecipientItem.id === 1
                              ? recipientDetailOptionList.filter((item) => item.id === 1)
                              : recipientDetailOptionList.filter((item) => item.id !== 1)
                          }
                          isAutoComplete={true}
                        />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                {/* START: 수신대상세부 값이 'Android' or 'iOS' 인경우 노출 */}
                {selectedRecipientItem && selectedRecipientItem.id !== 1 && (
                  <tr>
                    <th className='bg-dark02'>수신대상세부 버전조건</th>
                    <td>
                      <div className='flex-box'>
                        <WOFormColumn width={320}>
                          <WOComboBox optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                        </WOFormColumn>
                      </div>
                    </td>
                    <th className='bg-dark02'>수신대상세부 OS버전</th>
                    <td>
                      <div className='flex-box'>
                        <WOFormColumn width={320}>
                          <WOInput type='text' placeholder='예시(10,103,132,45)' />
                        </WOFormColumn>
                      </div>
                    </td>
                  </tr>
                )}

                {/* END: 수신대상세부 값이 'Android' or 'iOS' 인경우 노출 */}
                <tr>
                  <th>Android & iOS APP 배포 버전 동일여부</th>
                  <td colSpan={3}>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WORadioGroup radioItems={selectAppVersionList} defaultCheckedValue={selectAppItem} onChange={handleAppVersionChange} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                {selectAppItem.id === 1 ? (
                  <>
                    <tr>
                      <th>APP 버전</th>
                      <td colSpan={3}>
                        <WOInput type='text' placeholder='앱버전형식 (10, 103, 132, 45)' />
                      </td>
                    </tr>
                  </>
                ) : (
                  <>
                    <tr>
                      <th>Android버전</th>
                      <td>
                        <div className='flex-box'>
                          <WOFormColumn width={320}>
                            <WOInput type='text' placeholder='앱버전형식 (10, 103, 132, 45)' />
                          </WOFormColumn>
                        </div>
                      </td>
                      <th>iOS버전</th>
                      <td>
                        <div className='flex-box'>
                          <WOFormColumn width={320}>
                            <WOInput type='text' placeholder='앱버전형식 (10, 103, 132, 45)' />
                          </WOFormColumn>
                        </div>
                      </td>
                    </tr>
                  </>
                )}

                <tr>
                  <th>제목</th>
                  <td colSpan={3}>
                    <WOInput type='text' placeholder='최대(한글 15자리) 입력 제한' />
                  </td>
                </tr>

                <tr>
                  <th>내용</th>
                  <td colSpan={3}>
                    <div className='flex-box'>
                      <WOTextArea height={213} placeholder={'최대(한글 4,000자리) 입력 제한'} />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>게시여부</th>
                  <td colSpan={3}>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WORadioGroup
                          radioItems={[
                            {
                              name: 'radio05',
                              id: 1,
                              label: 'Y',
                              value: 'Y',
                            },
                            {
                              name: 'radio06',
                              id: 2,
                              label: 'N',
                              value: 'N',
                            },
                          ]}
                          defaultCheckedValue={{
                            name: 'radio05',
                            id: 1,
                            label: 'Y',
                            value: 'Y',
                          }}
                          onChange={() => {}}
                        />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
              </tbody>
            </WOEditTable>
          </S.Container>
        </ModalContentArea>

        {/* END: modalContent */}
        <ModalButtonArea>
          <ButtonRightArea>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
              저장
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>
      {/* END: 공지 등록 모달 */}
      {/* START: 공지 상세 모달 */}
      <WOModal direction='center' size='xl' isOpen={isDetailModal} title={'공지 상세'} onClose={() => setIsDetailModal(false)}>
        {/* START: modalContent */}
        <ModalContentArea>
          <S.Container>
            <WOEditTable>
              <caption>공지 상세</caption>
              <tbody>
                {/* <tr>
              <th>잔액확인 권한설정</th>
              <td>내용</td>
            </tr> */}
                <tr>
                  <th>공지유형</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOComboBox
                          optionList={[{ id: 1, label: '사용자구분별 공지' }]}
                          isAutoComplete={true}
                          readonly={!isDetailEditable}
                          disabled={isDetailEditable}
                        />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>앱업데이트유형</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOComboBox optionList={[{ id: 1, label: '강제' }]} isAutoComplete={true} readonly={!isDetailEditable} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>공지기간</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WODateRangePicker periodValue={['2023-11-23', '2023-12-02']} readonly={!isDetailEditable} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>종일알림여부</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WORadioGroup
                          radioItems={selectTimeList}
                          defaultCheckedValue={selectTimeItem}
                          onChange={handleTimeChange}
                          readonly={!isDetailEditable}
                        />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>수신대상</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOComboBox
                          optionList={recipientOptionList}
                          isAutoComplete={true}
                          defaultValue={recipientOptionList[0]}
                          readonly={!isDetailEditable}
                          onChange={handleRecipientChange}
                        />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>수신대상세부</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        {/* 수신대상이 '전체'인 경우 */}
                        <WOComboBox
                          optionList={selectedRecipientItem.id === 1 ? recipientDetailOptionList : recipientDetailOptionList.filter((item) => item.id !== 1)}
                          isAutoComplete={true}
                          // disabled={selectedRecipientItem.id === 1}
                          readonly={!isDetailEditable}
                          disabled={isDetailEditable && selectedRecipientItem.id === 1}
                        />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                {/* START: 수신대상세부 값이 'Android' or 'iOS' 인경우 노출 */}
                {selectedRecipientItem && selectedRecipientItem.id !== 1 && (
                  <tr>
                    <th className='bg-dark02'>수신대상세부 버전조건</th>
                    <td>
                      <div className='flex-box'>
                        <WOFormColumn width={320}>
                          <WOComboBox optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} readonly={!isDetailEditable} />
                        </WOFormColumn>
                      </div>
                    </td>
                    <th className='bg-dark02'>수신대상세부 OS버전</th>
                    <td>
                      <div className='flex-box'>
                        <WOFormColumn width={320}>
                          <WOInput type='text' placeholder='예시(10,103,132,45)' readonly={!isDetailEditable} />
                        </WOFormColumn>
                      </div>
                    </td>
                  </tr>
                )}

                {/* END: 수신대상세부 값이 'Android' or 'iOS' 인경우 노출 */}
                <tr>
                  <th>Android & iOS APP 배포 버전 동일여부</th>
                  <td colSpan={3}>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WORadioGroup
                          radioItems={[
                            {
                              name: 'radio03',
                              id: 1,
                              label: 'Y',
                              value: 'Y',
                            },
                            {
                              name: 'radio04',
                              id: 2,
                              label: 'N',
                              value: 'N',
                            },
                          ]}
                          defaultCheckedValue={{
                            name: 'radio03',
                            id: 1,
                            label: 'Y',
                            value: 'Y',
                          }}
                          readonly={!isDetailEditable}
                          onChange={() => {}}
                        />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>Android버전</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput type='text' value='앱버전형식 (10, 103, 132, 45)' readonly={!isDetailEditable} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>iOS버전</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput type='text' value='앱버전형식 (10, 103, 132, 45)' readonly={!isDetailEditable} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>제목</th>
                  <td colSpan={3}>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput type='text' value='SH공사 예산집행 청렴도 제고' readonly={!isDetailEditable} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>내용</th>
                  <td colSpan={3}>
                    <div className='flex-box'>
                      <WOTextArea
                        height={213}
                        placeholder={'최대(한글 4,000자리) 입력 제한'}
                        readonly={!isDetailEditable}
                        value={
                          '올바른 예산사용,\n예산을 알면 청렴이 보입니다!\n\n[복리후생비] 휴일 자율근무, 특근 식대 등을 복리후생 규정 등에 따라 집행가능합니다.\n\n* 체력단련실 이용 등 사적용모 후 복리후생비 집행 금지\n* 단순 전산 접속 기록으로 휴일 자율근무 수당 부정 수급 금지'
                        }
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>게시여부</th>
                  <td colSpan={3}>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WORadioGroup
                          radioItems={[
                            {
                              name: 'radio05',
                              id: 1,
                              label: 'Y',
                              value: 'Y',
                            },
                            {
                              name: 'radio06',
                              id: 2,
                              label: 'N',
                              value: 'N',
                            },
                          ]}
                          defaultCheckedValue={{
                            name: 'radio05',
                            id: 1,
                            label: 'Y',
                            value: 'Y',
                          }}
                          readonly={!isDetailEditable}
                          onChange={() => {}}
                        />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
              </tbody>
            </WOEditTable>
          </S.Container>
        </ModalContentArea>

        {/* END: modalContent */}
        {isDetailEditable ? (
          <>
            <ModalButtonArea>
              <ButtonRightArea>
                <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
                  저장
                </WOButton>
              </ButtonRightArea>
            </ModalButtonArea>
          </>
        ) : (
          <ModalButtonArea>
            <WOButton variant={'outlined'} size={'md'} onClick={() => setIsDetailEditable(true)}>
              수정
            </WOButton>
            <WOButton variant={'outlined'} size={'md'} onClick={() => setIsDetailEditable(true)}>
              삭제
            </WOButton>
            <ButtonRightArea>
              <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
                확인
              </WOButton>
            </ButtonRightArea>
          </ModalButtonArea>
        )}
      </WOModal>
      {/* END: 공지 상세 모달 */}
      {/* END: modal */}
    </S.Wrap>
  );
};

export default ZPB0207P01;
