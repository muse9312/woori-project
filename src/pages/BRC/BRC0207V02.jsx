import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { BRC_02_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOTabs from '../../components/common/WOTabs';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WOModal, { ModalButtonArea } from '../../components/common/WOModal';
import { TD_BRC0207V01, TD_BRC0207V02, TD_BRC0207V03 } from '../../data/sewonTableDatas';

const BRC0207V02 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTabID, setActiveTabID] = useState(3);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={BRC_02_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '급여이체 점별 집계' },
              { id: 2, name: '급여이체 점별 전체내역' },
              { id: 3, name: '급여이체 전체내역' },
            ]}
          />
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 급여이체 점별 집계 */}
        <WOTabContent id={1} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기준일자 */}
                <WOFormColumn>
                  <WODateRangePicker label={'기준일자'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>

                {/* 지점 */}
                <WOFormColumn>
                  <WOComboBox label={'지점'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            <S.Notice>* 전 영업일 기준으로 조회됩니다. 집계는 월 누적 100만원 이상 건 입니다.</S.Notice>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_BRC0207V03} hasFooter={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>

        {/* 급여이체 점별 전체내역 */}
        <WOTabContent id={2} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기준일자 */}
                <WOFormColumn>
                  <WODateRangePicker label={'기준일자'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>

                {/* 지점 */}
                <WOFormColumn>
                  <WOComboBox label={'지점'} optionList={[{ id: 1, label: '강동구청지점' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            <S.Notice>* 전 영업일 기준으로 조회됩니다. 집계는 월 누적 100만원 이상 건 입니다.</S.Notice>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_BRC0207V01} hasFooter={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>

        {/* 급여이체 전체내역 */}
        <WOTabContent id={3} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기준일자 */}
                <WOFormColumn>
                  <WODateRangePicker label={'기준일자'} periodValue={['2023-11-01', '2023-11-01']} />
                </WOFormColumn>

                {/* 지점 */}
                <WOFormColumn>
                  <WOComboBox label={'지점'} optionList={[{ id: 1, label: '강동구청지점' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            <S.Notice>* 전 영업일 기준으로 조회됩니다. 집계는 월 누적 100만원 이상 건 입니다.</S.Notice>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_BRC0207V02} hasFooter={true} />
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
        </S.InnerFooter>
      </SubFooter>
      <WOModal isOpen={isModalOpen} direction='center' size='xl' bgColor='gray' title='전표 출력' onClose={() => setIsModalOpen(false)}>
        <S.EditorArea $type='modal'>
          <div className='img-wrap'>
            <img src='/assets/images/temp/editor-modal.svg' alt='' />
          </div>
        </S.EditorArea>
        <ModalButtonArea>
          <S.RightBtnWrap>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
              확인
            </WOButton>
          </S.RightBtnWrap>
        </ModalButtonArea>
      </WOModal>
    </S.Wrap>
  );
};

export default BRC0207V02;
