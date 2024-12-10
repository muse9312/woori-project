import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { AE_03_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_AXP0301V01, TD_AXP0301V01_Sub01 } from '../../data/tableDatas';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOModal from '../../components/common/WOModal';
import WOSubTable from '../../components/common/WOSubTable';
const AXP0301V01 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={AE_03_breadCrumbList} />
          <S.Title>반납(여입) 거래명세</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
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
                <WODateRangePicker label={'조회기간'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'회계연도'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'통합거래'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'세출계좌'} optionList={[{ id: 1, label: '0000-00000-000-0[일반회계(시비)]' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'가상계좌'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'시세/구세'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'한도구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_AXP0301V01} hasFooter={true} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled={isModalOpen ? true : false}>
            다운로드
          </WOButton>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
            출력
          </WOButton>
          {isModalOpen ? (
            <WOButton variant='secondary' size='lg' startIcon={<WOIcon icon={'arrow-active2'} width={24} height={24} />}>
              거래명세 상세내역
            </WOButton>
          ) : (
            <WOButton variant='secondary' size='lg' onClick={() => setIsModalOpen(true)}>
              거래명세 상세내역
            </WOButton>
          )}
        </S.InnerFooter>
      </SubFooter>
      <WOModal direction='bottom' isOpen={isModalOpen} title={'거래명세 상세내역'} onClose={() => setIsModalOpen(false)}>
        <S.TableBox>
          <WOSubTable tableData={TD_AXP0301V01_Sub01} disableWrap={true} />
        </S.TableBox>
      </WOModal>
    </S.Wrap>
  );
};

export default AXP0301V01;
