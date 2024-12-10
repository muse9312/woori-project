import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { CAD_03_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_CAD0301V01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WODateRangePicker from '../../components/common/WODateRangePicker';

const CAD0301V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={CAD_03_breadCrumbList} />
          <S.Title>카드결제계좌 거래내역 조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 카드결제계좌 거래내역 조회 */}
        <WOTabContent disable>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기관명 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'기관명'}
                    optionList={[
                      { id: 1, label: '강동구청' },
                      { id: 2, label: '기중' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 사업자번호 */}
                <WOFormColumn>
                  <WOComboBox label={'사업자번호'} optionList={[{ id: 1, label: '000-00-00000' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 계좌번호 */}
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 조회기간 */}
                <WOFormColumn>
                  <WODateRangePicker label={'조회기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>

                {/* 정렬순서 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'정렬순서'}
                    optionList={[
                      { id: 1, label: '최근거래내역 순' },
                      { id: 2, label: '과거거래내역 순' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                {/* 입/지급*/}
                <WOFormColumn>
                  <WOComboBox
                    label={'입/지급'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '입금' },
                      { id: 3, label: '지급' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            {/* 신청목록 */}
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_CAD0301V01} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
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

export default CAD0301V01;
