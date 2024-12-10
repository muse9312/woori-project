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
import { FXP_02_breadCrumbList } from '../../data/response';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WODatePicker from '../../components/common/WODatePicker';
import WOInput from '../../components/common/WOInput';
import {
  TD_FXP0101V01,
  TD_FXP0101V01_Sub01,
  TD_FXP0101V01_Sub02,
  TD_FXP0101V01_Sub03,
  TD_FXP0101V01_Sub04,
  TD_FXP0101V01_Sub05,
  TD_FXP0101V02,
  TD_FXP0101V02_1,
  // TD_FXP0101V02_2,
  TD_FXP0101V03_Sub01,
  TD_FXP0101V03_Sub02,
  TD_FXP0101V03_Sub03,
  TD_FXP0101V03_Sub04,
  TD_FXP0101V03_Sub04_1,
  // TD_FXP0101V03_Sub05,
  // TD_FXP0101V03_Sub06,
  // TD_FXP0101V03_Sub07,
} from '../../data/tableDatas';
import WOSubTable from '../../components/common/WOSubTable';
import WOModal from '../../components/common/WOModal';

const FXP0101V01 = () => {
  // logic
  const [activeTabID, setActiveTabID] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  const [selectedComboBox01, setSelectedComboBox01] = useState('1-신규분'); // 신규/해지 선택 상태
  // const [selectedComboBox02, setSelectedComboBox02] = useState('1-해지예상조회'); // 조회구분 선택 상태
  const handleTableChange01 = (selectedOption) => {
    setSelectedComboBox01(selectedOption.label);
    // 필요한 경우 다른 로직 추가
  };
  // const handleTableChange02 = (selectedOption) => {
  //   setSelectedComboBox02(selectedOption.label);
  //   // 필요한 경우 다른 로직 추가
  // };

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={FXP_02_breadCrumbList} />
          <WOTabs
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '공금성 정기예금현황' },
              { id: 2, name: '전체명세(신규/해지)' },
              { id: 3, name: '해지예상 조회' },
            ]}
          />
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <WOTabContent id={1} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODatePicker label={'기준일자'} value={'2023-11-01'} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌번호 '} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'신규/해지'} optionList={[{ id: 1, label: '전체조회' }]} isAutoComplete={true} disabled />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_FXP0101V01} hasFooter={true} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={2} activeTabId={activeTabID}>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox
                    label={'신규/해지'}
                    optionList={[
                      { id: 1, label: '신규분' },
                      { id: 2, label: '해지분' },
                    ]}
                    isAutoComplete={true}
                    onChange={handleTableChange01}
                  />
                </WOFormColumn>
                <WOFormColumn>
                  <WOComboBox label={'계좌번호 '} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>
                <WOFormColumn>
                  <WODateRangePicker label={'조회기간'} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.ViewArea>
              <S.TableBox>
                {(selectedComboBox01 === '1-신규분' || '') && <WOTable tableData={TD_FXP0101V02} hasFooter={true} />}
                {selectedComboBox01 === '2-해지분' && <WOTable tableData={TD_FXP0101V02_1} hasFooter={true} />}
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
        <WOTabContent id={3} activeTabId={activeTabID}>
          <S.ContentWrap $heightAuto={true}>
            <S.SearchArea>
              <WOSearchArea>
                <WOFormColumn>
                  <WOInput name='input01' id='input01' label={'정기예금 계좌번호'} value='0000-000-000000' />
                </WOFormColumn>
                <WOFormColumn>
                  <WODatePicker label={'조회기준일'} value={'2023-11-01'} />
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>
            <S.Notice>* 처리결과는 실제와 다소 상이할 수 있습니다. (단위 : 원)</S.Notice>

            <S.ViewArea>
              <WOSubTable tableData={TD_FXP0101V03_Sub01} />
              <WOSubTable tableData={TD_FXP0101V03_Sub02} />
              <WOSubTable tableData={TD_FXP0101V03_Sub03} />
              <WOSubTable tableData={TD_FXP0101V03_Sub04} />
              <WOSubTable tableData={TD_FXP0101V03_Sub04_1} />
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        {activeTabID === 1 && (
          <S.InnerFooter>
            <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled={isModalOpen ? true : false}>
              다운로드
            </WOButton>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
              출력
            </WOButton>

            {isModalOpen ? (
              <WOButton variant='secondary' size='lg' startIcon={<WOIcon icon={'arrow-active2'} width={24} height={24} />}>
                해지예상 조회
              </WOButton>
            ) : (
              <WOButton variant='secondary' size='lg' onClick={() => setIsModalOpen(true)}>
                해지예상 조회
              </WOButton>
            )}
          </S.InnerFooter>
        )}
        {activeTabID === 2 && (
          <S.InnerFooter>
            <WOButton variant={'outlined'} size={'lg'} startIcon={<WOIcon icon={'download'} width={24} height={24} />} disabled={isModalOpen2 ? true : false}>
              다운로드
            </WOButton>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
              출력
            </WOButton>

            {isModalOpen2 ? (
              <WOButton variant='secondary' size='lg' startIcon={<WOIcon icon={'arrow-active2'} width={24} height={24} />}>
                이자지급 명세
              </WOButton>
            ) : (
              <WOButton variant='secondary' size='lg' onClick={() => setIsModalOpen2(true)}>
                이자지급 명세
              </WOButton>
            )}
          </S.InnerFooter>
        )}
        {activeTabID === 3 && (
          <S.InnerFooter>
            <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
              출력
            </WOButton>
          </S.InnerFooter>
        )}
      </SubFooter>

      {/* 해지예상 조회 */}
      <WOModal direction='bottom' isOpen={isModalOpen} title={'해지예상 조회'} onClose={() => setIsModalOpen(false)}>
        <S.TableBox>
          <WOSearchArea noneBtn={true} type='modal'>
            <WOFormColumn>
              <WOInput label={'정기예금 계좌번호'} value={'0000000000'} disabled={true} />
            </WOFormColumn>
            <WOFormColumn>
              <WODatePicker label={'조회기준일'} value={'2023-11-01'} disabled={true} />
            </WOFormColumn>
          </WOSearchArea>
          <S.Notice type={'modal2'}>* 처리결과는 실제와 다소 상이할 수 있습니다. (단위 : 원)</S.Notice>
          <WOSubTable tableData={TD_FXP0101V01_Sub01} />
          <WOSubTable tableData={TD_FXP0101V01_Sub02} />
          <WOSubTable tableData={TD_FXP0101V01_Sub03} />
          <WOSubTable tableData={TD_FXP0101V01_Sub04} />
        </S.TableBox>
      </WOModal>

      {/* 이자지급 명세 - 만기이자 계좌 선택 */}
      <WOModal direction='bottom' isOpen={isModalOpen2} title={'이자지급 명세'} onClose={() => setIsModalOpen2(false)}>
        <S.TableBox>
          <WOSubTable tableData={TD_FXP0101V01_Sub05} />
        </S.TableBox>
      </WOModal>

      {/* 이자지급 명세 - 월별이자 계좌 선택 */}
      {/* <WOModal direction='bottom' isOpen={isModalOpen2} title={'이자지급 명세'} onClose={() => setIsModalOpen2(false)}>
        <S.ViewArea $height='250px' $bgColor='grey'>
          <S.TableBox>
            <WOTable tableData={TD_FXP0101V02_2} hasFooter={true} />
          </S.TableBox>
        </S.ViewArea>
      </WOModal> */}
    </S.Wrap>
  );
};

export default FXP0101V01;
