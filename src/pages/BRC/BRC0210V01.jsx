import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { BRC_04_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import { TD_BRC0210V01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOIcon from '../../components/common/WOIcon';
import WOComboBox from '../../components/common/WOComboBox';
import WOInput from '../../components/common/WOInput';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOModal, { ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOEditTable from '../../components/common/WOEditTable';
import WOTextArea from '../../components/common/WOTextArea';
import { TD_SYS0106M01_1 } from '../../data/tableDatas';
import WOTextBadge from '../../components/common/WOTextBadge';

const BRC0210V01 = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={BRC_04_breadCrumbList} />
          <S.Title>공금업무 제안광장</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 공금업무 제안광장 */}

        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              {/* 검색조건 */}
              <WOFormColumn gridType={'type01'}>
                <WOComboBox label={'검색조건'} optionList={[{ id: 1, label: '제목' }]} isAutoComplete={true} />
                <WOInput id='input-01' />
              </WOFormColumn>

              {/* 작성기간 */}
              <WOFormColumn>
                <WODateRangePicker label={'작성기간'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>

              {/* 답변상태 */}
              <WOFormColumn>
                <WOComboBox
                  label={'답변상태'}
                  optionList={[
                    { id: 1, label: '전체' },
                    { id: 2, label: '접수' },
                    { id: 3, label: '처리중' },
                    { id: 4, label: '완료' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_BRC0210V01} hasStateBar={true} stateBarHeader='신규/수정' />
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
          <WOButton
            variant='outlined'
            size='lg'
            onClick={() => {
              setIsOpenModal(true);
            }}>
            신규등록
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
      <WOModal direction='center' size='xl' isOpen={isOpenModal} title={'공금업무 제안광장 등록 '} onClose={() => setIsOpenModal(false)}>
        {/* START: modalContent */}
        <ModalContentArea>
          <S.TableBox>
            <S.ModalTitleline />
            <S.ModalTitleWrap>
              <div className='tit'>기본 정보</div>
            </S.ModalTitleWrap>
            <WOEditTable>
              <caption>공금업무 제안광장 등록</caption>

              <tbody>
                <tr>
                  <th>요청부서</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='영등포구청지점' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>요청자</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='김우리' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>요청일</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320} col={2} gridType={'type03'}>
                        <WOInput name='input01' id='input01' value='2023.11.16' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>시스템 구분</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320} col={3} gap={0}>
                        <WOComboBox optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>제목</th>
                  <td colSpan='3'>
                    <WOInput id='input01' name='input01-01' value='처리관련' />
                  </td>
                </tr>
              </tbody>
            </WOEditTable>
          </S.TableBox>

          {/* 문제점 */}
          <S.TableBox>
            <S.ModalTitleWrap>
              <div className='tit'>문제점</div>
            </S.ModalTitleWrap>
            <WOEditTable>
              <tbody>
                <tr>
                  <th>문제점</th>
                  <td colSpan='3'>
                    <WOTextArea height={64} placeholder={'이러한 경우가 종종 있습니다.'} value='' />
                  </td>
                </tr>
              </tbody>
            </WOEditTable>
          </S.TableBox>

          {/* 제안 사항 */}
          <S.TableBox>
            <S.ModalTitleWrap>
              <div className='tit'>제안 사항</div>
            </S.ModalTitleWrap>
            <WOEditTable>
              <tbody>
                <tr>
                  <th>제안 사항</th>
                  <td colSpan='3'>
                    <WOTextArea height={64} placeholder={'이렇게 하면 되지 않을까 싶습니다.'} value='' />
                  </td>
                </tr>
              </tbody>
            </WOEditTable>
          </S.TableBox>

          {/* 첨부파일 */}
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
        {/* END: modalContent */}
        <ModalButtonArea>
          <WOButton variant={'outlined'} size={'md'} onClick={() => {}} startIcon={<WOIcon icon={'print'} width={16} height={16} />}>
            출력
          </WOButton>
          <S.RightBtnWrap>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
              저장
            </WOButton>
          </S.RightBtnWrap>
        </ModalButtonArea>
      </WOModal>
    </S.Wrap>
  );
};

export default BRC0210V01;
