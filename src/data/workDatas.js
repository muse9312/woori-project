export const workDatas = [
  {
    id: '1',
    title: '세입',
    icon: 'icon_main_tab_01',
    children: [
      {
        id: '1-1',
        title: '세입계좌 현황',
        tabItems: [
          {
            id: '1-1-1',
            title: '계좌현황',
          },
          {
            id: '1-1-2',
            title: '거래내역장',
          },
          {
            id: '1-1-3',
            title: '거래명세',
          },
          {
            id: '1-1-4',
            title: '구좌경정/과오남',
          },
          {
            id: '1-1-5',
            title: '입출금 집계',
          },
        ],
      },
      {
        id: '1-2',
        title: '세입이체일정표',
      },
      {
        id: '1-3',
        title: '보조금교부내역조회',
      },
      {
        id: '1-4',
        title: '공금연동 보통예금 계좌조회',
      },
      {
        id: '1-5',
        title: '희망번호통장 표지 출력',
      },
      {
        id: '1-6',
        title: '공금예금 이자 조회',
      },
      {
        id: '1-7',
        title: '이자결산 사전검증',
      },
      {
        id: '1-8',
        title: '보통예금 이자 자동이체 조회',
      },
      {
        id: '1-9',
        title: '세입거래내역장 조회(과거)',
      },
    ],
  },
  {
    id: '2',
    title: '세출',
    icon: 'icon_main_tab_02',
    children: [
      {
        id: '2-1',
        title: '세출계좌 현황',
        tabItems: [
          {
            id: '2-1-1',
            title: '계좌현황',
          },
          {
            id: '2-1-2',
            title: '거래내역장',
          },
          {
            id: '2-1-3',
            title: '거래명세',
          },
          {
            id: '2-1-4',
            title: '비목별지급내역',
          },
          {
            id: '2-1-5',
            title: '자금현황표',
          },
        ],
      },
      {
        id: '2-2',
        title: '자금배정내역',
        tabItems: [
          {
            id: '2-2-1',
            title: '자금배정내역',
          },
        ],
      },
      {
        id: '2-3',
        title: '반납(여입) 거래명세',
      },
      {
        id: '2-4',
        title: '회계별 전기관 잔액',
      },
      {
        id: '2-5',
        title: '정부보관금 내역조회',
      },
      {
        id: '2-6',
        title: '세출거래내역장 조회 (과거)',
      },
    ],
  },
  {
    id: '3',
    title: '일상경비',
    icon: 'icon_main_tab_03',
    children: [
      {
        id: '3-1',
        title: '일상경비계좌 현황',
        tabItems: [
          {
            id: '3-1-1',
            title: '계좌현황',
          },
          {
            id: '3-1-2',
            title: '거래내역장',
          },
          {
            id: '3-1-3',
            title: '거래명세',
          },
          {
            id: '3-1-4',
            title: '반납금 입금거래명세',
          },
        ],
      },
      {
        id: '3-2',
        title: '일상경비수입/지출월계표 및 잔액증명서',
      },
      {
        id: '3-3',
        title: '보통예금계좌 지급 요청공문',
      },
    ],
  },
  {
    id: '4',
    title: 'e+뱅킹',
    icon: 'icon_main_tab_04',
    children: [
      {
        id: '4-1',
        title: '처리 결과 조회',
        tabItems: [
          {
            id: '4-1-1',
            title: '처리결과 조회처리결과 조회',
          },
          {
            id: '4-1-2',
            title: '이체불능구 내역조회',
          },
          {
            id: '4-1-3',
            title: '대체보관구 내역조회',
          },
          {
            id: '4-1-4',
            title: '지출명령반려조회',
          },
        ],
      },
      {
        id: '4-2',
        title: '공금잔액(한도) 및 은행마감시간조회',
      },
      {
        id: '4-3',
        title: '회계별 지급명령금액 총괄 조회',
      },
    ],
  },
  {
    id: '5',
    title: '전자보고서',
    icon: 'icon_main_tab_05',
    children: [
      {
        id: '5-1',
        title: '세입보고서',
        children: [
          {
            id: '5-1-1',
            title: '세입월계표',
          },
          {
            id: '5-1-2',
            title: '과오납환급 일보/ 월보',
          },
        ],
      },
      {
        id: '5-2',
        title: '세출/기금 보고서',
        children: [
          {
            id: '5-2-1',
            title: '세입세출자금일계표',
          },
          {
            id: '5-2-2',
            title: '세입계좌별 세입세출자금일계표월계표',
          },
          {
            id: '5-2-3',
            title: '세입세출외 현금자금일계표',
          },
          {
            id: '5-2-4',
            title: '세출 일 월 분기계표',
          },
          {
            id: '5-2-5',
            title: '자금운용내역장',
          },
        ],
      },
      {
        id: '5-3',
        title: '일상경비보고서',
        children: [
          {
            id: '5-3-1',
            title: '세출 일 월 분기계표',
          },
        ],
      },
      {
        id: '5-4',
        title: '전자보고서관리',
        children: [
          {
            id: '5-4-1',
            title: '보고서 관리대장',
          },
          {
            id: '5-4-2',
            title: '전자보고서 일괄승인',
          },
          {
            id: '5-4-3',
            title: '전자보고서 지점별 관리',
          },
        ],
      },
      {
        id: '5-5',
        title: '정기제출자료',
        children: [
          {
            id: '5-5-1',
            title: '자금운용현황자료(반기)',
          },
          {
            id: '5-5-2',
            title: '재정자금 및 미수이자 현황(연단위)',
          },
          {
            id: '5-5-3',
            title: '금고통계 현황 자료 (연단위)',
          },
        ],
      },
      {
        id: '5-6',
        title: '기타현황',
        children: [
          {
            id: '5-6-1',
            title: '세출자금수지현황(세출, 기금)',
          },
          {
            id: '5-6-2',
            title: '회계별 세출자금수지 현황',
          },
          {
            id: '5-6-3',
            title: '공금성예금 평잔 현황',
          },
        ],
      },
    ],
  },
  {
    id: '6',
    title: '운용상품',
    icon: 'icon_main_tab_06',
    children: [
      {
        id: '6-1',
        title: '공금성정기예금 ',
        tabItems: [
          {
            id: '6-1-1',
            title: '공금성정기예금 현황',
          },
          {
            id: '6-1-2',
            title: '해지예상/ 예상이자 조회',
          },
          {
            id: '6-1-3',
            title: '전체명세',
          },
        ],
        children: [
          {
            id: '6-1-4',
            title: '이자지급현황',
          },
          {
            id: '6-1-5',
            title: '만기도래현황',
          },
          {
            id: '6-1-6',
            title: '정기예금현황 보고서',
          },
        ],
      },
      {
        id: '6-2',
        title: '보통예금',
        tabItems: [
          {
            id: '6-2-1',
            title: '보통예금 현황',
          },
          {
            id: '6-2-2',
            title: '보통예금 거래내역 조회',
          },
        ],
      },
      {
        id: '6-3',
        title: 'MMDA',
        tabItems: [
          {
            id: '6-3-1',
            title: 'MMDA 현황',
          },
          {
            id: '6-3-2',
            title: 'MMDA 이자지급 조회',
          },
        ],
      },
      {
        id: '6-4',
        title: '공금운용자금회계별 대사현황',
        children: [
          {
            id: '6-4-1',
            title: '대사현황 모니터링',
          },
          {
            id: '6-4-2',
            title: '영업점별 대사현황',
          },
          {
            id: '6-4-3',
            title: '제로페이승인, 집행대사 현황',
          },
        ],
      },
    ],
  },
  {
    id: '7',
    title: '제로페이',
    icon: 'icon_main_tab_07',
    children: [
      {
        id: '7-1',
        title: '제로페이 조회',
        tabItems: [
          {
            id: '7-1-1',
            title: '승인내역 조회',
          },
          {
            id: '7-1-2',
            title: '집행내역 조회',
          },
        ],
        children: [
          {
            id: '7-1-3',
            title: '승인 · 집행불일치 조회',
          },
          {
            id: '7-1-4',
            title: '결제계좌 거래내역조회',
          },
          {
            id: '7-1-5',
            title: '제로페이 발급대장',
          },
          {
            id: '7-1-6',
            title: '제한업종조회',
          },
          {
            id: '7-1-7',
            title: '결제현황조회',
          },
          {
            id: '7-1-8',
            title: '일자/ 결제방식별 거래량 조회',
          },
          {
            id: '7-1-9',
            title: '서무담당 번호 등록',
          },
        ],
      },
      {
        id: '7-2',
        title: '제로페이(관리자)',

        children: [
          {
            id: '7-2-1',
            title: '사용자 조회',
          },
          {
            id: '7-2-2',
            title: '가입 및 결제현황',
          },
          {
            id: '7-2-3',
            title: '공공기관 회계담당번호등록',
          },
          {
            id: '7-2-4',
            title: '카카오톡 전송내역 조회',
          },
          {
            id: '7-2-5',
            title: 'PUSH(추가) 내용 관리',
          },
          {
            id: '7-2-6',
            title: '사용자 전용앱 로그인 이력조회',
          },
          {
            id: '7-2-7',
            title: '사용자 이력조회',
          },
          {
            id: '7-2-8',
            title: '공지함',
          },
        ],
      },
    ],
  },
  {
    id: '8',
    title: '법인카드',
    icon: 'icon_main_tab_08',
    children: [
      {
        id: '8-1',
        title: '법인카드 내역조회',
        tabItems: [
          {
            id: '8-1-1',
            title: '승인내역',
          },
          {
            id: '8-1-2',
            title: '매입내역',
          },
          {
            id: '8-1-3',
            title: '청구내역',
          },
          {
            id: '8-1-4',
            title: '미청구내역',
          },
        ],
      },
      {
        id: '8-2',
        title: '결제 · 연체내역조회',
        tabItems: [
          {
            id: '8-2-1',
            title: '결제내역조회',
          },
          {
            id: '8-2-2',
            title: '연체내역조회',
          },
        ],
      },
      {
        id: '8-3',
        title: '카드결제계좌 거래내역 조회',
      },
      {
        id: '8-4',
        title: '법인카드 부서관리',
        children: [
          {
            id: '8-4-1',
            title: '사용자권한 관리',
          },
          {
            id: '8-4-2',
            title: '부서관리',
          },
          {
            id: '8-4-3',
            title: '부서별 법인카드 명세',
          },
          {
            id: '8-4-4',
            title: '법인카드 발급대장',
          },
        ],
      },
      {
        id: '8-5',
        title: '사회적 약자기업 구매',
        children: [
          {
            id: '8-5-1',
            title: '구매내역 조회',
          },
          {
            id: '8-5-2',
            title: '약자기업 등록',
          },
        ],
      },
    ],
  },
  {
    id: '9',
    title: '금고영업점',
    icon: 'icon_main_tab_08',
  },
];

export const agencyList = [
  {
    id: '10',
    title: '서울시청',
    children: [
      {
        id: '10-1',
        title: '강남구청',
      },
      {
        id: '10-2',
        title: '강동구청',
      },
      {
        id: '10-3',
        title: '강북구청',
      },
      {
        id: '10-4',
        title: '관악구청',
      },
      {
        id: '10-5',
        title: '광진구청',
        children: [
          {
            id: '10-5-1',
            title: '전체',
          },
          {
            id: '10-5-2',
            title: '회계팀',
          },
        ],
      },
    ],
  },
];

export const workSelectList = [
  [
    {
      id: 1,
      title: '세출',
    },
    {
      id: 2,
      title: '세출계좌현황',
    },
    {
      id: 3,
      title: '계좌현황',
    },
  ],
  [
    {
      id: 1,
      title: '세출',
    },
    {
      id: 2,
      title: '자금배정내역',
    },
    {
      id: 3,
      title: '자금배정내역',
    },
  ],
  [
    {
      id: 1,
      title: '법인카드',
    },
    {
      id: 2,
      title: '카드결제계좌 거래내역 조회',
    },
  ],
];
export const favoriteWorkList = [
  {
    id: 1,
    depth: [
      {
        title: '세입',
      },
      {
        title: '세입계좌현황',
      },
    ],
    area: [
      {
        title: '강남구청',
      },
      {
        title: '지원팀',
      },
    ],
  },
  {
    id: 2,
    depth: [
      {
        title: '세입',
      },
      {
        title: '세입계좌현황',
      },
    ],
    area: [
      {
        title: '강남구청',
      },
      {
        title: '지원팀',
      },
    ],
  },
  {
    id: 3,
    depth: [
      {
        title: '제로페이',
      },
      {
        title: '제로페이 조회',
      },
      {
        title: '승인내역 조회',
      },
    ],
    area: [
      {
        title: '강남구청',
      },
      {
        title: '지원팀',
      },
    ],
  },
  {
    id: 4,
    depth: [
      {
        title: '일상경비',
      },
      {
        title: '일상경비계좌 현황',
      },
      {
        title: '관악구청',
      },
    ],
    area: [
      {
        title: '강남구청',
      },
      {
        title: '지원팀',
      },
    ],
  },
];
