import { alert, confirm } from '../data/common';
/** 
```jsx
페이지 사용시 함수

- confirm

     const handleConfirm = async (title, text) => {
    const confirmed = await confirm(title, text);
    if (confirmed) {
      // 확인 버튼 클릭 시의 로직
      return;
    }
    // 취소 버튼 클릭 시의 로직
  };

  - alert

  const handleAlert = async (title, text) => {
    const confirmed = await alert(title, text);
    if (confirmed) {
      // 확인 버튼 클릭 시의 로직
      return;
    }
    // 취소 버튼 클릭 시의 로직
  };


  - button

  <button type='button' onClick={() => handleAlert('title','text')}>
        열기
      </button>

```
`
**/
const WOAlertStory = {
  // 좌측 메뉴 depth
  title: 'Modal/WOAlert',
  // 스토리북 컴포넌트 뷰 레이아웃
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // props 속성 docs 정리
  argTypes: {},
};

export default WOAlertStory;

// 죄측 메뉴 컴포넌트 명
export const Confirm = () => {
  const handleConfirm = async (title) => {
    const confirmed = await confirm(title, `${title} 하시겠습니까?`);
    if (confirmed) {
      // 확인 버튼 클릭 시의 로직
      return;
    }
    // 취소 버튼 클릭 시의 로직
  };
  return (
    <>
      <button type='button' onClick={() => handleConfirm('승인')}>
        열기
      </button>
    </>
  );
};
export const Alert = () => {
  const handleAlert = async (title) => {
    const confirmed = await alert(title, `${title} 되었습니다.`);
    if (confirmed) {
      // 확인 버튼 클릭 시의 로직
      return;
    }
    // 취소 버튼 클릭 시의 로직
  };
  return (
    <>
      <button type='button' onClick={() => handleAlert('승인')}>
        열기
      </button>
    </>
  );
};
export const LongText = () => {
  const handleConfirm = async (title, text) => {
    const confirmed = await confirm(title, text);
    if (confirmed) {
      // 확인 버튼 클릭 시의 로직
      return;
    }
    // 취소 버튼 클릭 시의 로직
  };
  return (
    <>
      <button
        type='button'
        onClick={() =>
          handleConfirm('보고서 조회 관리(일괄승인)', '일괄 초기화하시겠습니까?\n기관 결재 내역까지 모두 초기화됩니다.\n(아니시라면 "취소"를 누르세요)')
        }>
        열기
      </button>
    </>
  );
};
