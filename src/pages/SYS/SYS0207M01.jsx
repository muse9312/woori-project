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
import { TD_SYS0207M01 } from '../../data/tableDatas';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOCheckbox from '../../components/common/WOCheckbox';
import WOLabel from '../../components/common/WOLabel';

const SYS0207M01 = () => {
  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_02_breadCrumbList} />
          <S.Title>집계대상별사용자로그 조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WODateRangePicker label={'조회기간'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'기관구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn col={4} direction='column'>
                <WOLabel label={'로그구분선택'} />
                <WOFormColumn col={4} gap={36}>
                  <WOCheckbox
                    item={{
                      name: 'check01',
                      id: 'check01-01',
                      label: '전체',
                    }}
                    type='fit'
                  />
                  <WOCheckbox
                    item={{
                      name: 'check01',
                      id: 'check01-02',
                      label: '조회',
                    }}
                    type='fit'
                  />
                  <WOCheckbox
                    item={{
                      name: 'check01',
                      id: 'check01-03',
                      label: '출력',
                    }}
                    type='fit'
                  />
                  <WOCheckbox
                    item={{
                      name: 'check01',
                      id: 'check01-04',
                      label: '엑셀',
                    }}
                    type='fit'
                  />
                  <WOCheckbox
                    item={{
                      name: 'check01',
                      id: 'check01-05',
                      label: '차트',
                    }}
                    type='fit'
                  />
                  <WOCheckbox
                    item={{
                      name: 'check01',
                      id: 'check01-06',
                      label: '미리보기',
                    }}
                    type='fit'
                  />
                  <WOCheckbox
                    item={{
                      name: 'check01',
                      id: 'check01-07',
                      label: '추가',
                    }}
                    type='fit'
                  />
                  <WOCheckbox
                    item={{
                      name: 'check01',
                      id: 'check01-08',
                      label: '삽입',
                    }}
                    type='fit'
                  />
                  <WOCheckbox
                    item={{
                      name: 'check01',
                      id: 'check01-09',
                      label: '삭제',
                    }}
                    type='fit'
                  />
                  <WOCheckbox
                    item={{
                      name: 'check01',
                      id: 'check01-10',
                      label: '저장',
                    }}
                    type='fit'
                  />
                  <WOCheckbox
                    item={{
                      name: 'check01',
                      id: 'check01-11',
                      label: '로그인/실패',
                    }}
                    type='fit'
                  />
                </WOFormColumn>
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <S.TableTitleWrap>
                <div className='tit'>사용자로그</div>
              </S.TableTitleWrap>
              <WOTable tableData={TD_SYS0207M01} fixedColumn={2} />
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

export default SYS0207M01;
