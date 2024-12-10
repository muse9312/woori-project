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
import { TD_ETC0301V01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WODatePicker from '../../components/common/WODatePicker';
import { dateFormatMonth } from '../../data/common';
import WOInput from '../../components/common/WOInput';

const ETC0301V01 = () => {
  const [selectItem, setSelectItem] = useState(null);

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
          <S.Title>보조금 수익성 분석</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 보조금 수익성 분석 */}
        <WOTabContent disable>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기간선택 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'기간선택'}
                    optionList={[
                      { id: 1, label: '월중' },
                      { id: 2, label: '기중' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 기간 */}
                <WOFormColumn>
                  <WODatePicker label='기간' dateFormat={dateFormatMonth} onChange={() => {}} />
                </WOFormColumn>

                {/* 상품구분 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'상품구분'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '보조금관리통장' },
                      { id: 3, label: '복지시설통장' },
                      { id: 4, label: '보육시설통장' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 점출력구분 */}
                {selectItem === 3 ? (
                  <>
                    <WOFormColumn col={2}>
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
                      <WOInput value={''} disabled />
                      <WOComboBox optionList={[{ id: 1, label: '' }]} isAutoComplete={true} />
                    </WOFormColumn>
                  </>
                ) : (
                  <>
                    <WOFormColumn>
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
                    </WOFormColumn>
                  </>
                )}
              </WOSearchArea>
            </S.SearchArea>

            {/* 신청목록 */}
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap type='refer'>
                  <div className='tit'>상품별 수익성 분석</div>
                  <div className='refer'>(단위 : 원,%)</div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_ETC0301V01} hasFooter={true} />
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

export default ETC0301V01;
