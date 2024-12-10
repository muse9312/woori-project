import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { CAD_02_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOTabs from '../../components/common/WOTabs';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import { TD_CAD0201M02, TD_CAD0201V01 } from '../../data/sewonTableDatas';

const CAD0201V01 = () => {
  const [activeTabID, setActiveTabID] = useState(1);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={CAD_02_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '결제내역' },
              { id: 2, name: '연체내역' },
            ]}
          />
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 결제내역조회 */}
        <WOTabContent id={1} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기관명 */}
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 부서명 */}
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 사업자번호 */}
                <WOFormColumn>
                  <WOComboBox label={'사업자번호'} optionList={[{ id: 1, label: '000-00-00000' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 계좌번호 */}
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 결제기간 */}
                <WOFormColumn>
                  <WODateRangePicker label={'결제기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>

                {/* 결제구분 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'결제구분'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '정상' },
                      { id: 3, label: '취소' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_CAD0201V01} fixedColumn={3} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>

        {/* 연체내역조회 */}
        <WOTabContent id={2} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기관명 */}
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 부서명 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'부서명'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '0000-0000-0000 [감사위원회 조사담당과]' },
                      { id: 3, label: '0000-0000-0000 [감사위원회 조사담당과]' },
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

                {/* 기준일 */}
                <WOFormColumn>
                  <WODateRangePicker label={'기준일'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <div>
              <S.Notice type={'normal'}>* 연체기준일 최초 연체내역으로, 당일 결제, 결제취소 등 변경사항은 반영되지 않습니다.</S.Notice>
              <S.Notice type={'refer'}>* 연체금을 납입하신경우, 현재시점의 연체금액(유/무)은 관리영업점에 문의바랍니다.</S.Notice>
            </div>
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined'>
                      초기화
                    </WOButton>
                  </div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_CAD0201M02} fixedColumn={5} editable={true} hasStateBar={true} stateBarHeader={'수정'} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        {activeTabID === 1 && (
          <S.InnerFooter>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
          </S.InnerFooter>
        )}
        {activeTabID === 2 && (
          <S.InnerFooter content={'space-between'}>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
            <WOButton variant='primary' size='lg'>
              저장
            </WOButton>
          </S.InnerFooter>
        )}
      </SubFooter>
    </S.Wrap>
  );
};

export default CAD0201V01;
