import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { ETC_05_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { TD_ETC0501V01_1, TD_ETC0501V01_2, TD_ETC0501V01_3 } from '../../data/sewonTableDatas';
import WORadioGroup from '../../components/common/WORadioGroup';
const ETC0501V01 = () => {
  const [checkedItem, setCheckedItem] = useState(1);

  const handleChangeCheckedItem = (checkedItem) => {
    setCheckedItem(checkedItem.id);
  };

  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ETC_05_breadCrumbList} />
          <S.Title>집계표 (당행지점별, 수납기관, 징수기관)</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          {/* 당행지점별 */}
          <>
            <WOSearchArea noneToggleBtn={true}>
              {/* 세입일자 */}
              <WOFormColumn gridType='full'>
                <WORadioGroup
                  onChange={(checkedItem) => handleChangeCheckedItem(checkedItem)}
                  radioItems={[
                    {
                      id: 1,
                      label: '당행지점별',
                      name: 'radio01',
                      value: '당행지점별',
                    },
                    {
                      id: 2,
                      label: '수납기관',
                      name: 'radio01',
                      value: '수납기관',
                    },
                    {
                      id: 3,
                      label: '징수기관',
                      name: 'radio01',
                      value: '징수기관',
                    },
                  ]}
                  defaultCheckedValue={{
                    id: 1,
                    label: '당행지점별',
                    name: 'radio01',
                    value: '당행지점별',
                  }}
                />
              </WOFormColumn>
              {checkedItem === 1 && (
                <>
                  <WOFormColumn>
                    <WODateRangePicker label={'세입일자'} periodValue={['2023-11-01', '2023-11-01']} />
                  </WOFormColumn>
                  {/* 구분 */}
                  <WOFormColumn gridType={'type01'}>
                    <WOComboBox
                      label={'구분'}
                      optionList={[
                        { id: 1, label: '건수집계' },
                        { id: 2, label: '금액집계' },
                      ]}
                      isAutoComplete={true}
                    />
                    <WOComboBox
                      optionList={[
                        { id: 1, label: '전체' },
                        { id: 2, label: 'ORC' },
                        { id: 3, label: '비ORC' },
                      ]}
                      isAutoComplete={true}
                    />
                  </WOFormColumn>
                </>
              )}
              {checkedItem === 2 && (
                <>
                  {/* 세입일자 */}
                  <WOFormColumn>
                    <WODateRangePicker label={'세입일자'} periodValue={['2023-11-01', '2023-11-01']} />
                  </WOFormColumn>
                  {/* 수납기관 */}
                  <WOFormColumn>
                    <WOComboBox label={'수납기관'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                  </WOFormColumn>
                  {/* 징수기관 */}
                  <WOFormColumn>
                    <WOComboBox label={'징수기관'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                  </WOFormColumn>
                  {/* 구분 */}
                  <WOFormColumn>
                    <WOComboBox
                      label={'구분'}
                      optionList={[
                        { id: 1, label: '전체' },
                        { id: 2, label: 'ORC' },
                        { id: 3, label: '비ORC' },
                      ]}
                      isAutoComplete={true}
                    />
                  </WOFormColumn>
                </>
              )}
              {checkedItem === 3 && (
                <>
                  {/* 세입일자 */}
                  <WOFormColumn>
                    <WODateRangePicker label={'세입일자'} periodValue={['2023-11-01', '2023-11-01']} />
                  </WOFormColumn>

                  {/* 징수기관 */}
                  <WOFormColumn>
                    <WOComboBox label={'징수기관'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                  </WOFormColumn>
                  {/* 출력구분 */}
                  <WOFormColumn>
                    <WOComboBox label={'출력구분'} optionList={[{ id: 1, label: '상세' }]} isAutoComplete={true} />
                  </WOFormColumn>

                  {/* 구분 */}
                  <WOFormColumn>
                    <WOComboBox
                      label={'구분'}
                      optionList={[
                        { id: 1, label: '전체' },
                        { id: 2, label: 'ORC' },
                        { id: 3, label: '비ORC' },
                      ]}
                      isAutoComplete={true}
                    />
                  </WOFormColumn>
                </>
              )}
            </WOSearchArea>

            {/* 테이블 */}
            {checkedItem === 1 && (
              <S.ViewArea>
                <S.TableBox>
                  <WOTable tableData={TD_ETC0501V01_1} hasFooter={true} fixedColumn={1} />
                </S.TableBox>
              </S.ViewArea>
            )}
            {checkedItem === 2 && (
              <S.ViewArea>
                <S.TableBox>
                  <S.TableTitleWrap>
                    <div className='btn-wrap'>
                      <WOButton onClick={() => {}} variant='outlined'>
                        영수증 출력
                      </WOButton>
                    </div>
                  </S.TableTitleWrap>
                  <WOTable tableData={TD_ETC0501V01_2} hasFooter={true} />
                </S.TableBox>
              </S.ViewArea>
            )}
            {checkedItem === 3 && (
              <S.ViewArea>
                <S.TableBox>
                  <WOTable tableData={TD_ETC0501V01_3} />
                </S.TableBox>
              </S.ViewArea>
            )}
          </>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'print'} width={24} height={24} />}>
            출력
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default ETC0501V01;
