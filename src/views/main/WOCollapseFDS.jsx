import WOButton from '../../components/common/WOButton';
import WOComboBox from '../../components/common/WOComboBox';
import WOMap from '../../components/main/WOMap';
import WOOccurrenceItem from '../../components/main/WOOccurrenceItem';
import WOBorderBox from '../../components/common/WOBorderBox';
import styled, { css } from 'styled-components';
import WOBadge from '../../components/common/WOBadge';
import WOIconButton from '../../components/common/WOIconButton';
import { accountList, areaOptionList, liveEventList, occurrenceList, occurrenceNoAreaList } from '../../data/response';
import { Swiper, SwiperSlide } from 'swiper/react';
import WOSlider from '../../components/common/WOSlider';
import WOEventItem from '../../components/main/WOEventItem';
import WOAccountItem from '../../components/main/WOAccountItem';
import { useEffect, useState } from 'react';
import { fdsComboStyle } from '../../styles/common.styled';

const WOCollapseFDS = ({ user }) => {
  // logic
  const allAreaSliderOption = {
    spaceBetween: 0,
    slidesPerView: 'auto',
    slidesPerGroup: 3,
  };
  const eachSliderOption = {
    spaceBetween: 8,
    slidesPerView: 1,
    slidesPerGroup: 1,
  };
  const [sliderTitle, setSliderTitle] = useState('세부 발생 항목');

  const [sliderOption, setSliderOption] = useState(allAreaSliderOption);

  const handleSlideChange = (data) => {
    setSliderTitle(data.isEnd ? '계좌현황' : '세부 발생 항목');
  };

  useEffect(() => {
    setSliderOption(user.id === 1 ? allAreaSliderOption : eachSliderOption);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // view
  return (
    <>
      <InfoWrap>
        <div className='info__name'>
          {user.group} <span className='bold'>김우리님</span>
        </div>
        <div className='info__noti'>
          <WOBadge count={2}>
            <WOIconButton icon={'bell'} width={40} height={40} />
          </WOBadge>
        </div>
        <div className='info__document'>
          <ul className='info__document-list'>
            {user.id === 1 && <li className='info__document-item'>Q&A 01건</li>}
            <li className='info__document-item'>문서 0건</li>
            <li className='info__document-item'>결재 211건</li>
          </ul>
          <WOButton variant='personal'>로그아웃</WOButton>
        </div>
      </InfoWrap>
      <ContentWrap>
        {/* START: map영역 */}
        <Content>
          <MapArea>
            <span className='sub-text'>Today. 2023.09.18</span>
            <div className='status'>
              <div className='status__text'>FDS 현황</div>
              <WOComboBox
                optionList={areaOptionList}
                width={160}
                readonly={user.id !== 1}
                defaultValue={user && areaOptionList[user.id - 1]}
                isAutoComplete={true}
              />
            </div>
            <WOMap isExpand={false} />
          </MapArea>
        </Content>
        {/* END: map영역 */}
        {/* START: 세부 발생항목 영역 */}
        <Content>
          <OccurrenceArea $user={user}>
            <SubTitle>{sliderTitle}</SubTitle>
            <WOSlider isNavigation={true} {...sliderOption} height={250} onSlideChange={handleSlideChange}>
              {user.id === 1 ? (
                occurrenceList.map((occurrence) => (
                  <CustomSwiperSlide $type={'occurrence'} $user={user} key={occurrence.id}>
                    <WOOccurrenceItem item={occurrence} />
                  </CustomSwiperSlide>
                ))
              ) : (
                <CustomSwiperSlide $type={'occurrence'} $user={user}>
                  {occurrenceNoAreaList.map((occurrence) => (
                    <WOOccurrenceItem key={occurrence.id} item={occurrence} />
                  ))}
                </CustomSwiperSlide>
              )}

              <CustomSwiperSlide $type={'account'} $user={user}>
                <ul>
                  {accountList.map((account) => (
                    <WOAccountItem key={account.id} account={account} />
                  ))}
                </ul>
              </CustomSwiperSlide>
            </WOSlider>
            <Swiper></Swiper>
          </OccurrenceArea>
        </Content>
        {/* END: 세부 발생항목 영역 */}
        {/* START: 실시간 이벤트 영역 */}
        <Content>
          <LiveEventArea>
            <SubTitle>실시간 이벤트</SubTitle>
            <WOBorderBox>
              <ul>
                {liveEventList.map((event) => (
                  <WOEventItem key={event.id} event={event} type='live' />
                ))}
              </ul>
            </WOBorderBox>
          </LiveEventArea>
        </Content>
        {/* END: 실시간 이벤트 영역 */}
      </ContentWrap>
    </>
  );
};

export default WOCollapseFDS;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  min-width: 400px;
  padding: 38px 32px 36px;
  height: 134px;
  font-size: 14px;
  font-weight: 400;
  background-color: #1a2c49;
  .info {
    &__name {
      font-size: 20px;
      font-weight: 400;
      line-height: 24px;
    }
    &__noti {
      position: absolute;
      right: 28px;
      top: 28px;
    }
    &__document {
      margin-top: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &-list {
        display: flex;
        font-size: 14px;
      }
      &-item {
        display: flex;
        align-items: center;
        & + .info__document-item {
          &::before {
            content: '';
            display: block;
            width: 1px;
            height: 12px;
            margin: 0 10px;
            background-color: #86909f;
          }
        }
      }
    }
  }
  .btn {
    padding: 2px 8px;
    color: #c9c9d0;
    font-weight: 400;
  }
`;

const ContentWrap = styled.div`
  position: relative;
  height: calc(100% - 134px);
  padding: 22px 32px 40px;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    background: rgba(237, 237, 243, 0); /* 스크롤바 트랙 색상 */
  }
`;

const MapArea = styled.div`
  .sub-text {
    font-size: 14px;
    font-weight: 400;
    color: #c9c9d0;
  }

  .status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    &__text {
      font-size: 28px;
      font-weight: 600;
    }
  }
  ${fdsComboStyle}
`;

const SubTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 18px;
  font-weight: 600;
  line-height: 27px;
`;

const OccurrenceArea = styled.div`
  width: 100%;
  position: relative;
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  padding-right: 8px;
  width: 33.3%;
  &:nth-child(3n) {
    width: calc(33.3% + 8px);
  }

  ${(props) =>
    props.$type === 'account' &&
    css`
      width: 100%;
    `}
  /* ${(props) =>
    props.$user.id === 1 &&
    props.$type === 'occurrence' &&
    css`
      width: 33.4%;
    `} */
  ${(props) =>
    props.$user.id !== 1 && props.$type === 'occurrence'
      ? css`
          width: 100%;
          padding-right: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          .occurrence-item {
            width: calc(50% - 4px);
            padding: 13px 12px;
            height: fit-content;
          }
        `
      : css``}
`;

const LiveEventArea = styled.div``;

const Content = styled.div`
  & + & {
    padding-top: 24px;
  }
`;

// const ChartWrap = styled.div``;
