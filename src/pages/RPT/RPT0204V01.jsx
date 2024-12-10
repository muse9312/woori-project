import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WODatePicker from '../../components/common/WODatePicker';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { RPT0204V01_selectList, RPT_02_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';
import SubFooter from '../../components/layout/SubFooter';
import WOApprovalStateTable from '../../components/common/WOApprovalStateTable';
import { test1 } from '../../data/sewonTableDatas';

const RPT0204V01 = () => {
  const [selectItem, setSelectItem] = useState(RPT0204V01_selectList[0]);

  const selecthandle = (newItem) => {
    setSelectItem && setSelectItem(newItem);
  };
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={RPT_02_breadCrumbList} />
          <S.Title>세출 일・월・분기계표</S.Title>
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
                <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'대행계좌구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '2023' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'세출계좌'} optionList={[{ id: 1, label: '0000-00000-000-0[일반회계(시비)]' }]} isAutoComplete={true} />
              </WOFormColumn>

              <WOFormColumn col={selectItem.id === 2 && 2} gridType={'type01'}>
                <WOComboBox label={'기간유형'} optionList={RPT0204V01_selectList} isAutoComplete={true} onChange={selecthandle} />
                {selectItem.id === 1 ? (
                  <WODatePicker label={''} value={'2023-10-20'} />
                ) : (
                  <WOComboBox
                    optionList={[
                      { id: 1, label: '금년도1/4분기' },
                      { id: 2, label: '금년도2/4분기' },
                      { id: 3, label: '금년도3/4분기' },
                      { id: 4, label: '금년도4/4분기' },
                    ]}
                    isAutoComplete={true}
                  />
                )}
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <WOApprovalStateTable title='결제진행상태' tableData={test1} />
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
            <WOButton variant={'secondary'} size={'lg'}>
              재상신
            </WOButton>
            <WOButton variant={'primary'} size={'lg'}>
              보고서결재
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>
      {/* END: Content */}
    </S.Wrap>
  );
};

export default RPT0204V01;
