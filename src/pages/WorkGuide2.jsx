import React, { useEffect, useState } from 'react';
import FloatingButton from '../components/layout/FloatingButton';
import WOMainSelectWorkArea from '../views/WOMainSelectWorkArea';
import WOModal, { GuideModalContent } from '../components/common/WOModal';
import WOTabContent from '../components/common/WOTabContent';
import WOTabs from '../components/common/WOTabs';
const WorkGuide2 = ({ user }) => {
  const [activeTabID, setActiveTabID] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // 1이면 메인_업무가이드_구청총괄
  // 2이면 메인_업무가이드_구청부서
  // 3이면 메인_업무가이드_구청부서_세입있는부서
  const [isOption] = useState(2);

  useEffect(() => {
    if (!isOpen) {
      setActiveTabID(1);
    }
  }, [isOpen]);

  // logic
  const handleClick = () => {
    setIsOpen(true);
  };
  // view
  return (
    <>
      <WOMainSelectWorkArea user={user} />
      <FloatingButton text={'업무가이드'} onClick={handleClick} />

      <WOModal size={'xl'} type={'guide'} direction='center' height={640} isOpen={isOpen} title={'가이드'} onClose={() => setIsOpen(false)}>
        <div>
          <WOTabs
            type={'guide'}
            activeTabID={activeTabID}
            onChange={(selectedTabID) => setActiveTabID(selectedTabID)}
            tabs={[
              { id: 1, name: '업무 가이드' },
              { id: 2, name: '공금 계좌번호 체계 가이드' },
            ]}
          />
          <GuideModalContent>
            <WOTabContent id={1} activeTabId={activeTabID}>
              <div className='img-wrap tab1'>
                {isOption === 1 && <img src={'/assets/images/temp/guide-contents-1.svg'} alt='guideImg01' />}
                {isOption === 2 && <img src={'/assets/images/temp/guide-contents-2.svg'} alt='guideImg02' />}
                {isOption === 3 && <img src={'/assets/images/temp/guide-contents-3.svg'} alt='guideImg03' />}
              </div>
            </WOTabContent>
            <WOTabContent id={2} activeTabId={activeTabID}>
              <div className='img-wrap tab2'>
                <img src={'/assets/images/temp/guide-contents-4.svg'} alt='guideImg04' />
              </div>
            </WOTabContent>
          </GuideModalContent>
        </div>
      </WOModal>
    </>
  );
};

export default WorkGuide2;
