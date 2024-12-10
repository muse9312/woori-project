import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { RPT_06_breadCrumbList } from '../../data/response';
import { OD_RPT0502V01, TD_RPT0501V01_01, TD_RPT0501V01_02, TD_RPT0501V01_03, TD_RPT0501V01_04, TD_RPT0501V01_05 } from '../../data/tableDatas';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
const RPT0501V01 = () => {
  // logic

  const [selectedOptionItem, setSelectedOptionItem] = useState(OD_RPT0502V01[0]);

  const handleOptionChange = (selectedItem) => {
    setSelectedOptionItem(selectedItem);
  };

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={RPT_06_breadCrumbList} />
          <S.Title>금고 기간별 자금운용 현황</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox
                  label={'기관명'}
                  optionList={[
                    { id: 1, label: '서울시청' },
                    { id: 2, label: 'option' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn col={2} gridType='type01'>
                <WOComboBox
                  label={'조회구분'}
                  optionList={[
                    { id: 1, label: '평잔' },
                    { id: 2, label: 'option' },
                  ]}
                  isAutoComplete={true}
                />
                <WODateRangePicker periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'구분'} optionList={OD_RPT0502V01} isAutoComplete={true} onChange={handleOptionChange} />
              </WOFormColumn>
              <WOFormColumn>
                <WODateRangePicker label={'조회기간'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              {selectedOptionItem && selectedOptionItem.id === 1 && <WOTable tableData={TD_RPT0501V01_01} />}
              {selectedOptionItem && selectedOptionItem.id === 2 && <WOTable tableData={TD_RPT0501V01_02} hasFooter={true} />}
              {selectedOptionItem && selectedOptionItem.id === 3 && <WOTable tableData={TD_RPT0501V01_03} hasFooter={true} />}
              {selectedOptionItem && selectedOptionItem.id === 4 && <WOTable tableData={TD_RPT0501V01_04} hasFooter={true} />}
              {selectedOptionItem && selectedOptionItem.id === 5 && <WOTable tableData={TD_RPT0501V01_05} hasFooter={true} />}
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

export default RPT0501V01;
