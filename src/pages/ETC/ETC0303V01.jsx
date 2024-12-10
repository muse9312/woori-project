import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ETC_03_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_ETC0303V01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WODatePicker from '../../components/common/WODatePicker';

const ETC0303V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_03_breadCrumbList} />
          <S.Title>보조금 좌수현황</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 보조금 좌수현황 */}
        <WOTabContent disable>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기준일자 */}
                <WOFormColumn>
                  <WODatePicker label={'기준일자'} value={''} onChange={() => {}} />
                </WOFormColumn>

                {/* 조회구분 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'조회구분'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '시구청영업점' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 해지구분 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'해지구분'}
                    optionList={[
                      { id: 1, label: '해지분 포함' },
                      { id: 2, label: '해지분 제외' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            {/* 신청목록 */}
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_ETC0303V01} fixedColumn={1} />
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

export default ETC0303V01;
