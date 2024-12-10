import React, { useCallback, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { menuList, subMenuList } from '../../data/response';
import WOMenuIconButton from '../common/WOMenuIconButton';

const Lnb = ({ onChange }) => {
  // logic
  const [isOpen, setIsOpen] = useState(false);
  const [isIconHover, setIsIconHover] = useState(false);
  const [isMenuHover, setIsMenuHover] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const [isOpenSubMenu, setIsOpenSubMenu] = useState(null);

  const initialIsOpenSubMenu = (data) => data.map((item) => ({ id: item.id, isOpen: false }));

  const handleHover = (isIconHover, menu) => {
    setActiveMenu(menu);
    setIsIconHover(isIconHover);
    isIconHover && toggleIsOpen(true);
  };

  const handleSubMenuOpen = (subMenu) => {
    setIsOpenSubMenu((prev) => prev.map((item) => (item.id === subMenu.id ? { ...item, isOpen: !item.isOpen } : item)));
  };

  const toggleIsOpen = useCallback(
    (isLnbOpen) => {
      setIsOpen(isLnbOpen);
      onChange && onChange(isLnbOpen);
    },
    [onChange]
  );

  useEffect(() => {
    toggleIsOpen(!isIconHover && !isMenuHover ? false : true);
  }, [isIconHover, isMenuHover, toggleIsOpen]);

  useEffect(() => {
    setIsOpenSubMenu(initialIsOpenSubMenu(subMenuList));
  }, []);

  // view
  return (
    <Wrap className='lnb-wrap'>
      {/* START: 메뉴바 */}
      <MenuWrap className='lnb'>
        <Logo to='/' />
        <IConGroup>
          {menuList.map((menu, index) => {
            // 시스템 관리
            if (index === menuList.length - 1) {
              return (
                <SystemButton key={menu.id} onMouseOver={() => handleHover(true, menu)} onMouseOut={() => handleHover(false, menu)}>
                  {menu.title}
                </SystemButton>
              );
            } else {
              // 나머지 항목들
              return (
                <WOMenuIconButton
                  key={menu.id}
                  imageFile={`/assets/images/menu/${menu.imageName}`}
                  text={menu.title}
                  activeMenu={activeMenu}
                  isMenuOpen={isOpen}
                  onHover={(isIconHover) => handleHover(isIconHover, menu)}
                />
              );
            }
          })}
        </IConGroup>
      </MenuWrap>
      {/* END: 메뉴바 */}
      {/* START: 메뉴 클릭시 보여질 콘텐츠 */}
      <MenuContentWrap className='lnb-menu' $isOpen={isOpen} onMouseOver={() => setIsMenuHover(true)} onMouseOut={() => setIsMenuHover(false)}>
        {activeMenu && (
          <MenuContentInnerWrap>
            <MenuContentHeader>
              <span className='title'>{`# ${activeMenu.title}`}</span>
              <span className='title city'>서울특별시</span>
            </MenuContentHeader>
            <nav>
              {subMenuList.map((subMenu) => (
                <SubMenuList key={subMenu.id}>
                  <li>
                    <button type='button' className='content-button' onClick={() => handleSubMenuOpen(subMenu)}>
                      {subMenu.title}
                    </button>
                    <div>
                      <SubMenuTwoDepthList $isOpen={isOpenSubMenu.find((item) => item.id === subMenu.id).isOpen} $itemLength={subMenu.children.length}>
                        {subMenu.children.map((item) => (
                          <li key={item.id}>
                            <Link to={item.path} className='content-inner-button'>
                              {item.title}
                            </Link>
                          </li>
                        ))}
                      </SubMenuTwoDepthList>
                    </div>
                  </li>
                </SubMenuList>
              ))}
            </nav>
          </MenuContentInnerWrap>
        )}
      </MenuContentWrap>
      {/* END: 메뉴 클릭시 보여질 콘텐츠 */}
      <i className='back-drop' />
    </Wrap>
  );
};

export default Lnb;

const itemHeight = 38;

const Wrap = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
`;

// menu
const MenuWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 80px;
  height: 100%;

  padding-top: 22px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%), linear-gradient(6deg, #8fb7ea -0.26%, #8e99ff 89.59%);
`;

const Logo = styled(Link)`
  display: block;
  width: 36px;
  height: 36px;
  margin: 0 auto;
  background: url(/assets/images/menu/logo.svg) no-repeat center / cover;
`;

const IConGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 54px 0 0px;
`;

const SystemButton = styled.button`
  position: relative;
  width: 100%;
  margin-top: auto;
  padding: 10px 0;
  font-size: 13px;
  font-weight: 600;
  color: #fff;
  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 5px;
    right: 5px;
    height: 1px;
    opacity: 0.6;
    background: #fff;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    &::before {
      display: none;
    }
  }
`;

// menu-contents
const MenuContentWrap = styled.div`
  position: absolute;
  top: 0;
  left: 80px;
  height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(0deg, #3a3d64 0%, #1d2e4b 100%);
  transition: 0.5s;
  color: #fff;

  // 딤처리
  & + .back-drop {
    display: block;
    position: fixed;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 80px;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  ${(props) =>
    props.$isOpen
      ? css`
          width: 400px;
          & + .back-drop {
            visibility: visible;
            opacity: 1;
          }
        `
      : css`
          width: 0;
          & + .back-drop {
            visibility: hidden;
            opacity: 0;
          }
        `};
`;

const MenuContentInnerWrap = styled.div`
  width: 400px;
`;

const MenuContentHeader = styled.div`
  padding: 42px 32px 68px;
  display: flex;
  align-items: center;
  .title {
    display: block;
    font-size: 18px;
    font-weight: 600;
  }
  .city {
    font-size: 20px;
    font-weight: 700;
    margin-left: auto;
  }
`;

// 1depth
const SubMenuList = styled.ul`
  padding: 0 24px;
  .content-button {
    color: #fff;
    text-align: left;
    display: block;
    padding: 10px 22px;
    width: 100%;
    background: url('/assets/images/lnb-right.svg') no-repeat 2px 14px/14px 16px;
  }
`;

// 2depth
const SubMenuTwoDepthList = styled.ul`
  overflow: hidden;
  transition: 0.5s;
  height: auto;
  ${(props) =>
    props.$isOpen && props.$itemLength ? `height: calc(${props.$itemLength} * ${itemHeight}px + 16px); padding: 4px 0 12px;` : `height: 0; padding: 0;`};
  li {
    &:first-of-type {
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      overflow: hidden;
    }
    &:last-of-type {
      border-bottom-right-radius: 12px;
      border-bottom-left-radius: 12px;
      overflow: hidden;
    }
  }
  .content-inner-button {
    display: block;
    width: 100%;
    height: 38px;
    padding: 8px 24px;
    font-size: 14px;
    text-align: left;
    color: rgba(255, 255, 255, 0.6);
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
