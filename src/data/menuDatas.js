export const menuDatas = [
  {
    id: '1',
    title: '세입',
    children: [
      {
        id: '1-1',
        children: [
          {
            id: '1-1-1',
            title: '세입계좌 현황',
            tabItems: [
              {
                id: '1-1-1-1',
                title: '계좌현황',
                path: '/',
              },
              {
                id: '1-1-1-2',
                title: '거래내역장',
                path: '/',
              },
              {
                id: '1-1-1-3',
                title: '거래명세',
                path: '/',
              },
              {
                id: '1-1-1-4',
                title: '구좌경정/과오납',
                path: '/',
              },
              {
                id: '1-1-1-5',
                title: '입출금 집계',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '1-2',
        children: [
          {
            id: '1-2-1',
            title: '세입이체일정표',
            tab: false,
            path: '/',
          },
          {
            id: '1-2-2',
            title: '보조금교부내역조회',
            tab: false,
            path: '/',
          },
          {
            id: '1-2-3',
            title: '공금연동 보통예금 계좌조회',
            tab: false,
            path: '/',
          },
          {
            id: '1-2-4',
            title: '희망번호통장 표지 출력',
            tab: false,
            path: '/',
          },
          {
            id: '1-2-5',
            title: '공금예금 이자 조회',
            tab: false,
            path: '/',
          },
          {
            id: '1-2-6',
            title: '이자결산 사전검증',
            tab: false,
            path: '/',
          },
          {
            id: '1-2-7',
            title: '보통예금 이자 자동이체 조회',
            tab: false,
            path: '/',
          },
          {
            id: '1-2-8',
            title: '세입거래내역장 조회(과거)',
            tab: false,
            path: '/',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    title: '세출',
    children: [
      {
        id: '2-1',
        children: [
          {
            id: '2-1-1',
            title: '세출계좌 현황',
            tabItems: [
              {
                id: '2-1-1-1',
                title: '계좌현황',
                path: '/',
              },
              {
                id: '2-1-1-2',
                title: '거래내역장',
                path: '/',
              },
              {
                id: '2-1-1-3',
                title: '거래명세',
                path: '/',
              },
              {
                id: '2-1-1-4',
                title: '비목별지급내역',
                path: '/',
              },
              {
                id: '2-1-1-5',
                title: '자금현황표',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '2-2',
        children: [
          {
            id: '2-2-1',
            title: '자금배정내역',
            tabItems: [
              {
                id: '2-2-1-1',
                title: '자금배정내역',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '3-2',
        children: [
          {
            id: '3-2-2',
            title: '반납(여입) 거래명세',
            tab: false,
            path: '/',
          },
          {
            id: '3-2-3',
            title: '회계별 전기관 잔액',
            tab: false,
            path: '/',
          },
          {
            id: '3-2-4',
            title: '정부보관금 내역조회',
            tab: false,
            path: '/',
          },
          {
            id: '3-2-5',
            title: '세출거래내역장 조회 (과거)',
            tab: false,
            path: '/',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    title: '일상경비',
    children: [
      {
        id: '3-1',
        children: [
          {
            id: '3-1-1',
            title: '일상경비계좌 현황',
            tabItems: [
              {
                id: '3-1-1-1',
                title: '계좌현황',
                path: '/',
              },
              {
                id: '3-1-1-2',
                title: '거래내역장',
                path: '/',
              },
              {
                id: '3-1-1-3',
                title: '거래명세',
                path: '/',
              },
              {
                id: '3-1-1-4',
                title: '반납금 입금거래명세',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '3-2',
        children: [
          {
            id: '3-2-1',
            title: '일상경비수입/지출월계표 및 잔액증명서',
            tab: false,
            path: '/',
          },
        ],
      },
      {
        id: '3-3',
        children: [
          {
            id: '3-2-1',
            title: '보통예금계좌 지급 요청공문',
            tab: false,
            path: '/',
          },
        ],
      },
    ],
  },
  {
    id: '4',
    title: 'e+ 뱅킹',
    children: [
      {
        id: '4-1',
        children: [
          {
            id: '4-1-1',
            title: '처리 결과 조회',
            tabItems: [
              {
                id: '4-1-1-1',
                title: '처리결과 조회처리결과 조회',
                path: '/',
              },
              {
                id: '4-1-1-2',
                title: '이체불능구 내역조회',
                path: '/',
              },
              {
                id: '4-1-1-3',
                title: '대체보관구 내역조회',
                path: '/',
              },
              {
                id: '4-1-1-4',
                title: '지출명령반려조회',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '4-2',
        children: [
          {
            id: '4-2-1',
            title: '공금잔액(한도) 및 은행마감시간조회',
            tab: false,
            path: '/',
          },
        ],
      },
      {
        id: '4-3',
        children: [
          {
            id: '4-2-1',
            title: '회계별 지급명령금액 총괄 조회',
            tab: false,
            path: '/',
          },
        ],
      },
    ],
  },
  {
    id: '5',
    title: '전자보고서',
    children: [
      {
        id: '5-1',
        children: [
          {
            id: '5-1-1',
            title: '세입보고서',
            children: [
              {
                id: '5-1-1-1',
                title: '세입월계표',
                path: '/',
              },
              {
                id: '5-1-1-2',
                title: '과오납환급 일보/ 월보',
                path: '/',
              },
            ],
          },
          {
            id: '5-1-2',
            title: '세출/기금 보고서',
            tab: false,
            children: [
              {
                id: '5-1-2-1',
                title: '세입세출자금일계표',
                path: '/',
              },
              {
                id: '5-1-2-2',
                title: '세입계좌별 세입세출자금일계표월계표',
                path: '/',
              },
              {
                id: '5-1-2-3',
                title: '세입세출외 현금자금일계표',
                path: '/',
              },
              {
                id: '5-1-2-4',
                title: '세출 일 월 분기계표',
                path: '/',
              },
              {
                id: '5-1-2-5',
                title: '자금운용내역장',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '5-2',
        children: [
          {
            id: '5-2-1',
            title: '일상경비보고서',
            tab: false,
            children: [
              {
                id: '5-2-1-1',
                title: '세출 일 월 분기계표',
                path: '/',
              },
            ],
          },
          {
            id: '5-2-2',
            title: '전자보고서관리',
            tab: false,
            children: [
              {
                id: '5-2-2-1',
                title: '보고서 관리대장',
                path: '/',
              },
              {
                id: '5-2-2-2',
                title: '전자보고서 일괄승인',
                path: '/',
              },
              {
                id: '5-2-2-3',
                title: '전자보고서 지점별 관리',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '5-3',
        children: [
          {
            id: '5-3-1',
            title: '정기제출자료',
            tab: false,
            children: [
              {
                id: '5-3-1-1',
                title: '자금운용현황자료(반기)',
                path: '/',
              },
              {
                id: '5-3-1-2',
                title: '재정자금 및 미수이자 현황(연단위)',
                path: '/',
              },
              {
                id: '5-3-1-3',
                title: '금고통계 현황 자료 (연단위)',
                path: '/',
              },
            ],
          },
          {
            id: '5-3-2',
            title: '기타현황',
            tab: false,
            children: [
              {
                id: '5-3-2-1',
                title: '세출자금수지현황(세출, 기금)',
                path: '/',
              },
              {
                id: '5-3-2-2',
                title: '회계별 세출자금수지 현황',
                path: '/',
              },
              {
                id: '5-3-2-3',
                title: '공금성예금 평잔 현황',
                path: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '6',
    title: '운용상품',
    children: [
      {
        id: '6-1',
        children: [
          {
            id: '6-1-1',
            title: '공금성정기예금 ',
            tabItems: [
              {
                id: '6-1-1-1',
                title: '공금성정기예금 현황',
                path: '/',
              },
              {
                id: '6-1-1-2',
                title: '해지예상/ 예상이자 조회',
                path: '/',
              },
              {
                id: '6-1-1-3',
                title: '전체명세',
                path: '/',
              },
            ],
            children: [
              {
                id: '6-1-1-4',
                title: '이자지급현황',
                path: '/',
              },
              {
                id: '6-1-1-5',
                title: '만기도래현황',
                path: '/',
              },
              {
                id: '6-1-1-6',
                title: '정기예금현황 보고서',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '6-2',
        children: [
          {
            id: '6-2-1',
            title: '보통예금',
            tabItems: [
              {
                id: '6-2-1-1',
                title: '보통예금 현황',
                path: '/',
              },
              {
                id: '6-2-1-2',
                title: '보통예금 거래내역 조회',
                path: '/',
              },
            ],
          },
          {
            id: '6-2-2',
            title: 'MMDA',
            tabItems: [
              {
                id: '6-2-2-1',
                title: 'MMDA 현황',
                path: '/',
              },
              {
                id: '6-2-2-2',
                title: 'MMDA 이자지급 조회',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '6-3',
        children: [
          {
            id: '6-3-1',
            title: '공금운용자금회계별 대사현황',
            children: [
              {
                id: '6-3-1-1',
                title: '대사현황 모니터링',
                path: '/',
              },
              {
                id: '6-3-1-2',
                title: '영업점별 대사현황',
                path: '/',
              },
              {
                id: '6-3-1-3',
                title: '제로페이승인, 집행대사 현황',
                path: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '7',
    title: '제로페이',
    children: [
      {
        id: '7-1',
        children: [
          {
            id: '7-1-1',
            title: '제로페이 조회',
            tabItems: [
              {
                id: '7-1-1-1',
                title: '승인내역 조회',
                path: '/',
              },
              {
                id: '7-1-1-2',
                title: '집행내역 조회',
                path: '/',
              },
            ],
            children: [
              {
                id: '7-1-1-3',
                title: '승인 · 집행불일치 조회',
                path: '/',
              },
              {
                id: '7-1-1-4',
                title: '결제계좌 거래내역조회',
                path: '/',
              },
              {
                id: '7-1-1-5',
                title: '제로페이 발급대장',
                path: '/',
              },
              {
                id: '7-1-1-6',
                title: '제한업종조회',
                path: '/',
              },
              {
                id: '7-1-1-7',
                title: '결제현황조회',
                path: '/',
              },
              {
                id: '7-1-1-8',
                title: '일자/ 결제방식별 거래량 조회',
                path: '/',
              },
              {
                id: '7-1-1-9',
                title: '서무담당 번호 등록',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '7-2',
        children: [
          {
            id: '7-2-1',
            title: '제로페이(관리자)',
            children: [
              {
                id: '7-2-1-1',
                title: '사용자 조회',
                path: '/',
              },
              {
                id: '7-2-1-2',
                title: '가입 및 결제현황',
                path: '/',
              },
              {
                id: '7-2-1-3',
                title: '공공기관 회계담당번호등록',
                path: '/',
              },
              {
                id: '7-2-1-4',
                title: '카카오톡 전송내역 조회',
                path: '/',
              },
              {
                id: '7-2-1-5',
                title: 'PUSH(추가) 내용 관리',
                path: '/',
              },
              {
                id: '7-2-1-6',
                title: '사용자 전용앱 로그인 이력조회',
                path: '/',
              },
              {
                id: '7-2-1-7',
                title: '사용자 이력조회',
                path: '/',
              },
              {
                id: '7-2-1-8',
                title: '공지함',
                path: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '8',
    title: '법인카드',
    children: [
      {
        id: '8-1',
        children: [
          {
            id: '8-1-1',
            title: '법인카드 내역조회',
            tabItems: [
              {
                id: '8-1-1-1',
                title: '승인내역',
                path: '/',
              },
              {
                id: '8-1-1-2',
                title: '매입내역',
                path: '/',
              },
              {
                id: '8-1-1-3',
                title: '청구내역',
                path: '/',
              },
              {
                id: '8-1-1-4',
                title: '미청구내역',
                path: '/',
              },
            ],
          },
          {
            id: '8-1-2',
            title: '결제 · 연체내역조회',
            tabItems: [
              {
                id: '8-1-2-1',
                title: '결제내역조회',
                path: '/',
              },
              {
                id: '8-1-2-2',
                title: '연체내역조회',
                path: '/',
              },
            ],
          },
          {
            id: '8-1-3',
            title: '카드결제계좌 거래내역 조회',
          },
        ],
      },
      {
        id: '8-2',
        children: [
          {
            id: '8-2-1',
            title: '법인카드 부서관리',
            children: [
              {
                id: '8-2-1-1',
                title: '사용자권한 관리',
                path: '/',
              },
              {
                id: '8-2-1-2',
                title: '부서관리',
                path: '/',
              },
              {
                id: '8-2-1-3',
                title: '부서별 법인카드 명세',
                path: '/',
              },
              {
                id: '8-2-1-4',
                title: '법인카드 발급대장',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '8-3',
        children: [
          {
            id: '8-3-1',
            title: '사회적 약자기업 구매',
            children: [
              {
                id: '8-3-1-1',
                title: '구매내역 조회',
                path: '/',
              },
              {
                id: '8-3-1-2',
                title: '약자기업 등록',
                path: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '9',
    title: '금고영업점',
    children: [
      {
        id: '9-1',
        children: [
          {
            id: '9-1-1',
            title: '공채',
            tabItems: [
              {
                id: '9-1-1-1',
                title: '당일자 취소',
                path: '/',
              },
              {
                id: '9-1-1-2',
                title: '당일자 이외 취소',
                path: '/',
              },
              {
                id: '9-1-1-3',
                title: '취소결재관리',
                path: '/',
              },
            ],
            children: [
              {
                id: '9-1-1-4',
                title: '증서관리',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '9-2',
        children: [
          {
            id: '9-2-1',
            title: '지자체 정보관리',
            children: [
              {
                id: '9-2-1-1',
                title: '지자체 담당자 지원',
                path: '/',
              },
              {
                id: '9-2-1-2',
                title: '오늘 등록된 글',
                path: '/',
              },
              {
                id: '9-2-1-3',
                title: '지자체 정보등록',
                path: '/',
              },
              {
                id: '9-2-1-4',
                title: '서울시 사업자번호 관리',
                path: '/',
              },
              {
                id: '9-2-1-5',
                title: '섭외이력 평가 결과',
                path: '/',
              },
              {
                id: '9-2-1-6',
                title: '예산수혜업체 유치',
                path: '/',
              },
              {
                id: '9-2-1-7',
                title: '공무원 급여이체실적',
                path: '/',
              },
              {
                id: '9-2-1-8',
                title: '공무원 크로스셀 실적',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '9-3',
        children: [
          {
            id: '9-3-1',
            title: '업무연락',
            children: [
              {
                id: '9-3-1-1',
                title: '문서 조회(수신, 발신, 등록)',
                path: '/',
              },
            ],
          },
          {
            id: '9-3-2',
            title: '공금업무 제안광장',
          },
        ],
      },
    ],
  },
  {
    id: '10',
    title: 'FDS',
    children: [
      {
        id: '10-1',
        children: [
          {
            id: '10-1-1',
            title: '시스템관리',
            children: [
              {
                id: '10-1-1-1',
                title: '사용자',
                path: '/',
              },
              {
                id: '10-1-1-2',
                title: '연계정보',
                path: '/',
              },
            ],
          },
          {
            id: '10-1-2',
            title: '표준시나리오',
            children: [
              {
                id: '10-1-2-1',
                title: 'Fact 관리',
                path: '/',
              },
              {
                id: '10-1-2-2',
                title: 'Rule 관리',
                path: '/',
              },
              {
                id: '10-1-2-3',
                title: '표준시나리오 관리',
                path: '/',
              },
            ],
          },
          {
            id: '10-1-3',
            title: '기관시나리오',
            children: [
              {
                id: '10-1-3-1',
                title: '기관 정보 관리',
                path: '/',
              },
              {
                id: '10-1-3-2',
                title: '사용자 그룹관리',
                path: '/',
              },
              {
                id: '10-1-3-3',
                title: '기관 시나리오 관리',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '10-2',
        children: [
          {
            id: '10-2-1',
            title: '탐지실행관리',
            children: [
              {
                id: '10-2-1-1',
                title: '시나리오 실행관리',
                path: '/',
              },
              {
                id: '10-2-1-2',
                title: '기관 시나리오 실행관리',
                path: '/',
              },
              {
                id: '10-2-1-3',
                title: '비정상거래 후보 관리',
                path: '/',
              },
            ],
          },
          {
            id: '10-2-2',
            title: '탐지내역관리',
            children: [
              {
                id: '10-2-2-1',
                title: '이상거래(비정상) 탐지내역 조회',
                path: '/',
              },
              {
                id: '10-2-2-2',
                title: '시나리오회피시도 내역 조회',
                path: '/',
              },
              {
                id: '10-2-2-3',
                title: '기간만료 시나리오 조회',
                path: '/',
              },
              {
                id: '10-2-2-4',
                title: '사용자 중지 시나리오 조회',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '10-3',
        children: [
          {
            id: '10-3-1',
            title: '통계관리',
            children: [
              {
                id: '10-3-1-1',
                title: '이상/ 의심거래 통계',
                path: '/',
              },
              {
                id: '10-3-1-2',
                title: '진행중 시나리오 통계',
                path: '/',
              },
              {
                id: '10-3-1-3',
                title: '우회시도 통계',
                path: '/',
              },
              {
                id: '10-3-1-4',
                title: '기간만료 통계',
                path: '/',
              },
              {
                id: '10-3-1-5',
                title: '중지 통계',
                path: '/',
              },
            ],
          },
          {
            id: '10-3-2',
            title: '로그관리',
            children: [
              {
                id: '10-3-2-1',
                title: '시스템 로그 조회',
                path: '/',
              },
              {
                id: '10-3-2-2',
                title: '감사 로그 조회',
                path: '/',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: '11',
    title: '기타',
    children: [
      {
        id: '11-1',
        children: [
          {
            id: '11-1-1',
            title: '자금이체',
            children: [
              {
                id: '11-1-1-1',
                title: '자금이체내역표',
                path: '/',
              },
              {
                id: '11-1-1-2',
                title: '지급통지서 출력',
                path: '/',
              },
            ],
          },
          {
            id: '11-1-2',
            title: '광명시금고',
            children: [
              {
                id: '11-1-2-1',
                title: '보통예금 계좌거래내역 조회',
                path: '/',
              },
              {
                id: '11-1-2-2',
                title: '공금계좌 집계조회',
                path: '/',
              },
            ],
          },
          {
            id: '11-1-3',
            title: '보조금실적 조회',
            children: [
              {
                id: '11-1-3-1',
                title: '보조금 수익성 분석',
                path: '/',
              },
              {
                id: '11-1-3-2',
                title: '보조금 수익성 추세',
                path: '/',
              },
              {
                id: '11-1-3-3',
                title: '보조금 좌수 현황',
                path: '/',
              },
              {
                id: '11-1-3-4',
                title: '보조금사업 계좌수 및 예산점유율',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '11-2',
        children: [
          {
            id: '11-2-1',
            title: '서울페이플러스',
            children: [
              {
                id: '11-2-1-1',
                title: '계좌조회',
                path: '/',
              },
              {
                id: '11-2-1-2',
                title: '집계내역조회',
                path: '/',
              },
              {
                id: '11-2-1-3',
                title: '계좌거래명세',
                path: '/',
              },
              {
                id: '11-2-1-4',
                title: '처리내역 조회',
                path: '/',
              },
              {
                id: '11-2-1-5',
                title: '처리내역 조회 (관리자)',
                path: '/',
              },
              {
                id: '11-2-1-6',
                title: '자금집계 현황',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '11-3',
        children: [
          {
            id: '11-3-1',
            title: '손해배상금',
            children: [
              {
                id: '11-3-1-1',
                title: 'Data Correction',
                path: '/',
              },
              {
                id: '11-3-1-2',
                title: '집계표(당행지점별, 수납기관, 징수기관)',
                path: '/',
              },
            ],
          },
          {
            id: '11-3-2',
            title: '마스킹관리',
          },
        ],
      },
    ],
  },
  {
    id: '12',
    title: '시스템관리',
    children: [
      {
        id: '12-1',
        children: [
          {
            id: '12-1-1',
            title: '시스템공통',
            children: [
              {
                id: '12-1-1-1',
                title: '기관/부서 코드 관리',
                path: '/',
              },
              {
                id: '12-1-1-2',
                title: '부서별 계좌번호 관리',
                path: '/',
              },
              {
                id: '12-1-1-3',
                title: '반납가상계좌 모계좌 관리',
                path: '/',
              },
              {
                id: '12-1-1-4',
                title: '직인관리',
                path: '/',
              },
              {
                id: '12-1-1-5',
                title: '공지사항관리',
                path: '/',
              },
              {
                id: '12-1-1-6',
                title: '질문답변게시판(Q/A)',
                path: '/',
              },
              {
                id: '12-1-1-7',
                title: '문서위변조확인',
                path: '/',
              },
              {
                id: '12-1-1-8',
                title: '전자보고서 제공리스트 등록',
                path: '/',
              },
              {
                id: '12-1-1-9',
                title: '법인카드 사업자관리',
                path: '/',
              },
              {
                id: '12-1-1-10',
                title: '신금고 SQL 모니터링',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '12-2',
        children: [
          {
            id: '12-2-2',
            title: '사용자',
            children: [
              {
                id: '12-2-2-1',
                title: '사용자 관리',
                path: '/',
              },
              {
                id: '12-2-2-2',
                title: '사용자 삭제 이력관리',
                path: '/',
              },
              {
                id: '12-2-2-3',
                title: '사용자 이력 조회(웹 / 앱)',
                path: '/',
              },
              {
                id: '12-2-2-4',
                title: '사용자 IP관리',
                path: '/',
              },
              {
                id: '12-2-2-5',
                title: '부서 및 사용자 이관',
                path: '/',
              },
              {
                id: '12-2-2-6',
                title: '비공금영업점 사용자 관리',
                path: '/',
              },
              {
                id: '12-2-2-7',
                title: '집계대상별 사용자 로그 조회',
                path: '/',
              },
              {
                id: '12-2-2-8',
                title: '업무별 사용량 조회',
                path: '/',
              },
              {
                id: '12-2-2-9',
                title: '부서별 사용량 집계',
                path: '/',
              },
            ],
          },
        ],
      },
      {
        id: '12-3',
        children: [
          {
            id: '12-3-1',
            title: '개발지원',
            children: [
              {
                id: '12-3-1-1',
                title: '공통코드',
                path: '/',
              },
              {
                id: '12-3-1-2',
                title: '공통콤보',
                path: '/',
              },
              {
                id: '12-3-1-3',
                title: '공통팝업',
                path: '/',
              },
              {
                id: '12-3-1-4',
                title: '사이트 등록',
                path: '/',
              },
              {
                id: '12-3-1-5',
                title: '시스템 등록',
                path: '/',
              },
              {
                id: '12-3-1-6',
                title: '프로그램 등록',
                path: '/',
              },
              {
                id: '12-3-1-7',
                title: '프로그램 등록 OLAP',
                path: '/',
              },
              {
                id: '12-3-1-8',
                title: '시스템별 메뉴 등록',
                path: '/',
              },
              {
                id: '12-3-1-9',
                title: '사이트별 메뉴 등록',
                path: '/',
              },
              {
                id: '12-3-1-10',
                title: '사용자 유형별 사이트 권한관리',
                path: '/',
              },
              {
                id: '12-3-1-11',
                title: '사용자 유형별 메뉴 권한관리',
                path: '/',
              },
              {
                id: '12-3-1-12',
                title: '사용자별 메뉴 권한관리',
                path: '/',
              },
              {
                id: '12-3-1-13',
                title: '특화메뉴코드 관리',
                path: '/',
              },
            ],
          },
        ],
      },
    ],
  },
];
