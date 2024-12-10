import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';

import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import {
  ZPB_01_breadCrumbList,
  categoryComboList,
  viewPeriodComboList,
  ZPB0106V01_ViewPeriod_ChartOptions,
  ZPB0106V01_Category_ChartOptions,
  ZPB0106V01_Category_DetailOptions,
  ZPB0106V01_RankingList,
  TD_ZPB0106V01,
  TD_ZPB0106V01_Modal,
} from '../../data/response';
import WOChart from '../../components/common/WOChart';
import WOInput from '../../components/common/WOInput';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WODetailBox from '../../components/common/WODetailBox';
import WORanking from '../../components/common/WORanking';
import WOTable from '../../components/common/WOTable';
import styled from 'styled-components';
import WOModal, { ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';

const ZPB0106V01 = () => {
  // logic
  const [category, setCategory] = useState(categoryComboList[0]);
  const [, setViewPeriod] = useState(viewPeriodComboList[0]);
  const [chartOptions, setChartOptions] = useState(ZPB0106V01_ViewPeriod_ChartOptions.monthly);
  const [detailList, setDetailList] = useState(ZPB0106V01_Category_DetailOptions.period);

  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryChange = (selectedItem) => {
    if (!selectedItem) return;
    const { type } = selectedItem;
    setCategory(selectedItem);
    // 디테일 데이터 변경
    setDetailList(ZPB0106V01_Category_DetailOptions[type]);
    // 차트 데이터 변경
    setChartOptions(type === 'period' ? ZPB0106V01_ViewPeriod_ChartOptions.monthly : ZPB0106V01_Category_ChartOptions[type]);
  };
  const handleViewPeriodChange = (selectedItem) => {
    if (!selectedItem) return;
    setViewPeriod(selectedItem);
    if (category.type !== 'period') return;
    // 구분이 '기간별'인 경우 조회기간 분기
    setChartOptions(ZPB0106V01_ViewPeriod_ChartOptions[selectedItem.type]);
  };

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true} $heightAuto={true}>
        <S.TopArea>
          <WOBreacCrumbs list={ZPB_01_breadCrumbList} />
          <S.Title>결제현황조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'구분'} optionList={categoryComboList} isAutoComplete={true} onChange={handleCategoryChange} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='결제계좌' placeholder='‘-’없이 숫자 입력' />
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
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='사업자번호' placeholder='‘-’없이 10자리 숫자 입력' />
              </WOFormColumn>
              {/* START: 조회기간 */}
              {category.type === 'period' ? ( // 구분 값이 '기간별'인 경우
                <WOFormColumn col={2} gridType='type01'>
                  <WOComboBox label={'조회기간'} optionList={viewPeriodComboList} isAutoComplete={true} onChange={handleViewPeriodChange} />
                  <WODateRangePicker periodValue={['2023-11-16', '2023-11-16']} />
                </WOFormColumn>
              ) : (
                <WOFormColumn>
                  <WODateRangePicker label='조회기간' periodValue={['2023-11-16', '2023-11-16']} />
                </WOFormColumn>
              )}
              {/* END: 조회기간 */}

              {category.type === 'region' && (
                <WOFormColumn>
                  <WOComboBox label={'사용지역'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              )}

              <WOFormColumn>
                <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} disabled={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          {category.type === 'department' && (
            <S.SubButtonArea>
              <div className='ml-auto'>
                <WOButton onClick={() => setIsOpen(true)} variant='outlined' size={'md'}>
                  리스트 조회
                </WOButton>
              </div>
            </S.SubButtonArea>
          )}

          <S.ViewArea $gap={20}>
            <S.DetailBoxArea>
              {detailList.map((detail) => (
                <WODetailBox key={detail.id} detail={detail} />
              ))}
            </S.DetailBoxArea>
            {/* series 갯수 다른 경우 데이터 혼용되면 에러 */}
            {category.type === 'region' && <WOChart options={ZPB0106V01_Category_ChartOptions.region} type={'column'} />}
            {category.type !== 'region' && <WOChart options={chartOptions} type={'column'} />}
          </S.ViewArea>
          <S.RankingBoxArea>
            <S.SubTitle>
              가맹점 결제순위
              <WOComboBox
                optionList={[
                  { id: 1, label: '최고사용금액순' },
                  { id: 2, label: '최다사용건수' },
                ]}
                type={'filter'}
              />
            </S.SubTitle>
            <div className='ranking-box-wrap'>
              {ZPB0106V01_RankingList.map((ranking) => (
                <WORanking key={ranking.id} rankingData={ranking} />
              ))}
            </div>
          </S.RankingBoxArea>

          {/* START: 구분 값이 '기관/부서별'인경우 노출 */}
          {category.type === 'department' && (
            <DepartmentFormArea>
              <S.SubTitle $isPadding={true}>기관/부서별 사용현황</S.SubTitle>
              <S.SearchArea>
                <WOSearchArea>
                  <WOFormColumn>
                    <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                  </WOFormColumn>
                  <WOFormColumn>
                    <WOComboBox label={'조회구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                  </WOFormColumn>
                  <WOFormColumn>
                    <WODateRangePicker label={'조회기간'} periodValue={['2023.11.16', '2023.11.16']} />
                  </WOFormColumn>
                </WOSearchArea>
              </S.SearchArea>
              <S.ViewArea $height={'572px'}>
                <S.TableBox>
                  <WOTable tableData={TD_ZPB0106V01} hasFooter={true} />
                </S.TableBox>
              </S.ViewArea>
            </DepartmentFormArea>
          )}

          {/* END: 구분 값이 '기관/부서별'인경우 노출 */}
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      {/* START: modal */}
      <WOModal isOpen={isOpen} direction='center' size='xl' title='기관/부서별 결제현황 리스트 조회' onClose={() => setIsOpen(false)}>
        <ModalContentArea>
          <WOSearchArea type='modal'>
            <WOFormColumn>
              <WOComboBox
                label={'기관명'}
                optionList={[
                  {
                    id: 1,
                    label: '전체',
                  },
                ]}
                isAutoComplete={true}
              />
            </WOFormColumn>
            <WOFormColumn>
              <WOInput type='number' label='결제계좌' placeholder='‘-’없이 숫자 입력' />
            </WOFormColumn>
            <WOFormColumn>
              <WOComboBox
                label={'사용자구분'}
                optionList={[
                  {
                    id: 1,
                    label: '전체',
                  },
                ]}
                isAutoComplete={true}
              />
            </WOFormColumn>
            <WOFormColumn>
              <WOInput type='number' label='사업자번호' placeholder='‘-’없이 10자리 숫자 입력' />
            </WOFormColumn>
            <WOFormColumn>
              <WODateRangePicker label='조회기간' periodValue={['2023-12-4', '2023-12-4']} />
            </WOFormColumn>
            <WOFormColumn>
              <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} disabled={true} />
            </WOFormColumn>
          </WOSearchArea>
          <S.ViewArea $height={'384px'} className='modal__view-area'>
            <S.TableBox>
              <WOTable tableData={TD_ZPB0106V01_Modal} height={384} />
            </S.TableBox>
          </S.ViewArea>
        </ModalContentArea>
        <ModalButtonArea>
          <WOButton variant={'outlined'} size={'md'}>
            다운로드
          </WOButton>
        </ModalButtonArea>
      </WOModal>
      {/* START: modal */}
    </S.Wrap>
  );
};

export default ZPB0106V01;

const DepartmentFormArea = styled.div`
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
