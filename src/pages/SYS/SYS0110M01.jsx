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
import { SYS_01_breadCrumbList, TD_SYS0110M01 } from '../../data/response';
import WOBottomSheet from '../../components/common/WOBottomSheet';
import WOInput from '../../components/common/WOInput';
import WOComboBox from '../../components/common/WOComboBox';

const SYS0110M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_01_breadCrumbList} />
          <S.Title>법인카드 사업자관리</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOInput label='사업자명(번호)' />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          {/* START: 법인카드 사업자명세 */}
          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>법인카드 사업자명세</div>
                <div className='btn-wrap'>
                  <WOButton onClick={() => {}} variant='outlined' color={'#3284FF'}>
                    추가
                  </WOButton>
                </div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_SYS0110M01} hasStateBar={true} stateBarHeader='신규/수정' />
            </S.TableBox>
          </S.ViewArea>
          {/* END: 법인카드 사업자명세 */}

          {/* START: 법인카드 사업자관리 입력/수정 */}
          <WOBottomSheet
            title={'법인카드 사업자관리 입력/수정'}
            button={
              <WOButton onClick={() => {}} variant='outlined'>
                초기화
              </WOButton>
            }>
            <WOSearchArea noneBtn={true} type='modal'>
              <WOFormColumn>
                <WOInput label='사업자번호' value={'1000000000'} disabled />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='사업자명' value={'난지물재생센터'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'기관코드'} optionList={[{ id: 1, label: '사용계좌' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='최종갱신일시' value={'YYYY.MM.DD'} disabled={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='갱신자명' value={'홍길동'} disabled />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'사용여부'}
                  optionList={[
                    { id: 1, label: 'Y' },
                    { id: 2, label: 'N' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox
                  label={'기관최상위여부'}
                  optionList={[
                    { id: 1, label: 'Y' },
                    { id: 2, label: 'N' },
                  ]}
                  isAutoComplete={true}
                />
              </WOFormColumn>
            </WOSearchArea>
          </WOBottomSheet>
          {/* END: 법인카드 사업자관리 입력/수정 */}
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

export default SYS0110M01;
