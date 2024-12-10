import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { BRC_02_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import { TD_BRC0208V01, TD_BRC0208V01_1 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOIcon from '../../components/common/WOIcon';
import WODatePicker from '../../components/common/WODatePicker';
import WOModal, { ModalContentArea } from '../../components/common/WOModal';

const BRC0208V01 = () => {
  const [isOpen, setIsOpen] = useState(false);
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={BRC_02_breadCrumbList} />
          <S.Title>공무원 크로스셀 실적</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 공무원 크로스셀 점별 집계 */}

        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              {/* 기준일자 */}
              <WOFormColumn>
                <WODatePicker label={'기준일자'} value={'2023-11-01'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.Notice>* 전 영업일 기준으로 조회됩니다.</S.Notice>

          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_BRC0208V01} hasFooter={true} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>

      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled={isOpen}>
            다운로드
          </WOButton>
          {isOpen ? (
            <WOButton variant='secondary' onClick={() => setIsOpen(true)} size='lg' startIcon={<WOIcon icon={'arrow-active2'} width={24} height={24} />}>
              크로스셀 상세내역
            </WOButton>
          ) : (
            <WOButton variant='secondary' onClick={() => setIsOpen(true)} size='lg'>
              크로스셀 상세내역
            </WOButton>
          )}
        </S.InnerFooter>
      </SubFooter>
      <WOModal isOpen={isOpen} direction='bottom' title='크로스셀 상세 내역' onClose={() => setIsOpen(false)}>
        <ModalContentArea>
          {/* 기본 정보 */}
          <S.TableBox>
            <WOTable tableData={TD_BRC0208V01_1} hasFooter={true} height={462} />
          </S.TableBox>
        </ModalContentArea>
      </WOModal>
    </S.Wrap>
  );
};

export default BRC0208V01;
