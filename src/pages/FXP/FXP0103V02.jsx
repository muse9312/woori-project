import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { FXP_02_breadCrumbList } from '../../data/response';
import { TD_FXP0103V01, TD_FXP0103V02, TD_FXP0103V02_1 } from '../../data/tableDatas';
import WOTabs from '../../components/common/WOTabs';
import WOModal from '../../components/common/WOModal';
import WOTabContent from '../../components/common/WOTabContent';

const FXP0103V02 = () => {
  // logic
  const [activeTabID, setActiveTabID] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={FXP_02_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '회계별 만기현황' },
              { id: 2, name: '만기도래현황' },
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
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.Notice>* 만기정기예금 내역 전일자 기준으로 조회 가능합니다.</S.Notice>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_FXP0103V02} hasFooter={true} selectionStyle={'singleColumn'} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={2} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_FXP0103V01} hasFooter={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        {activeTabID === 1 && (
          <S.InnerFooter>
            <WOButton variant={'outlined'} size={'lg'} disabled={isModalOpen ? true : false} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
              출력
            </WOButton>

            {isModalOpen ? (
              <WOButton variant='secondary' size='lg' startIcon={<WOIcon icon={'arrow-active2'} width={24} height={24} />}>
                만기정기예금 내역
              </WOButton>
            ) : (
              <WOButton variant='secondary' size='lg' onClick={() => setIsModalOpen(true)}>
                만기정기예금 내역
              </WOButton>
            )}
          </S.InnerFooter>
        )}
        {activeTabID === 2 && (
          <S.InnerFooter>
            <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
              출력
            </WOButton>
          </S.InnerFooter>
        )}
      </SubFooter>
      {/* 만기정기예금 내역 */}
      <WOModal direction='bottom' isOpen={isModalOpen} title={'만기정기예금 내역'} onClose={() => setIsModalOpen(false)}>
        <S.ViewArea $height='250px' $bgColor='grey'>
          <S.TableBox>
            <WOTable tableData={TD_FXP0103V02_1} hasFooter={true} />
          </S.TableBox>
        </S.ViewArea>
      </WOModal>
    </S.Wrap>
  );
};

export default FXP0103V02;
