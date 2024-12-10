import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { CAD_04_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_CAD0401M01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WOInput from '../../components/common/WOInput';

const CAD0401M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={CAD_04_breadCrumbList} />
          <S.Title>사용자권한 관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 사용자권한 관리 */}
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

                {/* 성명 */}
                <WOFormColumn>
                  <WOInput label='성명' />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            {/* 신청목록 */}
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>사용자</div>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined'>
                      초기화
                    </WOButton>
                    <WOButton variant='outlined'>사용자 관리</WOButton>
                  </div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_CAD0401M01} editable={true} hasStateBar={true} stateBarHeader={'수정'} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>

      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
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

export default CAD0401M01;
