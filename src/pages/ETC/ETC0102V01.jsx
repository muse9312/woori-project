import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { ETC_01_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';
import WODateRangePicker from '../../components/common/WODateRangePicker';

const ETC0102V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true}>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_01_breadCrumbList} />
          <S.Title>지급통지서 출력</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WODateRangePicker label={'수납일자'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'서울/지방'} optionList={[{ id: 1, label: '서울' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.Notice>* OCR/비 OCR 일 마감 후 확인 가능입니다.</S.Notice>
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

export default ETC0102V01;
