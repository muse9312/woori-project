import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { RPT_06_breadCrumbList } from '../../data/response';
import { TD_RPT0502V01 } from '../../data/tableDatas';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOInput from '../../components/common/WOInput';
const RPT0502V01 = () => {
  // logic
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={RPT_06_breadCrumbList} />
          <S.Title>재정자금 및 미수이자 현황(연단위)</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox
                  label={'기관명'}
                  optionList={[
                    { id: 1, label: '서울시청' },
                    { id: 2, label: 'option' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'조회연도'}
                  optionList={[
                    { id: 1, label: '2023' },
                    { id: 2, label: 'option' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput id='input01' name='input01' label='계좌번호' value='000-00-000000' />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'이자수취방식'}
                  optionList={[
                    { id: 1, label: '전체' },
                    { id: 2, label: 'option' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_RPT0502V01} hasFooter={true} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
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

export default RPT0502V01;
