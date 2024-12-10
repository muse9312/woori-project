import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { BRC_01_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_BRC0102M01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WODatePicker from '../../components/common/WODatePicker';

const BRC0102M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={BRC_01_breadCrumbList} />
          <S.Title>증서관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 증서관리 */}
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              {/* 점명 */}
              <WOFormColumn>
                <WOComboBox
                  label={'지점명'}
                  optionList={[
                    { id: 1, label: '전체' },
                    { id: 2, label: '강동구청지점' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>

              {/* 기준일자 */}
              <WOFormColumn>
                <WODatePicker label={'기준일자'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          {/* 증서 관리 목록 */}
          <S.ViewArea $height={'325px'}>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>증서 관리 목록</div>
              </S.TableTitleWrap>

              <WOTable tableData={TD_BRC0102M01} editable={true} hasStateBar={true} stateBarHeader='신규/수정' />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>

      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter content='space-between'>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default BRC0102M01;
