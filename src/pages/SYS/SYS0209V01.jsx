import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { SYS_02_breadCrumbList } from '../../data/response';
import { TD_SYS0209V01_1 } from '../../data/tableDatas';
import WOComboBox from '../../components/common/WOComboBox';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOIcon from '../../components/common/WOIcon';
import WOTreeTable from '../../components/common/WOTreeTable';
import { TD_SYS0209V01 } from '../../data/treeDatas';

const SYS0209V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_02_breadCrumbList} />
          <S.Title>부서별 사용량 집계</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'기관구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODateRangePicker label={'조회기간'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.GridBox>
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>부서별 이용자 건수</div>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined'>
                      전체펼치기
                    </WOButton>
                    <WOButton onClick={() => {}} variant='outlined'>
                      전체묶기
                    </WOButton>
                  </div>
                </S.TableTitleWrap>
                <WOTreeTable tableData={TD_SYS0209V01} />
              </S.TableBox>
            </S.ViewArea>
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>업무화면별 사용자 내역</div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_SYS0209V01_1} />
              </S.TableBox>
            </S.ViewArea>
          </S.GridBox>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default SYS0209V01;
