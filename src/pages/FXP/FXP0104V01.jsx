import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { FXP_02_breadCrumbList } from '../../data/response';
import WODatePicker from '../../components/common/WODatePicker';

const FXP0104V01 = () => {
  // logic

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true}>
        <S.TopArea>
          <WOBreacCrumbs list={FXP_02_breadCrumbList} />
          <S.Title>정기예금현황 보고서</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
              </WOFormColumn>

              <WOFormColumn>
                <WODatePicker label={'기준일자'} value={'2023.06.14'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'기관번호'} optionList={[{ id: 1, label: '000 강동구청' }]} isAutoComplete={true} disabled />
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

export default FXP0104V01;
