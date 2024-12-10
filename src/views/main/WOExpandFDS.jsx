import WOButton from '../../components/common/WOButton';
import WOComboBox from '../../components/common/WOComboBox';
import WOMap from '../../components/main/WOMap';
import WOOccurrenceItem from '../../components/main/WOOccurrenceItem';
import WOBorderBox from '../../components/common/WOBorderBox';
import styled, { css } from 'styled-components';
import WOBadge from '../../components/common/WOBadge';
import WOIconButton from '../../components/common/WOIconButton';
import { accountList, areaOptionList, fdsChartOptions, liveEventList, occurrenceList, occurrenceNoAreaList, transactionEventList } from '../../data/response';
import WOEventItem from '../../components/main/WOEventItem';
import WOAccountItem from '../../components/main/WOAccountItem';
import WOChart from '../../components/common/WOChart';
import WOTabs from './../../components/common/WOTabs';
import { useEffect, useState } from 'react';
import WOTabContent from '../../components/common/WOTabContent';
import WOAbnormalityCard from '../../components/main/WOAbnormalityCard';
import { fdsComboStyle } from '../../styles/common.styled';

const WOExpandFDS = ({ user }) => {
  // logic
  const [activeTabID, setActiveTabID] = useState(1);
  const [selectedOccurence, setSelectedOccurence] = useState(null);

  const handleOccurenceClick = (selectedItem) => {
    console.log('selectedItem', selectedItem);
    setSelectedOccurence(selectedItem);
  };

  useEffect(() => {
    user.id !== 1 && setSelectedOccurence(occurrenceNoAreaList[0]);
  }, [user]);

  // view
  return (
    <Wrap>
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
            <div className='map__title-area'>
              <span className='sub-text'>Today. 2023.09.18</span>
              <div className='status'>
                <div className='status__text'>FDS 현황을 확인해 보세요!</div>
                <WOComboBox
                  optionList={areaOptionList}
                  color={'white'}
                  width={160}
                  readonly={user.id !== 1}
                  defaultValue={user && areaOptionList[user.id - 1]}
                />
              </div>
            </div>
            <div className='map__data'>
              <WOMap isExpand={true} />
              <ChartWrap>
                <ChartTitle>
                  <SubTitle>금월일자별 추이 </SubTitle>
                  <span className='sub-text'>2023.09.18 기준</span>
                </ChartTitle>
                <WOChart options={fdsChartOptions} type={'fds'} />
              </ChartWrap>
            </div>
          </MapArea>
        </Content>
        {/* END: map영역 */}
        {/* START: 세부 발생항목 영역 */}
        <Content>
          <OccurrenceArea className={`user-${user && user.id}`} $user={user}>
            <div className='occurrence__detail'>
              <SubTitle>세부 발생 항목</SubTitle>
              <div className='occurrence__content'>
                <div className='occurrence__detail-list'>
                  {user.id === 1
                    ? occurrenceList.map((occurrence) => (
                        <WOOccurrenceItem
                          key={occurrence.id}
                          item={occurrence}
                          isActive={selectedOccurence && selectedOccurence.id === occurrence.id}
                          onClick={handleOccurenceClick}
                        />
                      ))
                    : occurrenceNoAreaList.map((occurrence) => (
                        <WOOccurrenceItem
                          key={occurrence.id}
                          item={occurrence}
                          isActive={selectedOccurence && selectedOccurence.id === occurrence.id}
                          onClick={handleOccurenceClick}
                          width={164}
                        />
                      ))}
                </div>
                {selectedOccurence && (
                  <WOAbnormalityCard
                    title={selectedOccurence.title}
                    count={selectedOccurence.count}
                    severity={selectedOccurence.severity}
                    dataList={selectedOccurence.dataList}
                    width={user.id !== 1 && 360}
                  />
                )}
              </div>
            </div>
            {(user.id !== 1 || !selectedOccurence) && (
              <div className='occurrence__account'>
                <SubTitle>계좌현황</SubTitle>
                <ul className='account-list'>
                  {accountList.map((account) => (
                    <WOAccountItem key={account.id} account={account} />
                  ))}
                </ul>
              </div>
            )}
          </OccurrenceArea>
        </Content>
        {/* END: 세부 발생항목 영역 */}
        {/* START: 실시간 이벤트 영역 */}
        <Content className='event'>
          <LiveEventArea>
            <SubTitle>실시간 이벤트</SubTitle>
            <WOBorderBox height='263'>
              <ul>
                {liveEventList.map((event) => (
                  <WOEventItem key={event.id} event={event} type='live' />
                ))}
              </ul>
            </WOBorderBox>
          </LiveEventArea>
          <TransactionEventArea>
            <SubTitle className='flex align-center justify-space-between'>
              금일 기준 거래 이벤트{' '}
              <WOTabs activeTabID={activeTabID} onChange={(selectedTabID) => setActiveTabID(selectedTabID)} tabs={transactionEventList} type='type2' />
            </SubTitle>
            {transactionEventList.map((event) => (
              <WOTabContent key={event.id} id={event.id} activeTabId={activeTabID}>
                <WOBorderBox height='263'>
                  <ul className='transaction-list'>
                    {event.data.map((item) => (
                      <WOEventItem key={item.id} event={item} type='transaction' />
                    ))}
                  </ul>
                </WOBorderBox>
              </WOTabContent>
            ))}
          </TransactionEventArea>
        </Content>
        {/* END: 실시간 이벤트 영역 */}
      </ContentWrap>
    </Wrap>
  );
};

export default WOExpandFDS;

const Wrap = styled.div`
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar-track {
    background: rgba(237, 237, 243, 0); /* 스크롤바 트랙 색상 */
  }
`;

const InfoWrap = styled.div`
  margin-left: auto;
  position: relative;
  padding: 30px 36px 32px;
  font-size: 14px;
  font-weight: 400;

  width: 400px;
  height: 120px;
  border-radius: 0px 0px 0px 16px;
  background: linear-gradient(5deg, rgba(176, 235, 203, 0.1) 6.12%, rgba(153, 163, 255, 0.1) 68.68%);
  z-index: 10;
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: url('/assets/images/menu/fds-border.svg') no-repeat center / cover;
    pointer-events: none;
  }

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
  padding: 0 60px 40px;
  margin-top: -62px;
`;

const MapArea = styled.div`
  .map {
    &__title-area {
      width: calc(50% - 12px);
      max-width: 528px;
    }
    &__data {
      display: flex;
      align-items: center;
      gap: 24px;

      // 컴포넌트
      .map-wrap {
        width: 100%;
        max-width: 528px;
      }
    }
  }
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
  display: flex;
  align-items: center;
  gap: 24px;
  .occurrence {
    &__detail {
      width: 100%;

      &-list {
        height: 250px;
        display: flex;
        align-items: stretch;
        gap: 8px;
        .occurrence-item {
          width: 112px;
        }
      }
    }
    &__content {
      display: flex;
      align-items: stretch;
      height: 250px;
      gap: 24px;
    }
    &__account {
      width: 100%;
      /* min-width: 344px; */
    }
  }

  ${(props) =>
    props.$user.id !== 1
      ? css`
          .occurrence {
            &__detail {
              &-list {
                flex-wrap: wrap;
                max-width: 336px;
                .occurrence-item {
                  width: 164px;
                  padding: 14px;
                  height: fit-content;
                }
              }
            }
            &__account {
              max-width: 336px;
              .account-list {
                width: 100%;
              }
            }
          }
        `
      : css``}
`;

const LiveEventArea = styled.div`
  width: 100%;
`;

const TransactionEventArea = styled.div`
  width: 100%;
  .transaction {
    &-list {
      padding: 8px 0;
    }
  }
`;

const Content = styled.div`
  &.event {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  & + & {
    padding-top: 24px;
  }
`;

const ChartWrap = styled.div`
  width: 100%;
`;

const ChartTitle = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  padding-bottom: 18px;
  ${SubTitle} {
    margin-bottom: 0;
  }
  .sub-text {
    color: var(--Blue-04);
    font-size: 12px;
    font-weight: 400;
  }
`;
