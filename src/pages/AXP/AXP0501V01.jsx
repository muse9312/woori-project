import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { AE_05_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOComboBox from '../../components/common/WOComboBox';
import WODatePicker from '../../components/common/WODatePicker';
import { TD_AXP0501V01 } from '../../data/tableDatas';
import WOInput from '../../components/common/WOInput';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
const AXP0501V01 = () => {
  const [datePickerValue, setDatePickerValue] = useState('');
  const [dateRangePickerValue, setdateRangePickerValue] = useState(['2021.01.01', '2021.01.02']);

  // 기준일자 변경 핸들러
  const handleDateChange = (newValue) => {
    setDatePickerValue(newValue);
    if (newValue) {
      setdateRangePickerValue(['', '']);
    }
  };

  // 조회일자 변경 핸들러
  const handleDateRangeChange = (newValue) => {
    setdateRangePickerValue(newValue);
    if (newValue[0] || newValue[1]) {
      setDatePickerValue('');
    }
  };

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={AE_05_breadCrumbList} />
          <S.Title>정부보관금 내역조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'세입세출 현금계좌'} optionList={[{ id: 1, label: '0000-00000-000-0[일반회계(시비)]' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODatePicker
                  label={'기준일자'}
                  value={datePickerValue}
                  onChange={handleDateChange}
                  hidePlaceholder={dateRangePickerValue[0] !== '' || dateRangePickerValue[1] !== ''}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='주민사업자 번호' placeholder='-없이 입력하세요' />
              </WOFormColumn>
              <WOFormColumn>
                <WODateRangePicker
                  label={'조회일자'}
                  periodValue={dateRangePickerValue}
                  onChange={handleDateRangeChange}
                  hidePlaceholder={datePickerValue !== ''}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'정리/미정리'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.Notice>* 정부보관금 내역조회는 실시간 거래가 아니며 전일자까지 조회가 됩니다.</S.Notice>

          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_AXP0501V01} hasFooter={true} footerColor='blue' />
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
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
            출력
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default AXP0501V01;
