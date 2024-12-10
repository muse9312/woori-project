import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ETC_02_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_ETC0201V01 } from '../../data/tableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOInput from '../../components/common/WOInput';
import WODateRangePicker from '../../components/common/WODateRangePicker';
const ETC0201V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_02_breadCrumbList} />
          <S.Title>보통예금 계좌 거래내역 조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'기관구분'} optionList={[{ id: 1, label: '광명시청' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput id='1' label='계좌번호' value=' 00000-00-000-0000' />
              </WOFormColumn>
              <WOFormColumn>
                <WODateRangePicker label={'조회기간'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'조회결과순서'}
                  optionList={[
                    { id: 1, label: '최근거래내역 순' },
                    { id: 2, label: '과거거래내역 순' },
                  ]}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'입/지급'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_ETC0201V01} />
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
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default ETC0201V01;
