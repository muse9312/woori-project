import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WODatePicker from '../../components/common/WODatePicker';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { RPT_02_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';
import SubFooter from '../../components/layout/SubFooter';
import WOApprovalStateTable from '../../components/common/WOApprovalStateTable';
import { test1 } from '../../data/sewonTableDatas';

const RPT0201V01 = () => {
  // logic
  const [reportFundUse, setReportFundUse] = useState(false);

  const handleChangeReport = (e) => {
    e.label === '기금' ? setReportFundUse(true) : setReportFundUse(false);
  };
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={RPT_02_breadCrumbList} />
          <S.Title>세입세출자금일계표</S.Title>
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
                <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODatePicker label={'기준일자'} value={'2023-10-10'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'보고서 구분'}
                  optionList={[
                    { id: 1, label: '세출' },
                    { id: 2, label: '기금' },
                  ]}
                  isAutoComplete={true}
                  onChange={handleChangeReport}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 서울시청' }]} isAutoComplete={true} disabled />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <WOApprovalStateTable title='결제진행상태' tableData={test1} disabled />
          <S.EditorArea>
            <div className='img-wrap'>
              <img src='assets/images/temp/editor-page.svg' alt='임시 에디터' />
            </div>
          </S.EditorArea>
        </S.ContentWrap>
      </S.Main>
      <SubFooter>
        <S.InnerFooter>
          <S.RightBtnWrap>
            <WOButton variant={'secondary'} size={'lg'} disabled={reportFundUse}>
              재상신
            </WOButton>
            <WOButton variant={'primary'} size={'lg'} disabled={reportFundUse}>
              보고서결재
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>
      {/* END: Content */}
    </S.Wrap>
  );
};

export default RPT0201V01;
