import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { BRC_03_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import { TD_BRC0209V01, TD_BRC0209V01_1 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOIcon from '../../components/common/WOIcon';
import WOComboBox from '../../components/common/WOComboBox';
import WOInput from '../../components/common/WOInput';
import WOModal, { ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WOEditTable from '../../components/common/WOEditTable';
import { TD_SYS0106M01_1 } from '../../data/tableDatas';
import WOTextBadge from '../../components/common/WOTextBadge';
import WOTextArea from '../../components/common/WOTextArea';

const BRC0209P01 = () => {
  const [isOpenModal, setIsOpenModal] = useState(true);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={BRC_03_breadCrumbList} />
          <S.Title>문서조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 문서조회 */}

        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              {/* 기간 */}
              <WOFormColumn>
                <WOComboBox label={'기간'} optionList={[{ id: 1, label: '3개월' }]} isAutoComplete={true} />
              </WOFormColumn>

              {/* 상태 */}
              <WOFormColumn>
                <WOComboBox label={'상태'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>

              {/* 검색조건 */}
              <WOFormColumn col={2}>
                <WOComboBox label={'검색조건'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                <WOInput id='input-01' />

                <WOButton variant='fillOutlined' size='md'>
                  검색
                </WOButton>
                <div>
                  <WOButton variant='fillOutlined' size='md'>
                    상세검색
                  </WOButton>
                </div>
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_BRC0209V01} />
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
          <WOButton variant='outlined' size='lg'>
            등록
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
      <WOModal direction='center' size='xl' isOpen={isOpenModal} title={'문서 상세 '} onClose={() => setIsOpenModal(false)}>
        {/* START: modalContent */}
        <ModalContentArea>
          <S.TableBox>
            <S.ModalTitleline />
            <S.ModalTitleWrap>
              <div className='tit'>발신 정보</div>
            </S.ModalTitleWrap>
            <WOEditTable>
              <caption>공지 상세</caption>
              <tbody>
                <tr>
                  <th>발신처</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='우리에프아이에스' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>이름</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='김우리' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>e-mail</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='woori1234@woorifis.com' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>연락처</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='010-1234-5678' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>제목</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOInput name='input01' id='input01' value='우리은행 정책자금 추가데이터(사업자번호)' readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                  <th>형식</th>
                  <td>
                    <div className='flex-box'>
                      <WOFormColumn width={320}>
                        <WOComboBox optionList={[{ id: 1, label: '일반' }]} isAutoComplete={true} readonly={true} />
                      </WOFormColumn>
                    </div>
                  </td>
                </tr>

                <tr>
                  <th>상세내용</th>
                  <td colSpan='3'>
                    <S.Container $gap={8}>
                      <WOTextArea
                        height={64}
                        placeholder={'최대(한글 4,000자리) 입력 제한'}
                        readonly={true}
                        value='안녕하세요.
우리은행 정책자금 추가데이터(사업자번호)
송부드립니다. 감사합니다^^^'
                      />
                    </S.Container>
                  </td>
                </tr>
              </tbody>
            </WOEditTable>
          </S.TableBox>

          {/* 수신처 및 참조 */}
          <S.TableBox>
            <S.ModalTitleWrap>
              <div className='tit'>수신처 및 참조</div>
            </S.ModalTitleWrap>
            <S.Container $direction='row' $gap={8}>
              <S.ViewArea $type={'modal'}>
                <S.TableTitleWrap>
                  <div className='tit'>수신부서</div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_BRC0209V01_1} height={252} type={'modal'} noneIndicator={true} />
              </S.ViewArea>
              <S.ViewArea $type={'modal'}>
                <S.TableTitleWrap>
                  <div className='tit'>참조부서</div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_BRC0209V01_1} height={252} type={'modal'} noneIndicator={true} />
              </S.ViewArea>
            </S.Container>
          </S.TableBox>

          {/* 첨부파일 */}
          <S.TableBox>
            <S.ModalTitleWrap>
              <div className='tit'>첨부파일</div>
              <WOTextBadge size='sm' type='grayTertiary'>
                00/00 MB
              </WOTextBadge>
              <div className='btn-wrap'>
                <WOButton onClick={() => {}} variant='outlined' disabled={true} color={'#ff5d5d'}>
                  파일 삭제
                </WOButton>
                <WOButton onClick={() => {}} variant='outlined' disabled={true}>
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
            <WOButton variant={'primary'} size={'md'}>
              확인
            </WOButton>
          </S.RightBtnWrap>
        </ModalButtonArea>
      </WOModal>
    </S.Wrap>
  );
};

export default BRC0209P01;
