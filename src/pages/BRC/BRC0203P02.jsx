import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { BRC_02_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_BRC0203V01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOIcon from '../../components/common/WOIcon';
import WOInput from '../../components/common/WOInput';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOEditTable from '../../components/common/WOEditTable';
import WOTextArea from '../../components/common/WOTextArea';
import WOTextBadge from '../../components/common/WOTextBadge';
import { TD_SYS0106M01_1 } from '../../data/tableDatas';
import WOBottomSheet from '../../components/common/WOBottomSheet';

const BRC0203P02 = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={BRC_02_breadCrumbList} />
          <S.Title>지자체 정보 등록</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 지자체 정보 등록 */}

        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              {/* 검색조건 */}
              <WOFormColumn gridType={'type01'}>
                <WOComboBox label={'검색조건'} optionList={[{ id: 1, label: '제목' }]} isAutoComplete={true} />
                <WOInput id={'input_01'} />
              </WOFormColumn>

              {/* 조회기간 */}
              <WOFormColumn>
                <WODateRangePicker label={'조회기간'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          {/* 정보 */}
          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>지자체 정보 목록</div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_BRC0203V01} />
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
          <WOButton variant='outlined' onClick={() => setIsOpenModal(true)} size='lg'>
            신규등록
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
      <WOModal direction='center' size='xl' isOpen={isOpenModal} title={'지자체 정보 등록 '} onClose={() => setIsOpenModal(false)}>
        {/* START: modalContent */}
        <ModalContentArea>
          {/* 기본 정보 */}
          <S.TableBox>
            <S.ModalTitleline />
            <S.ModalTitleWrap>
              <div className='tit'>기본 정보</div>
            </S.ModalTitleWrap>
            <WOEditTable>
              <caption>지자체 정보 등록</caption>

              <tbody>
                <tr>
                  <th>지점명</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='강서구청지점' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>등록자</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='김우리' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>등록일</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='2023.11.16' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>고객명</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='김우리' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>제목</th>
                  <td colSpan='3'>
                    <WOInput id='input01' name='input01-01' value='김우리' />
                  </td>
                </tr>
              </tbody>
            </WOEditTable>
          </S.TableBox>

          {/* 작성자 정보 */}
          <S.TableBox>
            <S.ModalTitleWrap>
              <div className='tit'>작성자 정보</div>
            </S.ModalTitleWrap>
            <WOEditTable>
              <caption>작성자 정보</caption>

              <tbody>
                <tr>
                  <th>정보수집일</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='YYYY.MM.DD' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>직위</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>성명</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='김우리' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>행번</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='0000000' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>지점장</th>
                  <td colSpan='3'>
                    <WOInput id='input01' name='input01-01' value='김우리' readonly={true} />
                  </td>
                </tr>
                <tr>
                  <th>지자체 KEYMAN 관련 정보</th>
                  <td colSpan='3'>
                    <WOTextArea height={64} placeholder={''} value='' />
                  </td>
                </tr>
                <tr>
                  <th>지자체 금고 입찰 정보</th>
                  <td colSpan='3'>
                    <WOTextArea height={64} placeholder={''} value='' />
                  </td>
                </tr>
                <tr>
                  <th>지자체 타행 동향 등</th>
                  <td colSpan='3'>
                    <WOTextArea height={64} placeholder={''} value='' />
                  </td>
                </tr>
                <tr>
                  <th>기타 정보</th>
                  <td colSpan='3'>
                    <div className='editor-box'>
                      <img src='/assets/images/temp/toastui-editor.svg' alt='' />
                    </div>
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
          <WOBottomSheet type='modal'>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOComboBox label={'평가점수'} optionList={[{ id: 1, label: '-' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
        </ModalContentArea>
        {/* END: modalContent */}
        <ModalButtonArea>
          <WOButton variant={'outlined'} size={'md'} startIcon={<WOIcon icon={'print'} width={16} height={16} />}>
            출력
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

export default BRC0203P02;
