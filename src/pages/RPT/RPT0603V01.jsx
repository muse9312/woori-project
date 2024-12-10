import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WODatePicker from '../../components/common/WODatePicker';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { RPT_04_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';

const RPT0603V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $noneFooter={true}>
        <S.TopArea>
          <WOBreacCrumbs list={RPT_04_breadCrumbList} />
          <S.Title>공금성예금 평잔현황</S.Title>
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
                <WOComboBox label={'평잔구분'} optionList={[{ id: 1, label: '월평잔' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODatePicker label={'기준일자'} value={'2023-10-15'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'조회단위'} optionList={[{ id: 1, label: '백만원' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.Notice>
            * 전일 원장(세입세출자금일계표) 기준으로 조회되며, 기산일 거래 익영업일 반영, 월평잔은 기준일자의 전 월 내역까지 조회되며, 신 구년도 합산
            현황입니다.
          </S.Notice>
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

export default RPT0603V01;
