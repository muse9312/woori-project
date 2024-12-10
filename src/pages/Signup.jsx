import React, { useState } from 'react';
import { styled } from 'styled-components';
import WOButton from '../components/common/WOButton';
import MainFooter from '../components/layout/MainFooter';
import WelcomBox from '../views/login/WelcomBox';
import { HeaderWrap } from '../components/layout/MainHeader';
import Notice from '../components/layout/Notice';
import { signupTabList } from '../data/response';
import * as S from '../styles/subPage.styled';
import WOCheckbox from '../components/common/WOCheckbox';
import WOComboBox from '../components/common/WOComboBox';
import WOFormColumn from '../components/common/WOFormColumn';
import WOIcon from '../components/common/WOIcon';
import WORadioGroup from '../components/common/WORadioGroup';
import { vaildationTextStyle, vaildationTextWrap } from '../styles/common.styled';
import WOLoginInput from '../components/common/WOLoginInput';
import WOValidationCheck from '../components/common/WOValidationCheck';

const Signup = () => {
  // 탭 리스트
  const [selectedTab, setSelectedTab] = useState(signupTabList[0].id);
  // 정보입력 1,2 탭
  const [stepTwoTap, setStepTwoTap] = useState(1);
  // 비번 불일치 문구
  const [passError] = useState(true);
  // 승인 여부
  const [pass] = useState(false);

  function handleNextClick() {
    if (selectedTab === 2 && stepTwoTap === 1) {
      setStepTwoTap(2);
    } else if (selectedTab < signupTabList.length) {
      setSelectedTab(selectedTab + 1);
      if (selectedTab === 2) setStepTwoTap(1);
    }
  }

  const handleClick = () => {
    if (selectedTab <= signupTabList.length) {
      setSelectedTab(selectedTab - 1);
    }
  };

  return (
    <Wrap>
      <HeaderWrap>
        <Notice text={'👉2023년 2월 은행연합회 공시 COFIX (신규취급) 👉한국'} />
      </HeaderWrap>
      {/* lnb */}
      <WelcomBox />
      <S.SignContentWrap>
        <div className='content-box'>
          <S.Container $gap={'unset'}>
            {/* 타이틀 영역 */}
            <S.SignTitleArea>
              <img src='/assets/images/etc/logo-color.svg' className='logo-image' alt='로고' />
              {selectedTab === 1 && (
                <h3 className='title'>
                  필수항목 및 선택항목 약관에
                  <br /> 동의해 주세요.
                </h3>
              )}
              {selectedTab === 2 && (
                <>
                  <h3 className='title'>정확하게 정보를 입력해 주세요.</h3>
                  <h3 className='description__sub'>정확한 정보를 입력하지 않으면 승인이 거절될 수 있습니다.</h3>
                </>
              )}
              {selectedTab === 3 && (
                <>
                  <h3 className='title'>승인절차가 필요합니다.</h3>
                  <h3 className='description__sub'>관리자 승인 완료 시 회원가입이 완료 됩니다.</h3>
                </>
              )}
              {selectedTab === 4 && (
                <>
                  <h3 className='title'>회원가입이 완료 되었습니다.</h3>
                  <h3 className='description__sub'>로그인화면으로 이동하여 로그인해 주세요.</h3>
                </>
              )}
            </S.SignTitleArea>

            {/* 서브타이블 영역 */}
            <SignSubTitleArea>
              {signupTabList.map((tab) => (
                <TabItem key={tab.id} isActive={selectedTab === tab.id}>
                  <span>{tab.num}</span>
                  <p>{tab.title}</p>
                </TabItem>
              ))}
            </SignSubTitleArea>

            {/* 약관동의 */}
            {selectedTab === 1 && (
              <>
                {/* form 영역 */}
                <S.SignFormArea $gap={12} $mgTop={36}>
                  {/* 전체동의 */}
                  <S.SignCheckBoxWrap $isBorder={true}>
                    <WOCheckbox
                      round={true}
                      fontWght={true}
                      item={{
                        name: 'check01',
                        id: 'check01-01',
                        label: '전체동의',
                      }}
                    />
                  </S.SignCheckBoxWrap>

                  <S.Container $gap={4}>
                    {/* [필수] 개인정보 수집이용 동의 */}
                    <S.SignCheckBoxWrap $height={35}>
                      <WOCheckbox
                        round={true}
                        item={{
                          name: 'check02',
                          id: 'check02-02',
                          label: '[필수] 개인정보 수집이용 동의',
                        }}
                      />
                      <WOIcon icon='arrow-gray' width={14} height={14} />
                    </S.SignCheckBoxWrap>

                    {/* [선택] 근무처 정보제공동의 */}
                    <S.SignCheckBoxWrap $height={35}>
                      <WOCheckbox
                        round={true}
                        item={{
                          name: 'check03',
                          id: 'check03-03',
                          label: '[선택] 근무처 정보제공동의',
                        }}
                      />
                      <WOIcon icon='arrow-gray' width={14} height={14} />
                    </S.SignCheckBoxWrap>
                  </S.Container>
                </S.SignFormArea>
                {/* 버튼 영역 */}
                <S.SignButtonArea $mgTop={36}>
                  {selectedTab >= 1 && selectedTab <= 3 && (
                    <>
                      <S.Container $direction={'row'} $gap={12}>
                        <WOButton variant='secondary' size='lg' isMargin={true} onClick={handleClick}>
                          취소
                        </WOButton>
                        <WOButton variant='primary' size='lg' onClick={handleNextClick}>
                          다음
                        </WOButton>
                      </S.Container>
                    </>
                  )}

                  {selectedTab === 4 && (
                    <>
                      <S.Container $direction={'row'} $gap={12}>
                        <WOButton variant='primary' size='lg' onClick={() => {}}>
                          로그인
                        </WOButton>
                      </S.Container>
                    </>
                  )}
                </S.SignButtonArea>
              </>
            )}

            {/* 정보입력 */}
            {selectedTab === 2 && (
              <>
                {stepTwoTap === 1 && (
                  <>
                    {/* form 영역 */}
                    <S.SignFormArea $gap={20} $mgTop={36}>
                      <WOLoginInput id='input01-01' label='이름' name='input01' placeholder='이름을 입력해 주세요.' />
                      <WOLoginInput id='input01-01' label='생년월일' name='input01' placeholder='생년월일 6자리를 입력해 주세요. (예시 yymmdd)' />
                      <WOLoginInput
                        id='input01-03'
                        label='핸드폰번호'
                        name='input01'
                        placeholder='핸드폰번호를 입력해주세요.'
                        button={
                          <AuthBtn type='button' className='auth-btn' onClick={() => {}}>
                            인증번호 전송
                          </AuthBtn>
                        }
                      />
                      <WOLoginInput id='input01-01' label='인증번호' name='input01' placeholder='인증번호를 입력해 주세요.' />
                      <WOFormColumn noWidth={true}>
                        <WOComboBox
                          label={''}
                          optionList={[
                            { id: 1, label: '강동구청' },
                            { id: 1, label: '강동구청' },
                          ]}
                          placeholder='소속 지역구청 선택'
                          isAutoComplete={true}
                          type={'type01'}
                          height={48}
                        />
                        <WOComboBox
                          label={''}
                          optionList={[
                            { id: 1, label: '운영과' },
                            { id: 1, label: '운영과' },
                          ]}
                          placeholder='소속 부서 선택'
                          isAutoComplete={true}
                          type={'type01'}
                          height={48}
                        />
                      </WOFormColumn>
                      <WORadioGroup
                        radioItems={[
                          {
                            name: 'radio01',
                            id: 1,
                            label: '법인카드 권한',
                            value: '법인카드 권한',
                          },
                          {
                            name: 'radio02',
                            id: 2,
                            label: '법인카드 미권한',
                            value: '법인카드 미권한',
                          },
                        ]}
                        defaultCheckedValue={{
                          name: 'radio01',
                          id: 1,
                          label: '법인카드 권한',
                          value: '법인카드 권한',
                        }}
                        styleType={'type01'}
                      />
                    </S.SignFormArea>
                    {/* 버튼 영역 */}
                    <S.SignButtonArea $mgTop={36}>
                      {selectedTab >= 1 && selectedTab <= 3 && (
                        <>
                          <S.Container $direction={'row'} $gap={12}>
                            <WOButton variant='secondary' size='lg' isMargin={true} onClick={handleClick}>
                              취소
                            </WOButton>
                            <WOButton variant='primary' size='lg' onClick={handleNextClick}>
                              다음
                            </WOButton>
                          </S.Container>
                        </>
                      )}

                      {selectedTab === 4 && (
                        <>
                          <S.Container $direction={'row'} $gap={12}>
                            <WOButton variant='primary' size='lg' onClick={() => {}}>
                              로그인
                            </WOButton>
                          </S.Container>
                        </>
                      )}
                    </S.SignButtonArea>
                  </>
                )}

                {stepTwoTap === 2 && (
                  <>
                    {/* form 영역 */}
                    <S.SignFormArea $gap={20} $mgTop={36}>
                      {/* 아이디 입력 */}
                      <S.Container $gap={6}>
                        <WOLoginInput
                          id='input01-03'
                          label='아이디'
                          name='input01'
                          placeholder='아이디를 입력해 주세요.'
                          button={
                            <AuthBtn type='button' className='auth-btn' onClick={() => {}}>
                              중복확인
                            </AuthBtn>
                          }
                        />
                        <WOValidationCheck
                          itemList={[
                            {
                              id: '1',
                              title: '소문자',
                              isCheck: 'pass',
                            },
                            {
                              id: '2',
                              title: '특수문자',
                              isCheck: 'pass',
                            },
                            {
                              id: '3',
                              title: '숫자',
                              isCheck: 'error',
                            },
                            {
                              id: '4',
                              title: '6자 이상',
                              isCheck: 'error',
                            },
                          ]}
                        />
                      </S.Container>

                      {/* 비밀번호 입력 */}
                      <S.Container>
                        <S.Container $gap={6}>
                          <WOLoginInput id='input02-06' label='비밀번호' name='input02' placeholder='새 비밀번호를 입력해주세요.' />
                          <TextCheckWrap>
                            <WOValidationCheck
                              itemList={[
                                {
                                  id: '1',
                                  title: '소문자',
                                  isCheck: 'pass',
                                },
                                {
                                  id: '2',
                                  title: '특수문자',
                                  isCheck: 'pass',
                                },
                                {
                                  id: '3',
                                  title: '숫자',
                                  isCheck: 'error',
                                },
                                {
                                  id: '4',
                                  title: '6자 이상',
                                  isCheck: 'error',
                                },
                              ]}
                            />
                          </TextCheckWrap>
                        </S.Container>

                        <S.Container $gap={6}>
                          <WOLoginInput id='input02-07' label='새 비밀번호' name='input02' placeholder='새 비밀번호를 한번 더 입력해주세요.' error={true} />
                          {passError && <TextCheckText $vailCheck={'error'}>비밀번호가 일치하지 않습니다</TextCheckText>}
                        </S.Container>
                      </S.Container>
                    </S.SignFormArea>
                    {/* 버튼 영역 */}
                    <S.SignButtonArea $mgTop={147}>
                      {selectedTab >= 1 && selectedTab <= 3 && (
                        <>
                          <S.Container $direction={'row'} $gap={12}>
                            <WOButton variant='secondary' size='lg' isMargin={true} onClick={handleClick}>
                              취소
                            </WOButton>
                            <WOButton variant='primary' size='lg' onClick={handleNextClick}>
                              다음
                            </WOButton>
                          </S.Container>
                        </>
                      )}

                      {selectedTab === 4 && (
                        <>
                          <S.Container $direction={'row'} $gap={12}>
                            <WOButton variant='primary' size='lg' onClick={() => {}}>
                              로그인
                            </WOButton>
                          </S.Container>
                        </>
                      )}
                    </S.SignButtonArea>
                  </>
                )}
              </>
            )}

            {/* 승인 */}
            {selectedTab === 3 && (
              <>
                {/* form 영역 */}
                <S.SignFormArea $position={'relative'} $mgTop={76}>
                  <S.SignAcceptBoxWrap>
                    <span>시구청 총괄 관리자 승인</span>
                    <p>{pass ? '승인 완료' : '진행중'}</p>
                    <ImageWrap>
                      <WOIcon icon={'document'} width={108} height={92} />
                    </ImageWrap>
                    <LoadingWrap isPass={pass}>
                      {pass && <img src='/assets/images/etc/shape.svg' className='checkmark-animation' alt='Checkmark' />}
                      {!pass && <img src='/assets/images/etc/rolling.svg' className='rolling-animation' alt='loading...' />}
                    </LoadingWrap>
                  </S.SignAcceptBoxWrap>
                </S.SignFormArea>
                {/* 버튼 영역 */}
                <S.SignButtonArea $mgTop={100}>
                  {selectedTab >= 1 && selectedTab <= 3 && (
                    <>
                      <S.Container>
                        <WOButton variant='primary' size='lg' onClick={handleNextClick} disabled={!pass}>
                          다음
                        </WOButton>
                      </S.Container>
                    </>
                  )}
                </S.SignButtonArea>
              </>
            )}

            {/* 가입완료 */}
            {selectedTab === 4 && (
              <>
                {/* form 영역 */}
                <S.SignFormArea $mgTop={42}>
                  <S.Container>
                    <WOIcon icon={'signup_complete'} width={166} height={180} />
                  </S.Container>
                </S.SignFormArea>
                {/* 버튼 영역 */}
                <S.SignButtonArea $mgTop={27}>
                  {selectedTab >= 1 && selectedTab <= 3 && (
                    <>
                      <S.Container $direction={'row'} $gap={12}>
                        <WOButton variant='secondary' size='lg' isMargin={true} onClick={handleClick}>
                          취소
                        </WOButton>
                        <WOButton variant='primary' size='lg' onClick={handleNextClick}>
                          다음
                        </WOButton>
                      </S.Container>
                    </>
                  )}

                  {selectedTab === 4 && (
                    <>
                      <S.Container $direction={'row'} $gap={12}>
                        <WOButton variant='primary' size='lg' onClick={() => {}}>
                          로그인
                        </WOButton>
                      </S.Container>
                    </>
                  )}
                </S.SignButtonArea>
              </>
            )}
          </S.Container>

          {selectedTab === 1 && (
            <S.Container $margin={'24px 0 0 0'} $gap={8}>
              <TextArea>
                <div className='bullet'>•</div>
                <span>회원가입을 위해 최초 회원가입시 다음과 같은 개인정보를 수집하고 있습니다.</span>
              </TextArea>
              <TextArea>
                <div className='bullet'>•</div>
                <span>수집한 개인정보는 회원자격 유지기간 동안 보관합니다.</span>
              </TextArea>
              <TextArea>
                <div className='bullet'>•</div>
                <span>회원께서는 개인정보 수집 동의를 거부하실 수 있으며, 다만 필수 항목 수집을 거부하실 경우 회원가입이 제한됩니다.</span>
              </TextArea>
            </S.Container>
          )}
        </div>
      </S.SignContentWrap>

      <MainFooter islogin={true} />
    </Wrap>
  );
};

export default Signup;

const TabItem = styled.div`
  display: flex;
  gap: 0 4px;
  border-bottom: ${(props) => (props.isActive ? '2px solid #0e213f' : '')};
  span {
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    color: ${(props) => (props.isActive ? 'var(--C-Dark-12)' : 'var(--C-Dark-06)')};
  }

  p {
    color: ${(props) => (props.isActive ? 'var(--C-Dark-12)' : 'var(--C-Dark-06)')};

    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
  }
`;

const Wrap = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  background-color: #fff;
`;

const SignSubTitleArea = styled.div`
  display: flex;
  height: 30px;
  gap: 0 12px;
  margin-top: 24px;
  ${TabItem}
`;

const AuthBtn = styled.button`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 32px;
  padding: 0px 16px;
  color: var(--C-Dark-10);
  font-size: 12px;
  font-weight: 700;
  border-radius: 6px;
  background: var(--C-Dark-03, #e5e5ed);
  &:disabled {
    color: var(--C-Dark-06, #9ea6b2);
  }
`;

const TextArea = styled.div`
  display: flex;
  gap: 0 4px;
  color: var(--C-Dark-06, #9ea6b2);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;
const TextCheckWrap = styled.div`
  ${vaildationTextWrap}
`;

const TextCheckText = styled.div`
  ${vaildationTextStyle}
`;

const ImageWrap = styled.div`
  position: absolute;
  right: 22px;
`;

const LoadingWrap = styled.div`
  position: absolute;
  top: ${(props) => (props.isPass ? '20px' : '30px')};
  right: ${(props) => (props.isPass ? '16px' : '33px')};

  .checkmark-animation {
    animation: checkmark 0.5s ease forwards;
  }

  @keyframes checkmark {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
      opacity: 1;
    }
    100% {
      transform: scale(1);
    }
  }

  .rolling-animation {
    animation: rotate360 2s linear infinite;
  }

  @keyframes rolling {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
