import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ETC_03_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_ETC0302V01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WOInput from '../../components/common/WOInput';
import WODatePicker from '../../components/common/WODatePicker';

const ETC0302V01 = () => {
  const [selectItem, setSelectItem] = useState('');

  const handleChange = (selectID) => {
    setSelectItem(selectID.id);
  };

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_03_breadCrumbList} />
          <S.Title>보조금 수익성 추세</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 보조금 수익성 추세 */}
        <WOTabContent disable>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기준년도 */}
                <WOFormColumn>
                  <WODatePicker label={'기준연도'} value={''} onChange={() => {}} />
                </WOFormColumn>

                {/* 상품구분 */}
                <WOFormColumn>
                  <WOComboBox label={'상품구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 항목구분 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'항목구분'}
                    optionList={[
                      { id: 1, label: '순이자이익' },
                      { id: 2, label: '영업수익' },
                      { id: 3, label: '위험조정영업수익' },
                      { id: 4, label: '위험조정이익(RAR)' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn col={selectItem === 3 && 2}>
                  <WOComboBox
                    label={'점출력구분'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '시구청영업점' },
                      { id: 3, label: '개별영업점' },
                    ]}
                    isAutoComplete={true}
                    onChange={handleChange}
                  />
                  {selectItem === 3 && (
                    <>
                      <WOInput value={''} disabled />
                      <WOComboBox optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
                    </>
                  )}
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            {/* 신청목록 */}
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap type='refer'>
                  <div className='tit'>상품별 수익성 추세</div>
                  <div className='refer'>(단위 : 원,%)</div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_ETC0302V01} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
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

export default ETC0302V01;
