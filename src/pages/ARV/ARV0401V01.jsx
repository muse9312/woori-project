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
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import { APV_04_breadCrumbList, TD_ARV0401V01_Sub, TD_ARV0501V01, TD_ARV0401V01_1 } from '../../data/tableDatas';
import WOIcon from '../../components/common/WOIcon';
import WOModal from '../../components/common/WOModal';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOSubTable from '../../components/common/WOSubTable';
import WOTooltip from '../../components/common/WOTooltip';

const ARV0401V01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={APV_04_breadCrumbList} />
          <S.Title>공금 연동 보통예금 계좌조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'기관구분'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.Notice>
            * 희망계좌번호 기준 조회 가능 상품
            <WOTooltip useIcon width='16' height='16' iconName='tooltip-mark' iconActiveName='tooltip-mark-active' position='bottom'>
              <S.TooltipContent>
                <ul className='tooltip-product-list multi'>
                  <li className='tooltip-product-item'>
                    <span className='tooltip-product-title'>서울시/구청</span>
                    <ul>
                      <li>- 공금기업자유예금 : 005-000-000-1400</li>
                      <li>- 공금보통예금 : 006-000-000-1000</li>
                      <li>- 기업 MMDA : 005-000-002-0900</li>
                    </ul>
                  </li>
                  <li className='tooltip-product-item'>
                    <span className='tooltip-product-title'>주택사업특별회계</span>
                    <ul>
                      <li>- 공금기업자유예금 : 005-000-000-1401</li>
                      <li>- 공금보통예금 : 006-000-000-1001</li>
                      <li>- 기업 MMDA : 005-000-002-0901</li>
                    </ul>
                  </li>
                </ul>
              </S.TooltipContent>
            </WOTooltip>
          </S.Notice>

          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    추가
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_ARV0501V01} hasStateBar={true} stateBarHeader='신규/수정' />
            </S.TableBox>
          </S.ViewArea>
          {/* START: 계좌 및 희망번호 입력/수정 */}
          <WOBottomSheet
            title={'계좌 및 희망번호 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOInput type='number' label='공금세입계좌' value={'0000000000'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='요구불계좌' value={'0000000000'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='희망번호' value={'0000000000'} />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
          {/* END: 계좌 및 희망번호 입력/수정 */}
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>

          {isModalOpen ? (
            <WOButton variant='secondary' size='lg' startIcon={<WOIcon icon={'arrow-active2'} width={24} height={24} />}>
              거래내역조회
            </WOButton>
          ) : (
            <WOButton variant='secondary' size='lg' onClick={() => setIsModalOpen(true)}>
              거래내역조회
            </WOButton>
          )}
          <S.RightBtnWrap>
            {!isModalOpen && (
              <WOButton variant={'primary'} size={'lg'}>
                저장
              </WOButton>
            )}
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>

      {/* START: modal */}

      <WOModal direction='bottom' isOpen={isModalOpen} title={'거래내역 조회'} onClose={() => setIsModalOpen(false)}>
        <S.Container $gap={8}>
          <WOSearchArea type='modal'>
            <WOFormColumn>
              <WODateRangePicker label={'조회기간'} periodValue={['2023-11-01', '2023-11-01']} />
            </WOFormColumn>
            <WOFormColumn>
              <WOComboBox label={'조회결과 순서'} optionList={[{ id: 1, label: '최근 거래내역 순' }]} isAutoComplete={true} />
            </WOFormColumn>
            <WOFormColumn>
              <WOComboBox label={'입/지급'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
            </WOFormColumn>
          </WOSearchArea>
          <WOSubTable tableData={TD_ARV0401V01_Sub} type='modal' />
          <S.ViewArea $height='290px' $bgColor='grey'>
            <S.TableBox>
              <WOTable tableData={TD_ARV0401V01_1} />
            </S.TableBox>
          </S.ViewArea>
        </S.Container>
      </WOModal>
      {/* END: modal */}
    </S.Wrap>
  );
};

export default ARV0401V01;
