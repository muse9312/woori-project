import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ETC_04_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_ETC0402V01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WODateRangePicker from '../../components/common/WODateRangePicker';

const ETC0402V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_04_breadCrumbList} />
          <S.Title>집계내역조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 집계내역조회 */}
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              {/* 기간구분 */}
              <WOFormColumn>
                <WOComboBox label={'기관구분'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
              </WOFormColumn>

              {/* 거래일자 */}
              <WOFormColumn>
                <WODateRangePicker label={'거래일자'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>

              {/* 판매구분 */}
              <WOFormColumn>
                <WOComboBox
                  label={'판매구분'}
                  optionList={[
                    { id: 1, label: '전체' },
                    { id: 2, label: '서울사랑상품권' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_ETC0402V01} hasFooter={true} />
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

export default ETC0402V01;
