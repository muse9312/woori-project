import React, { useState } from 'react';
import SubHeader from '../../components/layout/SubHeader';
import SubFooter from '../../components/layout/SubFooter';
import WOButton from '../../components/common/WOButton';
import WOIcon from '../../components/common/WOIcon';
import WOBreacCrumbs from '../../components/common/WOBreadCrumbs';
import WOTable from '../../components/common/WOTable';
import WOSearchArea from '../../components/common/WOSearchArea';
import WOComboBox from '../../components/common/WOComboBox';
import * as S from '../../styles/subPage.styled';
import WOFormColumn from '../../components/common/WOFormColumn';
import { ZPB_02_breadCrumbList, TD_ZPB0201V01 } from '../../data/response';
import WODateRangePicker from '../../components/common/WODateRangePicker';
import WOInput from '../../components/common/WOInput';
import WOEditTable from '../../components/common/WOEditTable';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../../components/common/WOModal';
import WORadioGroup from '../../components/common/WORadioGroup';

const ZPB0201V01 = () => {
  // logic
  const [isModalZPB0201V01, setIsModalZPB0201V01] = useState(false);

  // view
  return (
    <S.Wrap>
      <SubHeader color={'navy'} />
      {/* START: Content */}
      <S.Main>
        <S.TopArea>
          <WOBreacCrumbs list={ZPB_02_breadCrumbList} />
          <S.Title>사용자조회</S.Title>
          <WOButton onClick={() => {}} variant='help'>
            도움말
          </WOButton>
        </S.TopArea>
        <S.ContentWrap>
          <S.SearchArea>
            <WOSearchArea>
              <WOFormColumn>
                <WOComboBox label={'기관명'} optionList={[{ id: 1, label: '서울시청' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'부서명'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} disabled={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WODateRangePicker label={'가입기간'} periodValue={['2023-11-16', '2023-11-16']} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'사용유무'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOComboBox label={'사용자구분'} optionList={[{ id: 1, label: '전체' }]} isAutoComplete={true} />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='사업자번호' placeholder='‘-’없이 10자리 숫자 입력' />
              </WOFormColumn>

              <WOFormColumn>
                <WOInput type='number' label='제로페이번호' placeholder='‘-’없이 16자리 숫자 입력' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='요구불계좌번호' placeholder='‘-’없이 숫자 입력' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='일상경비계좌번호' placeholder='‘-’없이 숫자 입력' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='사용자 ID' placeholder='영문,숫자 조합 6~10자리 입력' />
              </WOFormColumn>
              <WOFormColumn>
                <WOInput type='number' label='마스터 ID' placeholder={'영문,숫자조합 6~10자리 입력'} />
              </WOFormColumn>
            </WOSearchArea>
          </S.SearchArea>
          <S.ViewArea>
            <S.TableBox>
              <WOTable tableData={TD_ZPB0201V01} />
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
          <WOButton variant={'outlined'} size={'lg'}>
            해지정보현행화
          </WOButton>
          <WOButton variant={'outlined'} size={'lg'} isActive={isModalZPB0201V01} onClick={() => setIsModalZPB0201V01(true)}>
            권한 및 수신여부 설정
          </WOButton>
        </S.InnerFooter>
      </SubFooter>
      {/* START: modal */}
      <WOModal direction='center' size='md' isOpen={isModalZPB0201V01} title={'권한 및 수신여부 설정'} onClose={() => setIsModalZPB0201V01(false)}>
        {/* START: modalContent */}
        <ModalContentArea>
          <S.Container>
            <S.Container $gap={8}>
              <WOEditTable>
                <caption>권한 및 수신여부 설정</caption>
                <tbody>
                  <tr>
                    <th>잔액확인 권한설정</th>
                    <td>
                      <WORadioGroup
                        radioItems={[
                          {
                            name: 'radio01',
                            id: 1,
                            label: 'Y',
                            value: 'Y',
                          },
                          {
                            name: 'radio01',
                            id: 2,
                            label: 'N',
                            value: 'N',
                          },
                        ]}
                        defaultCheckedValue={{
                          name: 'radio01',
                          id: 1,
                          label: 'Y',
                          value: 'Y',
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
              </WOEditTable>
              <S.Notice type={'modal'}>
                * 사용자 결제 가능한 제로페이 (한도 1회, 1일)를 조회할 수 있는 권한 부여합니다. 권한 설정 Y인 겨우 결제한도 조회가능합니다.(지자체 설정 불가)
              </S.Notice>
            </S.Container>
            <WOEditTable>
              <caption>권한 및 수신여부 설정</caption>
              <tbody>
                <tr>
                  <th>본인(SMS/카카오톡,UMS) 수신여부 설정</th>
                  <td>
                    <WORadioGroup
                      radioItems={[
                        {
                          name: 'radio02',
                          id: 1,
                          label: 'Y',
                          value: 'Y',
                        },
                        {
                          name: 'radio02',
                          id: 2,
                          label: 'N',
                          value: 'N',
                        },
                      ]}
                      defaultCheckedValue={{
                        name: 'radio02',
                        id: 1,
                        label: 'Y',
                        value: 'Y',
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <th>SMS/카카오톡 수신여부 설정</th>
                  <td>
                    <WORadioGroup
                      radioItems={[
                        {
                          name: 'radio03',
                          id: 1,
                          label: 'Y',
                          value: 'Y',
                        },
                        {
                          name: 'radio03',
                          id: 2,
                          label: 'N',
                          value: 'N',
                        },
                      ]}
                      defaultCheckedValue={{
                        name: 'radio03',
                        id: 1,
                        label: 'Y',
                        value: 'Y',
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <th>SMS/카카오톡 집행 수신여부 설정</th>
                  <td>
                    <WORadioGroup
                      radioItems={[
                        {
                          name: 'radio04',
                          id: 1,
                          label: 'Y',
                          value: 'Y',
                        },
                        {
                          name: 'radio04',
                          id: 2,
                          label: 'N',
                          value: 'N',
                        },
                      ]}
                      defaultCheckedValue={{
                        name: 'radio04',
                        id: 1,
                        label: 'Y',
                        value: 'Y',
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </WOEditTable>
          </S.Container>
        </ModalContentArea>

        {/* END: modalContent */}
        <ModalButtonArea>
          <ButtonRightArea>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}}>
              저장
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>
      {/* END: modal */}
    </S.Wrap>
  );
};

export default ZPB0201V01;
