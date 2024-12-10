import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Main from './pages/Main';
import MainLayout from './components/layout/MainLayout';
import SubLayout from './components/layout/SubLayout';
import PageGuide from './pages/_ETC/PageGuide';
import AXP0101V01 from './pages/AXP/AXP0101V01';
import AXP0101V02 from './pages/AXP/AXP0101V02';
import AXP0101V03 from './pages/AXP/AXP0101V03';
import AXP0101V04 from './pages/AXP/AXP0101V04';
import AXP0101V05 from './pages/AXP/AXP0101V05';
import AXP0201V01 from './pages/AXP/AXP0201V01';
import AXP0201V02 from './pages/AXP/AXP0201V02';
import AXP0301V01 from './pages/AXP/AXP0301V01';
import AXP0401V01 from './pages/AXP/AXP0401V01';
import AXP0501V01 from './pages/AXP/AXP0501V01';
import AXP0601V01 from './pages/AXP/AXP0601V01';
import ARV0101V01 from './pages/ARV/ARV0101V01';
import ZPB0101V01 from './pages/ZPB/ZPB0101V01';
import { userList } from './data/response';
import ZPB0101V02 from './pages/ZPB/ZPB0101V02';
import ARV0101V02 from './pages/ARV/ARV0101V02';
import ARV0101V03 from './pages/ARV/ARV0101V03';
import ARV0101V04 from './pages/ARV/ARV0101V04';
import ARV0101V05 from './pages/ARV/ARV0101V05';
import CAD0101V01 from './pages/CAD/CAD0101V01';
import CAD0101M02 from './pages/CAD/CAD0101M02';
import CAD0101V03 from './pages/CAD/CAD0101V03';
import CAD0101V04 from './pages/CAD/CAD0101V04';

import EBK0201V01 from './pages/EBK/EBK0201V01';
import FXP0201V01 from './pages/FXP/FXP0201V01';
import FXP0201V02 from './pages/FXP/FXP0201V02';
import FXP0301V01 from './pages/FXP/FXP0301V01';
import FXP0301V02 from './pages/FXP/FXP0301V02';
import FXP0401V01 from './pages/FXP/FXP0401V01';
import FXP0403V01 from './pages/FXP/FXP0403V01';
import FXP0402V01 from './pages/FXP/FXP0402V01';
import EBK0301V01 from './pages/EBK/EBK0301V01';
import RPT0101V01 from './pages/RPT/RPT0101V01';
import RPT0101V02 from './pages/RPT/RPT0101V02';
import RPT0102V01 from './pages/RPT/RPT0102V01';
import RPT0102V02 from './pages/RPT/RPT0102V02';
import RPT0103V01 from './pages/RPT/RPT0103V01';
import RPT0201V01 from './pages/RPT/RPT0201V01';
import RPT0202V01 from './pages/RPT/RPT0202V01';
import RPT0203V01 from './pages/RPT/RPT0203V01';
import RPT0204V01 from './pages/RPT/RPT0204V01';
import RPT0205V01 from './pages/RPT/RPT0205V01';
import RPT0301V01 from './pages/RPT/RPT0301V01';
import RPT0601V01 from './pages/RPT/RPT0601V01';
import RPT0602V01 from './pages/RPT/RPT0602V01';
import RPT0603V01 from './pages/RPT/RPT0603V01';
import BRC0101M01 from './pages/BRC/BRC0101M01';
import BRC0101M02 from './pages/BRC/BRC0101M02';
import BRC0101M03 from './pages/BRC/BRC0101M03';
import BRC0102M01 from './pages/BRC/BRC0102M01';
import ILS0101V01 from './pages/ILS/ILS0101V01';
import ILS0101V02 from './pages/ILS/ILS0101V02';
import ILS0101V03 from './pages/ILS/ILS0101V03';
import ILS0101V04 from './pages/ILS/ILS0101V04';
import ILS0201V01 from './pages/ILS/ILS0201V01';
import ETC0301V01 from './pages/ETC/ETC0301V01';
import ETC0302V01 from './pages/ETC/ETC0302V01';
import ETC0303V01 from './pages/ETC/ETC0303V01';
import ETC0304V01 from './pages/ETC/ETC0304V01';
import ETC0101M01 from './pages/ETC/ETC0101M01';
import ETC0102V01 from './pages/ETC/ETC0102V01';
import ETC0202V01 from './pages/ETC/ETC0202V01';
import ETC0201V01 from './pages/ETC/ETC0201V01';
import ETC0401V01 from './pages/ETC/ETC0401V01';
import ETC0402V01 from './pages/ETC/ETC0402V01';
import ETC0403V01 from './pages/ETC/ETC0403V01';
import ETC0404V01 from './pages/ETC/ETC0404V01';
import ETC0405M01 from './pages/ETC/ETC0405M01';
import ETC0406V01 from './pages/ETC/ETC0406V01';
import ZPB0106V01 from './pages/ZPB/ZPB0106V01';
import CAD0201V01 from './pages/CAD/CAD0201V01';
import CAD0201M02 from './pages/CAD/CAD0201M02';
import CAD0301V01 from './pages/CAD/CAD0301V01';
import FXP0101V01 from './pages/FXP/FXP0101V01';
import FXP0101V02 from './pages/FXP/FXP0101V02';
import FXP0101V03 from './pages/FXP/FXP0101V03';
import FXP0102V01 from './pages/FXP/FXP0102V01';
import FXP0103V01 from './pages/FXP/FXP0103V01';
import FXP0104V01 from './pages/FXP/FXP0104V01';
import EBK0101V01 from './pages/EBK/EBK0101V01';
import EBK0101V02 from './pages/EBK/EBK0101V02';
import EBK0101V03 from './pages/EBK/EBK0101V03';
import EBK0101V04 from './pages/EBK/EBK0101V04';
import CAD0401M01 from './pages/CAD/CAD0401M01';
import CAD0402M01 from './pages/CAD/CAD0402M01';
import CAD0403V01 from './pages/CAD/CAD0403V01';
import CAD0404V01 from './pages/CAD/CAD0404V01';
import CAD0405V01 from './pages/CAD/CAD0405V01';
import CAD0501V01 from './pages/CAD/CAD0501V01';
import CAD0502M01 from './pages/CAD/CAD0502M01';
import SYS0101M01 from './pages/SYS/SYS0101M01';
import SYS0102M01 from './pages/SYS/SYS0102M01';
import SYS0103M01 from './pages/SYS/SYS0103M01';
import SYS0104M01 from './pages/SYS/SYS0104M01';
import SYS0105M01 from './pages/SYS/SYS0105M01';
import SYS0106M01 from './pages/SYS/SYS0106M01';
import SYS0107M01 from './pages/SYS/SYS0107M01';
import SYS0108M01 from './pages/SYS/SYS0108M01';
import SYS0109M01 from './pages/SYS/SYS0109M01';
import SYS0110M01 from './pages/SYS/SYS0110M01';
import ZPB0201V01 from './pages/ZPB/ZPB0201V01';
import ZPB0202V01 from './pages/ZPB/ZPB0202V01';
import ZPB0203V01 from './pages/ZPB/ZPB0203V01';
import ZPB0204V01 from './pages/ZPB/ZPB0204V01';
import ZPB0205V01 from './pages/ZPB/ZPB0205V01';
import ZPB0207M01 from './pages/ZPB/ZPB0207M01';
import ZPB0206V01 from './pages/ZPB/ZPB0206V01';
import ETC0501M01 from './pages/ETC/ETC0501M01';
import ETC0501V01 from './pages/ETC/ETC0501V01';
import ETC0502V01 from './pages/ETC/ETC0502V01';
import RPT0401M01 from './pages/RPT/RPT0401M01';
import RPT0403V01 from './pages/RPT/RPT0403V01';
import RPT0402M01 from './pages/RPT/RPT0402M01';
import RPT0502V01 from './pages/RPT/RPT0502V01';
import RPT0501V01 from './pages/RPT/RPT0501V01';
import ILS0301V01 from './pages/ILS/ILS0301V01';
import ZPB0207P02 from './pages/ZPB/ZPB0207P02';
import RPT0402P02 from './pages/RPT/RPT0402P02';
import RPT0402P03 from './pages/RPT/RPT0402P03';
import RPT0402P04 from './pages/RPT/RPT0402P04';
import CMM404 from './pages/CMM/CMM404';
import ZPB0102V01 from './pages/ZPB/ZPB0102V01';
import ZPB0103V01 from './pages/ZPB/ZPB0103V01';
import ZPB0105V01 from './pages/ZPB/ZPB0105V01';
import ZPB0104V01 from './pages/ZPB/ZPB0104V01';
import ZPB0108M01 from './pages/ZPB/ZPB0108M01';
import ZPB0107V01 from './pages/ZPB/ZPB0107V01';
import ARV0201V01 from './pages/ARV/ARV0201V01';
import ARV0301V01 from './pages/ARV/ARV0301V01';
import ARV0401V01 from './pages/ARV/ARV0401V01';
import ARV0501V01 from './pages/ARV/ARV0501V01';
import ARV0601V01 from './pages/ARV/ARV0601V01';
import ARV0701V01 from './pages/ARV/ARV0701V01';
import ARV0801V01 from './pages/ARV/ARV0801V01';
import ARV0901V01 from './pages/ARV/ARV0901V01';
import Login from './pages/Login';
import BRC0203V01 from './pages/BRC/BRC0203V01';
import BRC0206V02 from './pages/BRC/BRC0206V02';
import BRC0207V03 from './pages/BRC/BRC0207V03';
import BRC0207V01 from './pages/BRC/BRC0207V01';
import BRC0207V02 from './pages/BRC/BRC0207V02';
import BRC0208V01 from './pages/BRC/BRC0208V01';
import BRC0209V01 from './pages/BRC/BRC0209V01';
import BRC0210V01 from './pages/BRC/BRC0210V01';
import BRC0209P01 from './pages/BRC/BRC0209P01';
import SYS0106P01 from './pages/SYS/SYS0106P01';
import SYS0106P02 from './pages/SYS/SYS0106P02';
import SYS0107P01 from './pages/SYS/SYS0107P01';
import SYS0107P02 from './pages/SYS/SYS0107P02';
import SYS0107P01_1 from './pages/SYS/SYS0107P01_1';
import BRC0209P02 from './pages/BRC/BRC0209P02';
import BRC0210P02 from './pages/BRC/BRC0210P02';
import BRC0210P01 from './pages/BRC/BRC0210P01';
import BRC0203P01 from './pages/BRC/BRC0203P01';
import BRC0203P02 from './pages/BRC/BRC0203P02';
import BRC0204M01 from './pages/BRC/BRC0204M01';
import BRC0208P01 from './pages/BRC/BRC0208P01';
import GridDownLoadModal from './pages/_ETC/GridDownLoadModal';
import SYS0201M01 from './pages/SYS/SYS0201M01';
import SYS0202V01 from './pages/SYS/SYS0202V01';
import SYS0203V01 from './pages/SYS/SYS0203V01';
import SYS0204M01 from './pages/SYS/SYS0204M01';
import SYS0205M01 from './pages/SYS/SYS0205M01';
import SYS0206M01 from './pages/SYS/SYS0206M01';
import SYS0207M01 from './pages/SYS/SYS0207M01';
import SYS0208V01 from './pages/SYS/SYS0208V01';
import SYS0209V01 from './pages/SYS/SYS0209V01';
import SYS0301M01 from './pages/SYS/SYS0301M01';
import SYS0302M01 from './pages/SYS/SYS0302M01';
import SYS0304M01 from './pages/SYS/SYS0304M01';
import SYS0306M01 from './pages/SYS/SYS0306M01';
import SYS0307M01 from './pages/SYS/SYS0307M01';
import SYS0308M01 from './pages/SYS/SYS0308M01';
import SYS0309M01 from './pages/SYS/SYS0309M01';
import SYS0310M01 from './pages/SYS/SYS0310M01';
import SYS0311M01 from './pages/SYS/SYS0311M01';
import SYS0312M01 from './pages/SYS/SYS0312M01';
import SYS0301P01 from './pages/SYS/SYS0301P01';
import SYS0303V01 from './pages/SYS/SYS0303V01';
import SYS0311P01 from './pages/SYS/SYS0311P01';
import FXP0103V02 from './pages/FXP/FXP0103V02';
import FXP0101P02 from './pages/FXP/FXP0101P02';
import FXP0101P03 from './pages/FXP/FXP0101P03';
import ZPB0101P02 from './pages/ZPB/ZPB0101P02';
import ZPB0207P01 from './pages/ZPB/ZPB0207P01';
import ZPB0207P03 from './pages/ZPB/ZPB0207P03';
import SYS0107P01_2 from './pages/SYS/SYS0107P01_2';
import Signup from './pages/Signup';
import FindId from './pages/FindId';
import ChangePassWord from './pages/ChangePassWord';
import ChangeDepartment from './pages/ChangeDepartment';
import RPT0104V01 from './pages/RPT/RPT0104V01';
import RPT0104V02 from './pages/RPT/RPT0104V02';
import RPT0105V01 from './pages/RPT/RPT0105V01';
import AXP0401V02 from './pages/AXP/AXP0401V02';
import SignupPass from './pages/SignupPass';
import WorkGuide from './pages/WorkGuide';
import WorkGuide3 from './pages/WorkGuide3';
import WorkGuide2 from './pages/WorkGuide2';

function App() {
  return (
    <Layout>
      <Routes>
        {/* 404 페이지  */}
        <Route path='404' element={<CMM404 />} />
        <Route path='/' element={<MainLayout />}>
          <Route path='/' element={<Main user={userList[0]} />} />
        </Route>
        {/* 유저 롤에 따른 페이지 분기 */}
        <Route path='/' element={<MainLayout user={userList[0]} />}>
          <Route path='/main-01' element={<Main user={userList[0]} />} />
        </Route>
        <Route path='/' element={<MainLayout user={userList[1]} />}>
          <Route path='/main-02' element={<Main user={userList[1]} />} />
        </Route>
        <Route path='/' element={<MainLayout user={userList[2]} />}>
          <Route path='/main-03' element={<Main user={userList[2]} />} />
        </Route>
        <Route path='/' element={<MainLayout user={userList[3]} />}>
          <Route path='/main-04' element={<Main user={userList[3]} />} />
        </Route>
        {/* 유저 롤에 따른 페이지 분기 */}
        <Route path='/' element={<SubLayout />}>
          {/* 세입 */}
          {/* 세입 > 세입계좌 현황 Tab1*/}
          <Route path='/ARV0101V01' element={<ARV0101V01 />} />
          {/* 세입 > 세입계좌 현황 Tab2*/}
          <Route path='/ARV0101V02' element={<ARV0101V02 />} />
          {/* 세입 > 세입계좌 현황 Tab3*/}
          <Route path='/ARV0101V03' element={<ARV0101V03 />} />
          {/* 세입 > 세입계좌 현황 Tab4*/}
          <Route path='/ARV0101V04' element={<ARV0101V04 />} />
          {/* 세입 > 세입계좌 현황 Tab5*/}
          <Route path='/ARV0101V05' element={<ARV0101V05 />} />
          {/* 세입 > 세입이체 일정표 */}
          <Route path='/ARV0201V01' element={<ARV0201V01 />} />
          {/* 세입 > 보조금 교부 내역조회 */}
          <Route path='/ARV0301V01' element={<ARV0301V01 />} />
          {/* 세입 > 공금 연동 보통예금 계좌조회 */}
          <Route path='/ARV0401V01' element={<ARV0401V01 />} />
          {/* 세입 > 희망번호통장 표지 출력 */}
          <Route path='/ARV0501V01' element={<ARV0501V01 />} />
          {/* 세입 > 공금예금 이자 조회 */}
          <Route path='/ARV0601V01' element={<ARV0601V01 />} />
          {/* 세입 > 이자지급결산 사전검증 */}
          <Route path='/ARV0701V01' element={<ARV0701V01 />} />
          {/* 세입 > 보통예금 이자 자동이체 조회 */}
          <Route path='/ARV0801V01' element={<ARV0801V01 />} />
          {/* 세입 > 세입거래내역장 조회 (과거) */}
          <Route path='/ARV0901V01' element={<ARV0901V01 />} />

          {/* 세출 */}
          {/* 세출 > 세입계좌 현황 Tab1*/}
          <Route path='/AXP0101V01' element={<AXP0101V01 />} />
          {/* 세출 > 세입계좌 현황 Tab2*/}
          <Route path='/AXP0101V02' element={<AXP0101V02 />} />
          {/* 세출 > 세입계좌 현황 Tab3*/}
          <Route path='/AXP0101V03' element={<AXP0101V03 />} />
          {/* 세출 > 세입계좌 현황 Tab4*/}
          <Route path='/AXP0101V04' element={<AXP0101V04 />} />
          {/* 세출 > 세입계좌 현황 Tab5*/}
          <Route path='/AXP0101V05' element={<AXP0101V05 />} />

          {/* 세출 > 자금배정내역 Tab1 */}
          <Route path='/AXP0201V01' element={<AXP0201V01 />} />
          {/* 세출 > 자금배정내역 Tab2 */}
          <Route path='/AXP0201V02' element={<AXP0201V02 />} />
          {/* 세출 > 반납(여입) 거래명세 */}
          <Route path='/AXP0301V01' element={<AXP0301V01 />} />
          {/* 세출 > 회계현황 > 회계별 전기관 잔액 */}
          <Route path='/AXP0401V01' element={<AXP0401V01 />} />
          {/* 세출 > 회계현황 > 회계별 지급현황 */}
          <Route path='/AXP0401V02' element={<AXP0401V02 />} />
          {/* 세출 > 정부보관금 내역조회 */}
          <Route path='/AXP0501V01' element={<AXP0501V01 />} />
          {/* 세출 > 세출거래내역장 조회(과거) */}
          <Route path='/AXP0601V01' element={<AXP0601V01 />} />

          {/* 일상경비 */}
          <Route path='/ILS0101V01' element={<ILS0101V01 />} />
          <Route path='/ILS0101V02' element={<ILS0101V02 />} />
          <Route path='/ILS0101V03' element={<ILS0101V03 />} />
          <Route path='/ILS0101V04' element={<ILS0101V04 />} />
          <Route path='/ILS0201V01' element={<ILS0201V01 />} />
          {/* 일상경비 > 일상경비계좌 현황 > 보통예금계좌 지급 요청공문 */}
          <Route path='/ILS0301V01' element={<ILS0301V01 />} />

          {/* e+뱅킹 */}
          {/* e+뱅킹 > 처리결과 조회 >처리결과 조회 */}
          <Route path='/EBK0101V01' element={<EBK0101V01 />} />
          {/* e+뱅킹 > 처리결과 조회 > 이체불능구 내역조회 */}
          <Route path='/EBK0101V02' element={<EBK0101V02 />} />
          {/* e+뱅킹 > 처리결과 조회 > 대체보관구 내역조회 */}
          <Route path='/EBK0101V03' element={<EBK0101V03 />} />
          {/* e+뱅킹 > 처리결과 조회 > 지출명령 반려조회 */}
          <Route path='/EBK0101V04' element={<EBK0101V04 />} />

          {/* e+뱅킹 > 공금잔액(한도) 및 은행마감시간조회 */}
          <Route path='/EBK0201V01' element={<EBK0201V01 />} />
          {/* e+뱅킹 > 회계별 지급명령금액 총괄 조회 */}
          <Route path='/EBK0301V01' element={<EBK0301V01 />} />

          {/* 운용상품 */}
          {/* 운용상품 > 공금성 정기예금 Tab1 */}
          <Route path='/FXP0101V01' element={<FXP0101V01 />} />

          {/* 운용상품 > 공금성 정기예금 Tab2 */}
          <Route path='/FXP0101V02' element={<FXP0101V02 />} />
          {/* 운용상품 > 공금성 정기예금 Tab2 - 팝업 - 만기이자 계좌 선택 Case */}
          <Route path='/FXP0101P02' element={<FXP0101P02 />} />
          {/* 운용상품 > 공금성 정기예금 Tab2 - 팝업 - 월별계좌 계좌 선택 Case */}
          <Route path='/FXP0101P03' element={<FXP0101P03 />} />

          {/* 운용상품 > 공금성 정기예금 Tab3 */}
          <Route path='/FXP0101V03' element={<FXP0101V03 />} />
          {/* 운용상품 > 이자지급현황 */}
          <Route path='/FXP0102V01' element={<FXP0102V01 />} />
          {/* 운용상품 > 회계별 만기현황 */}
          <Route path='/FXP0103V02' element={<FXP0103V02 />} />
          {/* 운용상품 > 만기도래현황 */}
          <Route path='/FXP0103V01' element={<FXP0103V01 />} />

          {/* 운용상품 > 정기예금현황 보고서 */}
          <Route path='/FXP0104V01' element={<FXP0104V01 />} />
          {/* 운용상품 > 보통예금 Tab*/}
          <Route path='/FXP0201V01' element={<FXP0201V01 />} />
          <Route path='/FXP0201V02' element={<FXP0201V02 />} />
          {/* 운용상품 > MMDA Tab*/}
          <Route path='/FXP0301V01' element={<FXP0301V01 />} />
          <Route path='/FXP0301V02' element={<FXP0301V02 />} />
          {/* 운용상품 > 대사현황 모니터링*/}
          <Route path='/FXP0401V01' element={<FXP0401V01 />} />
          {/* 운용상품 > 영업점별 대사현황*/}
          <Route path='/FXP0402V01' element={<FXP0402V01 />} />
          {/* 운용상품 > 제로페이 승인, 정산대사 현황*/}
          <Route path='/FXP0403V01' element={<FXP0403V01 />} />

          {/* 제로페이 */}
          {/* 제로페이 > 제로페이 조회 Tab1 */}
          <Route path='/ZPB0101V01' element={<ZPB0101V01 />} />
          <Route path='/ZPB0101V02' element={<ZPB0101V02 />} />
          <Route path='/ZPB0101P02' element={<ZPB0101P02 />} />
          {/* 제로페이 > 제로페이 조회 Tab2 */}

          <Route path='/ZPB0102V01' element={<ZPB0102V01 />} />
          <Route path='/ZPB0103V01' element={<ZPB0103V01 />} />
          <Route path='/ZPB0104V01' element={<ZPB0104V01 />} />
          <Route path='/ZPB0105V01' element={<ZPB0105V01 />} />
          <Route path='/ZPB0106V01' element={<ZPB0106V01 />} />
          <Route path='/ZPB0107V01' element={<ZPB0107V01 />} />
          <Route path='/ZPB0108M01' element={<ZPB0108M01 />} />

          <Route path='/ZPB0201V01' element={<ZPB0201V01 />} />
          <Route path='/ZPB0202V01' element={<ZPB0202V01 />} />
          <Route path='/ZPB0203V01' element={<ZPB0203V01 />} />
          <Route path='/ZPB0204V01' element={<ZPB0204V01 />} />
          <Route path='/ZPB0205V01' element={<ZPB0205V01 />} />
          <Route path='/ZPB0206V01' element={<ZPB0206V01 />} />
          <Route path='/ZPB0207M01' element={<ZPB0207M01 />} />

          {/* 제로페이 > 공지함 - 공지 등록 case */}
          <Route path='/ZPB0207P01' element={<ZPB0207P01 />} />
          {/* 제로페이 > 공지함 - 공지 상세 case */}
          <Route path='/ZPB0207P02' element={<ZPB0207P02 />} />
          {/* 제로페이 > 공지함 - 공지 수정 case */}
          <Route path='/ZPB0207P03' element={<ZPB0207P03 />} />

          {/* 법인카드 */}
          {/* 법인카드 > 법인카드 내역 조회 Tab1 */}
          <Route path='/CAD0101V01' element={<CAD0101V01 />} />
          {/* 법인카드 > 법인카드 내역 조회 Tab2 */}
          <Route path='/CAD0101M02' element={<CAD0101M02 />} />
          {/* 법인카드 > 법인카드 내역 조회 Tab3 */}
          <Route path='/CAD0101V03' element={<CAD0101V03 />} />
          {/* 법인카드 > 법인카드 내역 조회 Tab4 */}
          <Route path='/CAD0101V04' element={<CAD0101V04 />} />

          {/* 법인카드 > 결제 · 연체내역조회 Tab1 */}
          <Route path='/CAD0201V01' element={<CAD0201V01 />} />
          {/* 법인카드 > 결제 · 연체내역조회 Tab2 */}
          <Route path='/CAD0201M02' element={<CAD0201M02 />} />

          {/* 법인카드 > 카드결제계좌 거래내역 조회 Tab1 */}
          <Route path='/CAD0301V01' element={<CAD0301V01 />} />

          {/* 법인카드 > 법인카드 부서관리 > 사용자권한 관리  */}
          <Route path='/CAD0401M01' element={<CAD0401M01 />} />
          {/* 법인카드 > 법인카드 부서관리 > 부서관리  */}
          <Route path='/CAD0402M01' element={<CAD0402M01 />} />
          {/* 법인카드 > 법인카드 부서관리 > 부서별 법인카드 명세  */}
          <Route path='/CAD0403V01' element={<CAD0403V01 />} />
          {/* 법인카드 > 법인카드 부서관리 > 부서별 사용현황  */}
          <Route path='/CAD0404V01' element={<CAD0404V01 />} />
          {/* 법인카드 > 법인카드 부서관리 > 법인카드 발급대장  */}
          <Route path='/CAD0405V01' element={<CAD0405V01 />} />

          {/* 법인카드 > 구매내역 조회 > 구매내역 조회  */}
          <Route path='/CAD0501V01' element={<CAD0501V01 />} />
          {/* 법인카드 > 구매내역 조회 > 약자기업 등록  */}
          <Route path='/CAD0502M01' element={<CAD0502M01 />} />

          {/* 전자보고서 */}
          {/* 전자보고서 > 세입보고서 - 세입월계표 - 보고서*/}
          <Route path='/RPT0101V01' element={<RPT0101V01 />} />
          {/* 전자보고서 > 세입보고서 - 세입월계표 - 보고서 시청지점 총괄 */}
          <Route path='/RPT0104V01' element={<RPT0104V01 />} />
          {/* 전자보고서 > 세입보고서 - 세입월계표 - 내역 */}
          <Route path='/RPT0101V02' element={<RPT0101V02 />} />
          {/* 전자보고서 > 세입보고서 - 세입월계표 - 내역 시청지점 총괄 */}
          <Route path='/RPT0104V02' element={<RPT0104V02 />} />
          {/* 전자보고서 > 세입보고서 - 세입월계표 서울시세무과 */}
          <Route path='/RPT0105V01' element={<RPT0105V01 />} />
          {/* 전자보고서 > 세입보고서 - 수입금월중 총괄보고서 - 보고서 */}
          <Route path='/RPT0102V01' element={<RPT0102V01 />} />
          {/* 전자보고서 > 세입보고서 - 수입금월중 총괄보고서 - 내역 */}
          <Route path='/RPT0102V02' element={<RPT0102V02 />} />
          {/* 전자보고서 > 세입보고서 - 과오납환금 일보/월보 */}
          <Route path='/RPT0103V01' element={<RPT0103V01 />} />
          {/* 전자보고서 > 세출•기금 보고서 - 세입세출자금일계표 */}
          <Route path='/RPT0201V01' element={<RPT0201V01 />} />
          {/* 전자보고서 > 세출•기금 보고서 - 계좌별 세입세출자금일계표 */}
          <Route path='/RPT0202V01' element={<RPT0202V01 />} />
          {/* 전자보고서 > 세출•기금 보고서 - 세입세출외현금 자금일계표 */}
          <Route path='/RPT0203V01' element={<RPT0203V01 />} />
          {/* 전자보고서 > 세출•기금 보고서 - 세출 일〮월〮분기계표 */}
          <Route path='/RPT0204V01' element={<RPT0204V01 />} />
          {/* 전자보고서 > 세출•기금 보고서 - 자금운용내역장 */}
          <Route path='/RPT0205V01' element={<RPT0205V01 />} />
          {/* 전자보고서 > 일상경비보고서 - 일상경비보고서 */}
          <Route path='/RPT0301V01' element={<RPT0301V01 />} />
          {/* 전자보고서 > 전자보고서 관리 - 보고서 관리대장 */}
          <Route path='/RPT0401M01' element={<RPT0401M01 />} />
          {/* 전자보고서 > 전자보고서 관리 - 전자보고서 지점별관리 */}
          <Route path='/RPT0403V01' element={<RPT0403V01 />} />
          {/* 전자보고서 > 전자보고서 관리 - 전자보고서 일괄승인 ( 영업점 ) */}
          <Route path='/RPT0402M01' element={<RPT0402M01 />} />
          {/* 전자보고서 > 전자보고서 관리 - 전자보고서 일괄승인 ( 기관용 ) */}
          <Route path='/RPT0402M01_1' element={<RPT0402M01 user={1} />} />
          {/* 전자보고서 > 전자보고서 관리 - 전자보고서 일괄승인 - 세입세출외현금 자금일계표 팝업 */}
          <Route path='/RPT0402P02' element={<RPT0402P02 />} />
          {/* 전자보고서 > 전자보고서 관리 - 전자보고서 일괄승인 - 세출일계표 팝업 */}
          <Route path='/RPT0402P03' element={<RPT0402P03 />} />
          {/* 전자보고서 > 전자보고서 관리 - 전자보고서 일괄승인 - 세입세출 자금일계표 팝업 */}
          <Route path='/RPT0402P04' element={<RPT0402P04 />} />
          {/* 전자보고서 > 정기제출자료 - 금고 기간별 자금운용 현황 */}
          <Route path='/RPT0501V01' element={<RPT0501V01 />} />
          {/* 전자보고서 > 정기제출자료 - 재정자금 및 미수이자 현황(연단위) */}
          <Route path='/RPT0502V01' element={<RPT0502V01 />} />
          {/* 전자보고서 > 기타현황 - 세출자금수지현황(세출, 기금) */}
          <Route path='/RPT0601V01' element={<RPT0601V01 />} />
          {/* 전자보고서 > 기타현황 - 회계별 세출자금수지현황 */}
          <Route path='/RPT0602V01' element={<RPT0602V01 />} />
          {/* 전자보고서 > 기타현황 - 회계별 세출자금수지현황 */}
          <Route path='/RPT0603V01' element={<RPT0603V01 />} />

          <Route path='/ZPB0101V02' element={<ZPB0101V02 />} />

          {/* 금고영업점 */}
          {/* 금고영업점 > 공채 - 당일자 취소 */}
          <Route path='/BRC0101M01' element={<BRC0101M01 />} />
          {/* 금고영업점 > 공채 - 당일자 이외 취소 */}
          <Route path='/BRC0101M02' element={<BRC0101M02 />} />
          {/* 금고영업점 > 공채 - 취소 결제 관리 */}
          <Route path='/BRC0101M03' element={<BRC0101M03 />} />
          {/* 금고영업점 > 공채 - 증서관리 */}
          <Route path='/BRC0102M01' element={<BRC0102M01 />} />

          {/* 금고영업점 > 지자체 정보관리 > 지자체 정보 등록 */}
          <Route path='/BRC0203V01' element={<BRC0203V01 />} />
          {/* 금고영업점 > 지자체 정보관리 > 지자체 정보 등록 - 조회 팝업 */}
          <Route path='/BRC0203P01' element={<BRC0203P01 />} />
          {/* 금고영업점 > 지자체 정보관리 > 지자체 정보 등록 - 등록 팝업 */}
          <Route path='/BRC0203P02' element={<BRC0203P02 />} />
          {/* 금고영업점 > 지자체 정보관리 > 서울시 사업자번호 관리 */}
          <Route path='/BRC0204M01' element={<BRC0204M01 />} />

          {/* 금고영업점 > 지자체 정보관리 > 예산수혜업체 유치 */}
          <Route path='/BRC0206V02' element={<BRC0206V02 />} />

          {/* 금고영업점 > 지자체 정보관리 > Tab1 - 급여이체 점별 집계 */}
          <Route path='/BRC0207V03' element={<BRC0207V03 />} />
          {/* 금고영업점 > 지자체 정보관리 > Tab2 - 급여이체 점별 전체내역 */}
          <Route path='/BRC0207V01' element={<BRC0207V01 />} />
          {/* 금고영업점 > 지자체 정보관리 > Tab3 - 급여이체 전체내역 */}
          <Route path='/BRC0207V02' element={<BRC0207V02 />} />
          {/* 금고영업점 > 지자체 정보관리 > 공무원 크로스셀 실적 */}
          <Route path='/BRC0208V01' element={<BRC0208V01 />} />

          {/* 금고영업점 > 지자체 정보관리 > 공무원 크로스셀 실적 - 상세내역 */}
          <Route path='/BRC0208P01' element={<BRC0208P01 />} />

          {/* 금고영업점 > 업무연락 > 문서조회 */}
          <Route path='/BRC0209V01' element={<BRC0209V01 />} />
          {/* 금고영업점 > 업무연락 > 문서조회 - 조회팝업 */}
          <Route path='/BRC0209P01' element={<BRC0209P01 />} />
          {/* 금고영업점 > 업무연락 > 문서조회 - 등록팝업 */}
          <Route path='/BRC0209P02' element={<BRC0209P02 />} />

          {/* 금고영업점 > 업무연락 > 공금업무 제안광장 */}
          <Route path='/BRC0210V01' element={<BRC0210V01 />} />
          {/* 금고영업점 > 업무연락 > 공금업무 제안광장 - 조회팝업 */}
          <Route path='/BRC0210P01' element={<BRC0210P01 />} />
          {/* 금고영업점 > 업무연락 > 공금업무 제안광장 - 등록팝업 */}
          <Route path='/BRC0210P02' element={<BRC0210P02 />} />

          {/* 기타 */}
          {/* 기타 > 자금이체 > 자금이체내역표 */}
          <Route path='/ETC0101M01' element={<ETC0101M01 />} />
          {/* 기타 > 자금이체 > 지급통지서 출력 */}
          <Route path='/ETC0102V01' element={<ETC0102V01 />} />
          {/* 기타 > 광명시금고 > 보통예금 계좌 거래내역 조회 */}
          <Route path='/ETC0201V01' element={<ETC0201V01 />} />
          {/* 기타 > 광명시금고 > 공금계좌 집계조회 */}
          <Route path='/ETC0202V01' element={<ETC0202V01 />} />
          {/* 기타 > 보조금실적 조회 - 보조금 수익성 분석 */}
          <Route path='/ETC0301V01' element={<ETC0301V01 />} />
          {/* 기타 > 보조금실적 조회 - 보조금 수익성 추세 */}
          <Route path='/ETC0302V01' element={<ETC0302V01 />} />
          {/* 기타 > 보조금실적 조회 - 보조금 좌수현황 */}
          <Route path='/ETC0303V01' element={<ETC0303V01 />} />
          {/* 기타 > 보조금실적 조회 - 보조금사업 계좌수 및 예산점유율 */}
          <Route path='/ETC0304V01' element={<ETC0304V01 />} />
          {/* 기타 > 서울페이플러스 - 계좌조회 */}
          <Route path='/ETC0401V01' element={<ETC0401V01 />} />
          {/* 기타 > 서울페이플러스 - 집계내역조회 */}
          <Route path='/ETC0402V01' element={<ETC0402V01 />} />
          {/* 기타 > 서울페이플러스 - 계좌거래명세 */}
          <Route path='/ETC0403V01' element={<ETC0403V01 />} />
          {/* 기타 > 서울페이플러스 - 처리내역조회 */}
          <Route path='/ETC0404V01' element={<ETC0404V01 />} />
          {/* 기타 > 서울페이플러스 - 처리내역조회 (관리자) */}
          <Route path='/ETC0405M01' element={<ETC0405M01 />} />
          {/* 기타 > 서울페이플러스 - 자금집계현황 */}
          <Route path='/ETC0406V01' element={<ETC0406V01 />} />
          {/* 기타 > 손해배상금 - Data Correction */}
          <Route path='/ETC0501M01' element={<ETC0501M01 />} />
          {/* 기타 > 손해배상금 - 집계표(당행지점별, 수납기관, 징수기관) */}
          <Route path='/ETC0501V01' element={<ETC0501V01 />} />
          {/* 기타 > 마스킹관리 - 신청자 화면 */}
          <Route path='/ETC0502V01' element={<ETC0502V01 />} />
          {/* 기타 > 마스킹관리 - 관리자 화면 */}
          <Route path='/ETC0502V01_1' element={<ETC0502V01 userType={'admin'} />} />

          {/* 시스템 관리 */}
          <Route path='/SYS0101M01' element={<SYS0101M01 />} />
          <Route path='/SYS0102M01' element={<SYS0102M01 />} />

          <Route path='/SYS0103M01' element={<SYS0103M01 />} />
          <Route path='/SYS0104M01' element={<SYS0104M01 />} />
          <Route path='/SYS0105M01' element={<SYS0105M01 />} />
          <Route path='/SYS0106M01' element={<SYS0106M01 />} />
          <Route path='/SYS0106P01' element={<SYS0106P01 />} />
          <Route path='/SYS0106P02' element={<SYS0106P02 />} />
          <Route path='/SYS0107M01' element={<SYS0107M01 />} />
          <Route path='/SYS0107P01' element={<SYS0107P01 />} />
          <Route path='/SYS0107P01_1' element={<SYS0107P01_1 />} />
          <Route path='/SYS0107P01_2' element={<SYS0107P01_2 />} />
          <Route path='/SYS0107P02' element={<SYS0107P02 />} />
          <Route path='/SYS0108M01' element={<SYS0108M01 />} />
          <Route path='/SYS0109M01' element={<SYS0109M01 />} />
          <Route path='/SYS0110M01' element={<SYS0110M01 />} />
          <Route path='/SYS0201M01' element={<SYS0201M01 />} />
          <Route path='/SYS0202V01' element={<SYS0202V01 />} />
          <Route path='/SYS0203V01' element={<SYS0203V01 />} />
          <Route path='/SYS0204M01' element={<SYS0204M01 />} />
          <Route path='/SYS0205M01' element={<SYS0205M01 />} />
          <Route path='/SYS0206M01' element={<SYS0206M01 />} />
          <Route path='/SYS0207M01' element={<SYS0207M01 />} />
          <Route path='/SYS0208V01' element={<SYS0208V01 />} />
          <Route path='/SYS0209V01' element={<SYS0209V01 />} />
          <Route path='/SYS0301M01' element={<SYS0301M01 />} />
          <Route path='/SYS0301P01' element={<SYS0301P01 />} />
          <Route path='/SYS0302M01' element={<SYS0302M01 />} />
          <Route path='/SYS0303V01' element={<SYS0303V01 />} />
          <Route path='/SYS0304M01' element={<SYS0304M01 />} />
          <Route path='/SYS0306M01' element={<SYS0306M01 />} />
          <Route path='/SYS0307M01' element={<SYS0307M01 />} />
          <Route path='/SYS0308M01' element={<SYS0308M01 />} />
          <Route path='/SYS0309M01' element={<SYS0309M01 />} />
          <Route path='/SYS0310M01' element={<SYS0310M01 />} />
          <Route path='/SYS0311M01' element={<SYS0311M01 />} />
          <Route path='/SYS0311P01' element={<SYS0311P01 />} />
          <Route path='/SYS0312M01' element={<SYS0312M01 />} />
        </Route>
        {/* login 페이지 */}
        <Route path='/login' element={<Login />} />
        {/* signup 페이지 -미승인 */}
        <Route path='/signup' element={<Signup />} />
        {/* signup 페이지 - 승인 */}
        <Route path='/SignupPass' element={<SignupPass />} />
        {/* 아이디 찾기 팝업 */}
        <Route path='/findId' element={<FindId />} />
        {/* 비번 변경 팝업 */}
        <Route path='/chgPass' element={<ChangePassWord />} />
        {/* 부서 변경 팝업 */}
        <Route path='/chDepart' element={<ChangeDepartment />} />
        {/* 업무 가이드 - 구청총괄 */}
        <Route path='/' element={<MainLayout user={userList[3]} />}>
          <Route path='/wrkng' element={<WorkGuide />} />
        </Route>
        {/* 업무 가이드 - 구청부서 */}
        <Route path='/' element={<MainLayout user={userList[3]} />}>
          <Route path='/wrkng_2' element={<WorkGuide2 />} />
        </Route>
        {/* 업무 가이드 - 세입있는 부서 */}
        <Route path='/' element={<MainLayout user={userList[3]} />}>
          <Route path='/wrkng_3' element={<WorkGuide3 />} />
        </Route>
        {/* 페이지 가이드 */}
        <Route path='/pageGuide' element={<PageGuide />} />
        {/* 그리드 다운로드 모달 */}\
        <Route path='/gridDownLoadModal' element={<GridDownLoadModal />} />
      </Routes>
    </Layout>
  );
}

export default App;
