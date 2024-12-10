import React, { useRef, useState } from 'react';
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';
import styled from 'styled-components';
import WOIcon from './WOIcon';

// import { Autoplay } from 'swiper';
import 'swiper/css/autoplay';

const WOSlider = ({ spaceBetween, slidesPerView, slidesPerGroup, isNavigation, height, onSlideChange, children }) => {
  // logic
  const initialButtons = [
    {
      id: 1,
      direction: 'prev',
      disabled: false,
    },
    {
      id: 2,
      direction: 'next',
      disabled: false,
    },
  ];
  const swiperRef = useRef();

  const [buttons, setButtons] = useState(initialButtons);

  const handleClick = (direction) => {
    direction === 'prev' ? swiperRef.current.slidePrev() : swiperRef.current.slideNext();
  };

  const handleChange = (data) => {
    onSlideChange && onSlideChange(data);
    const { isBeginning, isEnd } = data;
    if (isBeginning) {
      const result = buttons.map((button) => (button.direction === 'prev' ? { ...button, disabled: true } : { ...button, disabled: false }));
      setButtons(result);
      return;
    }
    if (isEnd) {
      const result = buttons.map((button) => (button.direction === 'next' ? { ...button, disabled: true } : { ...button, disabled: false }));
      setButtons(result);
      return;
    }
    // 둘다 false인 경우 (가운데인 경우)
    setButtons((prev) => prev.map((button) => ({ ...button, disabled: false })));
  };

  const handleInit = (swiper) => {
    swiperRef.current = swiper;
    setButtons((prev) => prev.map((button) => (button.direction === 'prev' ? { ...button, disabled: true } : { ...button })));
  };

  // view
  return (
    <>
      <CustomSwiper
        className='custom-swiper'
        height={height}
        navigation={!!isNavigation}
        modules={[Navigation, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        slidesPerGroup={slidesPerGroup}
        touchRatio={false}
        onBeforeInit={(swiper) => handleInit(swiper)}
        onSlideChange={handleChange}>
        {children}
      </CustomSwiper>
      {isNavigation && (
        <>
          {buttons.map((button) => (
            <NavigationButton key={button.id} disabled={button.disabled} className={button.direction} onClick={() => handleClick(button.direction)}>
              <WOIcon icon={'arrow-slider'} width={14} height={14} />
            </NavigationButton>
          ))}
        </>
      )}
    </>
  );
};

export default WOSlider;

const CustomSwiper = styled(Swiper)`
  height: ${(props) => `${props.height}px` || 'auto'};
  // navigation
  /* swiper-button-prev swiper-button-disabled */
  [class^='swiper-button'] {
    display: none;
  }
`;

const NavigationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 0;
  right: 0;
  background: #0e213f;
  border-radius: 100px;
  &:disabled {
    opacity: 0.4;
  }
  &.prev {
    right: 30px;
    transform: rotate(180deg);
  }
`;
