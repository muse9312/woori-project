import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WODatePicker from '../../components/common/WODatePicker';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { RPT_01_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';

const RPT0103V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true}>
        <S.TopArea>
          <WOBreacCrumbs list={RPT_01_breadCrumbList} />
          <S.Title>과오납환금 일보/월보</S.Title>
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
                <WOComboBox label={'일보/월보'} optionList={[{ id: 1, label: '일보' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODatePicker label={'기준일자'} value={'2023-10-10'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'조회기준'} optionList={[{ id: 1, label: '전회계' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'세입회계'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} disabled />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'세입계좌'} optionList={[{ id: 1, label: '' }]} isAutoComplete={true} disabled />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 서울시청' }]} isAutoComplete={true} disabled />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.EditorArea>
            <div className='img-wrap'>
              <img src='assets/images/temp/editor-page.svg' alt='임시 에디터' />
            </div>
          </S.EditorArea>
        </S.ContentWrap>
      </S.Main>

      {/* END: Content */}
    </S.Wrap>
  );
};

export default RPT0103V01;
