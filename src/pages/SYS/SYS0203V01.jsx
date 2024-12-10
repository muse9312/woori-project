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
import { SYS_02_breadCrumbList } from '../../data/response';
import WOComboBox from '../../components/common/WOComboBox';
import { TD_SYS0203V01 } from '../../data/tableDatas';
import WOInput from '../../components/common/WOInput';
import WODatePicker from '../../components/common/WODatePicker';
import WORadioGroup from '../../components/common/WORadioGroup';

const SYS0203V01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_02_breadCrumbList} />
          <S.Title>사용자 이력조회(웹/앱)</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'검색'} optionList={[{ id: 1, label: '기관' }]} isAutoComplete={true} />
                <WOComboBox optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput label='성명' />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'접속정보'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODatePicker label={'최종로그인일자'} />
              </WOFormColumn>
              <WOFormColumn col={2}>
                <WORadioGroup
                  onChange={() => {}}
                  radioItems={[
                    {
                      id: 1,
                      label: '이하',
                      name: 'radio01',
                      value: '이하',
                    },
                    {
                      id: 2,
                      label: '이상',
                      name: 'radio01',
                      value: '이상',
                    },
                    {
                      id: 3,
                      label: '미사용',
                      name: 'radio01',
                      value: '미사용',
                    },
                    {
                      id: 4,
                      label: '전체',
                      name: 'radio01',
                      value: '전체',
                    },
                  ]}
                  defaultCheckedValue={{
                    id: 4,
                    label: '전체',
                    name: 'radio01',
                    value: '전체',
                  }}
                />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_SYS0203V01} />
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
        </S.InnerFooter>
      </SubFooter>
    </S.Wrap>
  );
};

export default SYS0203V01;
