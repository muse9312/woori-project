import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOInput from '../../components/common/WOInput';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ETC_06_breadCrumbList } from '../../data/response';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { TD_ETC0502P01 } from '../../data/sewonTableDatas';
import WOEditTable from '../../components/common/WOEditTable';
import WOTextArea from '../../components/common/WOTextArea';
import { confirm } from '../../data/common';

const ETC0502V01 = ({ userType }) => {
  // logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState();

  console.log(value);
  const handleConfirm = async (title) => {
    const confirmed = await confirm(title, `${title} 하시겠습니까?`);
    if (confirmed) {
      // 확인 버튼 클릭 시의 로직
      return;
    }
    // 취소 버튼 클릭 시의 로직
  };

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_06_breadCrumbList} />
          <S.Title>마스킹관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          {userType === 'admin' ? (
            // !! 관리자 검색영역
            <WOSearchArea>
              {/* 기관명 */}
              <WOFormColumn>
                <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              {/* 부서명 */}
              <WOFormColumn>
                <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              {/* 신청일자 */}
              <WOFormColumn>
                <WODateRangePicker label={'신청일자'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>
              {/* 상태 */}
              <WOFormColumn>
                <WOComboBox label={'상태'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              {/* 신청항목 */}
              <WOFormColumn>
                <WOComboBox label={'신청항목'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          ) : (
            // !! 사용자 검색영역
            <WOSearchArea>
              {/* 신청일자 */}
              <WOFormColumn>
                <WODateRangePicker label={'신청일자'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>
              {/* 상태 */}
              <WOFormColumn>
                <WOComboBox label={'상태'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              {/* 신청항목 */}
              <WOFormColumn>
                <WOComboBox label={'신청항목'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          )}

          {/* 테이블 */}
          <S.ViewArea>
            {userType === 'admin' ? (
              <S.TableBox>
                <WOTable tableData={TD_ETC0502P01} hasCheckBar={true} checkBarWidth={80} />
              </S.TableBox>
            ) : (
              <S.TableBox>
                <WOTable tableData={TD_ETC0502P01} />
              </S.TableBox>
            )}
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        {userType === 'admin' ? (
          <S.InnerFooter>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>

            <S.RightBtnWrap>
              <WOButton variant={'secondary'} onClick={() => handleConfirm('반려')} size={'lg'}>
                반려
              </WOButton>
              <WOButton variant={'primary'} onClick={() => handleConfirm('승인')} size={'lg'}>
                승인
              </WOButton>
            </S.RightBtnWrap>
          </S.InnerFooter>
        ) : (
          <S.InnerFooter>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
            <S.RightBtnWrap>
              <WOButton
                isActive={!!isModalOpen}
                onClick={() => {
                  setIsModalOpen(true);
                }}
                variant='secondary'
                size='lg'>
                해지신청
              </WOButton>
            </S.RightBtnWrap>
          </S.InnerFooter>
        )}
      </SubFooter>
      {/* START: modal */}
      <WOModal isOpen={isModalOpen} direction='center' size='xl' height={497} title='마스킹 해지신청' onClose={() => setIsModalOpen(false)}>
        <ModalContentArea>
          <WOEditTable>
            <tbody>
              <tr>
                <th>요청자</th>
                <td>
                  <WOFormColumn width={320}>
                    <WOInput id='requestor' name='requestor' placeholder={'홍길동'} disabled={true}></WOInput>
                  </WOFormColumn>
                </td>
              </tr>
              <tr>
                <th>기간 선택</th>
                <td>
                  <S.Container $direction={'row'} $isAlignItem={'center'}>
                    <WOFormColumn width={320}>
                      <WODateRangePicker periodValue={['2023-11-01', '2023-11-01']} />
                    </WOFormColumn>
                    <S.Notice type={'warning'}>* 기간은 최대 2주까지 선택 가능합니다.</S.Notice>
                  </S.Container>
                </td>
              </tr>
              <tr>
                <th>항목 선택</th>
                <td>
                  <WOFormColumn>
                    <WOComboBox
                      label={''}
                      optionList={[
                        { id: 1, label: '계좌번호' },
                        { id: 1, label: '주민등록번호' },
                      ]}
                      isAutoComplete={true}
                    />
                  </WOFormColumn>
                </td>
              </tr>
              <tr>
                <th>신청 사유</th>
                <td>
                  <WOFormColumn width={840}>
                    <WOTextArea height={142} placeholder={'최대(한글 4,000자리) 입력 제한'} onChange={setValue} />
                  </WOFormColumn>
                </td>
              </tr>
            </tbody>
          </WOEditTable>
        </ModalContentArea>

        <ModalButtonArea>
          <ButtonRightArea>
            <S.Container $direction={'row'} $gap={10}>
              <WOInput id='pass' type={'password'} name='pass' />
              <WOButton variant={'primary'} size={'md'}>
                신청
              </WOButton>
            </S.Container>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>
      {/* START: modal */}
    </S.Wrap>
  );
};

export default ETC0502V01;
