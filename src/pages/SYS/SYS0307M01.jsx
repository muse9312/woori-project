import React from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { SYS_03_breadCrumbList } from '../../data/response';
import WOInput from '../../components/common/WOInput';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOCheckbox from '../../components/common/WOCheckbox';
import WOLabel from '../../components/common/WOLabel';
import { TD_SYS0307M01 } from '../../data/treeDatas';
import WOTreeTable from '../../components/common/WOTreeTable';

const SYS0307M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_03_breadCrumbList} />
          <S.Title>사이트별 메뉴등록</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOInput label='사이트' value={'전체'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>메뉴목록</div>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#ff5d5d'}>
                    삭제
                  </WOButton>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    추가
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTreeTable tableData={TD_SYS0307M01} hasStateBar={true} stateBarHeader={'신규/수정'} />
            </S.TableBox>
          </S.ViewArea>

          <WOBottomSheet
            title={'사이트별 메뉴등록 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOInput label='시스템 명' value='세입업무' disabled />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='메뉴명' value='계좌별' disabled />
              </WOFormColumn>
              <WOFormColumn direction='column' col={4}>
                <WOLabel label={'사이트'} />
                <div className='flex'>
                  <WOCheckbox
                    item={{
                      id: 'input01-03',
                      label: '세무관리',
                      name: 'input01',
                    }}
                    isChecked={true}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-04',
                      label: '자금관리',
                      name: 'input01',
                    }}
                    isChecked={true}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-05',
                      label: '산하기관',
                      name: 'input01',
                    }}
                    isChecked={true}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-06',
                      label: '의사결정지원',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-07',
                      label: '세무정보',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-08',
                      label: '자금전망',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-09',
                      label: '공금영업부',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-10',
                      label: '시스템관리',
                      name: 'input01',
                    }}
                  />
                </div>
              </WOFormColumn>
              <WOFormColumn direction='column' col={2}>
                <WOLabel label={'특화메뉴'} />
                <div className='flex'>
                  <WOCheckbox
                    item={{
                      id: 'input01-03',
                      label: '기금권한',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-04',
                      label: '카드권한',
                      name: 'input01',
                    }}
                  />
                  <WOCheckbox
                    item={{
                      id: 'input01-05',
                      label: '환경세권한',
                      name: 'input01',
                    }}
                  />
                </div>
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
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

export default SYS0307M01;
