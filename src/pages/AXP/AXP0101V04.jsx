import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { AE_01_breadCrumbList } from '../../data/response';
import WOModal from '../../components/common/WOModal';
import WOSubTable from '../../components/common/WOSubTable';
import {
  TD_AXP0101V01,
  TD_AXP0101V01_Sub01,
  TD_AXP0101V01_Sub02,
  TD_AXP0101V02,
  TD_AXP0101V03,
  TD_AXP0101V03_Sub01,
  TD_AXP0101V03_Sub02,
  TD_AXP0101V04,
  TD_AXP0101V04_1,
  TD_AXP0101V05,
} from '../../data/tableDatas';
import WOTabs from '../../components/common/WOTabs';
import WOTable from '../../components/common/WOTable';
import WOTabContent from '../../components/common/WOTabContent';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WODatePicker from '../../components/common/WODatePicker';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
const AXP0101V04 = () => {
  // logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [activeTabID, setActiveTabID] = useState(4);
  const [selectedAccount, setSelectedAccount] = useState(1);
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={AE_01_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '계좌현황' },
              { id: 2, name: '거래내역장' },
              { id: 3, name: '거래명세' },
              { id: 4, name: '자금현황표' },
              { id: 5, name: '비목별 지급내역' },
            ]}
          />
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <WOTabContent id={1} activeTabId={activeTabID}>
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
                    label={'부서명'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'계좌상태'}
                    optionList={[
                      { id: 1, label: '정상(활동계좌)' },
                      { id: 2, label: '해지' },
                      { id: 3, label: '신규취소' },
                      { id: 4, label: '연도폐쇄' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'회계연도'}
                    optionList={[
                      { id: 1, label: '2023' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'시세/구세'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '시세' },
                      { id: 3, label: '구세' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'세출계좌 구분'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '세입세출외현금' },
                      { id: 3, label: '일반회계' },
                      { id: 4, label: '특별회계' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'대행계좌 구분'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: '모계좌' },
                      { id: 3, label: '자계좌' },
                      { id: 4, label: '손자계좌' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_AXP0101V01} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={2} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox
                    label={'기관명'}
                    optionList={[
                      { id: 1, label: '강동구청' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'부서명'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'조회기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'회계연도'}
                    optionList={[
                      { id: 1, label: '2023' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'세출계좌'}
                    optionList={[
                      { id: 1, label: '0000-00000-000-0[일반회계(시비)]' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'시세/구세'}
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
                <WOTable tableData={TD_AXP0101V02} hasFooter={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={3} activeTabId={activeTabID}>
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
                    label={'부서명'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'조회기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'회계연도'}
                    optionList={[
                      { id: 1, label: '2023' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'세출계좌'}
                    optionList={[
                      { id: 1, label: '0000-00000-000-0[일반회계(시비)]' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'시세/구세'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'조회구분'}
                    optionList={[
                      { id: 1, label: '전체거래내역' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_AXP0101V03} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={4} activeTabId={activeTabID}>
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
                    label={'부서명'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'시세/구세'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'회계연도'}
                    optionList={[
                      { id: 1, label: '2023' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                    onChange={setSelectedAccount}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'세출계좌'}
                    optionList={[
                      { id: 1, label: '0000-00000-000-0[일반회계(시비)]' },
                      { id: 2, label: '0000-00000-000-0[현금계좌(시비)]' },
                    ]}
                    isAutoComplete={true}
                    onChange={(selectedItem) => setSelectedAccount(selectedItem.id)}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            <S.Notice>* 잔액(한도) = 세입 – 현금직불 – 자금배정 – 정기예금 – MMDA – 제로페이 </S.Notice>
            <S.ViewArea>
              <S.TableBox>
                {selectedAccount === 1 ? (
                  <WOTable tableData={TD_AXP0101V04} hasFooter={true} footerRow={2} />
                ) : (
                  <WOTable tableData={TD_AXP0101V04_1} hasFooter={true} footerRow={2} />
                )}
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={5} activeTabId={activeTabID}>
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
                    label={'부서명'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'세출계좌구분'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'회계연도'}
                    optionList={[
                      { id: 1, label: '2023' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'세출계좌'}
                    optionList={[
                      { id: 1, label: '0000-00000-000-0[일반회계(시비)]' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'대행계좌구분'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'시세/구세'}
                    optionList={[
                      { id: 1, label: '전체' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>

                <WOFormColumn>
                  <WOComboBox label={'기준'} optionList={[{ id: 1, label: '일자' }]} isAutoComplete={true} />
                  <WODatePicker value={'2023-11-01'} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_AXP0101V05} hasFooter={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          {activeTabID === 1 && (
            <>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled={isModalOpen ? true : false}>
                다운로드
              </WOButton>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />} disabled={isModalOpen ? false : true}>
                출력
              </WOButton>
              {isModalOpen ? (
                <WOButton variant='secondary' size='lg' startIcon={<WOIcon icon={'arrow-active2'} width={24} height={24} />}>
                  계좌현황 상세내역
                </WOButton>
              ) : (
                <WOButton variant='secondary' size='lg' onClick={() => setIsModalOpen(true)}>
                  계좌현황 상세내역
                </WOButton>
              )}
            </>
          )}
          {activeTabID === 2 && (
            <>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
                다운로드
              </WOButton>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
                출력
              </WOButton>
            </>
          )}
          {activeTabID === 3 && (
            <>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled={isModalOpen2 ? true : false}>
                다운로드
              </WOButton>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
                출력
              </WOButton>
              {isModalOpen2 ? (
                <WOButton variant='secondary' size='lg' startIcon={<WOIcon icon={'arrow-active2'} width={24} height={24} />}>
                  거래명세 상세내역
                </WOButton>
              ) : (
                <WOButton variant='secondary' size='lg' onClick={() => setIsModalOpen2(true)}>
                  거래명세 상세내역
                </WOButton>
              )}
            </>
          )}
          {activeTabID === 4 && (
            <>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
                다운로드
              </WOButton>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
                출력
              </WOButton>
            </>
          )}
          {activeTabID === 5 && (
            <>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
                다운로드
              </WOButton>
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
                출력
              </WOButton>
            </>
          )}
        </S.InnerFooter>
      </SubFooter>
      {/* START: modal */}
      <WOModal direction='bottom' isOpen={isModalOpen} title={'계좌현황 상세내역'} onClose={() => setIsModalOpen(false)}>
        <S.TableBox>
          <WOSubTable tableData={TD_AXP0101V01_Sub01} />
          <WOSubTable tableData={TD_AXP0101V01_Sub02} />
        </S.TableBox>
      </WOModal>
      <WOModal direction='bottom' isOpen={isModalOpen2} title={'거래명세 상세내역'} onClose={() => setIsModalOpen2(false)}>
        <S.TableBox>
          <WOSubTable tableData={TD_AXP0101V03_Sub01} />
          <WOSubTable tableData={TD_AXP0101V03_Sub02} />
        </S.TableBox>
      </WOModal>
      {/* START: modal */}
    </S.Wrap>
  );
};

export default AXP0101V04;
