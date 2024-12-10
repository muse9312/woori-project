import { css, styled } from 'styled-components';
import WOToggleButton from '../common/WOToggleButton';
import { menuDatas } from '../../data/menuDatas';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import WOIcon from '../common/WOIcon';
import WOIconButton from '../common/WOIconButton';

const MenuList = ({ isOpen, isClose }) => {
  const [searchTerm, setSearchTerm] = useState(null); // 검색 값
  const [inputValue, setInputValue] = useState(''); // 검색 input 입력 값
  const [searchResultsCount, setSearchResultsCount] = useState(0); // 검색 결과 개수 상태
  const titleRefs = useRef({}); // title 참초
  const [activeAnchor, setActiveAnchor] = useState(null); // 활성화된 앵커

  // 전체 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      // 메뉴가 열리면 body에 스크롤 막는 클래스 추가
      document.body.classList.add('scroll-fix');
    } else {
      // 메뉴가 닫히면 클래스 제거
      document.body.classList.remove('scroll-fix');
    }
  }, [isOpen]);

  // 스크롤 위치에 따른 앵커 활성화 로직
  useEffect(() => {
    const menuWrapper = document.querySelector('.menu-wrapper');

    // 스크롤 이벤트
    const handleScroll = () => {
      // 화면 상단으로부터 현재 스크롤 위치
      const scrollY = menuWrapper.scrollTop;

      // 메뉴 데이터를 순회하며 화면에 보이는 메뉴 항목 찾기
      menuDatas.forEach((depth1) => {
        const element = titleRefs.current[depth1.title];

        if (element) {
          // 요소의 상단 위치와 화면의 스크롤 위치를 비교
          const position = element.offsetTop - 400;
          if (scrollY >= position) {
            setActiveAnchor(depth1.title);
          }
        }
      });
    };

    menuWrapper.addEventListener('scroll', handleScroll);

    return () => {
      // .menu-wrapper 요소가 존재하는 경우에만 removeEventListener를 호출
      if (menuWrapper) {
        menuWrapper.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // anchor 클릭시 스크롤 이동 로직
  const scrollToTitle = (title) => {
    const element = titleRefs.current[title];
    if (element) {
      // 요소의 상단 위치에 266픽셀을 더함
      let position = element.offsetTop - 266;

      if (searchTerm) {
        position -= 34;
      }
      // 스크롤 이동
      document.querySelector('.menu-wrapper').scrollTo({
        top: position, // 상단 좌표를 position으로 설정
        left: 0, // 왼쪽 좌표를 0으로 설정
        behavior: 'smooth',
      });
    }
  };

  // 검색 하이라이트 구현
  const handleInputChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue); // 입력 값 업데이트
    setSearchTerm(newInputValue); // 검색어 업데이트
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼의 기본 제출 동작을 막음
    setSearchTerm(inputValue); // 입력된 값을 검색어로 설정
  };

  // 특수문자 이스케이프 처리
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // 검색어 하이라이트를 위한 컴포넌트
  const HighlightText = ({ text, highlight }) => {
    // highlight가 null이거나 빈 문자열인 경우, 처리하지 않고 반환
    if (!highlight) {
      return <span>{text}</span>;
    }

    // 검색어에 특수 문자가 포함되어 있을 경우 이스케이프 처리
    const escapedHighlight = escapeRegExp(highlight);

    // text가 escapedHighlight를 포함하지 않는 경우, 원래 text를 반환
    if (!text.includes(highlight)) {
      return <span>{text}</span>;
    }

    const parts = text.split(new RegExp(`(${escapedHighlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, index) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={index} className='highlighted' style={highlightStyle}>
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  // 검색 결과 개수
  const countHighlightedElements = () => {
    return document.querySelectorAll('.highlighted').length;
  };

  const updateSearchResultsCount = () => {
    // 검색 결과 개수 계산 로직
    const count = countHighlightedElements();
    setSearchResultsCount(count); // 계산된 개수를 상태에 저장
  };

  useEffect(() => {
    if (searchTerm) {
      updateSearchResultsCount(); // 검색어가 변경되었을 때 검색 결과 개수 업데이트
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  // 하이라이트 텍스트 컬러
  const highlightStyle = {
    color: '#3284FF',
  };

  // isClose 함수 수정
  const handleClose = () => {
    // 검색 상태와 입력 값 초기화
    setSearchTerm(null);
    setInputValue('');

    // 원래의 isClose 함수 호출
    if (isClose) isClose();
  };

  // open 시 스크롤 초기화
  useEffect(() => {
    isOpen && // 스크롤 초기화
      document.querySelector('.menu-wrapper').scrollTo({
        top: 0, // 상단 좌표를 0으로 설정
        left: 0, // 왼쪽 좌표를 0으로 설정
        // behavior: 'smooth',
      });
  }, [isOpen]);

  // 입력 필드의 스타일을 결정하는 함수
  const inputStyle = (inputValue) => {
    return {
      backgroundColor: inputValue ? 'rgba(51, 51, 51, 0.05)' : 'transparent', // 입력값이 있으면 회색 배경, 없으면 투명
      padding: inputValue ? '12px' : '0px', // 입력값이 있으면 padding 적용
    };
  };

  //검색 input 초기화
  const onReset = () => {
    setInputValue('');
    setSearchTerm(null);
    setSearchResultsCount(0);
  };

  return (
    <>
      <Wrapper $isOpen={isOpen} className='menu-wrapper'>
        <SearchArea>
          <div className='search-wrap'>
            <div className='inner'>
              <div className='title-box'>
                <div className='title'>찾으시는 내용이 무엇인가요?</div>
                <div className='work'>
                  자주 쓰는 업무 총&nbsp;<span>10</span>건
                </div>
              </div>
              <div className='search-box'>
                <SearchForm onSubmit={handleSubmit}>
                  <label htmlFor='menu-search01'>메뉴 검색 영역</label>
                  <WOIcon width={24} height={24} icon='search' />
                  <div className='input-wrap'>
                    {inputValue && <button type='button' className='clear-btn' onClick={onReset}></button>}
                    <input
                      type='text'
                      name='menu-search01'
                      id='menu-search01'
                      style={inputStyle(inputValue)}
                      value={inputValue}
                      placeholder='업무 키워드를 검색해보세요. 예시 : 세입'
                      onChange={handleInputChange}
                    />
                  </div>
                </SearchForm>
                {searchTerm && (
                  <div className='search-num'>
                    <span>"{searchTerm}"</span> 에 대해 총 {searchResultsCount}건이 검색되었습니다.
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='anchor-wrap'>
            <div className='inner'>
              {menuDatas.map((depth1) => (
                <button
                  key={depth1.id}
                  type='button'
                  className={`anchor ${activeAnchor && (depth1.title === activeAnchor ? 'active' : '')}`}
                  onClick={() => scrollToTitle(depth1.title)}>
                  {depth1.title}
                </button>
              ))}
            </div>
          </div>
        </SearchArea>
        <MenuListArea>
          {menuDatas.map((depth1) => (
            <MenuListWrap key={depth1.id} ref={(el) => (titleRefs.current[depth1.title] = el)}>
              <MenuListDepth1>
                <MenuTitle>{depth1.title}</MenuTitle>
              </MenuListDepth1>
              <MenuListBox>
                {depth1.children &&
                  depth1.children.map((column) => (
                    <MenuColumn key={column.id}>
                      {column.children &&
                        column.children.map((depth2) => (
                          <MenuListDepth2
                            key={depth2.id}
                            to={depth2.path}
                            as={depth2.tabItems || depth2.children ? 'div' : ''}
                            className={depth2.tabItems || depth2.children ? 'has-depth' : ''}>
                            <MenuTitle>
                              <HighlightText text={depth2.title} highlight={searchTerm} />
                              {!depth2.children && !depth2.tabItems && <WOToggleButton width={16} height={16} icon='star' />}
                            </MenuTitle>
                            {depth2.tabItems && (
                              <MenuListTabWrap>
                                <div className='menu-wrap'>
                                  {depth2.tabItems.map((tabItem) => (
                                    <MenuListTab key={tabItem.id} to={tabItem.path}>
                                      <MenuTitle>
                                        <HighlightText text={tabItem.title} highlight={searchTerm} />
                                      </MenuTitle>
                                    </MenuListTab>
                                  ))}
                                </div>
                                <div className='btn-wrap'>
                                  <WOToggleButton width={16} height={16} icon='star' />
                                </div>
                              </MenuListTabWrap>
                            )}
                            {depth2.children && (
                              <>
                                {depth2.children.map((depth3) => (
                                  <MenuListDepth3 key={depth3.id} to={depth3.path}>
                                    <MenuTitle>
                                      <HighlightText text={depth3.title} highlight={searchTerm} />
                                      <WOToggleButton width={16} height={16} icon='star' />
                                    </MenuTitle>
                                  </MenuListDepth3>
                                ))}
                              </>
                            )}
                          </MenuListDepth2>
                        ))}
                    </MenuColumn>
                  ))}
              </MenuListBox>
            </MenuListWrap>
          ))}
        </MenuListArea>
        <BtnWrap>
          <WOIconButton width={24} height={24} icon='menu-close' onClick={handleClose} />
        </BtnWrap>
      </Wrapper>
    </>
  );
};

export default MenuList;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), linear-gradient(180deg, #ebedff 0%, #ffeaea 100%);
  opacity: 0;
  visibility: hidden;
  transition: 0.5s;
  overflow: overlay;
  z-index: 4000;
  ${(props) =>
    props.$isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `};
`;

// 메뉴 리스트

const MenuListArea = styled.div`
  width: 1000px;
  margin: 0 auto;
  padding: 282px 0 93px;
`;

// 검색 영역

const SearchArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0px 4px 9px 0px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(18px);
  z-index: 10;
  &:has(.search-num) {
    & + ${MenuListArea} {
      padding: 314px 0 93px;
    }
  }
  .inner {
    width: 1000px;
    margin: 0 auto;
  }
  .search-wrap {
    padding: 50px 0 0;
    border-bottom: 1px solid #1d2e4b;
    .title-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .title {
        color: #333;
        font-size: 28px;
        font-weight: 700;
        line-height: 28px;
      }
      .work {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36px;
        padding: 0px 16px;
        border-radius: 26px;
        background: var(--Grad-BG-02);
        color: var(--White);
        font-size: 14px;
        font-weight: 400;
        line-height: 15px;
        span {
          font-weight: 600;
        }
      }
    }
    .search-box {
      margin-top: 28px;
      form {
        margin-bottom: 32px;
      }
    }
    .search-box:has(.search-num) {
      form {
        margin-bottom: 20px;
      }
      .search-num {
        margin-bottom: 20px;
        color: var(--warm-dark-10);
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        span {
          color: var(--Blue-01);
          font-weight: 700;
        }
      }
    }
  }
  .anchor-wrap {
    height: 72px;
    margin-top: auto;
    .inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
    }
    .anchor {
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      color: rgba(119, 119, 119, 0.8);
      &.active {
        color: var(--W-Dark-11);
        font-weight: 700;
      }
    }
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0 12px;
  label {
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
  }
  .input-wrap {
    position: relative;
    input {
      width: 283px;
      height: 38px;
      padding: 0 28px 0 12px;
      border-radius: 8px;

      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      background: unset;
      color: #333;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: var(--W-Dark-04);
      }
    }
    .clear-btn {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
      background: url(/assets/images/icon/input-clear-black.svg) no-repeat center / cover;
    }
  }
`;

const MenuListWrap = styled.div`
  & + & {
    margin-top: 36px;
  }
`;
const MenuListBox = styled.div`
  display: flex;
`;
const MenuColumn = styled.div`
  & + & {
    margin-left: 32px;
  }
`;
const MenuTitle = styled.div`
  padding: 16px 12px;
  color: var(--W-Dark-11);
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;

const MenuListDepth1 = styled.div`
  margin-bottom: 16px;
  border-bottom: 1px solid rgba(29, 46, 75, 0.5);
`;

const MenuListDepth2 = styled(Link)`
  display: block;
  width: 312px;
  & + & {
    margin-top: 4px;
  }
  &.has-depth + .has-depth {
    margin-top: 16px;
  }

  ${MenuTitle} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 6px 12px;
    color: var(--W-Dark-10);
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    &:hover {
      text-decoration: underline;
    }
  }
  &.has-depth {
    > ${MenuTitle} {
      &:hover {
        text-decoration: unset;
      }
    }
  }
`;
const MenuListDepth3 = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 312px;
  & + & {
    margin-top: 4px;
  }
  ${MenuTitle} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 4px 12px;
    color: var(--W-Dark-10);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const MenuListTabWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 4px;
  .menu-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px 0;
    background-color: rgba(255, 255, 255, 0.5);
    padding: 4px;
    border-radius: 8px 0px 8px 8px;
  }
  .btn-wrap {
    flex: 0 0 auto;
    height: fit-content;
    padding: 12px 12px 12px 8px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0px 20px 20px 0px;
  }
`;
const MenuListTab = styled(Link)`
  display: block;
  ${MenuTitle} {
    padding: 4px 12px;
    font-weight: 400;
  }
`;

const BtnWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 68px;
  height: 60px;
  border: 1px solid #8892a2;
  border-top: unset;
  border-right: unset;
  border-radius: 0 0 0 24px;
  z-index: 20;

  .icon-btn {
    position: absolute;
    top: 18px;
    right: 18px;
  }
`;
