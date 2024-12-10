import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTabs from '../../components/common/WOTabs';
import WOTable from '../../components/common/WOTable';
import WOTabContent from '../../components/common/WOTabContent';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { EBK_03_breadCrumbList } from '../../data/response';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOInput from '../../components/common/WOInput';
import {
  TD_EBK0101V01,
  TD_EBK0101V01_Sub01,
  TD_EBK0101V02,
  TD_EBK0101V02_Sub01,
  TD_EBK0101V03,
  TD_EBK0101V04_01,
  TD_EBK0101V04_02,
} from '../../data/tableDatas';
import WOSubTable from '../../components/common/WOSubTable';
import WODualInput from '../../components/common/WODualInput';
import WODatePicker from '../../components/common/WODatePicker';

const EBK0101V04 = () => {
  // logic
  const [activeTabID, setActiveTabID] = useState(4);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={EBK_03_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '처리결과조회' },
              { id: 2, name: '이체불능구 내역조회' },
              { id: 3, name: '대체보관구 내역조회' },
              { id: 4, name: '지출명령 반려조회' },
            ]}
          />
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        {/* 처리결과조회 */}
        <WOTabContent id={1} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'자료구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'처리결과'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'회계구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODualInput id='input01' name='input01' label='지급명령번호' placeholder='‘-’ 없이 숫자 입력' />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'자금구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'입/지급구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌회계'} optionList={[{ id: 1, label: 'yyyy' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOInput id='input02' name='input01' label='채주명' placeholder='' />
                </WOFormColumn>
                <WOFormColumn>
                  <WODatePicker label={'회계연도'} dateFormat={'YYYY'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'지급일자'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODualInput id='input01' name='input01' label='지급액' placeholder='‘-’ 없이 숫자 입력' />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'지급계좌'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea $fit={true}>
              <WOSubTable tableData={TD_EBK0101V01_Sub01} />
            </S.ViewArea>
            <S.Notice>* 조회기간은 7일 이내 조회 가능합니다.</S.Notice>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_EBK0101V01} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>

        {/* 이체불능구 내역조회 */}
        <WOTabContent id={2} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'자금구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'자료구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'지급일자'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODualInput id='input01' name='input01' label='지급명령번호' placeholder='‘-’ 없이 숫자 입력' />
                </WOFormColumn>
                <WOFormColumn>
                  <WODatePicker label={'회계연도'} dateFormat={'YYYY'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'회계구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌회계'} optionList={[{ id: 1, label: 'yyyy' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'지급계좌'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea $height={'108px'}>
              <WOSubTable tableData={TD_EBK0101V02_Sub01} />
            </S.ViewArea>

            <S.Notice>* 조회기간은 한달 이내 조회 가능합니다.</S.Notice>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_EBK0101V02} noneIndicator={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>

        {/* 대체보관구 내역조회 */}
        <WOTabContent id={3} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'자료구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'자금구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'지급일자'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODatePicker label={'회계연도'} dateFormat={'YYYY'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODualInput id='input01' name='input01' label='지급명령번호' placeholder='‘-’ 없이 숫자 입력' />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea $height={'108px'}>
              <WOSubTable tableData={TD_EBK0101V02_Sub01} />
            </S.ViewArea>
            <S.Notice>* 조회기간은 한달 이내 조회 가능합니다.</S.Notice>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_EBK0101V03} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>

        {/* 지출명령 반려조회 */}
        <WOTabContent id={4} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WODateRangePicker label={'지급일자'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'자금구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_EBK0101V04_01} />
              </S.TableBox>
            </S.ViewArea>
            <S.ViewArea>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='tit'>입금계좌내역</div>
                </S.TableTitleWrap>
                <WOTable tableData={TD_EBK0101V04_02} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        {activeTabID === 1 && (
          <S.InnerFooter>
            <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
              출력
            </WOButton>
          </S.InnerFooter>
        )}
        {activeTabID === 2 && (
          <S.InnerFooter>
            <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
              출력
            </WOButton>
          </S.InnerFooter>
        )}
        {activeTabID === 3 && (
          <S.InnerFooter>
            <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
              출력
            </WOButton>
          </S.InnerFooter>
        )}
        {activeTabID === 4 && (
          <S.InnerFooter>
            <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
              다운로드
            </WOButton>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
              출력
            </WOButton>
          </S.InnerFooter>
        )}
      </SubFooter>
    </S.Wrap>
  );
};

export default EBK0101V04;
