import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { CAD_04_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_CAD0402M01_01, TD_CAD0402M01_02 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WOIcon from '../../components/common/WOIcon';

const CAD0402M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={CAD_04_breadCrumbList} />
          <S.Title>부서관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 부서관리 */}
        <WOTabContent disable>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기관명 */}
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 사업자번호 */}
                <WOFormColumn>
                  <WOComboBox label={'사업자번호'} optionList={[{ id: 1, label: '000-00-00000' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 조회여부 */}
                <WOFormColumn>
                  <WOComboBox
                    label={'조회여부'}
                    optionList={[
                      { id: 1, label: '사용' },
                      { id: 2, label: '미사용' },
                    ]}
                    isAutoComplete={true}
                  />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            {/* 부서(계좌)명세 */}
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>부서(계좌)명세</div>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined'>
                      초기화
                    </WOButton>
                  </div>
                </S.TableTitleWrap>

                <WOTable
                  tableData={TD_CAD0402M01_01}
                  hasCheckBar={true}
                  hasStateBar={true}
                  stateBarHeader={'수정'}
                  checkBarHeader='조회여부'
                  checkBarWidth={100}
                  indicatorReverse={true}
                />
              </S.TableBox>
            </S.ViewArea>

            {/* 카드명세 */}
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap $isJustifyBetween={true}>
                  <div className='tit'>카드명세</div>
                  <S.Container $direction='row' $gap={30}>
                    <WOComboBox
                      label={'조회여부'}
                      optionList={[
                        { id: 1, label: '전체' },
                        { id: 2, label: '사용' },
                        { id: 3, label: '미사용' },
                      ]}
                      isAutoComplete={false}
                      width={222}
                      isHorizontal={true}
                    />
                    <WOComboBox
                      label={'카드상태'}
                      optionList={[{ id: 1, label: '전체' }]}
                      isAutoComplete={false}
                      hasStateBar={true}
                      width={222}
                      isHorizontal={true}
                    />
                  </S.Container>
                </S.TableTitleWrap>
                <WOTable
                  tableData={TD_CAD0402M01_02}
                  hasCheckBar={true}
                  checkBarHeader='조회여부'
                  editable={true}
                  checkBarWidth={100}
                  indicatorReverse={true}
                  hasStateBar={true}
                  stateBarHeader={'수정'}
                />
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
          <S.RightBtnWrap>
            <WOButton variant={'primary'} size={'lg'}>
              저장
            </WOButton>
          </S.RightBtnWrap>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default CAD0402M01;
