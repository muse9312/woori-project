import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { BRC_01_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOTabs from '../../components/common/WOTabs';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_BRC0101M01, TD_BRC0101M01_Sub01, TD_BRC0101M01_01, TD_BRC0101M02, TD_BRC0101M03, TD_BRC0101M02_Sub01 } from '../../data/sewonTableDatas';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WOInput from '../../components/common/WOInput';
import WOSubTable from '../../components/common/WOSubTable';
import WOTextBadge from '../../components/common/WOTextBadge';
import WOSubFormContainer, { SubFormColumn } from '../../components/common/WOSubFormContainer';
import WOSubFormItem from '../../components/common/WOSubFormItem';
import WORadio from '../../components/common/WORadio';
import WOModal from '../../components/common/WOModal';
import WOGridDownloadButton, { GridDownLoadButtonWrap } from '../../components/common/WOGridDownloadButton';

const BRC0101M01 = () => {
  const [activeTabID, setActiveTabID] = useState(1);

  const [isOpen, setIsOpen] = useState(false);

  // TODO : 입금정보 및 badge 컴포넌트 작업
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $heightAuto={true}>
        <S.TopArea>
          <WOBreacCrumbs list={BRC_01_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '당일자 취소' },
              { id: 2, name: '당일자 이외 취소' },
              { id: 3, name: '취소결제관리' },
            ]}
          />
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 당일자 취소 */}
        <WOTabContent id={1} activeTabId={activeTabID} editable={true}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 지점명 */}
                <WOFormColumn>
                  <WOComboBox label={'지점명'} optionList={[{ id: 1, label: '강동구청지점' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 거래기간 */}
                <WOFormColumn>
                  <WODateRangePicker label={'거래기간'} periodValue={['2023-11-01', '2023-11-01']} disabled />
                </WOFormColumn>

                {/* 취소상태 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'취소상태'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '취소요청' },
                      { id: 3, label: '취소완료' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            {/* Notice */}
            <S.Notice>* 당일자 취소 신청 시, 조회결과에 보이지 않습니다.</S.Notice>

            {/* 신청목록 */}
            <S.ViewArea $gap={12} $height={'325px'}>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>신청 목록</div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_BRC0101M01} />
              </S.TableBox>
            </S.ViewArea>

            {/* 신청 정보 입력 */}
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>
                    신청 정보 입력
                    <S.Notice type={'warning'}>
                      * 첨부 필수 서류 : 도시철도채권 미사용증명신청서 1부, 매입확인증(구청제출용) 1부 | * 당일자 18시 이후는 신청불가합니다.
                    </S.Notice>
                  </div>
                </S.TableTitleWrap>
                <WOSubTable tableData={TD_BRC0101M01_Sub01} disableWrap={true} />

                <WOSubFormContainer>
                  {/* column */}
                  <SubFormColumn>
                    <WOSubFormItem title={'입금예금주'}>
                      <WOInput />
                    </WOSubFormItem>

                    <WOSubFormItem title={'입금계좌'}>
                      <WOInput />
                    </WOSubFormItem>
                  </SubFormColumn>

                  {/* column */}
                  <SubFormColumn>
                    <WOSubFormItem title={'입금은행'} flexStart={true}>
                      <WOInput />
                    </WOSubFormItem>

                    <WOSubFormItem title={'사유'} width={'full'}>
                      <WOInput />
                    </WOSubFormItem>
                  </SubFormColumn>
                </WOSubFormContainer>
              </S.TableBox>
            </S.ViewArea>

            {/* 첨부파일 */}
            <S.ViewArea $fit={true}>
              <S.TableBox>
                <S.TableTitleWrap>
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
                </S.TableTitleWrap>
                <WOTable tableData={TD_BRC0101M01_01} hasCheckBar={true} height={252} checkBarWidth={88} checkBarHeader='선택' noneIndicator={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>

        {/* 당일자 이외 취소 */}
        <WOTabContent id={2} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 지점명 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'지점명'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '강동구처지점' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 거래기간 */}
                <WOFormColumn>
                  <WODateRangePicker label={'거래기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>

                {/* 중도상환여부 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'중도상환여부'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'Y' },
                      { id: 3, label: 'N' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 차량번호 */}
                <WOFormColumn>
                  <WOInput label='차량번호' />
                </WOFormColumn>

                {/* 채권발행번호 */}
                <WOFormColumn>
                  <WOInput label='채권발행번호' />
                </WOFormColumn>

                {/* 채권금액 */}
                <WOFormColumn>
                  <WOInput label='채권금액' />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            {/* Notice */}
            <S.Notice>* 당일자 취소 신청 시, 조회결과에 보이지 않습니다.</S.Notice>

            {/* 신청목록 */}
            <S.ViewArea $height={'325px'}>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>신청 목록</div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_BRC0101M02} />
              </S.TableBox>
            </S.ViewArea>

            {/* 취소/중도상환 신청 정보 입력 */}
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>취소/중도상환 신청 정보 입력</div>
                </S.TableTitleWrap>
                <WOSubTable tableData={TD_BRC0101M02_Sub01} disableWrap={true} />

                <WOSubFormContainer>
                  {/* column */}
                  <SubFormColumn>
                    <WOSubFormItem type={'radio'} title={'신청 구분'}>
                      <WORadio
                        checked
                        item={{
                          id: 'input01-01',
                          label: '중도상환',
                          name: 'input01-01',
                        }}
                      />
                      <WORadio
                        checked
                        item={{
                          id: 'input01-01',
                          label: '취소',
                          name: 'input01-01',
                        }}
                      />
                    </WOSubFormItem>
                    <WOSubFormItem title={'입금 예금주'}>
                      <WOInput />
                    </WOSubFormItem>
                    <WOSubFormItem title={'입금계좌'}>
                      <WOInput />
                    </WOSubFormItem>
                  </SubFormColumn>
                  {/* column */}
                  <SubFormColumn>
                    <WOSubFormItem title={'입금은행'} flexStart={true}>
                      <WOInput />
                    </WOSubFormItem>
                    <WOSubFormItem title={'사유'} width={'full'}>
                      <WOInput />
                    </WOSubFormItem>
                  </SubFormColumn>
                </WOSubFormContainer>
              </S.TableBox>
            </S.ViewArea>

            {/* 첨부파일 */}
            <S.ViewArea $fit={true}>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>첨부파일</div>
                  <WOTextBadge size='sm' type='grayTertiary'>
                    00/00 MB
                  </WOTextBadge>
                  <S.Notice type={'warning'}>* 첨부 필수 서류 : 도시철도채권 미사용증명신청서 1부, 매입확인증(구청제출용) 1부</S.Notice>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                      파일 삭제
                    </WOButton>
                    <WOButton onClick={() => {}} variant='outlined'>
                      파일 첨부
                    </WOButton>
                  </div>
                </S.TableTitleWrap>
                <WOTable checkBarWidth={88} tableData={TD_BRC0101M01_01} height={252} hasCheckBar={true} checkBarHeader='선택' noneIndicator={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>

        {/* 취소결제관리 */}
        <WOTabContent id={3} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 지점명 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'지점명'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '강동구처지점' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 취소/중도상환 신청일 */}
                <WOFormColumn>
                  <WODateRangePicker label={'취소/중도상환 신청기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>

                {/* 채권상태구분 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'채권상태구분'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '중도상환' },
                      { id: 3, label: '취소' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 결재여부 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'결재여부'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'Y' },
                      { id: 3, label: 'N' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 전액여부 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'전액여부'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'Y' },
                      { id: 3, label: 'N' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 환불여부 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'환불여부'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'Y' },
                      { id: 3, label: 'N' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 서류접수여부 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'서류접수여부'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'Y' },
                      { id: 3, label: 'N' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 당일여부 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'당일여부'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '당일분' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            {/* 취소결제 목록 */}
            <S.ViewArea $height={'325px'}>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>취소결제 목록</div>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                      삭제
                    </WOButton>
                  </div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_BRC0101M03} editable={true} hasStateBar={true} stateBarHeader={'수정'} />
              </S.TableBox>
            </S.ViewArea>

            {/* 첨부파일 */}
            <S.ViewArea $fit={true}>
              <S.TableBox>
                <S.TableTitleWrap>
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
                </S.TableTitleWrap>
                <WOTable checkBarWidth={88} tableData={TD_BRC0101M01_01} height={252} hasCheckBar={true} checkBarHeader='선택' noneIndicator={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>

      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter content='space-between'>
          <WOButton variant='outlined' size='lg' onClick={() => setIsOpen(true)} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
          {activeTabID === 3 ? (
            <WOButton variant='primary' size='lg'>
              저장
            </WOButton>
          ) : (
            <WOButton variant='primary' size='lg'>
              결재상신
            </WOButton>
          )}
        </S.InnerFooter>
      </SubFooter>
      <WOModal isOpen={isOpen} direction='center' height={240} title='다운로드' onClose={() => setIsOpen(false)}>
        <GridDownLoadButtonWrap>
          <WOGridDownloadButton imgUrl={'assets/images/etc/excel.svg'} fileFormat={'xlsx'} onClick={() => {}} />
          <WOGridDownloadButton imgUrl={'assets/images/etc/hancell.svg'} fileFormat={'cell'} onClick={() => {}} />
        </GridDownLoadButtonWrap>
      </WOModal>
    </S.Wrap>
  );
};

export default BRC0101M01;
