import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WODatePicker from '../../components/common/WODatePicker';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { RPT_04_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';
import SubFooter from '../../components/layout/SubFooter';
import WOIcon from '../../components/common/WOIcon';

const RPT0601V01 = () => {
  const [selectAccount, setSelectAccount] = useState(null);

  const handleOnChange = (selectedItem) => {
    setSelectAccount(selectedItem.id);
  };

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={RPT_04_breadCrumbList} />
          <S.Title>세출자금수지현황(세출, 기금)</S.Title>
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
                <WOComboBox
                  label={'일보/월보'}
                  optionList={[
                    { id: 1, label: '일보' },
                    { id: 2, label: '월보' },
                  ]}
                  isAutoComplete={true}
                  onChange={handleOnChange}
                />
              </WOFormColumn>
              {selectAccount === 2 ? (
                <WOFormColumn>
                  <WODatePicker label={'기준연월'} value={'2023-10-15'} />
                </WOFormColumn>
              ) : (
                <WOFormColumn>
                  <WODatePicker label={'조회일자'} value={'2023-10-15'} />
                </WOFormColumn>
              )}
              <WOFormColumn>
                <WOComboBox
                  label={'보고서 구분'}
                  optionList={[
                    { id: 1, label: '세출' },
                    { id: 2, label: '기금' },
                  ]}
                  isAutoComplete={true}
                />
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
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
          <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
            출력
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
      {/* END: Content */}
    </S.Wrap>
  );
};

export default RPT0601V01;
