import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import { CAD_04_breadCrumbList } from '../../data/response';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_CAD0403V01 } from '../../data/sewonTableDatas';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import WOTabContent from '../../components/common/WOTabContent';
import WOInput from '../../components/common/WOInput';
import WOIcon from '../../components/common/WOIcon';
import WOCheckbox from '../../components/common/WOCheckbox';
import WOLabel from '../../components/common/WOLabel';

const CAD0403V01 = () => {
  const [checkedItem, setCheckedItem] = useState(true);

  const checkhandle = (item, isChecked) => {
    setCheckedItem(isChecked);
  };
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={CAD_04_breadCrumbList} />
          <S.Title>부서별 법인카드명세</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>

        {/* 부서별 법인카드명세 */}
        <WOTabContent disable>
          <S.ContentWrap>
            <S.SearchArea>
              <WOSearchArea>
                {/* 기관명 */}
                <WOFormColumn>
                  <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '강동구청' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 사업자번호 */}
                <WOFormColumn>
                  <WOComboBox label={'사업자번호'} optionList={[{ id: 1, label: '000-00-00000' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 계좌번호 */}
                <WOFormColumn>
                  <WOComboBox label={'계좌번호'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 회원구분 */}
                <WOFormColumn>
                  <WOComboBox label={'회원구분'} optionList={[{ id: 1, label: '유효' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 카드구분 */}
                <WOFormColumn>
                  <WOComboBox label={'카드구분'} optionList={[{ id: 1, label: '유효' }]} isAutoComplete={true} />
                </WOFormColumn>

                {/* 카드번호 검색 */}

                <WOFormColumn direction='column'>
                  <WOLabel label='카드번호 검색' />
                  <WOFormColumn isAlignCenter={true}>
                    <WOCheckbox
                      blind
                      isChecked={true}
                      item={{
                        id: 'input01-01',
                        label: 'Label',
                        name: 'input01-01',
                      }}
                      onChange={checkhandle}
                    />
                    <WOInput placeholder={'-제외하고 입력하세요'} disabled={checkedItem} />
                  </WOFormColumn>
                </WOFormColumn>
              </WOSearchArea>
            </S.SearchArea>

            <S.ViewArea>
              <S.TableBox>
                <WOTable tableData={TD_CAD0403V01} fixedColumn={3} />
              </S.TableBox>
            </S.ViewArea>
          </S.ContentWrap>
        </WOTabContent>
      </S.Main>

      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
          <WOButton variant='outlined' size='lg' startIcon={<WOIcon icon={'download'} width={24} height={24} />}>
            다운로드
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default CAD0403V01;
