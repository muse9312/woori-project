import { Box, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const navigationData = [
  {
    title: '공통',
    children: [
      {
        title: '메인 - 우리은행 총괄 관리자',
        link: 'main-01',
        state: 'complete',
      },
      {
        title: '메인 - 우리은행 시금고 관리자',
        link: 'main-02',
        state: 'complete',
      },
      {
        title: '메인 - 우리은행 시금고 담당자',
        link: 'main-03',
        state: 'complete',
      },
      {
        title: '메인 - 산하기관',
        link: 'main-04',
        state: 'complete',
      },
      {
        title: '메인 - 업무가이드 팝업(구청총괄)',
        link: 'wrkng',
        state: 'inspection',
      },
      {
        title: '메인 - 업무가이드 팝업(구청부서)',
        link: 'wrkng_2',
        state: 'inspection',
      },
      {
        title: '메인 - 업무가이드 팝업(세입있는부서)',
        link: 'wrkng_3',
        state: 'inspection',
      },
      {
        title: '로그인',
        link: 'login',
        state: 'complete',
      },
      {
        title: '아이디 찾기 팝업',
        link: 'findId',
        state: 'complete',
      },
      {
        title: '비밀번호 변경 팝업',
        link: 'chgPass',
        state: 'complete',
      },
      {
        title: '부서변경 팝업',
        link: 'chDepart',
        state: 'complete',
      },
      {
        title: '회원가입 - 미승인',
        link: 'signup',
        state: 'complete',
      },
      {
        title: '회원가입 - 승인',
        link: 'SignupPass',
        state: 'complete',
      },
      {
        title: '404페이지',
        link: '404',
        state: 'complete',
      },
    ],
  },
  {
    title: '세입',
    children: [
      {
        title: '세입계좌 현황',
        children: [
          {
            title: '계좌현황',
            link: 'ARV0101V01',
            state: 'complete',
          },
          {
            title: '거래내역장',
            link: 'ARV0101V02',
            state: 'complete',
          },
          {
            title: '거래명세',
            link: 'ARV0101V03',
            state: 'complete',
          },
          {
            title: '구좌경정/과오납',
            link: 'ARV0101V04',
            state: 'complete',
          },
          {
            title: '입출금 집계',
            link: 'ARV0101V05',
            state: 'complete',
          },
        ],
      },
      {
        title: '세입이체일정표',
        link: 'ARV0201V01',
        state: 'complete',
      },
      {
        title: '보조금교부내역조회',
        link: 'ARV0301V01',
        state: 'complete',
      },
      {
        title: '공금 연동 보통예금 계좌조회',
        link: 'ARV0401V01',
        state: 'complete',
      },
      {
        title: '희망번호통장 표지 출력',
        link: 'ARV0501V01',
        state: 'complete',
      },
      {
        title: '공금예금 이자 조회',
        link: 'ARV0601V01',
        state: 'complete',
      },
      {
        title: '이자지급결산 사전검증',
        link: 'ARV0701V01',
        state: 'complete',
      },
      {
        title: '보통예금 이자 자동이체 조회',
        link: 'ARV0801V01',
        state: 'complete',
      },
      {
        title: '세입거래내역장 조회 (과거)',
        link: 'ARV0901V01',
        state: 'complete',
      },
    ],
  },
  {
    title: '세출',
    children: [
      {
        title: '세출계좌 현황',
        children: [
          {
            title: '계좌현황',
            link: 'AXP0101V01',
            state: 'complete',
          },

          {
            title: '거래내역장',
            link: 'AXP0101V02',
            state: 'complete',
          },
          {
            title: '거래명세',
            link: 'AXP0101V03',
            state: 'complete',
          },
          {
            title: '자금현황표',
            link: 'AXP0101V04',
            state: 'complete',
          },
          {
            title: '비목별 지급내역',
            link: 'AXP0101V05',
            state: 'complete',
          },
        ],
      },
      {
        title: '자금배정내역',
        children: [
          {
            title: '자금배정내역',
            link: 'AXP0201V01',
            state: 'complete',
          },
          {
            title: '자계좌자금배정내역 조회',
            link: 'AXP0201V02',
            state: 'complete',
          },
        ],
      },
      {
        title: '반납(여입) 거래명세',
        link: 'AXP0301V01',
        state: 'complete',
      },
      {
        title: '회계현황',
        children: [
          {
            title: '회계별 전기관 잔액',
            link: 'AXP0401V01',
            state: 'new',
          },
          {
            title: '회계별 지급현황',
            link: 'AXP0401V02',
            state: 'new',
          },
        ],
      },

      {
        title: '정부보관금 내역조회',
        link: 'AXP0501V01',
        state: 'complete',
      },
      {
        title: '세출거래내역장 조회 (과거)',
        link: 'AXP0601V01',
        state: 'complete',
      },
    ],
  },
  {
    title: '일상경비',
    children: [
      {
        title: '일상경비계좌 현황',
        children: [
          {
            title: '계좌현황',
            link: 'ILS0101V01',
            state: 'complete',
          },
          {
            title: '거래내역장',
            link: 'ILS0101V02',
            state: 'complete',
          },
          {
            title: '거래명세',
            link: 'ILS0101V03',
            state: 'complete',
          },
          {
            title: '반납금 입금거래명세',
            link: 'ILS0101V04',
            state: 'complete',
          },
        ],
      },
      {
        title: '일상경비수입/지출월계표 및 잔액증명서',
        link: 'ILS0201V01',
        state: 'complete',
      },
      {
        title: '보통예금계좌 지급 요청공문',
        link: 'ILS0301V01',
        state: 'complete',
      },
    ],
  },
  {
    title: 'e+뱅킹',
    children: [
      {
        title: '처리결과 조회',
        children: [
          {
            title: '처리결과조회',
            link: 'EBK0101V01',
            state: 'complete',
          },
          {
            title: '이체불능구 내역조회',
            link: 'EBK0101V02',
            state: 'complete',
          },
          {
            title: '대체보관구 내역조회',
            link: 'EBK0101V03',
            state: 'complete',
          },
          {
            title: '지출명령반려조회',
            link: 'EBK0101V04',
            state: 'complete',
          },
        ],
      },
      {
        title: '공금잔액(한도) 및 은행마감시간조회',
        link: 'EBK0201V01',
        state: 'complete',
      },
      {
        title: '회계별 지급명령금액 총괄 조회',
        link: 'EBK0301V01',
        state: 'complete',
      },
    ],
  },
  {
    title: '전자 보고서',
    children: [
      {
        title: '세입보고서',
        children: [
          {
            title: '세입월계표 - 보고서',
            link: 'RPT0101V01',
            state: 'complete',
          },

          {
            title: '세입월계표 - 내역',
            link: 'RPT0101V02',
            state: 'complete',
          },
          {
            title: '세입월계표 - 보고서(시청지점총괄)',
            link: 'RPT0104V01',
            state: 'new',
          },
          {
            title: '세입월계표 - 내역(시청지점총괄)',
            link: 'RPT0104V02',
            state: 'new',
          },
          {
            title: '세입월계표 - 서울시세무과',
            link: 'RPT0105V01',
            state: 'new',
          },
          {
            title: '수입금월중 총괄보고서 - 보고서',
            link: 'RPT0102V01',
            state: 'complete',
          },
          {
            title: '수입금월중 총괄보고서 - 내역',
            link: 'RPT0102V02',
            state: 'complete',
          },
          {
            title: '과오납환급 일보/월보',
            link: 'RPT0103V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '세출/기금보고서',
        children: [
          {
            title: '세입세출자금일계표',
            link: 'RPT0201V01',
            state: 'complete',
          },
          {
            title: '계좌별 세입세출자금일계표',
            link: 'RPT0202V01',
            state: 'complete',
          },
          {
            title: '세입세출외현금자금일계표',
            link: 'RPT0203V01',
            state: 'complete',
          },
          {
            title: '세출 일〮월〮분기계표',
            link: 'RPT0204V01',
            state: 'complete',
          },
          {
            title: '자금운용내역장',
            link: 'RPT0205V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '일상경비보고서',
        children: [
          {
            title: '세출 일〮월〮분기계표',
            link: 'RPT0301V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '전자보고서 관리',
        children: [
          {
            title: '보고서 관리대장',
            link: 'RPT0401M01',
            state: 'complete',
          },
          {
            title: '전자보고서 지점별관리',
            link: 'RPT0403V01',
            state: 'complete',
          },
          {
            title: '전자보고서 일괄승인(영업점)',
            link: 'RPT0402M01',
            state: 'complete',
          },
          {
            title: '전자보고서 일괄승인(기관용)',
            link: 'RPT0402M01_1',
            state: 'complete',
          },
          {
            title: '전자보고서 일괄승인 - 세입세출외현금 자금일계표 팝업',
            link: 'RPT0402P02',
            state: 'complete',
          },
          {
            title: '전자보고서 일괄승인 - 세출일계표 팝업',
            link: 'RPT0402P03',
            state: 'complete',
          },
          {
            title: '전자보고서 일괄승인 - 세입세출 자금일계표 팝업',
            link: 'RPT0402P04',
            state: 'complete',
          },
        ],
      },
      {
        title: '정기제출자료',
        children: [
          {
            title: '금고 기간별 자금운용 현황',
            link: 'RPT0501V01',
            state: 'complete',
          },
          {
            title: '재정자금 및 미수이자 현황(연단위)',
            link: 'RPT0502V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '기타현황',
        children: [
          {
            title: '세출자금수지현황(세출, 기금)',
            link: 'RPT0601V01',
            state: 'complete',
          },
          {
            title: '회계별 세출자금수지 현황',
            link: 'RPT0602V01',
            state: 'complete',
          },
          {
            title: '공금성예금 평잔 현황',
            link: 'RPT0603V01',
            state: 'complete',
          },
        ],
      },
    ],
  },
  {
    title: '운용상품',
    children: [
      {
        title: '공금성정기예금',
        children: [
          {
            title: '공금성정기예금 현황',
            link: 'FXP0101V01',
            state: 'complete',
          },
          {
            title: '전체명세(신규/해지)',
            link: 'FXP0101V02',
            state: 'complete',
          },
          {
            title: '전체명세(신규/해지) 팝업 - 만기이자계좌 case',
            link: 'FXP0101P02',
            state: 'complete',
          },
          {
            title: '전체명세(신규/해지) 팝업 - 월별이자계좌 case',
            link: 'FXP0101P03',
            state: 'complete',
          },
          {
            title: '해지예상 조회',
            link: 'FXP0101V03',
            state: 'complete',
          },
          {
            title: '이자지급현황',
            link: 'FXP0102V01',
            state: 'complete',
          },
          {
            title: '회계별 만기현황',
            link: 'FXP0103V02',
            state: 'complete',
          },
          {
            title: '만기도래현황',
            link: 'FXP0103V01',
            state: 'complete',
          },
          {
            title: '정기예금현황 보고서',
            link: 'FXP0104V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '보통예금',
        children: [
          {
            title: '보통예금 현황',
            link: 'FXP0201V01',
            state: 'complete',
          },
          {
            title: '보통예금 거래내역 조회',
            link: 'FXP0201V02',
            state: 'complete',
          },
        ],
      },
      {
        title: 'MMDA',
        children: [
          {
            title: 'MMDA 현황',
            link: 'FXP0301V01',
            state: 'complete',
          },
          {
            title: 'MMDA 이자지급 조회',
            link: 'FXP0301V02',
            state: 'complete',
          },
        ],
      },
      {
        title: '공금운용자금회계별 대사현황',
        children: [
          {
            title: '대사현황 모니터링',
            link: 'FXP0401V01',
            state: 'complete',
          },
          {
            title: '영업점별 대사현황',
            link: 'FXP0402V01',
            state: 'complete',
          },
          {
            title: '제로페이 승인, 집행대사 현황',
            link: 'FXP0403V01',
            state: 'complete',
          },
        ],
      },
    ],
  },
  {
    title: '제로페이',
    children: [
      {
        title: '제로페이 조회',
        children: [
          {
            title: '승인내역 조회',
            link: 'ZPB0101V01',
            state: 'complete',
          },
          {
            title: '승인내역 조회 - 사용자 요약 조회 팝업',
            link: 'ZPB0101P02',
            state: 'complete',
          },

          {
            title: '집행내역 조회',
            link: 'ZPB0101V02',
            state: 'complete',
          },
          {
            title: '승인 집행 불일치 조회',
            link: 'ZPB0102V01',
            state: 'complete',
          },
          {
            title: '결제계좌 거래내역조회',
            link: 'ZPB0103V01',
            state: 'complete',
          },
          {
            title: '제로페이 발급대장',
            link: 'ZPB0104V01',
            state: 'complete',
          },
          {
            title: '제한업종조회',
            link: 'ZPB0105V01',
            state: 'complete',
          },
          {
            title: '결제현황조회',
            link: 'ZPB0106V01',
            state: 'complete',
          },
          {
            title: '일자/ 결제방식별 거래량 조회',
            link: 'ZPB0107V01',
            state: 'complete',
          },
          {
            title: '서무담당 번호 등록',
            link: 'ZPB0108M01',
            state: 'complete',
          },
        ],
      },
      {
        title: '제로페이(관리자)',
        children: [
          {
            title: '사용자 조회',
            link: 'ZPB0201V01',
            state: 'complete',
          },
          {
            title: '가입 및 결제현황',
            link: 'ZPB0202V01',
            state: 'complete',
          },
          {
            title: '공공기관 회계담당번호 등록',
            link: 'ZPB0203V01',
            state: 'complete',
          },
          {
            title: '카카오톡 전송내역 조회',
            link: 'ZPB0204V01',
            state: 'complete',
          },
          {
            title: '사용자 전용앱 로그인 이력조회',
            link: 'ZPB0205V01',
            state: 'complete',
          },
          {
            title: '사용자 이력조회',
            link: 'ZPB0206V01',
            state: 'complete',
          },
          {
            title: '공지함',
            link: 'ZPB0207M01',
            state: 'complete',
          },
          {
            title: '공지 등록(팝업)',
            link: 'ZPB0207P01',
            state: 'complete',
          },
          {
            title: '공지 상세(팝업)',
            link: 'ZPB0207P02',
            state: 'complete',
          },
        ],
      },
    ],
  },
  {
    title: '법인 카드',
    children: [
      {
        title: '법인카드 내역조회',
        children: [
          {
            title: '승인내역',
            link: 'CAD0101V01',
            state: 'complete',
          },
          {
            title: '매입내역',
            link: 'CAD0101M02',
            state: 'complete',
          },
          {
            title: '청구내역',
            link: 'CAD0101V03',
            state: 'complete',
          },
          {
            title: '미청구내역',
            link: 'CAD0101V04',
            state: 'complete',
          },
        ],
      },
      {
        title: '결제 · 연체내역조회',
        children: [
          {
            title: '결제내역',
            link: 'CAD0201V01',
            state: 'complete',
          },
          {
            title: '연체내역',
            link: 'CAD0201M02',
            state: 'complete',
          },
        ],
      },
      {
        title: '카드결제계좌 거래내역 조회',
        link: 'CAD0301V01',
        state: 'complete',
      },
      {
        title: '법인카드 부서관리',
        children: [
          {
            title: '사용자권한 관리',
            link: 'CAD0401M01',
            state: 'complete',
          },
          {
            title: '부서관리',
            link: 'CAD0402M01',
            state: 'complete',
          },
          {
            title: '부서별 법인카드 명세',
            link: 'CAD0403V01',
            state: 'complete',
          },
          {
            title: '부서별 사용현황',
            link: 'CAD0404V01',
            state: 'complete',
          },
          {
            title: '법인카드 발급대장',
            link: 'CAD0405V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '사회적 약자기업 구매',
        children: [
          {
            title: '구매내역 조회',
            link: 'CAD0501V01',
            state: 'complete',
          },
          {
            title: '약자기업 등록',
            link: 'CAD0502M01',
            state: 'complete',
          },
        ],
      },
    ],
  },
  {
    title: '금고 영업점',
    children: [
      {
        title: '공채',
        children: [
          {
            title: '당일자 취소',
            link: 'BRC0101M01',
            state: 'complete',
          },
          {
            title: '당일자 이외 취소',
            link: 'BRC0101M02',
            state: 'complete',
          },
          {
            title: '취소결제관리',
            link: 'BRC0101M03',
            state: 'complete',
          },
          {
            title: '증서관리',
            link: 'BRC0102M01',
            state: 'complete',
          },
        ],
      },
      {
        title: '지자체 정보관리',
        children: [
          {
            title: '지자체 정보등록',
            link: 'BRC0203V01',
            state: 'complete',
          },
          {
            title: '지자체 정보등록 - 조회팝업',
            link: 'BRC0203P01',
            state: 'complete',
          },
          {
            title: '지자체 정보등록 - 등록 팝업',
            link: 'BRC0203P02',
            state: 'complete',
          },

          {
            title: '서울시 사업자번호 관리',
            link: 'BRC0204M01',
            state: 'complete',
          },

          {
            title: '예산수혜업체 유치',
            link: 'BRC0206V02',
            state: 'complete',
          },
          {
            title: '급여이체 점별 집계',
            link: 'BRC0207V03',
            state: 'complete',
          },
          {
            title: '급여이체 점별 전체내역',
            link: 'BRC0207V01',
            state: 'complete',
          },
          {
            title: '급여이체 전체내역',
            link: 'BRC0207V02',
            state: 'complete',
          },
          {
            title: '공무원 크로스셀 실적',
            link: 'BRC0208V01',
            state: 'complete',
          },

          {
            title: '크로스셀 상세 내역',
            link: 'BRC0208P01',
            state: 'complete',
          },
        ],
      },
      {
        title: '업무연락',
        children: [
          {
            title: '문서조회',
            link: 'BRC0209V01',
            state: 'complete',
          },
          {
            title: '문서조회 상세',
            link: 'BRC0209P01',
            state: 'complete',
          },
          {
            title: '문서조회 등록',
            link: 'BRC0209P02',
            state: 'complete',
          },
        ],
      },
      {
        title: '공금업무 제안광장',
        children: [
          {
            title: '공금업무 제안광장',
            link: 'BRC0210V01',
            state: 'complete',
          },
          {
            title: '공금업무 제안광장 상세',
            link: 'BRC0210P01',
            state: 'complete',
          },
          {
            title: '공금업무 제안광장 등록',
            link: 'BRC0210P02',
            state: 'complete',
          },
        ],
      },
    ],
  },
  {
    title: '기타',
    children: [
      {
        title: '자금이체',
        children: [
          {
            title: '자금이체 내역표',
            link: 'ETC0101M01',
            state: 'complete',
          },
          {
            title: '지급통지서 출력',
            link: 'ETC0102V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '광명시금고',
        children: [
          {
            title: '보통예금 계좌 거래내역 조회',
            link: 'ETC0201V01',
            state: 'complete',
          },
          {
            title: '공금계좌 집계조회',
            link: 'ETC0202V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '보조금실적 조회',
        children: [
          {
            title: '보조금 수익성 분석',
            link: 'ETC0301V01',
            state: 'complete',
          },
          {
            title: '보조금 수익성 추세',
            link: 'ETC0302V01',
            state: 'complete',
          },
          {
            title: '보조금 좌수 현황',
            link: 'ETC0303V01',
            state: 'complete',
          },
          {
            title: '보조금사업 계좌수 및 예산점유율',
            link: 'ETC0304V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '서울페이플러스',
        children: [
          {
            title: '계좌조회',
            link: 'ETC0401V01',
            state: 'complete',
          },
          {
            title: '집계내역조회',
            link: 'ETC0402V01',
            state: 'complete',
          },
          {
            title: '계좌거래명세',
            link: 'ETC0403V01',
            state: 'complete',
          },
          {
            title: '처리내역 조회',
            link: 'ETC0404V01',
            state: 'complete',
          },
          {
            title: '처리내역 조회 (관리자)',
            link: 'ETC0405M01',
            state: 'complete',
          },
          {
            title: '자금집계 현황',
            link: 'ETC0406V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '손해배상금',
        children: [
          {
            title: 'Data Correction',
            link: 'ETC0501M01',
            state: 'complete',
          },
          {
            title: '집계표(당행지점별, 수납기관, 징수기관)',
            link: 'ETC0501V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '마스킹관리',
        children: [
          {
            title: '마스킹 해지신청(신청자)',
            link: 'ETC0502V01',
            state: 'complete',
          },
          {
            title: '마스킹 해지신청(관리자)',
            link: 'ETC0502V01_1',
            state: 'complete',
          },
        ],
      },
    ],
  },
  {
    title: '시스템 관리',
    children: [
      {
        title: '시스템공통',
        children: [
          {
            title: '기관/부서코드관리',
            link: 'SYS0101M01',
            state: 'complete',
          },
          {
            title: '부서별 계좌번호 관리',
            link: 'SYS0102M01',
            state: 'complete',
          },
          {
            title: '부서별 보통예금계좌 관리',
            link: 'SYS0103M01',
            state: 'complete',
          },
          {
            title: '반납가상계좌 모계좌 관리',
            link: 'SYS0104M01',
            state: 'complete',
          },
          {
            title: '직인관리',
            link: 'SYS0105M01',
            state: 'complete',
          },
          {
            title: '공지사항관리',
            link: 'SYS0106M01',
            state: 'complete',
          },
          {
            title: '공지사항관리 - 공지사항 팝업 상세',
            link: 'SYS0106P01',
            state: 'complete',
          },
          {
            title: '공지사항관리 - 공지사항 등록 팝업',
            link: 'SYS0106P02',
            state: 'complete',
          },
          {
            title: '질문답변게시판(Q/A)',
            link: 'SYS0107M01',
            state: 'complete',
          },
          {
            title: '질문답변게시판(Q/A) - 질문답변 상세 (답변등록 전 case)',
            link: 'SYS0107P01',
            state: 'complete',
          },
          {
            title: '질문답변게시판(Q/A) - 질문답변 상세 (답변등록 후 case)',
            link: 'SYS0107P01_1',
            state: 'complete',
          },
          {
            title: '질문답변게시판(Q/A) - 질문답변 등록 case',
            link: 'SYS0107P01_2',
            state: 'complete',
          },
          {
            title: '질문답변게시판(Q/A) - 질문 등록',
            link: 'SYS0107P02',
            state: 'complete',
          },
          {
            title: '문서위변조확인',
            link: 'SYS0108M01',
            state: 'complete',
          },
          {
            title: '전자보고서 제공리스트 등록',
            link: 'SYS0109M01',
            state: 'complete',
          },
          {
            title: '법인카드 사업자관리',
            link: 'SYS0110M01',
            state: 'complete',
          },
        ],
      },
      {
        title: '사용자',
        children: [
          {
            title: '사용자 관리',
            link: 'SYS0201M01',
            state: 'complete',
          },
          {
            title: '사용자 삭제 이력관리',
            link: 'SYS0202V01',
            state: 'complete',
          },
          {
            title: '사용자 이력 조회(웹 / 앱)',
            link: 'SYS0203V01',
            state: 'complete',
          },
          {
            title: '사용자 IP관리',
            link: 'SYS0204M01',
            state: 'complete',
          },
          {
            title: '부서및사용자이관',
            link: 'SYS0205M01',
            state: 'complete',
          },
          {
            title: '비공금영업점사용자관리',
            link: 'SYS0206M01',
            state: 'complete',
          },
          {
            title: '집계대상별 사용자 로그 조회',
            link: 'SYS0207M01',
            state: 'complete',
          },
          {
            title: '업무별 사용량 조회',
            link: 'SYS0208V01',
            state: 'complete',
          },
          {
            title: '부서별 사용량 집계',
            link: 'SYS0209V01',
            state: 'complete',
          },
        ],
      },
      {
        title: '개발지원',
        children: [
          {
            title: '공통코드',
            link: 'SYS0301M01',
            state: 'complete',
          },
          {
            title: '공통코드 - 코드그룹목록세부 팝업',
            link: 'SYS0301P01',
            state: 'complete',
          },
          {
            title: '사이트등록',
            link: 'SYS0302M01',
            state: 'complete',
          },
          {
            title: '시스템등록',
            link: 'SYS0303V01',
            state: 'complete',
          },
          {
            title: '프로그램등록',
            link: 'SYS0304M01',
            state: 'complete',
          },
          {
            title: '시스템별메뉴등록',
            link: 'SYS0306M01',
            state: 'complete',
          },
          {
            title: '사이트별메뉴등록',
            link: 'SYS0307M01',
            state: 'complete',
          },
          {
            title: '사용자유형별사이트권한관리',
            link: 'SYS0308M01',
            state: 'complete',
          },
          {
            title: '사용자유형별메뉴권한관리',
            link: 'SYS0309M01',
            state: 'complete',
          },
          {
            title: '사용자별메뉴권한관리',
            link: 'SYS0310M01',
            state: 'complete',
          },
          {
            title: '특화메뉴코드관리',
            link: 'SYS0311M01',
            state: 'complete',
          },
          {
            title: '특화메뉴코드관리 - 코드그룹목록세부 팝업',
            link: 'SYS0311P01',
            state: 'complete',
          },
          {
            title: '메뉴권한관리',
            link: 'SYS0312M01',
            state: 'complete',
          },
        ],
      },
    ],
  },
  {
    title: 'ETC',
    children: [
      {
        title: '그리드 다운로드 모달',
        link: 'gridDownLoadModal',
        state: 'complete',
      },
    ],
  },

  // ... 기타 카테고리 및 해당 하위 항목들
];

const PageGuide = () => {
  const [url, setUrl] = useState('http://localhost:3000/');
  const [openedList, setOpenedList] = useState({});
  const [pageInfo, setPageInfo] = useState(null);
  const [progress, setProgress] = useState(0);

  const changePage = (e, page) => {
    if (window.innerWidth <= 760 || e.ctrlKey || e.metaKey) {
      window.open(`http://localhost:3000/${page}`, '_blank');
      return;
    }
    setUrl(`http://localhost:3000/${page}`);
  };

  const toggleList = (title) => {
    setOpenedList({
      ...openedList,
      [title]: !openedList[title],
    });
  };
  const calculatePages = (data) => {
    let total = 0;
    let completed = 0;

    const traverseItems = (items) => {
      items.forEach((item) => {
        // state 속성이 있는 항목만 카운트
        if ('state' in item) {
          total++; // 각 항목을 페이지로 카운트
          if (item.state === 'complete') {
            completed++; // 항목의 상태가 'complete'라면 완료된 것으로 카운트
          }
        }

        // 하위 항목이 있으면 재귀적으로 처리
        if (item.children) {
          traverseItems(item.children);
        }
      });
    };

    traverseItems(data); // 최상위 데이터로부터 재귀적 카운트 시작

    return { total, completed };
  };
  useEffect(() => {
    if (pageInfo) return;
    const { total, completed } = calculatePages(navigationData);
    setPageInfo({ total, completed });
    setProgress(Math.floor((completed / total) * 100));
  }, [pageInfo]);

  // view
  return (
    <>
      <Wrap>
        <List>
          <ListTitle>Page List</ListTitle>
          {pageInfo && (
            <ProgressBox sx={{ width: '100%' }}>
              {/* <span className='title'>{`${progress}%`}</span> */}
              <span className='title'>진척 상태</span>
              <LinearProgress variant='determinate' value={progress} />
              <div className='flex'>
                <span className='title'>{`${progress}%`}</span>
                <span className='sub-text ml-auto'>{`퍼블완료 ${pageInfo.completed}/${pageInfo.total}`}</span>
              </div>
            </ProgressBox>
          )}

          {navigationData.map((item) => (
            <React.Fragment key={item.title}>
              <ListDepth onClick={() => toggleList(item.title)} className={openedList[item.title] ? 'open' : ''}>
                {item.title}
              </ListDepth>
              {openedList[item.title] && item.children && (
                <ListWrap>
                  {item.children.map((depth2) =>
                    depth2.children ? (
                      <React.Fragment key={depth2.title}>
                        <SubListDepth onClick={() => toggleList(depth2.title)} className={openedList[depth2.title] ? 'open' : ''}>
                          {depth2.title}
                        </SubListDepth>
                        {openedList[depth2.title] && (
                          <ListWrap>
                            {depth2.children.map((depth3) => (
                              <ListItem key={depth3.link} type='button' className={depth3.state} onClick={(e) => changePage(e, depth3.link)}>
                                {depth3.title}
                                <span className='id'>{depth3.link}</span>
                              </ListItem>
                            ))}
                          </ListWrap>
                        )}
                      </React.Fragment>
                    ) : (
                      <ListItem key={depth2.link} type='button' className={depth2.state} onClick={(e) => changePage(e, depth2.link)}>
                        {depth2.title}
                        <span className='id'>{depth2.link}</span>
                      </ListItem>
                    )
                  )}
                </ListWrap>
              )}
            </React.Fragment>
          ))}
        </List>
        <Page>
          <iframe src={url} title='page'></iframe>
        </Page>
      </Wrap>
    </>
  );
};

export default PageGuide;

// 임시 스타일 추후 수정예정

const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const Page = styled.div`
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const List = styled.div`
  flex: 0 0 auto;
  width: 360px;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 200px;
  @media screen and (max-width: 760px) {
    width: 100%;
    margin-left: 0;
  }
`;

const ListTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: #000;
  height: 40px;
  color: #fff;
  line-height: 40px;
  padding: 0 20px;
`;

const ListWrap = styled.div``;

const ListItem = styled.button`
  position: relative;
  width: 100%;
  padding: 0 60px 0 20px;
  border-bottom: 1px solid #ccc;
  min-height: 40px;
  text-align: left;
  &::after {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    padding: 4px 8px;
    border-radius: 8px;
    font-size: 12px;
    color: #fff;
  }
  &.inspection {
    &::after {
      content: '검수요청';
      background-color: #7974ff;
    }
  }
  &.hold {
    &::after {
      content: '보류';
      background-color: #e76e6e;
    }
  }
  &.complete {
    &::after {
      content: '검수완료';
      background-color: #322cda;
    }
  }
  &.before {
    &::after {
      content: '작업전';
      background-color: #555;
    }
  }
  &.new {
    &::after {
      content: '신규 페이지';
      background-color: #72ecaa;
    }
  }
  .id {
    display: block;
    width: 100%;
    margin-left: auto;
    font-size: 12px;
    color: #4d48db;
  }
`;

const ListDepth = styled.h2`
  position: relative;
  width: 100%;
  background-color: rgba(142, 153, 255, 0.8);
  height: 40px;
  color: #111;
  line-height: 40px;
  padding: 0 20px;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 24px;
    width: 16px;
    height: 16px;
    background: url(/assets/images/icon/arrow.svg) no-repeat center / cover;
    transform: translateY(-50%) rotate(90deg);
    transition: 0.5s;
  }
  &.open {
    &::after {
      transform: translateY(-50%) rotate(270deg);
    }
  }
`;

const SubListDepth = styled.h2`
  position: relative;
  width: 100%;
  background-color: rgba(142, 153, 255, 0.3);
  height: 30px;
  color: #111;
  line-height: 30px;
  padding: 0 20px;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 24px;
    width: 12px;
    height: 12px;
    background: url(/assets/images/icon/arrow.svg) no-repeat center / cover;
    transform: translateY(-50%) rotate(90deg);
    transition: 0.5s;
  }
  &.open {
    &::after {
      transform: translateY(-50%) rotate(270deg);
    }
  }
`;

const ProgressBox = styled(Box)`
  padding: 10px;
  background-color: #8e99ff;
  .MuiLinearProgress-root {
    height: 8px;
    border-radius: 4px;
    overflow: hidden;
    background-color: #fff;
    margin: 4px;
    .MuiLinearProgress-bar {
      background-color: red;
    }
  }
  .title,
  .sub-text {
    display: block;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
  }
  .sub-text {
    text-align: right;
  }
`;
