import React from 'react';
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
import { ILS_0301_breadCrumbList } from '../../data/response';
import WOInput from '../../components/common/WOInput';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import { TD_BRC0101M01_01, TD_ILS0301V01 } from '../../data/sewonTableDatas';
import WOTextBadge from '../../components/common/WOTextBadge';

const ILS0301V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ILS_0301_breadCrumbList} />
          <S.Title>보통예금계좌 지급 요청공문</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        {/* 보통예금계좌 지급 요청공문 */}
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn col={2} gridType='type01'>
                <WOComboBox
                  isAutoComplete
                  label='검색조건'
                  optionList={[
                    {
                      id: 1,
                      label: '제목',
                    },
                  ]}
                />
                <WOInput blind id='input04-04' label='label' name='input04' placeholder='-제외하고 입력해주세요' />
              </WOFormColumn>

              <WOFormColumn>
                <WODateRangePicker label={'작성기간'} periodValue={['2023-11-01', '2023-11-01']} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          {/* Notice */}
          <S.Notice type={'normal'}>* 접속자의 부서 내역만 보여집니다.</S.Notice>

          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined'>
                    은행 결제
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_ILS0301V01} hasCheckBar={true} checkBarWidth={60} hasAllCheckbox={true} />
            </S.TableBox>
          </S.ViewArea>

          {/* 첨부파일 */}
          <S.ViewArea $fit={true}>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>첨부파일</div>
                <WOTextBadge size='sm' type='grayTertiary'>
                  00/00 MB
                </WOTextBadge>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    파일 삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined'>
                    파일 첨부
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable checkBarWidth={88} tableData={TD_BRC0101M01_01} height={252} hasCheckBar={true} checkBarHeader='선택' noneIndicator={true} />
            </S.TableBox>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
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

export default ILS0301V01;
