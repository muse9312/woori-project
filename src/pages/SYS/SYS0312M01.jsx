import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { SYS_03_breadCrumbList } from '../../data/response';
import { TD_SYS0312M01 } from '../../data/tableDatas';
import WOInput from '../../components/common/WOInput';
import WOComboBox from '../../components/common/WOComboBox';
import WODatePicker from '../../components/common/WODatePicker';
import WOMenuPermissionTable, { TableWrap, TableWrapper } from '../../components/common/WOMenuPermissionTable';
import WOCheckbox from '../../components/common/WOCheckbox';

const SYS0312M01 = () => {
  const [isTableOpen1, setIsTableOpen1] = useState(true);
  const [isTableOpen2, setIsTableOpen2] = useState(true);
  const [isTableOpen3, setIsTableOpen3] = useState(true);

  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main $heightAuto={true}>
        <S.TopArea>
          <WOBreacCrumbs list={SYS_03_breadCrumbList} />
          <S.Title>메뉴권한관리</S.Title>
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
                <WOInput label='성명' value={'홍길동'} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'사용자유형'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODatePicker label={'최종로그인일자'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>

          <S.ViewArea $height='230px'>
            <S.TableBox>
              <WOTable tableData={TD_SYS0312M01} hasStateBar={true} stateBarHeader={'신규'} editable={true} />
            </S.TableBox>
          </S.ViewArea>
          <S.ViewArea>
            <S.Container $gap={24}>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined'>
                      초기화
                    </WOButton>
                    <WOButton
                      onClick={() => {
                        setIsTableOpen1(!isTableOpen1);
                      }}
                      variant='outlined'>
                      {isTableOpen1 ? '접기' : '펼치기'}
                    </WOButton>
                  </div>
                </S.TableTitleWrap>
                <TableWrapper>
                  <TableWrap>
                    <WOMenuPermissionTable isTableOpen={isTableOpen1}>
                      <colgroup>
                        <col />
                        <col width={'53px'} />
                        <col width={'53px'} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>세입</th>
                          <th>
                            조회
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                          <th>
                            등록
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>세입계좌현황</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>계좌현황</td>
                          <td rowSpan={5}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={5}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>거래내역장</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>거래명세</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>구좌경정/과오납</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>입출금 집계</td>
                        </tr>

                        <tr>
                          <td>세입이체일정표</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>보조금교부내역조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>공금연동 보통예금 계좌조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>희망번호통장 표지 출력</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>공금예금 이자 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>이자결산 사전검증</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>보통예금 이자 자동이체 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>세입거래내역장 조회(과거)</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </WOMenuPermissionTable>
                    <WOMenuPermissionTable isTableOpen={isTableOpen1}>
                      <colgroup>
                        <col />
                        <col width={'53px'} />
                        <col width={'53px'} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>세출</th>
                          <th>
                            조회
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                          <th>
                            등록
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>세출계좌 현황</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>계좌현황</td>
                          <td rowSpan={5}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={5}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>거래내역장</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>거래명세</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>비목별지급내역</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>자금현황표</td>
                        </tr>

                        <tr>
                          <td>자금배정내역</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>자금배정내역</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>반납(여입) 거래명세</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>회계별 전기관 잔액</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>정부보관금 내역조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>세출거래내역장 조회(과거)</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </WOMenuPermissionTable>
                    <WOMenuPermissionTable isTableOpen={isTableOpen1}>
                      <colgroup>
                        <col />
                        <col width={'53px'} />
                        <col width={'53px'} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>일상경비</th>
                          <th>
                            조회
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                          <th>
                            등록
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>일상경비계좌 현황</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>계좌현황</td>
                          <td rowSpan={4}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={4}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>거래내역장</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>거래명세</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>반납금 입금거래명세</td>
                        </tr>
                        <tr>
                          <td>일상경비수입/지출월계표 및 잔액증명서</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>보통예금계좌 지급 요청공문</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </WOMenuPermissionTable>
                    <WOMenuPermissionTable isTableOpen={isTableOpen1}>
                      <colgroup>
                        <col />
                        <col width={'53px'} />
                        <col width={'53px'} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>e + 뱅킹</th>
                          <th>
                            조회
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                          <th>
                            등록
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>처리결과 조회</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>처리결과조회</td>
                          <td rowSpan={4}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={4}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>이체불능구 내역조회</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>대체보관구 내역조회</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>지출명령반려조회</td>
                        </tr>
                        <tr>
                          <td>공금잔액(한도) 및 은행마감 시간조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>회계별 지급명령금액 총괄 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </WOMenuPermissionTable>
                  </TableWrap>
                </TableWrapper>
              </S.TableBox>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined'>
                      초기화
                    </WOButton>
                    <WOButton
                      onClick={() => {
                        setIsTableOpen2(!isTableOpen2);
                      }}
                      variant='outlined'>
                      {isTableOpen2 ? '접기' : '펼치기'}
                    </WOButton>
                  </div>
                </S.TableTitleWrap>
                <TableWrapper>
                  <TableWrap>
                    <WOMenuPermissionTable isTableOpen={isTableOpen2}>
                      <colgroup>
                        <col />
                        <col width={'53px'} />
                        <col width={'53px'} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>전자보고서</th>
                          <th>
                            조회
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                          <th>
                            등록
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>세입보고서</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>세입월계표</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>수입금월중 총괄보고서[숨김메뉴]</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>과오납환급 일보/ 월보</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>세출•기금 보고서</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>세입세출자금일계표</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>계좌별 세입세출자금일계표</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>세입세출외현금 자금일계표</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>세출 일〮월〮분기계표</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>자금운용내역장</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>일상경비 보고서</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>세출 일〮월〮분기계표</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>전자보고서 관리</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>보고서 관리대장</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>전자보고서 일괄승인</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>전자보고서 지점별 관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>정기제출자료</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>자금운용현황자료(반기)</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>재정자금 및 미수이자 현황(연단위)</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>금고통계 현황 자료(연단위)</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>기타현황</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>세출자금수지현황(세출, 기금)</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>회계별 세출자금수지 현황</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>공금성예금 평잔 현황</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </WOMenuPermissionTable>
                    <WOMenuPermissionTable isTableOpen={isTableOpen2}>
                      <colgroup>
                        <col />
                        <col width={'53px'} />
                        <col width={'53px'} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>운용상품</th>
                          <th>
                            조회
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                          <th>
                            등록
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>공금성정기예금</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>공금성정기예금 현황</td>
                          <td rowSpan={3}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={3}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>해지예상/ 예상이자 조회</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>전체명세</td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>이자지급현황</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>만기도래현황</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>정기예금현황 보고서</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>

                        <tr c>
                          <td>보통예금</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>보통예금 현황</td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>보통예금 거래내역 조회</td>
                        </tr>

                        <tr>
                          <td>MMDA</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>MMDA 현황</td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>MMDA 이자지급 조회</td>
                        </tr>
                        <tr>
                          <td>공금운용자금회계별 대사현황</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>대사현황 모니터링</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>영업점별 대사현황</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>제로페이승인•집행대사 현황</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </WOMenuPermissionTable>
                    <WOMenuPermissionTable isTableOpen={isTableOpen2}>
                      <colgroup>
                        <col />
                        <col width={'53px'} />
                        <col width={'53px'} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>제로페이</th>
                          <th>
                            조회
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                          <th>
                            등록
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>제로페이 조회</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>승인내역 조회</td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>집행내역 조회</td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>승인•집행 불일치 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>결제계좌 거래내역조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>제로페이 발급대장</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>제한업종조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>결제현황조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>일자•결제방식별 거래량 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>서무담당 번호 등록</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>제로페이 (관리자)</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사용자 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>가입 및 결제현황</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>공공기관 회계담당번호등록</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>카카오톡 전송내역 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사용자 전용앱 로그인 이력조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사용자 이력 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>공지함</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </WOMenuPermissionTable>
                    <WOMenuPermissionTable isTableOpen={isTableOpen2}>
                      <colgroup>
                        <col />
                        <col width={'53px'} />
                        <col width={'53px'} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>법인카드</th>
                          <th>
                            조회
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                          <th>
                            등록
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>법인카드 내역 조회</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>승인내역</td>
                          <td rowSpan={4}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={4}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>매입내역</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>청구내역</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>미청구내역</td>
                        </tr>
                        <tr>
                          <td>결제•연체 내역 조회</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>결제내역 조회</td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>연체내역 조회</td>
                        </tr>
                        <tr>
                          <td>카드결제계좌 거래내역 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>법인카드 부서관리</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>사용자권한 관리</td>
                          <td rowSpan={5}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={5}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>부서관리</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>부서별 법인카드 명세</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>부서별 사용현황</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>법인카드 발급대장</td>
                        </tr>
                        <tr>
                          <td>사회적 약자기업 구매</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>구매내역 조회</td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>약자기업 등록</td>
                        </tr>
                      </tbody>
                    </WOMenuPermissionTable>
                  </TableWrap>
                </TableWrapper>
              </S.TableBox>
              <S.TableBox>
                <S.TableTitleWrap>
                  <div className='btn-wrap'>
                    <WOButton onClick={() => {}} variant='outlined'>
                      초기화
                    </WOButton>
                    <WOButton
                      onClick={() => {
                        setIsTableOpen3(!isTableOpen3);
                      }}
                      variant='outlined'>
                      {isTableOpen3 ? '접기' : '펼치기'}
                    </WOButton>
                  </div>
                </S.TableTitleWrap>
                <TableWrapper>
                  <TableWrap>
                    <WOMenuPermissionTable isTableOpen={isTableOpen3}>
                      <colgroup>
                        <col />
                        <col width={'53px'} />
                        <col width={'53px'} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>금고영업점</th>
                          <th>
                            조회
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                          <th>
                            등록
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>공채</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>당일자 취소</td>
                          <td rowSpan={3}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={3}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>당일자 이외 취소</td>
                        </tr>
                        <tr className='tab-item'>
                          <td>취소결재관리</td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>증서관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>지자체 정보관리</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>지자체 담당자 지원</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>오늘 등록된 글</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>지자체 정보등록</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>서울시 사업자번호 관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>섭외이력 평가 결과</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>예산수혜업체 유치</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>공무원 급여이체실적</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>공무원 크로스셀 실적</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>업무연락</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>문서 조회(수신, 발신, 등록)</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>공금업무 제안광장</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>

                        <tr className='tab-item'>
                          <td>보통예금 거래내역 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>MMDA</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>MMDA 현황</td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>MMDA 이자지급 조회</td>
                        </tr>
                        <tr>
                          <td>공금운용자금회계별 대사현황</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>대사현황 모니터링</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>영업점별 대사현황</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>제로페이승인•집행대사 현황</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </WOMenuPermissionTable>
                    <WOMenuPermissionTable isTableOpen={isTableOpen3}>
                      <colgroup>
                        <col />
                        <col width={'53px'} />
                        <col width={'53px'} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>기타</th>
                          <th>
                            조회
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                          <th>
                            등록
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>자금이체</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='tab-item'>
                          <td>자금이체내역표</td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td rowSpan={2}>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='tab-item'>
                          <td>지급통지서 출력</td>
                        </tr>
                        <tr>
                          <td>광명시금고</td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className='depth3-item'>
                          <td>보통예금 계좌거래내역 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>공금계좌 집계조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>보조금실적 조회</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>보조금 수익성 분석</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>보조금 수익성 추세</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>보조금 좌수 현황</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>보조금사업 계좌수 및 예산점유율</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>서울페이 플러스</td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className='depth3-item'>
                          <td>계좌조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>집계내역조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>계좌거래명세</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>처리내역 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>처리내역 조회(관리자)</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>자금집계 현황</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>손해배상금</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>Data Corretion</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>집계표(당행지점별,수납기관,징수기관)</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>마스킹 관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </WOMenuPermissionTable>
                    <WOMenuPermissionTable isTableOpen={isTableOpen3}>
                      <colgroup>
                        <col />
                        <col width={'53px'} />
                        <col width={'53px'} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>시스템관리</th>
                          <th>
                            조회
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                          <th>
                            등록
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>시스템공통</td>
                          <td></td>
                          <td></td>
                        </tr>

                        <tr className='depth3-item'>
                          <td>기관/부서 코드 관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>부서별 계좌번호 관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>반납가상계좌 모계좌 관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>직인관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>공지사항관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>질문답변게시판(Q/A)</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>문서위변조확인</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>전자보고서 제공리스트 등록</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>법인카드 사업자관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>신금고 SQL 모니터링</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>사용자</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사용자 관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사용자 삭제 이력관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사용자 이력 조회(웹 / 앱)</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사용자 IP관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>부서 및 사용자 이관</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>비공금영업점 사용자 관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>집계대상별 사용자 로그 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>업무별 사용량 조회</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>부서별 사용량 집계</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>개발지원</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>공통코드</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>공통콤보</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>공통팝업</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사이트 등록</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>시스템 등록</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>프로그램 등록</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>프로그램 등록 OLAP</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>시스템별 메뉴 등록</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사이트별 메뉴 등록</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사용자 유형별 사이트 권한관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사용자 유형별 메뉴 권한관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>사용자별 메뉴 권한관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                        <tr className='depth3-item'>
                          <td>특화메뉴코드 관리</td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                          <td>
                            <WOCheckbox
                              blind
                              type='table'
                              item={{
                                id: 'input01-02',
                                label: 'Label',
                                name: 'input01-01',
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </WOMenuPermissionTable>
                  </TableWrap>
                </TableWrapper>
              </S.TableBox>
            </S.Container>
          </S.ViewArea>
        </S.ContentWrap>
      </S.Main>
      {/* END: Content */}
      <SubFooter>
        <S.InnerFooter>
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

export default SYS0312M01;
