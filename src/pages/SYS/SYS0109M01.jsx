import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { SYS_01_breadCrumbList, TD_SYS0109M01, checkList_SYS0109M01 } from '../../data/response';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOInput from '../../components/common/WOInput';
import WOCheckbox from '../../components/common/WOCheckbox';

const SYS0109M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_01_breadCrumbList} />
          <S.Title>전자보고서 제공리스트 등록</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOInput label='프로그램명' placeholder='' />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          {/* START: 전자보고서 제공명세 */}
          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>전자보고서 제공명세</div>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    추가
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_SYS0109M01} hasStateBar={true} stateBarHeader='신규/수정' noneIndicator={true} />
            </S.TableBox>
          </S.ViewArea>
          {/* END: 전자보고서 제공명세 */}

          {/* START: 전자보고서 제공리스트 입력/수정 */}
          <WOBottomSheet
            title={'전자보고서 제공리스트 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOInput type='number' label='정렬순번' value={10} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='프로그램명' value={'세입월계표'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='프로그램경로' value={'T0GW761766'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='보고서 구분' value={'0'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='조회업무' value={'SECHUL'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='초기보고 주기' value={5} />
              </WOFormColumn>

              <WOFormColumn col={4} gap={0}>
                {checkList_SYS0109M01.map((checkItem, index) => (
                  <WOCheckbox
                    key={index}
                    item={{
                      id: checkItem.id,
                      label: checkItem.label,
                      name: checkItem.name,
                    }}
                  />
                ))}
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
          {/* END: 전자보고서 제공리스트 입력/수정 */}
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

export default SYS0109M01;
