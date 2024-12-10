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
import { SYS_03_breadCrumbList } from '../../data/response';
import { TD_SYS0306M01_1, TD_SYS0306M01_2 } from '../../data/tableDatas';
import WOComboBox from '../../components/common/WOComboBox';
import WOIconButton from '../../components/common/WOIconButton';

const SYS0306M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_03_breadCrumbList} />
          <S.Title>시스템별 메뉴등록</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'시스템명'} optionList={[{ id: 1, label: '세입업무' }]} isAutoComplete={true} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.GridBox>
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>프로그램</div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_SYS0306M01_1} editable={true} />
              </S.TableBox>
            </S.ViewArea>
            <S.Container $isJustifyContent={'space-around'}>
              <WOIconButton icon='arr-circle-dark' width={24} height={24} onClick={() => {}}></WOIconButton>
              <WOIconButton icon='arr-circle-dark' width={24} height={24} onClick={() => {}}></WOIconButton>
            </S.Container>
            <S.GridBox $direction='column'>
              <S.ViewArea>
                <S.TableBox>
                  <S.TableTitleWrap>
                    <div className='tit'>메뉴 레벨1</div>
                    <div className='btn-wrap'>
                      <WOButton onClick={() => {}} variant='outlined'>
                        초기화
                      </WOButton>
                      <WOButton onClick={() => {}} variant='outlined' color='#FF5D5D'>
                        삭제
                      </WOButton>
                      <WOButton onClick={() => {}} variant='outlined' color='#3284FF'>
                        추가
                      </WOButton>
                    </div>
                  </S.TableTitleWrap>
                  <WOTable tableData={TD_SYS0306M01_2} hasStateBar={true} stateBarHeader='신규/수정' noneIndicator={true} editable={true} />
                </S.TableBox>
              </S.ViewArea>
              <S.ViewArea>
                <S.TableBox>
                  <S.TableTitleWrap>
                    <div className='tit'>메뉴 레벨2</div>
                    <div className='btn-wrap'>
                      <WOButton onClick={() => {}} variant='outlined'>
                        초기화
                      </WOButton>
                      <WOButton onClick={() => {}} variant='outlined' color='#FF5D5D'>
                        삭제
                      </WOButton>
                      <WOButton onClick={() => {}} variant='outlined' color='#3284FF'>
                        추가
                      </WOButton>
                    </div>
                  </S.TableTitleWrap>
                  <WOTable tableData={TD_SYS0306M01_2} hasStateBar={true} stateBarHeader='신규/수정' noneIndicator={true} editable={true} />
                </S.TableBox>
              </S.ViewArea>
            </S.GridBox>
          </S.GridBox>
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

export default SYS0306M01;
