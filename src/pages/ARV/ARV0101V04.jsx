import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ARV0101V01_selectTypeList, ARV_01_breadCrumbList } from '../../data/response';
import WOModal from '../../components/common/WOModal';
import WOSubTable from '../../components/common/WOSubTable';
import {
  TD_ARV0101V01,
  TD_ARV0101V01_Sub01,
  TD_ARV0101V01_Sub02,
  TD_ARV0101V02,
  TD_ARV0101V03,
  TD_ARV0101V03_Sub01,
  TD_ARV0101V03_Sub02,
  TD_ARV0101V04,
  TD_ARV0101V05,
} from '../../data/tableDatas';
import WOTabs from '../../components/common/WOTabs';
import WOTable from '../../components/common/WOTable';
import WOTabContent from '../../components/common/WOTabContent';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
const ARV0101V04 = () => {
  // logic
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [activeTabID, setActiveTabID] = useState(4);

  const [selectId, setSelectId] = useState(ARV0101V01_selectTypeList[0]);

  const selecthandle = (newItem) => {
    setSelectId && setSelectId(newItem);
  };
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ARV_01_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '계좌현황' },
              { id: 2, name: '거래내역장' },
              { id: 3, name: '거래명세' },
              { id: 4, name: '구좌경정/과오납' },
              { id: 5, name: '입출금 집계' },
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
                    label={'기관구분'}
                    optionList={[
                      { id: 1, label: '서울시청' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'기관명'}
                    optionList={[
                      { id: 1, label: '전체' },
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
                    label={'대행계좌구분'}
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
                {/* <WOLoading type='table' /> */}
                <WOTable tableData={TD_ARV0101V01} />
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
                    label={'기관구분'}
                    optionList={[
                      { id: 1, label: '서울시청' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
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
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'세입계좌'}
                    optionList={[
                      { id: 1, label: '0000-00000-000-0[시세외]' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'조회기간'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_ARV0101V02} hasFooter={true} />
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
                    label={'기관구분'}
                    optionList={[
                      { id: 1, label: '서울시청' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
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
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'세입계좌'}
                    optionList={[
                      { id: 1, label: '0000-00000-000-0[시세외]' },
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
                <WOTable tableData={TD_ARV0101V03} />
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
                    label={'기관구분'}
                    optionList={[
                      { id: 1, label: '서울시청' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
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
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'세입계좌'}
                    optionList={[
                      { id: 1, label: '0000-00000-000-0[시세외]' },
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
                    label={'조회구분'}
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
                <WOTable tableData={TD_ARV0101V04} hasFooter={true} />
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
                    label={'기관구분'}
                    optionList={[
                      { id: 1, label: '서울시청' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
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
                  <WOComboBox label={'회계연도'} optionList={ARV0101V01_selectTypeList} isAutoComplete={true} onChange={selecthandle} />

                  <WOComboBox
                    optionList={[
                      { id: 1, label: 'MM' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                    disabled={selectId.id === 1}
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
                    label={'세입계좌'}
                    optionList={[
                      { id: 1, label: '0000-00000-000-0[시세외]' },
                      { id: 2, label: 'option' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.Notice>* 누계 = 세입 - 과오납 + 구좌경정</S.Notice>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_ARV0101V05} hasFooter={true} />
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
              <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled={isModalOpen ? true : false}>
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
        <div>
          <WOSubTable tableData={TD_ARV0101V01_Sub01} />
          <WOSubTable tableData={TD_ARV0101V01_Sub02} />
        </div>
      </WOModal>
      <WOModal direction='bottom' isOpen={isModalOpen2} title={'거래명세 상세내역'} onClose={() => setIsModalOpen2(false)}>
        <div>
          <WOSubTable tableData={TD_ARV0101V03_Sub01} />
          <WOSubTable tableData={TD_ARV0101V03_Sub02} />
        </div>
      </WOModal>
      {/* START: modal */}
    </S.Wrap>
  );
};

export default ARV0101V04;
