import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { CAD_05_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import { TD_CAD0502M01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WOIcon from '../../components/common/WOIcon';
import WOInput from '../../components/common/WOInput';

const CAD0502M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={CAD_05_breadCrumbList} />
          <S.Title>약자기업 등록</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 약자기업 등록 */}
        <WOTabContent disable>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 사업자번호 or 사업자명 */}
                <WOFormColumn>
                  <WOInput label={'사업자번호 or 사업자명'} placeholder={'사업자번호 or 사업자명을 입력해주세요'} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>사업자목록</div>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined'>
                      양식 다운로드
                    </WOButton>
                    <WOButton onClick={() => {}} variant='outlined'>
                      양식 업로드
                    </WOButton>
                    <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                      등록
                    </WOButton>
                  </div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_CAD0502M01} />
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
    </S.Wrap>
  );
};

export default CAD0502M01;
