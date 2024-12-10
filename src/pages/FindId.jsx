import React, { useState } from 'react';
import styled from 'styled-components';
import WOButton from '../components/common/WOButton';
import MainFooter from '../components/layout/MainFooter';
import WelcomBox from '../views/login/WelcomBox';
import { HeaderWrap } from '../components/layout/MainHeader';
import Notice from '../components/layout/Notice';
import * as S from '../styles/subPage.styled';
import WOModal, { ButtonRightArea, ModalButtonArea, ModalContentArea } from '../components/common/WOModal';
import WORadioGroup from '../components/common/WORadioGroup';
import WOComboBox from '../components/common/WOComboBox';
import WOValidationCheck from '../components/common/WOValidationCheck';
import { vaildationTextStyle, vaildationTextWrap } from '../styles/common.styled';
import WOLoginInput from '../components/common/WOLoginInput';

const FindId = () => {
  // 아이디 찾기
  const [isOpen, setIsOpen] = useState(true);

  // 비밀번호 재설정
  const [isOpen2, setIsOpen2] = useState(false);

  // 부서 변경
  const [isOpen3, setIsOpen3] = useState(false);

  // 비밀번호 불일치 문구
  const [passError] = useState(true);

  return (
    <Wrap className='login'>
      <HeaderWrap>
        <Notice text={'👉2023년 2월 은행연합회 공시 COFIX (신규취급) 👉한국'} />
      </HeaderWrap>
      <WelcomBox />
      <div className='login__inner'>
        <div className='login__container'>
          <div className='login__budle'>
            <img src='/assets/images/etc/logo-color.svg' className='logo-image' alt='로고' />
            <h3 className='title'>
              금고업무 통합관리 시스템에
              <br />
              오신것을 환영합니다.
            </h3>
            <FormArea>
              <InputArea>
                <WOLoginInput id='input01-01' label='아이디' name='input01' placeholder='아이디를 입력해 주세요.' />
                <WOLoginInput id='input01-01' label='비밀번호' name='input01' placeholder='비밀번호를 입력해주세요.' />
              </InputArea>

              <WOButton type='submit' variant='primary' size='lg'>
                로그인
              </WOButton>
            </FormArea>

            <LoginSupportArea>
              <button type='button' className='text-btn'>
                회원가입
              </button>
              <div className='flex ml-auto align-center'>
                <button type='button' className='text-btn' onClick={() => setIsOpen(true)}>
                  아이디 찾기
                </button>
                <div className='bullet'>•</div>
                <button type='button' className='text-btn' onClick={() => setIsOpen2(true)}>
                  비밀번호 재설정
                </button>
                <div className='bullet'>•</div>
                <button type='button' className='text-btn' onClick={() => setIsOpen3(true)}>
                  부서변경
                </button>
              </div>
            </LoginSupportArea>
          </div>
        </div>
      </div>
      <MainFooter islogin={true} />

      {/* 아이디 찾기 모달 */}
      <WOModal direction='center' height={456} isOpen={isOpen} title={'아이디 찾기'} onClose={() => setIsOpen(false)}>
        <ModalContentArea $gap={8}>
          <S.LoginModalDescript>
            * 휴대폰 인증으로 아이디를 찾을 수 있습니다. <br />
            인증한 휴대폰 번호로 아이디가 발송됩니다.
          </S.LoginModalDescript>
          <WOLoginInput id='input01-01' label='이름' name='input01' styleType={'popup'} placeholder='이름을 입력해주세요' />
          <WOLoginInput id='input01-01' label='생년월일' name='input01' styleType={'popup'} placeholder='생년월일 6자리를 입력해 주세요. (예시 yymmdd)' />

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

          <WOLoginInput id='input01-01' label='인증번호' name='input01' styleType={'popup'} placeholder='인증번호를 입력해 주세요.' />
        </ModalContentArea>
        <ModalButtonArea $nonBoxShadow={true}>
          <ButtonRightArea>
            <WOButton variant={'secondary'} size={'md'} onClick={() => {}}>
              취소
            </WOButton>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}} disabled>
              아이디 찾기
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>

      {/* 비밀번호 변경 모달 */}
      <WOModal direction='center' height={passError ? 736 : 714} isOpen={isOpen2} title={'비밀번호 재설정'} onClose={() => setIsOpen2(false)}>
        <ModalContentArea $gap={20}>
          {/* 아이디, 이름, 인증번호 입력 영역 */}
          <S.Container $gap={8}>
            <S.LoginModalDescript>*휴대폰 인증으로 비밀번호를 재설정 할 수 있습니다.</S.LoginModalDescript>
            <WOLoginInput id='input01-01' label='이름' name='input01' styleType={'popup'} placeholder='이름을 입력해 주세요.' />
            <WOLoginInput id='input01-01' label='생년월일' name='input01' styleType={'popup'} placeholder='생년월일 6자리를 입력해 주세요. (예시 yymmdd)' />
            <WOLoginInput id='input01-01' label='아이디' name='input01' styleType={'popup'} placeholder='아이디를 입력해주세요.' />
            <WOLoginInput
              id='input01-03'
              label='핸드폰번호'
              name='input01'
              styleType={'popup'}
              placeholder='핸드폰번호를 입력해주세요.'
              button={
                <AuthBtn type='button' className='auth-btn' onClick={() => {}}>
                  인증번호 전송
                </AuthBtn>
              }
            />
            <WOLoginInput id='input01-01' label='인증번호' name='input01' styleType={'popup'} placeholder='인증번호를 입력해 주세요.' time={'05:00'} />
          </S.Container>

          <S.ModalTitleline />

          {/* 비밀번호 입력 영역 */}
          <S.Container>
            <S.Container $gap={6}>
              <WOLoginInput id='input02-06' label='비밀번호' name='input02' styleType={'popup'} placeholder='새 비밀번호를 입력해주세요.' />
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
              <WOLoginInput
                id='input02-07'
                label='새 비밀번호'
                name='input02'
                styleType={'popup'}
                placeholder='새 비밀번호를 한번 더 입력해주세요.'
                error={true}
              />
              {passError && <TextCheckText $vailCheck={'error'}>비밀번호가 일치하지 않습니다</TextCheckText>}
            </S.Container>
          </S.Container>
        </ModalContentArea>
        {/* 버튼 영역 */}
        <ModalButtonArea $nonBoxShadow={true}>
          <ButtonRightArea>
            <WOButton variant={'secondary'} size={'md'} onClick={() => {}}>
              취소
            </WOButton>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}} disabled>
              비밀번호 재설정
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>

      {/* 부서 변경 모달 */}
      <WOModal type={'main'} direction='center' height={515} isOpen={isOpen3} title={'부서변경'} onClose={() => setIsOpen3(false)}>
        <ModalContentArea $gap={20}>
          <S.Container $gap={8}>
            <S.LoginModalDescript>* 관리자 승인 완료 시 부서 변경이 완료됩니다.</S.LoginModalDescript>
            <WOLoginInput id='input01-01' label='아이디' name='input01' styleType={'popup'} placeholder='아이디를 입력해 주세요.' />
            <WOLoginInput id='input01-01' label='이름' name='input01' styleType={'popup'} placeholder='이름을 입력해 주세요.' />
            <WOLoginInput type={'password'} id='input01-01' label='비밀번호' styleType={'popup'} name='input01' placeholder='비밀번호를 입력해 주세요.' />
          </S.Container>
          <S.ModalTitleline />
          <S.Container $gap={8}>
            <S.Container $direction={'row'}>
              <WOComboBox
                label={''}
                optionList={[{ id: 1, label: '서울시청' }]}
                placeholder='소속 지역구청 선택'
                isAutoComplete={true}
                type={'type01'}
                height={48}
              />
              <WOComboBox label={''} optionList={[{ id: 1, label: '부서' }]} placeholder='소속 부서 선택' isAutoComplete={true} type={'type01'} height={48} />
            </S.Container>
          </S.Container>
          <S.Container>
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
          </S.Container>
        </ModalContentArea>
        <ModalButtonArea $nonBoxShadow={true}>
          <ButtonRightArea>
            <WOButton variant={'secondary'} size={'md'} onClick={() => {}}>
              취소
            </WOButton>
            <WOButton variant={'primary'} size={'md'} onClick={() => {}} disabled>
              승인요청
            </WOButton>
          </ButtonRightArea>
        </ModalButtonArea>
      </WOModal>
    </Wrap>
  );
};

export default FindId;

const Wrap = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  background-color: #fff;
  .login {
    &__inner {
      width: 100%;
      height: 100%;
      padding-left: 480px;
      display: flex;
      align-content: stretch;
    }

    &__container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__budle {
      width: 400px;
      .logo-image {
        width: 42px;
        height: 42px;
      }
      .title {
        padding: 12px 0 36px;
        font-size: 24px;
        color: #333;
        font-weight: 700;
        line-height: 36px; /* 36px */
      }
    }
  }

  // notice
  .notice-bar {
    right: 86px;
  }
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

const FormArea = styled.form`
  .btn {
    margin: 36px 0 16px;
    width: 100%;
    height: 52px;
    font-size: 18px;
  }
  .input + .input {
    margin-top: 12px;
  }
`;

const LoginSupportArea = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -2px;
  .text-btn {
    color: var(--C-Dark-08);
    font-size: 14px;
    font-weight: 400;
    text-decoration-line: none;
  }
  .divider {
    display: block;
    width: 2px;
    height: 2px;
    background-color: var(--C-Dark-08);
    margin: 0 4px;
  }
  .bullet {
    color: var(--C-Dark-08);
    padding: 0 7px;
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;

const TextCheckWrap = styled.div`
  ${vaildationTextWrap}
`;

const TextCheckText = styled.div`
  ${vaildationTextStyle}
`;
