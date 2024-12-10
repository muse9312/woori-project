import React from 'react';
import styled from 'styled-components';
import WOIcon from '../common/WOIcon';
import { Link } from 'react-router-dom';

const MainFooter = ({ islogin }) => {
  // logic
  const contactList = [
    {
      id: 1,
      title: '세무관리',
      callNumber: [
        {
          id: 1,
          number: '02-3151-7614 ',
          text: '02) 3151-7614 ',
        },
      ],
    },
    {
      id: 2,
      title: '자금관리',
      callNumber: [
        {
          id: 1,
          number: '02) 3151-7627',
          text: '02-3151-7627',
        },
        {
          id: 2,
          number: '02) 3151-7624',
          text: '02-3151-7624',
        },
      ],
    },
    {
      id: 3,
      title: '사용자관리',
      callNumber: [
        {
          id: 1,
          number: '02) 3151-4554',
          text: '02-3151-4554',
        },
      ],
    },
  ];

  // view
  return (
    <FooterWrap className='footer' $islogin={islogin}>
      <div className='footer-top'>
        <p className='footer__title'>업무 관련 문의</p>
        <ul className='footer__list'>
          {contactList.map((contact) => (
            <li key={contact.id} className='footer__item'>
              <span className='icon-area'>
                <WOIcon icon='call' width={10} height={10} />
              </span>
              <span className='text'>{contact.title}</span>
              {contact.callNumber.map((call) => (
                <a key={call.id} href={`tel:${call.number}`} className='call'>
                  {call.text}
                </a>
              ))}
            </li>
          ))}
        </ul>
      </div>
      <div className='footer-bottom'>
        <div className='inner'>
          <div className='logo-wrap'>
            <div className='logo'></div>
            <div className='copy'>COPYRIGHS WOORI BANK. ALL RIGHTS RESERVED.</div>
          </div>
          <div className='site-wrap'>
            <Link to='' className='site'>
              은행소개
            </Link>
            <Link to='' className='site'>
              신용정보활용체제
            </Link>
            <Link to='' className='site'>
              보호금융상품등록부
            </Link>
            <Link to='' className='site'>
              영업점안내
            </Link>
            <Link to='' className='site'>
              개인신용정보관리보호
            </Link>
            <Link to='' className='site'>
              상품공시실
            </Link>
            <Link to='' className='site'>
              고객광장
            </Link>
            <Link to='' className='site'>
              사고신고
            </Link>
            <Link to='' className='site'>
              보안센터
            </Link>
            <Link to='' className='site'>
              개인정보처리방침
            </Link>
            <Link to='' className='site'>
              전자민원접수
            </Link>
            <Link to='' className='site'>
              웹접근성 이용안내
            </Link>
          </div>
        </div>
      </div>
    </FooterWrap>
  );
};

export default MainFooter;

const FooterWrap = styled.footer`
  z-index: 850;
  width: 100%;
  background-color: rgba(232, 237, 249, 1);
  padding-left: ${(props) => (props.$islogin ? '480px;' : '400px;')};
  min-width: 1660px;
  .footer-top {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;

    .footer {
      &__title {
        font-size: 14px;
        font-weight: 700;
      }
      &__list {
        display: flex;
        align-items: center;
        padding-left: 60px;
      }
      &__item {
        display: flex;
        align-items: center;
        & ~ .footer__item {
          &::before {
            content: '';
            display: block;
            width: 1px;
            height: 16px;
            margin: 0 20px;
            transform: rotate(22deg);
            background: #b9c7ea;
          }
        }
        .icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          &-area {
            display: block;
            position: relative;
            width: 18px;
            height: 18px;
            background-color: rgba(255, 255, 255, 0.43);
            border-radius: 100%;
            margin-right: 3px;
          }
        }
        .text {
          padding: 0 3px;
          color: #405076;
          font-weight: 500;
          font-size: 14px;
        }
        .call {
          display: flex;
          align-items: center;
          color: #788ec2;
          padding: 0 3px;
          font-weight: 400;
          font-size: 14px;
          & ~ .call {
            margin-left: -6px;
            &:before {
              content: ', ';
              white-space: pre;
              display: block;
            }
          }
        }
      }
    }
  }
  .footer-bottom {
    width: 100%;
    height: 240px;
    padding: 60px 60px;
    .inner {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin: 0 auto;
      .logo-wrap {
        display: flex;
        flex-direction: column;
        gap: 12px 0;
        .logo {
          width: 86px;
          height: 24px;
          background: url(/assets/images/etc/footer-logo.svg) no-repeat center / cover;
        }
        .copy {
          color: var(--C-Dark-07);
          font-size: 12px;
          font-weight: 400;
          line-height: 18px;
        }
      }
      .site-wrap {
        display: flex;
        flex-wrap: wrap;
        width: 484px;
        gap: 12px 56px;
        .site {
          width: 124px;
          color: var(--C-Dark-09);
          font-size: 14px;
          font-weight: 400;
          line-height: 21px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
