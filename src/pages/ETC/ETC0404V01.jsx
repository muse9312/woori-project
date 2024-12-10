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
import { TD_ETC0404V01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WODatePicker from '../../components/common/WODatePicker';

const ETC0404V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_04_breadCrumbList} />
          <S.Title>처리내역조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 처리내역조회 */}
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              {/* 기준일자 */}
              <WOFormColumn>
                <WODatePicker label={'기준일자'} value={'2023-11-01'} />
              </WOFormColumn>

              {/* 결과 */}
              <WOFormColumn>
                <WOComboBox
                  label={'결과'}
                  optionList={[
                    { id: 1, label: '전체' },
                    { id: 1, label: '완료' },
                    { id: 1, label: '처리전' },
                    { id: 1, label: '처리요청' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_ETC0404V01} fixedColumn={3} />
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

export default ETC0404V01;
